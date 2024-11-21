import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './actions';

function* fetchData() {
  try {
    const response = yield call(fetch, 'https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh');
    const data = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchData);
}