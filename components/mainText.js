import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';
import About from './about.js'
import Holyrood from './holyrood.js'
import Machrie from './machrie.js'
import Twitter from './twitter.js'
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
        <div className="intro fixed-height">
          <Row className="show-grid">
            <Col xs={12} md={12} id="welcome">
              <h1>Welcome to Monumental Conservation</h1>
              <p>
                <strong>
                Monumental Conservation is a research project which to establish whether
                images taken by visitors to heritage sites can be of a quality that is useful
                for heritage institutions.
                </strong>
              </p>
              <p>
                Together with the Institute of Sustainable Heritage at University College London (UCL)
                Historic Environments Scotland has set up an innovative project to crowdsource conservation.

                HES manages over 300 different sites all over Scotland, ranging from fountains in the
                middle of the city to ancient cairns in the depths of the highlands.
                Closely monitoring these sites is logistically very challenging.
              </p>
              <p>
                This research will establish whether images taken by visitors
                can be of a quality that is useful for heritage institutions for conservation purposes.
                It will attempt to establish what analytical data can be collected by smartphone cameras.
                This will provide valuable insight into how long term conservation crowdsourcing of heritage sites
                can be developed.
              </p>
              <p>
                Initially this project is being trialed at two sites: Holyroodhouse Palace in Edinburgh and Machire Moor on the
                Isle of Arran.
              </p>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}>
              <div className='link'>
                <h2><a href="#" className="about" onClick={handleClick}>Find out more</a></h2>
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

      <Twitter />

      </section>
      )
  }
}


export default MainText
