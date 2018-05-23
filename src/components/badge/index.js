import React from 'react';

export default function Badge({text}) {
  const badgeStyle = {
    padding: '5px', backgroundColor: '#ccc', border: '1px solid #ddd', boxShadow: '#aaa 0px 2px 5px 2px',
    maxWidth: '60px', margin: '10px', height: '20px', flex: 1
  };
  return (
    <div style={badgeStyle}>{text}</div>
  )
}
