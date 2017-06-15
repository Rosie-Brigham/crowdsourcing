import React, { Component } from 'react'
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';
// for ze butterfly...
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import MainText from './mainText.js'
import Butterfly from './butterfly.js'
class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div >
        <Jumbotron className="intro-jumbotron">
          <div className="landing-content">
            <h1>Monumental</h1>
            <Butterfly butterflyName={'butterfly'}/>
            <Butterfly butterflyName={'butterflyTwo'}/>
            <Butterfly butterflyName={'butterflyThree'}/>
            <span><img className="me only-desktop" src='assets/images/me.png'/></span>
          </div>
        </Jumbotron>

        <MainText />
      </div>
    )
  }

}

export default App
