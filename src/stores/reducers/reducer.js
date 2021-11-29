import ActionTypes from "../types/types";

const INITIAL_STATE = {
    data: null,
    isFetching: false,
    errorMessage: null,
}

const dataReducer = (state= INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case ActionTypes.FETCH_DATA_START:
            return{
                ...state,
                isFetching: true
            }

        case ActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case ActionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;