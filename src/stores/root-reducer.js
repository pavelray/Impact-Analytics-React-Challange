import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dataTableReducer from './reducers/dataTable.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const rootReducer = combineReducers({
    tableData: dataTableReducer
});


export default persistReducer(persistConfig, rootReducer);