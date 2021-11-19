import UserActionTypes from "../types/user.types";

export const fetchUserDataStart = () => ({
  type: UserActionTypes.FETCH_USER_DATA_START,
});

export const fetchUserDataSuccess = (data) => ({
  type: UserActionTypes.FETCH_USER_DATA_SUCCESS,
  payload: data,
});

export const fetchUserDataFailure = (errorMessage) => ({
  type: UserActionTypes.FETCH_USER_DATA_FAIL,
  payload: errorMessage,
});
