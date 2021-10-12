import React from 'react';
// import comboBoxPerson from '../data/DataComboBoxPerson';

class ComboBoxPerson extends React.Component {
  render() {
    const { name, className, required, states } = this.props;
    return (
      <select className={className} name={name} required={required}>
        {states.map((state) => (
          <option key={Object.keys(state)[0]} value={Object.keys(state)[0]}>
            {Object.values(state)[0]}
          </option>
        ))}
      </select>
    );
  }
}

export default ComboBoxPerson;
