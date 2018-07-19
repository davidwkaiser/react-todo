import React, { Component } from 'react';
import Title from './Title';
import MainList from './MainList'
import AddBox from './AddBox'
import logo from './logo.svg';
import './App.css';

const TODOS = [
{action:"Pet the cat"},
{action:"Deposit paycheck"},
{action:"Water the driveway"}
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Title/>
          <MainList todos={TODOS} />
          <AddBox/>
      </div>
    );
  }
}

export default App;
//also list and addbutton