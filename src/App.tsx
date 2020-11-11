import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import GameContainer from './components/GameContainer/GameContainer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <GameContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
