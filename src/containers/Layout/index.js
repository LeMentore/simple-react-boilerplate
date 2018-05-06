import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Layout = ({children}) => (
    <div>
        <Header />
        <nav>
            <Link to="/">Home</Link>
            <Link to="/one">one</Link>
            <Link to="/two">two</Link>
        </nav>
        {children}
        <Footer />
    </div>
)

export default Layout