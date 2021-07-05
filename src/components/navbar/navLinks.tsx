import React, { ReactElement } from 'react'
import { NavItem, NavLinksContainer } from 'components/navbar/style'

const navConfig = [
  {
    name: 'PREMIER',
    path: '/',
  },
  {
    name: 'FILMS',
    path: '/films',
  },
  {
    name: 'TV SERIES',
    path: '/tv-series',
  },
  {
    name: 'CARTOONS',
    path: '/cartoons',
  },
  {
    name: 'SHOW',
    path: '/show',
  },
  {
    name: 'LOGIN',
    path: '/sign-in',
  },
]

type NavLinksProps = {
  onClose: () => void
}
export const NavLinks = ({ onClose }: NavLinksProps): ReactElement => {
  return (
    <NavLinksContainer>
      {navConfig.map((item, index) => (
        <NavItem
          exact={item.path === '/' ? true : undefined}
          onClick={onClose}
          key={`${index}-${item.name}`}
          to={item.path}
          activeStyle={{ color: '#CE1E37' }}
        >
          {item.name}
        </NavItem>
      ))}
    </NavLinksContainer>
  )
}
