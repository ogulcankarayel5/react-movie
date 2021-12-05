import React, { ReactElement } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { GeneralLayout } from '../components/layouts/general'

export interface IPublicRoute extends RouteProps {
  restricted?: boolean
  loggedIn?: boolean
  component: any
  layout?: any
}

export const PublicRoute = ({
  component: Component,
  restricted = false,
  loggedIn = false,
  layout: Layout = GeneralLayout,
  ...rest
}: IPublicRoute): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn && restricted ? (
          <Redirect to='/' />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  )
}
