import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
  return (
     <form id="to-do-form">
       <input type="text"/>
       <button type="submit">Add</button>
     </form>
  ); }
}

export default App;
