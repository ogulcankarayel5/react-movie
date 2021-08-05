import { Navbar } from 'components'
import React, { Suspense } from 'react'
import lazy from 'routes/lazy'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PublicRoute } from 'routes'
import { Loading } from 'components'

const Detail = lazy(() => import('pages'), 'Detail')
const Home = lazy(() => import('pages'), 'Home')

export const MainRouter = (): React.ReactElement => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
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
          <PublicRoute path='/detail/:id' component={Detail} />
          <Route path='*' component={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </Router>
  )
}
