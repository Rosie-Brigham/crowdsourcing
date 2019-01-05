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
          <img src="../assets/images/fountain_updated.jpg"/>
          <div className="holyrood-text">
            <h2>Holyrood Palace Fountain</h2>
            <p>
               Holyrood Palace has served as the principal residence of the Kings
               and Queens of Scots since the 16th century, and is a setting for
               state occasions and official entertaining. Her Majesty The Queen still visits
               once a year for the annual garden party.
            </p>
            <p>
              The fountain sits in the forecourt of the palace and is a 19th century replica of
              the fountain at Linlithgow Palace. It's highly decorous with intricate designs and
              carvings. The fountin suffers from biological growth, with plants often sprouting in
              the top of the fountain and algae growing at the bottom.
            </p>
            <p>
              We wanted to establish wether we could track the growth of algae on the
              bottom of the fountain around the lions heads. We asked visitors to take photos
              of the fountain, including the sign in order to have the images taken from a similar position.
            </p>
          </div>
        </div>
      )
  }
}


export default Holyrood
