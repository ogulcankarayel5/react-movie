export interface IRouteConfig {
	key: string
	path: string
	component: React.ElementType
	exact?: boolean
	route: React.ElementType
}
