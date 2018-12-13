import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { REQUEST_LINKS, START_ADD } from './constants';
import { requestLinksFailed, requestLinksSucceeded } from './actions';
import history from '../../utils/history';

function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`).then(
    response => response.json(),
  );
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

function* startAdd(action) {
  history.push(`/topics/${action.topicName}/add`);
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_LINKS, fetchLinks),
    takeLatest(START_ADD, startAdd),
  ]);
}
