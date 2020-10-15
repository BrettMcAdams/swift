import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/search'>
            <SearchPage hideButtons />
          </Route>
          <Route exact path='/'>
          <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
