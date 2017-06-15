import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

class About extends Component {

  constructor(props){
    super(props)
  }

  render () {
    function handleClick(e) {
      e.preventDefault();
      var scrollToElement = require('scroll-to-element');
      scrollToElement('#welcome');
    }

    return (
      <div className="about" id="about">
        <Jumbotron className="about">
          <Grid>
            <Row className="show-grid about">
              <Col xs={12} md={12}>
              <h2> About </h2>
              <p>
                A majority of outdoor heritage sites do not have the luxury of regular visits from professional conservators yet they are visited daily by hundreds of tourists. This project aims to evaluate whether crowdsourcing tourist photos can be used by conservators to monitor valuable heritage.
              </p>
              <p>
                Heritage organisations often have a myriad of sites to protect, maintain and conserve.
                These can vary in type, size and location which makes it difficult
                to consistently monitor them.
              </p>
              <p>
                Crowdsourcing a great way to engage members of the public with large and complicated problems. The hope is to engage visitors with preventative conservation and to utilise the data they provide to fill current voids present in conservation management.
              </p>
              <p>
                For this project to be a success, there two main issues to address. First, the images supplied by the general public are likely to be highly variably due to a number of factors including different lighting conditions, varying levels of photographic skill and the use of different cameras. In order to reliably compare all types of image, a consistent calibrating algorithm must be devised and uniformly applied to each image.


                The second is issue is that of scale. Different cameras produce different levels of image distortion that can make inferring distances and senses of scale difficult. In order to combat this we have used checkerboards to provide a known scale within the
                images.

                Initially, this project will be trialled in two different sides, Machrie Moor and Holyrood Palace.
              </p>

              <p>
                If you are interested or want to get invovled with this project, email <br/>
                <a href="mail:monumentalconservation.ucl@gmail.com">
                 monumentalconservation.ucl@gmail.com</a>.
              </p>
              <a href="#" onClick={handleClick}><h3>back to top</h3></a>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
      </div>
      )
  }
}


export default About
