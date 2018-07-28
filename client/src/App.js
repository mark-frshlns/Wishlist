import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {WishList, DashBoard, Home} from './pages';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      
        <Router>
        
          <Switch>
              <Route exact path="/" component={Home} />
             
              <Route exact path="/WishList" component={WishList} />
              
              <Route exact path="/Admin-WishList" component={DashBoard}/>
              
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
