import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ADD_LINK, ADD_LINK_CANCELLED } from './constants';
import { addLinkSuccess, addLinkFailed } from './actions';
import history from '../../utils/history';

function createLink({topicName, url, description}) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      description,
      topicName
    }),
  }).then(
    response => response.json(),
  );
}
// Individual exports for testing
export function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    history.goBack();
  } catch(e) {
    yield put(addLinkFailed(action.link, e.message));
  }
}

export function* addLinkCancelled() {
  history.goBack();
}

export default function* rootSaga() {
  yield all([
    takeLatest(ADD_LINK, addLink),
    takeLatest(ADD_LINK_CANCELLED, addLinkCancelled),
  ]);
}