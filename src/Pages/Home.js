import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        console.log("this.props", this.props)
        return (
            <div>
                <Link to='/Login'>
                    Login
                </Link>

                <Link to='/Register'>
                    Register
                </Link>
            </div>
        )
    }
}
