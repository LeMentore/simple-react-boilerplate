import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loggedUser from './loggedUser'

export default combineReducers({
    routing: routerReducer,
    loggedUserState: loggedUser
})
