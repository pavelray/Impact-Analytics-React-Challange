import { createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
// import logger from 'redux-logger';
import rootReducer from './root-reducer';
import rootSaga from './root-sagas';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

if(process.env.NODE_ENV === 'development'){
    // middlewares.push(logger);
}

let middlewareFunctions = applyMiddleware(...middlewares);

if(process.env.NODE_ENV === 'development'){
    middlewareFunctions = composeWithDevTools(
        applyMiddleware(...middlewares)
    )
}

export const store = createStore(rootReducer, middlewareFunctions);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);


// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};