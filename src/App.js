import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.jsx';
import EntryPane from './components/EntryPane.jsx';
import SideBar from './components/SideBar.jsx';
import WelcomePane from './components/WelcomePane.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EntryPane />
        <SideBar />
        <WelcomePane />
      </div>
    );
  }
}

export default App;
