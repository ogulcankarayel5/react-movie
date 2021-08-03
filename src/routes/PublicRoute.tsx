import React, { ReactElement } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export interface IPublicRoute extends RouteProps {
  restricted?: boolean
  loggedIn?: boolean
  component: any
}

export const PublicRoute = ({
  component: Component,
  restricted = false,
  loggedIn,
  ...rest
}: IPublicRoute): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn && restricted ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  )
}
