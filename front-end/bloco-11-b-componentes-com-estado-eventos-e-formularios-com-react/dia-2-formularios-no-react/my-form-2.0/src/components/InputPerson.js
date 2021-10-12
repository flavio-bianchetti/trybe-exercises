import React from 'react';

class Input extends React.Component {
  render() {
    const { name, type, max, placeholder, required } = this.props;
    return (
      <input name={name} type={type} max={max} placeholder={placeholder}
        required={required}>
      </input>
    );
  }
}

export default Input;