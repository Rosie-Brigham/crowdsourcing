import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

class Holyrood extends Component {

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
        <div id="holyrood">
          <img src="../assets/images/holyrood_landscape.jpg"/>
          <Grid>
            <Row className="show-grid holyrood">
              <Col xs={12} md={12}>
                <div className="holyrood-text">
                  <h2>Holyrood Palace Fountain</h2>
                  <p>
                     Holyrood Palace has served as the principal residence of the Kings and Queens of Scots since the 16th century, and is a setting for state occasions and official entertaining.
                  </p>
                  <a href="#" onClick={handleClick}><h3>back to top</h3></a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      )
  }
}


export default Holyrood
