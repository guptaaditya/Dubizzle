import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as gistActions from '../../actions/gist'
import GistList from '../gistList/'
import SearchBox from '../searchBox/'

export class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      timer: null
    };

    this.searchGists = this.searchGists.bind(this);
  }

  componentDidMount() {
    if(this.props.user) {
      this.loadData(this.props.user)
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.user == this.props.user) return;
    let username = this.props.user;
    this.loadData(username)
  }

  loadData = username => {
    if(username) {
      let { getUserGists } = this.props.actions;
      let timer = setTimeout(() => {
        getUserGists(username)
      }, 500);
      this.setState({timer});
    } else {
      this.props.actions.getGistsSuccess([]); // clear gists list
    }
  }

  searchGists = (username) => {
    this.props.actions.changeUserSearched(username);
    if(this.state.timer) {
      clearTimeout(this.state.timer);
    }
  }

  render(){
    return (
      <div className="container">
        <SearchBox search={this.searchGists} label="Search gist: " placeholder="Search public gists by entering username"
          value={this.props.user} />
        <GistList gists={this.props.gists} />
      </div>
    )
  }
};

const mapStateToProps = ({gist}) => {
  return { gists: gist.gists, user: gist.userSearched };
};
const mapDispatchToProps = (dispatch) => { return {actions: bindActionCreators(gistActions, dispatch)}}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
