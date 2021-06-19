import { Home } from 'pages'
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PublicRoute } from 'routes'
import { IRouteConfig } from 'types'

const routes: Array<IRouteConfig> = [
	{
		key: 'root',
		path: '/',
		component: Home,
		exact: true,
		route: PublicRoute,
	},
]

export const MainRouter = (): React.ReactElement => {
	return (
		<Router>
			<Switch>
				{routes.map((item: IRouteConfig, i) => {
					return (
						<item.route
							key={`${item.key}-${i}`}
							path={item.path}
							render={(props: any) => <item.component {...props} />}
						/>
					)
				})}
			</Switch>
		</Router>
	)
}
