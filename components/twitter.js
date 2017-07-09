import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

class Twitter extends Component {

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
      <div id="machrie">
        <img src="../assets/images/machrie.JPG"/>
        <Grid>
          <Row className="show-grid machrie">
            <Col xs={12} md={12}>
              <div className="machrie-text">
                <h2>Check out our twitter feed</h2>
                <p>
                  <a className="twitter-timeline"  href="https://twitter.com/hashtag/monumentMonitor" data-widget-id="884126346049355776">#monumentMonitor Tweets</a>
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


export default Twitter
