import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {sagaMiddlewares} from './middlewares'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(sagaMiddlewares);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
