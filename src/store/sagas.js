import {takeEvery, put, call} from "redux-saga/effects";
import {REQUEST_PHOTOS} from "./actions/types";
import {hideLoader, requestPhotosError, requestPhotosSuccess, showLoader} from "./actions/actionCreators";


export function* sagaWatcher() {
    yield takeEvery(REQUEST_PHOTOS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPhotos)
        yield put(requestPhotosSuccess(payload))
        yield put(hideLoader())
    } catch (e) {
        yield put(requestPhotosError())
        yield put(hideLoader())
    }
}

const fetchPhotos = async () => {
    const response =
        await fetch(`${process.env.REACT_APP_API_URL}photos/?client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=21`)
    return await response.json()
}
