import React, { Component } from 'react';
import { Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { connect } from 'react-redux'
import loginAction from './Redux/Actions/LoginAction'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Container>
        <Row>
          <Col>
            <Button variant="danger" size="lg" block onClick={() => this.props.login('ali iqbal')}>
              {this.props.user == null ? "Ali" : this.props.user}
            </Button>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>




    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("redux state",state)
  return {
    user: state.loginReducer.user
  }
}

function mapDispatchToProps(dispatch)  {
  return {
      login : (user) => dispatch(loginAction.login(user))
    }
 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)