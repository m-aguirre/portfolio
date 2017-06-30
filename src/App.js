import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.jsx';
import EntryPane from './components/EntryPane.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EntryPane />
      </div>
    );
  }
}

export default App;
