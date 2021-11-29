import {all, call, put, takeLatest} from 'redux-saga/effects';

import { fetchData } from '../../api';
import { fetchDataFailure, fetchDataSuccess } from '../actions/actions';
import ActionTypes from '../types/types';


export function* fetchDataStartAsync(){
    try{
        const response = yield call(fetchData, '');
        const data = response.data;
        yield put(fetchDataSuccess(data));
    } catch(error){
        yield put(fetchDataFailure(error.message));
    }
}

export function* fetchDataStart(){
    yield takeLatest(ActionTypes.FETCH_DATA_START, fetchDataStartAsync)
}

export function* dataSagas(){
    yield all([call(fetchDataStart)]);
}
