import { createStore, applyMiddleware} from 'redux';
import rootReducer from './root-reducer';
import rootSaga from './root-sagas';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

let middlewareFunctions = applyMiddleware(...middlewares);

if(process.env.NODE_ENV === 'development'){
    middlewareFunctions = composeWithDevTools(
        applyMiddleware(...middlewares)
    )
}

export const store = createStore(rootReducer, middlewareFunctions);

sagaMiddleWare.run(rootSaga);

export default store;