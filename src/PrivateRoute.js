import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({isLogged, children, ...routeProps}) => isLogged ? (
        <Route {...routeProps}>{children}</Route>
    ) : (
    <Redirect to="/login" />
    )
