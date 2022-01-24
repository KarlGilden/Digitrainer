import React from 'react';
import './index.css'
function Button(props) {
  return (
  <button className="button">
      {props.text}
  </button>
  );
}

export default Button;
