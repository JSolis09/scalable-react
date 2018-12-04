// import { take, call, put, select } from 'redux-saga/effects';

import { all, call, select, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import history from '../../utils/history';
//import { push } from 'connected-react-router/immutable';
import selectNavigationContainer from './selectors';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics').then(response =>
    response.json(),
  );
}

export function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

export function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopic && history.location.pathname === '/') {
    history.push(`/topics/${state.topics[0].name}`);
  }
}

export function* pushTopic(action) {
  console.log(action);
  //yield put(push(`/topics/${action.topic.name}`));
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_TOPICS, fetchTopics),
    takeLatest(SELECT_TOPIC, pushTopic),
    takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic),
  ]);
}
