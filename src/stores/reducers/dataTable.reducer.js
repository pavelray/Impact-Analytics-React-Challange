import DataTableActionTypes from "../types/dataTable.types";

const INITIAL_STATE = {
    data: null,
    oldData: null,
    isFetching: false,
    errorMessage: null,
}

const dataTableReducer = (state= INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case DataTableActionTypes.FETCH_DATA_START:
            return{
                ...state,
                isFetching: true
            }

        case DataTableActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: [...action.payload]
            }
        case DataTableActionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case DataTableActionTypes.UPDATE_DATA:
            return {
                ...state,
                oldData: state.data,
                data: action.payload
            }
        case DataTableActionTypes.RESET_DATA:
            if(state.oldData){
                return {
                    ...state,
                    data: state.oldData,
                    oldData: null
                }
            }
            return {
                ...state
            }
        default:
            return state;
    }
}

export default dataTableReducer;