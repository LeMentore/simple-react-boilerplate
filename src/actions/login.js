import { GET_LOGGED_USER, SET_LOGGED_USER } from '../actionTypes'

export const getLoggedUser = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: GET_LOGGED_USER
        })
    }, 500)
}

export const login = () =>  dispatch => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({
                type: SET_LOGGED_USER,
                logged: true
            })
            resolve()
        }, 500)
    })
}

export const logout = () =>  dispatch => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({
                type: SET_LOGGED_USER,
                logged: false
            })
            resolve()
        }, 500)
    })
}