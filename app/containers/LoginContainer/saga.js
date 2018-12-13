import { all, takeLatest } from 'redux-saga/effects';
import { CANCEL_LOGIN, LOGIN } from './constants';
import history from '../../utils/history';

// Individual exports for testing
export function* handleDone() {
  history.goBack();
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, handleDone),
    takeLatest(CANCEL_LOGIN, handleDone),
  ]);
}