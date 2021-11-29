import ActionTypes from "../types/types";

export const fetchDataStart = () => ({
  type: ActionTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (errorMessage) => ({
  type: ActionTypes.FETCH_DATA_FAIL,
  payload: errorMessage,
});
