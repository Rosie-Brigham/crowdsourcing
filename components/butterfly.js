import React, { Component } from 'react'

class Butterfly extends Component {

  constructor(props){
    super(props)
    //  the stuffs for the css-ing
  }

  render () {
    const styles = {
      transition: 'all 8s linear'
    }

    return (
        <img className={this.props.butterflyName} src='assets/images/butterfly-2.gif' style={styles}/>
      )
  }
}


export default Butterfly