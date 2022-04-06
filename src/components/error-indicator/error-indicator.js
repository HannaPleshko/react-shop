import React from 'react';
import icon from './warning.png';

import './error-indicator.css';
const ErrorIndiactor = () => {
  return (
    <div className="alert alert-dismissible alert-warning">
  	  <img src={icon} alt="error icon" />
  	  <h4 className="alert-heading">Warning!</h4>
  	  <p className="mb-0">Something went wrong</p>
	</div>
  );
};

export default ErrorIndiactor;