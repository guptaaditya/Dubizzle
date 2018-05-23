import React from 'react'

export default function GistDescription(props) {
  const fontStyle = {fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
    color: "rgb(48, 64, 59)"};

    const createdAt = new Date(props.date);
    const displayDate = createdAt.toLocaleDateString()+' '+createdAt.toLocaleTimeString();
  return (
    <React.Fragment>
        <div style={fontStyle} title={props.description}><b>Description</b>: {props.description}</div>
        <div style={fontStyle}><b>Date</b>: {displayDate}</div>
    </React.Fragment>
  );
}
