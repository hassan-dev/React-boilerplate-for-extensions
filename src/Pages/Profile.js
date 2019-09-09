/*global chrome*/

import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:''
        }
        chrome.storage.sync.get("name", function (obj) {
            console.log(obj)
            this.setState({name:obj.name})
        }.bind(this));
       
    }
   
    render() {
        console.log("this.props", this.props)
        return (
            <div>
                <Row style={{marginTop:20}}>
                    <Col>
                        <h3 style={{textAlign:'center'}}>
                            Welcome {this.state.name}
                        </h3>
                    </Col>

                </Row>
            </div>
        )
    }
}
