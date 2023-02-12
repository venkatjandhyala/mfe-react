import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
  productionPrefix: 'da'
})

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}> 
        <Router history={history}>
          <Switch>
            <Route index exact path={'/dashboard'}>
              <h1>dashbaord</h1>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App