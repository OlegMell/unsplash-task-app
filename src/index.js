import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import {sagaWatcher} from "./store/sagas";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        saga
    )
))

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
