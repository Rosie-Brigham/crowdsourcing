import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

// for ze butterfly...
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div >
        <Jumbotron>
          <h1>Crowdsource <br/>Conservation</h1>



            <img className='butterfly' src='assets/images/butterfly-2.gif' />




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
