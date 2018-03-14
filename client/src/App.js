import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './components/Header';
import {default as WishListNav} from './components/WishListNav';
import {WishList, DashBoard} from './pages';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      
        <Router>
        
          <Switch>
              
              <Route exact path="/WishList" render={()=><div className="container-fluid" ><WishListNav /><WishList/></div>} />
              
              <Route exact path="/Admin-WishList" render={()=><div className="container-fluid" ><WishListNav /><DashBoard/></div>} />
              
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
