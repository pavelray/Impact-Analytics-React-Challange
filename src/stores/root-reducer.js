import {combineReducers} from 'redux';

import dataReducer from './reducers/reducer';

const rootReducer = combineReducers({
    chartData: dataReducer
});


export default rootReducer;