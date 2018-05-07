import React, { Component } from 'react'
import { logout} from '../actions/login'
import {connect} from "react-redux";

class AppHomePage extends Component {

    logOutHandler = () => {
        this.props.logout().then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return(
            <div>
                App Home Page
                <br /><br />
                <button onClick={() => this.logOutHandler()}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(AppHomePage)