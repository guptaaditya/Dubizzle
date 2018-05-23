import React from 'react'

export default function SearchBox(props) {
  return (
    <div className="row" style={{padding: '1%'}}>
      {props.label &&
        <label>{props.label}</label>
      }
      <input type="text" style={{padding: '5px', width: '20%'}} placeholder={props.placeholder}
        onChange={e => props.search(e.target.value.trim())} value={props.value} />
    </div>
  );
}
