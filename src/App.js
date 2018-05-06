import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import './assets/styles/style.scss'

import AuthorizedRoute from './utils/AuthorizedRoute'
import UnauthorizedLayout from './containers/Layout/UnauthorizedLayout'
import PrimaryLayout from './containers/Layout/PrimaryLayout'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)))

const App = () => {
    console.log(`history ${history}`)
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/auth" component={UnauthorizedLayout} />
                    <AuthorizedRoute path="/home" component={PrimaryLayout} />
                    <Redirect to="/auth" />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
