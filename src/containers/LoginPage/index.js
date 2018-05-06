import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../actions/login'

const loginToApp = (history) => {

    login().then(() => {
        history.push('/home')
    })
}

const LoginPage = ({ history }) => (
    <div>
        <h1>Login Page</h1>
        <div>Please Login</div>
        <Link to="/home">home</Link>
        <button onClick={() => loginToApp(history)}>Login</button>
    </div>
)

export default LoginPage