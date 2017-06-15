import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

class Machrie extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div id="machrie">
        <img src="../assets/images/machrie.JPG"/>
        <Grid>
          <Row className="show-grid machrie">
            <Col xs={12} md={12}>
              <div className="machrie-text">
                <h2>Machrie Moor Standing Stones</h2>
                <p>
                  This rich archaeological landscape includes stone circles, standing stones, burial cairns and cists, as well as hut circles and an extensive field system, all dating to between 3500 and 1500 BC.
                </p>
                <p>
                  Machrie moor presents an interesting challenge to this project. The main issues that
                  the site faces is waterlogging at the furthermost circle and very occasional vandalism.
                  Due to this, a slightly different approach has been taken here than at Holyrood. We have
                  asked people to simply take images of what they believe could cause an issue, focusing patiruclarly on the furthest circle. The images will have weather data attached to them, so that we can monitor how the weather affects the water levels.
                  However, as the question is quite open, we hope to get a good veiw of how
                  the visitors perceive what could be potential threats to the site, which is invaluble information for the custodians.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default Machrie
