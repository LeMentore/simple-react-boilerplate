import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from '../LoginPage'

const UnauthorizedLayout = () => (
    <div className="unauthorized-layout">
        <Switch>
            <Route path="/auth/login" component={LoginPage} />
            <Redirect to="/auth/login" />
        </Switch>
    </div>
)

export default UnauthorizedLayout