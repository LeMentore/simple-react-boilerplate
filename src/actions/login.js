import { GET_LOGGED_USER, SET_LOGGED_USER } from '../actionTypes'
import { loginApi, logoutApi } from '../api/login'

export const getLoggedUser = dispatch => {debugger;
    setTimeout(() => {
        dispatch({
            type: GET_LOGGED_USER
        })
    }, 500)
}

export const login = () => async dispatch => {
    debugger;
    const logged = await loginApi()
    dispatch({
        type: GET_LOGGED_USER,
        logged: logged
    })
}

export const logout = () => async dispatch => {
    const logged = await logoutApi()
    dispatch({
        type: SET_LOGGED_USER,
        logged: logged
    })
}