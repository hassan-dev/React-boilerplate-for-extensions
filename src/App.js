/*global chrome*/

import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'

class App extends Component {
  render() {
    return (
      <Router >

        <div style={{ padding: 20, minWidth: 300 }}>
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

            <Route
              exact
              path={'/profile'}
              component={Profile}
            />
          </Switch>
        </div>

      </Router>
    )
  }
}


export default App