import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const Routes = () => (
    <Switch>
         <Route
          exact
          path={'/'}
          component={Home}
        />
        
        <Route
          exact
          path={'/Login'}
          component={Login}
        />
        <Route
          exact
          path={'/Register'}
          component={Register}
        />
    </Switch>
)

export default Routes