import {combineReducers} from "redux";
import {photosReducer} from "./photosReducer";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    app: appReducer,
    photos: photosReducer
})
