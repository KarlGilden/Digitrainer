import React from 'react';
import './index.css'
function Button(props) {
  return (
  <button className={props.color + " button"}>
      {props.text}
  </button>
  );
}

export default Button;
