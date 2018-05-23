import React from 'react'

export default function Avatar({url}) {
  const imgStyle = {height: '25%', width: '25%', cursor: 'pointer'};
  return (
      <img style={imgStyle} src={url} alt="Could not load avatar." />
  );
}
