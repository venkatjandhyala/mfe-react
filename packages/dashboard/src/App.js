import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
  productionPrefix: 'da'
})

const App = () => {
  return (
    <StylesProvider> 
      <div>Dashboard</div>
    </StylesProvider>
  )
}

export default App