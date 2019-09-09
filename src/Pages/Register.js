/*global chrome*/
import React, { Component } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import api from '../Utilities/Api'
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            fullName: ''
        }
    }
    changeUserName(event) {
        this.setState({ fullName: event.target.value })
    }
    changeEmail(event) {
        this.setState({ email: event.target.value })
    }
    changePassword(event) {
        this.setState({ password: event.target.value })
    }

    async onSubmit() {
        if (this.state.fullName === '' || this.state.password === '' || this.state.email === '') {
            alert('please enter your data')
        } else {

            // api call 
            var apiResponse = await api('todos/1','get', null, null)

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
                    <Form.Group controlId="forUserName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your full name" onChange={this.changeUserName.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail.bind(this)} />
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
