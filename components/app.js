import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

// for ze butterfly...
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Butterfly from './butterfly.js'
class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div >
        <Jumbotron>
          <div className="landing-content">
            <h1>Monumental</h1>
            <Butterfly butterflyName={'butterfly'}/>
            <Butterfly butterflyName={'butterflyTwo'}/>
            <Butterfly butterflyName={'butterflyThree'}/>
            <span><img className="me" src='assets/images/me.png'/></span>
          </div>
        </Jumbotron>

        <Grid>
          <Row className="show-grid intro">
            <Col xs={12} md={12}>
              <h1>Welcome to {this.props.name}</h1>
              <p>
              This research project is looking at how feasible it inspect
              to monitor heritage sites using crowdsourced images from
              site visitors.

              Heritage organizations


              there are a number of issues to overcome from this approach,
              the main is the callibration of images. It is likely that photos will
              be taken at different times of the day, in different light, with different
              cameras. Therefore, in order to be able to reliable compare different sets
              of images, they must be well callibrated.
              // work on


              If you are interested or want to get invovled with this project, email
              monumentalconservation.ucl@gmail.com.

              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default App
