import {FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE} from '../../config/constants'
import {GetCocktails} from '../../services/api'

export const getData = () => {
    return {type: FETCHING}
}

export const getDataSuccess = (data) => {
    return {type: FETCHING_SUCCESS, data}
}

export const getDataFailure = (error) => {
    return {type: FETCHING_FAILURE, error}
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData());
        GetCocktails()
        .then((response) => {
            dispatch(getDataSuccess(response))
        })
        .catch((error) => 
        dispatch(getDataFailure(error))
        );
    }
}
