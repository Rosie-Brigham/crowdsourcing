import React, { Component } from 'react'

class About extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
        <div className="about" id="about">
          <p>
            A majority of outdoor heritage sites don’t have the luxury of regular visits from professional conservators yet they are visited daily by hundreds of tourists. This project aims to evaluate whether crowdsourcing tourist photos can be used by conservators to monitor valuable heritage.
          </p>
          <p>
            Heritage organizations often have a myriad of sites to protect, maintain and conserve.
            These can vary in type, size and location which makes it difficult
            to consistently monitor them. A majority of outdoor heritage sites don’t have the luxury of regular visits from professional conservators yet they are visited daily by hundreds of tourists. This project aims to evaluate whether crowdsourcing tourist photos can be used by conservators to monitor valuable heritage.
          </p>
          <p>

          </p>
          <p>
            Crowdsourcing a great way to engage members of the public with large and complicated problems. The hope is to engage visitors with preventative conservation, and that this data will fill a void in conservation management.
          </p>
          <p>
            There are a number of issues to overcome from this approach that this project will attempt to address.
            The main one is how to callibrate the images. It is likely that photos will
            be taken at different times of the day, in different light, with different
            cameras. Therefore, in order to be able to reliable compare different sets
            of images, they must be well callibrated.

            The second is that of scale. With different distortians in different cameras, it will be difficult
            to be able to relaibly measure distances and scales across images from different cameras.

            Initially, this project will be trialled in two different sides, Machrie Moor and Holyrood Palace.
          </p>

          <p>
            If you are interested or want to get invovled with this project, email
            monumentalconservation.ucl@gmail.com.
          </p>
        </div>
      )
  }
}


export default About
