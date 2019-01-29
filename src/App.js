import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/profiles" component={ Profiles }/>
        <Route path="/history" component={ HistorySample }/>
      </div>
    );
  }
}

export default App;
