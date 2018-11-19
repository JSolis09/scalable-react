import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksFailed, requestLinksSucceeded } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`).then(
    response => response.json(),
  );
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(SELECT_TOPIC, fetchLinks)]);
}
