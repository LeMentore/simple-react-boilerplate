import { GET_LOGGED_USER, SET_LOGGED_USER } from '../actionTypes'

const initialState = {
    pending: true,
    logged: false
}

const loggedUser = (state = initialState, action) => {
    switch (action.type){
        case GET_LOGGED_USER:
            return {
                ...state,
                pending: false
            }
        case SET_LOGGED_USER:
            return {
                ...state,
                pending: false,
                logged: action.logged
            }
        default:
            return state
    }
}

export default loggedUser