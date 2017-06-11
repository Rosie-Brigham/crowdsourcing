import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

// for ze butterfly...
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Butterfly from './butterfly.js'
class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div >
        <Jumbotron>
          <h1>Monumental</h1>
            <Butterfly butterflyName={'butterfly'}/>
            <Butterfly butterflyName={'butterflyTwo'}/>
            <Butterfly butterflyName={'butterflyThree'}/>
          <span><img className="me" src='assets/images/me.png'/></span>
        </Jumbotron>

        <Grid>
          <Row className="show-grid intro">
            <Col xs={12} md={12}>
              <h1>Welcome to {this.props.name}</h1>
              <p>In here will be a short explanation of the project</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default App
