import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import {
  Route,
  Link,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/Header.jsx';
import EntryPane from './components/EntryPane.jsx';
import SideBar from './components/SideBar.jsx';
import WelcomePane from './components/WelcomePane.jsx';

//new stuff

import Pane from './components/Pane.jsx';
import ArtPane from './components/ArtPane.jsx';
import BioPane from './components/BioPane.jsx';
import ProjectsPane from './components/ProjectsPane.jsx';
import StockVis from './components/projects/StockVis.jsx';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Pane} />
      <Route path="/art" component={ArtPane} />
      <Route path="/bio" component={BioPane} />
      <Route path="/projects" component={ProjectsPane} />
      <Route path="/welcome" component={WelcomePane} />
      <Route path="/stockvis" component={StockVis} />

    </div>
  </Router>, document.getElementById('root'));


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
