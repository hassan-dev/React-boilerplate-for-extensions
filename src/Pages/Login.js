/*global chrome*/

import React, { Component } from 'react'
import {Form, Button } from 'react-bootstrap';
import api from '../Utilities/Api'
import { connect } from 'react-redux'
import loginAction from '../Redux/Actions/LoginAction'

class Login extends Component {

    constructor(props){
        super(props)
        this.state ={
            fullName:'',
            password:''
        }
    }

    changeUserName(event) {
        this.setState({ fullName: event.target.value })
    }

    changePassword(event) {
        this.setState({ password: event.target.value })
    }

    async onSubmit() {
        if (this.state.fullName === '' || this.state.password === '') {
            alert('please enter your data')
        } else {

            // api call 
            var apiResponse = await api('todos/1','get', null, null)
         
            // set uer response to redux store

            this.props.login(this.state.fullName)

            // chrome storage api
            chrome.storage.sync.set({ 'name': this.state.fullName }, ()=>{
                this.props.history.push('/profile')
            });
           

        }

    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter your user name</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" onChange={this.changeUserName.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.changePassword.bind(this)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit.bind(this)}>
                        Submit
                    </Button>
                </Form>
            </div>
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
  )(Login)
