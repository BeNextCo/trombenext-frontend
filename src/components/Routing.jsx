import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PrivateRoute } from '../PrivateRoute'

import { Home } from './Home'
import { User } from './User'
import { Login } from './Login'

export const Routing = ({isLogged}) => (
        <Router>
            <PrivateRoute exact path="/" component={Home} isLogged={isLogged} />
            <PrivateRoute path="/user" component={User} isLogged={isLogged} />
            <Route path="/login" component={Login} />
        </Router>
    )