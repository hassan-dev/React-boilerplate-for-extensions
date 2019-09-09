    /*global chrome*/

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import loginAction from './Redux/Actions/LoginAction'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

class App extends Component {
  render() {
    return (
      <Router >

        <div style={{padding:20,minWidth:300}}>
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
        </div>

      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("redux state", state)
  return {
    user: state.loginReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(loginAction.login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)