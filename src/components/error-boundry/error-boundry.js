import React from 'react';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends React.Component {
  state = {
    isError: false
  }

  componentDidCatch() {
    this.setState({ isError: true })
  }

  render() {
    return this.state.isError ? <ErrorIndicator /> : this.props.children;
  }
}