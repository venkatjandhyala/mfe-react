import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

const App = ({ history }) => {
  return (
    <div>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route path={'/auth/signin'} component={SignIn}/>
              <Route path={'/auth/signup'} component={SignUp}/>
            </Switch>
          </Router>
        </StylesProvider>
    </div>
  )
}

export default App;