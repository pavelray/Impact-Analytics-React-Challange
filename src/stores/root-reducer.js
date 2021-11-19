import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './reducers/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const rootReducer = combineReducers({
    userData: userReducer
});


export default persistReducer(persistConfig, rootReducer);