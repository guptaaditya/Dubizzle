import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GistCard from '../gistCard/'

export function GistList(props) {
  if(!props.gists.length) return null;
  return (
    <div className="row" style={{padding: '1%', display: 'flex', flexWrap: 'wrap'}}>
      {props.gists.map((gist, index) => <GistCard key={index} details={gist} />)}
    </div>
  )
};

GistList.propTypes = {
  gists: PropTypes.array
}

GistList.defaultProps = {
  gists: []
}

export default GistList;
