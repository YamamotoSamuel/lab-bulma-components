import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './Signup';


class App extends React.Component{
  render(){
      return(
        <div>
          <Nav />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <CoolButton classes="button is-small is-danger">Button 1</CoolButton>
          <CoolButton classes="button is-small is-success">Button 2</CoolButton>
          <Signup label="Signup" type="text" />
        </div>
      )
    }
  }


export default App;
