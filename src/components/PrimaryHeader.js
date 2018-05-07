import React from 'react'
import { NavLink } from 'react-router-dom'

const PrimaryHeader = () => (
    <header className="primary-header">
        <h1>Welcome to our app!</h1>
        <nav>
            <NavLink to="/home" exact activeClassName="active">Home</NavLink>
            {/*<NavLink to="/home/users" activeClassName="active">Users</NavLink>*/}
            <NavLink to="/home/products" activeClassName="active">Products</NavLink>
        </nav>
    </header>
)

export default PrimaryHeader