import DataTableActionTypes from "../types/dataTable.types";

export const fetchDataStart = () => ({
  type: DataTableActionTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: DataTableActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (errorMessage) => ({
  type: DataTableActionTypes.FETCH_DATA_FAIL,
  payload: errorMessage,
});

export const updateTableData = (data) => ({
  type: DataTableActionTypes.UPDATE_DATA,
  payload: data,
});

export const saveTableData = (data) => ({
  type: DataTableActionTypes.SAVE_TABLE_DATA,
  payload: data,
});

export const resetData = (data) => ({
  type: DataTableActionTypes.RESET_DATA,
});