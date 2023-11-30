// Catatan.js
import React from 'react';

function Catatan(props) {
  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text fs-5">{props.dates}</div>
      </div>
      <p className="card-text fs-5 text-start">{props.content}</p>
    </div>
  );
}

export default Catatan; 
