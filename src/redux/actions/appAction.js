import *as actions from '../constants/appConstant.js'
import { getSearchResultService } from 'services/ProductService'
export const fetchDataStart = () => {
    return (dispatch) => {
        dispatch({ type: actions.FETCH_DATA_START });
    }
}

export const fetchDataFinished = () => {
    return (dispatch) => {
        dispatch({ type: actions.FETCH_DATA_FINISHED });
    }
}