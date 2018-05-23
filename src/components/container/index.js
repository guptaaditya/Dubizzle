import React, { Component } from 'react'

import Header from '../header/'
import Footer from '../footer/'
import Modal from '../modal/'

const _ = require('lodash')

export class Container extends Component {
  render(){
    let styles = _.cloneDeep(this.constructor.styles);
    return (
      <div className="container" style={styles.fullWidthTemplate}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
};

Container.styles = {
  fullWidthTemplate: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  }
};

export default Container;
