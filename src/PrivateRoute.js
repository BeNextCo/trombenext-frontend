import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({isLogged, children, ...routeProps}) {
    return isLogged ? (
        <Route {...routeProps}>{children}</Route>
    ) : (
    <Redirect to="/login" />
    )
}

export default PrivateRoute
