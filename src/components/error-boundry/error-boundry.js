import React, { Component } from 'react';
import ErrorIndiactor from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {
  	hasError: false
  };

  componentDidCatch() {
  	this.setState({
  	  hasError: true
  	});
  };

  render() {
  	if (this.state.hasError) {
  	  return <ErrorIndiactor />
  	}
  	return this.props.children;
  };
};