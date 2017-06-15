import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

class Holyrood extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
        <div id="holyrood">
          <img src="../assets/images/holyrood.jpg"/>
          <Grid>
            <Row className="show-grid holyrood">
              <Col xs={12} md={12}>
                <div className="holyrood-text">
                  <h2>Holyrood Palace Fountain</h2>
                  <p>
                     Holyrood Palace has served as the principal residence of the Kings and Queens of Scots since the 16th century, and is a setting for state occasions and official entertaining.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      )
  }
}


export default Holyrood
