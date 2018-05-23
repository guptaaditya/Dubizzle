import React, { Component } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row" style={{background: '#000', padding: '5px 0px'}}>
        <div className="col-sm-3 col-xs-6">
          &nbsp;&nbsp;
        </div>
      </div>
    )
  }
}

export default Header;
