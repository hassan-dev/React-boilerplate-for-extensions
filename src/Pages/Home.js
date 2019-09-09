import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        console.log("this.props", this.props)
        return (
            <div>
                <Row style={{marginTop:20}}>
                    <Col>
                        <h2 style={{textAlign:'center'}}>
                            React BoilerPlate
                        </h2>
                    </Col>

                </Row>
                <Row style={{marginTop:20}}>
                    <Col sm>
                        <Link to='/Login' style={{ borderRadius: 0 }} className="btn btn-primary btn-lg btn-block">
                            Login
                        </Link>
                    </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Col sm>
                        <Link to='/Register' style={{ borderRadius: 0 }} className="btn btn-danger btn-lg btn-block">
                            Register
                        </Link>
                    </Col>
                </Row>

            </div>
        )
    }
}
