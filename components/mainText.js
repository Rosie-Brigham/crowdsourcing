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
      <section>
      <Grid>
        <div className="intro">
          <Row className="show-grid">
            <Col xs={12} md={12} id="welcome">
              <h1>Welcome to Monumental Conservation</h1>
              <p>
                Monumental Conservation is a research project which is analysing
                the feasibility of monitoring heritage sites using images from
                visitors. Initially this project is being trialed at two sites
                in Scotland: Holyroodhouse Palace in Edinburgh and Machire Moor on the
                Isle of Arran.
              </p>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}>
              <div className='link'>
                <h2><a href="#" className="about" onClick={handleClick}>About the project</a></h2>
              </div>
            </Col>
            <Col xs={12} md={4} id="no-padding">
              <div className='link'>
                <h2><a href="#" className="machrie" onClick={handleClick}>Machrie Moor site</a></h2>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='link last-link'>
                <h2><a href="#" className="holyrood" onClick={handleClick}>Holyroodhouse Palace site</a></h2>
              </div>
            </Col>
          </Row>
        </div>
      </Grid>

      <About scroll={handleClick}/>

      <Holyrood />

      <Machrie />
      </section>
      )
  }
}


export default MainText
