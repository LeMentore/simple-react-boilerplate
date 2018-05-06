import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedUser } from '../actions/login'

class AuthorizedRoute extends Component {

    componentWillMount() {
        getLoggedUser()
    }

    render() {
        const { component: Component, pending, logged, ...rest } = this.props

        return (
            <Route {...rest} render={props => {
                if (pending) return <div>Loading...</div>
                return logged
                    ? <Component {...props} />
                    : <Redirect to="/auth/login" />
            }} />
        )
    }
}

const mapStateToProps = state => {
    return {
        pending: state.loggedUser.pending,
        logged: state.loggedUser.logged
    }
}

export default connect(mapStateToProps, null)(AuthorizedRoute)
