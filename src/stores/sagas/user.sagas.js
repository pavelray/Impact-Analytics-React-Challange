import {all, call, put, takeLatest} from 'redux-saga/effects';

import { fetchData } from '../../api';
import { fetchUserDataSuccess, fetchUserDataFailure } from '../actions/user.actions';
import UserActionTypes from '../types/user.types';


export function* fetchUserDataStartAsync(){
    try{
        const response = yield call(fetchData, '');
        const userData = response.data?.results[0];
        yield put(fetchUserDataSuccess(userData));
    } catch(error){
        yield put(fetchUserDataFailure(error.message));
    }
}

export function* fetchUserDataStart(){
    yield takeLatest(UserActionTypes.FETCH_USER_DATA_START, fetchUserDataStartAsync)
}

export function* userSagas(){
    yield all([call(fetchUserDataStart)]);
}
