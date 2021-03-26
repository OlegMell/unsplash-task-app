import {REQUEST_PHOTOS_ERROR, REQUEST_PHOTOS_SUCCESS} from "../actions/types";


const initialState = {
    photos: [],
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PHOTOS_SUCCESS:
            return {...state, photos: action.payload}
        case REQUEST_PHOTOS_ERROR:
            return {...state}
        default:
            return state
    }
}
