import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './components/Header';
import {default as WishListNav} from './components/WishListNav';
import {WishList, DashBoard, Home} from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      
        <Router>
        
          <Switch>
              <Route exact path="/Home" render={()=><div className="container-fluid" ><Header /><WishListNav /><Home/></div>} />
             
              <Route exact path="/WishList" render={()=><div className="container-fluid" ><Header /><WishListNav /><WishList /></div>} />
              
              <Route exact path="/Admin-WishList" render={()=><div className="container-fluid" ><Header /><WishListNav /><DashBoard/></div>} />
              
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
