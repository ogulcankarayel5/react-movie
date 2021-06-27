import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    primary: '#111822',
  },
  fonts: {
    montserratBlack: 'MontserratBlack',
  },
}

interface IThemeProps {
  children: ReactNode
}

export const Theme = ({ children }: IThemeProps): ReactElement => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
