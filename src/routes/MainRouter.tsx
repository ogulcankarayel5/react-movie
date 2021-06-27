import { Home } from 'pages'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PublicRoute } from 'routes'

export const MainRouter = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/'
          component={Home}
          restricted={false}
          loggedIn={false}
        />
        <Route path='*' component={() => <div>404</div>} />
      </Switch>
    </Router>
  )
}
