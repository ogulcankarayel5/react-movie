import React, { ReactElement } from 'react'
import { MainRouter } from 'routes'
import { GlobalStyle, Theme } from 'utils'

function App(): ReactElement {
  return (
    <Theme>
      <GlobalStyle />
      <MainRouter />
    </Theme>
  )
}

export default App
