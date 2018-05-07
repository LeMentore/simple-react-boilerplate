import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../actions/login'
import { connect } from 'react-redux'

class LoginPage extends Component {

    tryAuthHandler = () => {
        this.props.login().then(() => {
            this.props.history.push('/home')
        })
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>Please Login or try go to <Link to="/home">home</Link></div>
                <button onClick={() => this.tryAuthHandler()}>Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = { login }

export default connect(null, mapDispatchToProps)(LoginPage)
