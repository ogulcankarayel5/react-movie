import React, { Suspense } from 'react'
import lazy from 'routes/lazy'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PublicRoute } from 'routes'
import { Loading } from 'components'
import { GeneralLayout } from 'components/layouts'

const Detail = lazy(() => import('pages'), 'Detail')
const Home = lazy(() => import('pages'), 'Home')
const Films = lazy(() => import('pages'), 'Films')

export const MainRouter = (): React.ReactElement => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <GeneralLayout>
            <PublicRoute exact path='/' component={Home} />
            <PublicRoute path='/films' component={Films} />
            <PublicRoute path='/detail/:id' component={Detail} />
          </GeneralLayout>

          <PublicRoute component={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </Router>
  )
}
