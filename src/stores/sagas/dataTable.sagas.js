import {all, call, put, takeLatest} from 'redux-saga/effects';

import { fetchData } from '../../api';
import { fetchDataFailure, fetchDataSuccess } from '../actions/dataTable.actions';
import DataTableActionTypes from '../types/dataTable.types';


export function* fetchDataStartAsync(){
    try{
        let tableData = [];
        const savedData = JSON.parse(localStorage.getItem('tabledata'));
        if(savedData){
            tableData = savedData;
        }else{
            const response = yield call(fetchData, '');
            tableData = response.data;
        }
        yield put(fetchDataSuccess(tableData));
    } catch(error){
        yield put(fetchDataFailure(error.message));
    }
}

export function* saveTableDataAsync({payload}){
    try{
        localStorage.setItem('tabledata', JSON.stringify(payload));
    } catch(error){
        yield put(fetchDataFailure(error.message));
    }
}

export function* fetchDataStart(){
    yield takeLatest(DataTableActionTypes.FETCH_DATA_START, fetchDataStartAsync)
}

export function* saveTableData(){
    yield takeLatest(DataTableActionTypes.SAVE_TABLE_DATA, saveTableDataAsync)
}

export function* dataTableSagas(){
    yield all([call(fetchDataStart), call(saveTableData)]);
}
