import React from 'react'
import { Link } from "react-router-dom";
import GistDescription from './gistDescription';
import Avatar from './avatar';
import Badge from '../badge';

export default function GistCard ({details}) {

  let fileTypes = [];
  if (details.files) {
    fileTypes = Object.values(details.files).map(({type}) => {
      if (type.indexOf('plain') > -1) return 'Text';
      type = type.split('/');
      type = type[1] || type[0];
      return type[0].toUpperCase()+type.substr(1).toLowerCase();
    });
    if (fileTypes.length) {
      fileTypes = fileTypes.filter((type, index) => {
        if(index > fileTypes.indexOf(type)) return false;
        return true;
      });
    }
  }
  let forksList = details.forksList || [];
  if(forksList.length) {
    forksList = forksList.slice(-3);
  }
  return (
    <div style={{flex: 1, margin: '20px', border: '1px solid #ccc', maxWidth: '245px'}}>
      <div style={{width: '100%', minHeight: '200px', display: 'flex', flexDirection: 'column'}}>
        <div style={{flex: 1}}>
          <div>Total forks: {details.forksList ? details.forksList.length: 0}</div>
          <div>
            <div style={{width: '100%'}}>Recent Forks by:</div>
            {forksList && forksList.map(fork => <Link to={`/${fork.id}`}><Avatar url={fork.owner.avatar_url} /></Link>)}
          </div>
          <div>
            <div style={{width: '100%'}}>Owner:</div>
            <Avatar url={details.owner.avatar_url} />
          </div>
        </div>
        <div style={{flex: 1, display: 'flex'}}>
        {
          fileTypes.map((type, index) => <Badge key={index} text={type} />)
        }
        </div>
      </div>
      <div style={{boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 12px 0px'}}>
        <GistDescription description={details.description} date={details.created_at} />
      </div>
    </div>
  )
}
