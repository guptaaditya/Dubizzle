import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as gistActions from '../../actions/gist'
import GistList from '../gistList/'

export class Fork extends Component {

  componentDidMount() {
    if(this.props.match.params.fork_id)
      this.props.actions.getGistById(this.props.match.params.fork_id);
  }

  render(){
    return (
      <div className="container">
        <Link to='/'>Go to home</Link>
        <GistList gists={this.props.gists} />
      </div>
    )
  }
};

const mapStateToProps = ({gist}) => {
  return { gists: gist.gists };
};
const mapDispatchToProps = (dispatch) => { return {actions: bindActionCreators(gistActions, dispatch)}}
export default connect(mapStateToProps, mapDispatchToProps)(Fork);
