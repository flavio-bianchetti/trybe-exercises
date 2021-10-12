import React from 'react';
import InputPerson from './InputPerson';
import ComboBoxPerson from './ComboBoxPerson';
import RadioButtonPerson from './RadioButtonPerson';
import DataInputPerson from '../data/DataInputPerson';
import DataComboBoxPerson from '../data/DataComboBoxPerson';
import DataRadioButtonPerson from '../data/DataRadioButtonPerson';

class FieldSetPerson extends React.Component {
  render() {
    return (
      <fieldset className="fieldsetPerson">
        {
          DataInputPerson.map((input) => (
            <InputPerson key={input.name} name={input.name} type={input.type} max={input.max}
              required={input.required} placeholder={input.placeholder}/>
          ))
        }
        {
          DataComboBoxPerson.map((comboBox) => (
            <ComboBoxPerson key={comboBox.name} name={comboBox.name} className={comboBox.className}
              required={comboBox.required} states={comboBox.states} />
          ))
        }
        {
          DataRadioButtonPerson.map((radioButton) => (
            <RadioButtonPerson key={radioButton.name} name={radioButton.name}
              className={radioButton.className} type={radioButton.type}
              required={radioButton.required} labelValues={radioButton.labelValues} />
          ))
        }
      </fieldset>
    );
  }
}

export default FieldSetPerson;
