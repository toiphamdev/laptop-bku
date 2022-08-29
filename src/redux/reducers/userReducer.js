import * as actions from '../constants'
const initState = {
    isLoggedIn: false,
    userInfo: {},
    accessToken: ''

}
export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.USER_LOGIN_SUCCESS:
            {
                let coppyState = { ...state }
                coppyState.isLoggedIn = true;
                coppyState.userInfo = action.payload.data;
                coppyState.accessToken = action.payload.token;
                return { ...coppyState }
            }
        case actions.USER_LOGIN_FAILED:
            {
                return { ...state }
            }
        case actions.USER_LOGOUT_SUCCESS:
            {
                let coppyState = { ...state }
                coppyState.isLoggedIn = false;
                coppyState.userInfo = {};
                coppyState.accessToken = '';
                return { ...coppyState }
            }
        case actions.USER_LOGOUT_FAILED:
            {
                return { ...state }
            }
        default:
            return { ...state }
    }
}
