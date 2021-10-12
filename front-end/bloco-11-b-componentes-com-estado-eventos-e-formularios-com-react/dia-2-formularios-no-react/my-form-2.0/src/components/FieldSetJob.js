import React from 'react';
import TextAreaJob from './TextAreaJob'
import DataTextAreaJob from '../data/DataTextAreaJob';
import InputPerson from './InputPerson';

class FieldSetJob extends React.Component {
  render() {
    return (
      <fieldset>
        {
          DataTextAreaJob.map((textArea) => (
            <TextAreaJob key={textArea.name} className={textArea.className} max={textArea.max} required={textArea.required} />
          ))
        }
      <InputPerson
        name="officeDescription"
        type="text"
        max="500"
        placeholder="Descrição do cargo"
        required="required"
      />
      </fieldset>
    );
  }
}

export default FieldSetJob;
