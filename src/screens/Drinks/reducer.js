import {FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE} from '../../config/constants'

const initialState =  {
    data: [],
    isFeching: false,
    error: false
}

export default dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case FETCHING_SUCCESS:
        return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case FETCHING_FAILURE:
        return {
                ...state,
                isFeching: false,
                error: true 
            }
        default:
        return state
    }
}
