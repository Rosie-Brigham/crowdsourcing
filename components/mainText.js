import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';
import About from './about.js'
import Holyrood from './holyrood.js'
import Machrie from './machrie.js'
var scrollToElement = require('scroll-to-element');

class MainText extends Component {

  constructor(props){
    super(props)
  }

  render () {

    function handleClick(e) {
      e.preventDefault();
      var target = "#" + e.target.className
      var scrollToElement = require('scroll-to-element');
      scrollToElement(target);
    }


    return (
      <Grid>
        <Row className="show-grid intro">
          <Col xs={12} md={12}>
            <h1>Welcome to Monumental Conservation</h1>
            <div>
              <p>
                Monumental conservation is a research project which is analysing
                the feasibility of monitoring heritage sites using images from
                visitors. Initially this project is being trialed at two sites
                in Scotland: Holyroodhouse Palace in Edinburgh and Machire Moor on the
                Isle of Arran.
              </p>

              <p className='link'>
                <h2><a href="#" className="about" onClick={handleClick}>About the project</a></h2>
              </p>
              <p className='link'>
                <h2><a href="#" className="machrie" onClick={handleClick}>Machrie Moor site</a></h2>
              </p>
              <p className='link'>
                <h2><a href="#" className="holyrood" onClick={handleClick}>Holyroodhouse Palace site</a></h2>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="show-grid intro">
          <Col xs={12} md={12}>
            <About />
          </Col>
        </Row>
        <Row className="show-grid intro">
          <Col xs={12} md={12}>
          <Machrie />
          </Col>
        </Row>

        <Row className="show-grid intro">
          <Col xs={12} md={12}>
          <Holyrood />
          </Col>
        </Row>
      </Grid>
      )
  }
}


export default MainText
