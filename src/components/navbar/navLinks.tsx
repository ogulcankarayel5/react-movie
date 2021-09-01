import React, { ReactElement } from 'react'
import { NavItem, NavLinksContainer } from 'components/navbar/style'

type NavLinksProps = {
  onClose: () => void
}
export const NavLinks = ({ onClose }: NavLinksProps): ReactElement => {
  return (
    <NavLinksContainer>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/'
        onClick={onClose}
        exact
      >
        PREMIER
      </NavItem>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/films'
        onClick={onClose}
        isActive={(match, location) => {
          if (!match && location.pathname.includes('/movie')) {
            return true
          }

          if (!match) {
            return false
          }

          return true
        }}
      >
        FILMS
      </NavItem>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/tv'
        onClick={onClose}
        isActive={(match, location) => {
          if (!match && location.pathname.includes('/tv')) {
            return true
          }
          if (!match) {
            return false
          }

          return true
        }}
      >
        TV SERIES
      </NavItem>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/sign-in'
        onClick={onClose}
      >
        LOGIN
      </NavItem>
    </NavLinksContainer>
  )
}
