import React from 'react';

class RadioButtonPerson extends React.Component {
  render() {
    const { name, className, type, required, labelValues } = this.props;
    return (
      <div className={className}>
        {labelValues.map((labelValue) => (
          <label key={labelValue.for} htmlFor={labelValue.for}>
            <input key={labelValue.for} type={type} name={name} id={labelValue.for}
              value={labelValue.value} required={required}/>
            {labelValue.value}
          </label>
        ))}
      </div>
    );
  }
}

export default RadioButtonPerson;
