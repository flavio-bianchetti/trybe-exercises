import React from 'react';

class Button extends React.Component {
  render() {
    const { type, name, className } = this.props;
    return (
      <button type={type} name={name} className={className}>{name}</button>
    );
  }
}

export default Button;