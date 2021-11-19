import UserActionTypes from "../types/user.types";

const INITIAL_STATE = {
    data: null,
    isFetching: false,
    errorMessage: null,
}

const userReducer = (state= INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case UserActionTypes.FETCH_USER_DATA_START:
            return{
                ...state,
                isFetching: true
            }

        case UserActionTypes.FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case UserActionTypes.FETCH_USER_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;