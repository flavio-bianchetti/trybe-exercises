import React from 'react';

class TextAreaJob extends React.Component {
  render() {
    const { name, className, max, required } = this.props;
    return (
      <textarea name={name} className={className} max={max} required={required} />
    );
  }
}

export default TextAreaJob;
