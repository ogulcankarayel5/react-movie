import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { MainRouter, PublicRoute } from 'routes'

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route)
	const history = createMemoryHistory({ initialEntries: [route] })

	return { ...render(<Router history={history}>{ui}</Router>), history }
}

test('it should render the right route', () => {
	renderWithRouter(<MainRouter />, { route: '/' })
	expect(screen.getByText(/Home/i)).toBeInTheDocument()
})

test('it should render the 404 page', () => {
	renderWithRouter(<MainRouter />, { route: '/notexistingpath' })
	expect(screen.getByText(/404/i)).toBeInTheDocument()
})

test('it should render the component if the user is not logged in ', () => {
	const authComponent = () => <div>authComponent</div>

	const { history } = renderWithRouter(
		<PublicRoute
			restricted={false}
			loggedIn={true}
			component={authComponent}
		/>,
		{ route: '/publicpath' }
	)

	expect(history.location.pathname).toBe('/publicpath')
	expect(screen.getByText(/authComponent/i)).toBeInTheDocument()
})

test('it should redirect to the home if the user is logged in and the path is restricted', () => {
	const loginComponent = () => <div>login</div>
	const { history } = renderWithRouter(
		<PublicRoute
			restricted={true}
			loggedIn={true}
			component={loginComponent}
		/>,
		{ route: '/login' }
	)

	expect(history.location.pathname).toBe('/')
	expect(screen.queryByText(/login/i)).not.toBeInTheDocument()
})
