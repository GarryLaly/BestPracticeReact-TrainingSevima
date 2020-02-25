import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

export default Button;
