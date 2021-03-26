import {HIDE_LOADER, REQUEST_PHOTOS, REQUEST_PHOTOS_ERROR, REQUEST_PHOTOS_SUCCESS, SHOW_LOADER} from "./types";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchPhotos() {
    return {
        type: REQUEST_PHOTOS
    }
}

export function requestPhotosError() {
    return {
        type: REQUEST_PHOTOS_ERROR
    }
}

export function requestPhotosSuccess(payload) {
    return {
        type: REQUEST_PHOTOS_SUCCESS,
        payload
    }
}
