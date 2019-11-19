import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ContentUnlocked from './components/ContentUnlocked';
import ContentLocked from './components/ContentLocked';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={ContentLocked} />
            <Route path="/pagetwo" exact component={ContentUnlocked} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
