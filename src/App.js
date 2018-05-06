import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import './assets/styles/style.scss'

import Layout from './containers/Layout'
import Home from './containers/Home'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)))

const App = () => {
    return (
        <Provider store={store}>
            <div>Test</div>
        </Provider>
    )
}

export default App
