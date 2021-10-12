import React from 'react';
import FieldSetPerson from './components/FieldSetPerson';
import FieldSetJob from './components/FieldSetJob';
import ButtonsForm  from './components/ButtonsForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <form>
        <FieldSetPerson  />
        <FieldSetJob />
        <ButtonsForm />
      </form>
    );
  }
}

export default App;
