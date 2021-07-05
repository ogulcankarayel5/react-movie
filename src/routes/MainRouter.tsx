import { Navbar } from 'components'
import { Home } from 'pages'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PublicRoute } from 'routes'

export const MainRouter = (): React.ReactElement => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PublicRoute
          exact
          path='/'
          component={Home}
          restricted={false}
          loggedIn={false}
        />
        <PublicRoute
          path='/films'
          component={() => <div>films</div>}
          restricted={false}
          loggedIn={false}
        />
        <Route path='*' component={() => <div>404</div>} />
      </Switch>
    </Router>
  )
}
