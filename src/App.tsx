import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { MainRouter } from 'routes'
import { GlobalStyle, Theme } from 'utils'
import { store } from 'store'

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <MainRouter />
      </Theme>
    </Provider>
  )
}

export default App
