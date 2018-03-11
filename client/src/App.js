import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {WishList, DashBoard} from './pages';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={WishList} />
              <Route exact path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
