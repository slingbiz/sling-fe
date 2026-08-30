import React from 'react';

class RenderTreeGuard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error) {
    if (typeof console !== 'undefined') {
      console.warn('Storefront skipped a broken widget cell', error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export default RenderTreeGuard;
