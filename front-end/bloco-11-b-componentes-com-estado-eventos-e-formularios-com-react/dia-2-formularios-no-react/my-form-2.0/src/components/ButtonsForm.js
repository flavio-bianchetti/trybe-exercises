import React from 'react';
import Button from './Button';
import DataButtons from '../data/DataButtons'

class ButtonsForm extends React.Component {
  render() {
    return (
      <div className="buttons">
        {
          DataButtons.map((button) => (
            <Button key={button.name} type={button.type} name={button.name}
              className={button.className}/>
          ))
        }
      </div>
    );
  }
}

export default ButtonsForm;
