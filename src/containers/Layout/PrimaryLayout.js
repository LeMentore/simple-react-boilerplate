import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../../components/PrimaryHeader'
import AppHomePage from '../AppHomePage'
import ProductSubLayout from '../Layout/ProductSubLayout'


const PrimaryLayout = ({ match }) => (
    <div className="primary-layout">
        <PrimaryHeader />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={AppHomePage} />
                <Route path={`${match.path}/products`} component={ProductSubLayout} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default PrimaryLayout