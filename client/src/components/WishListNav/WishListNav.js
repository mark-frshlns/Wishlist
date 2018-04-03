import React,{Component} from 'react';
import './WishListNav.css';
import { NavLink} from 'react-router-dom';

export default class WishListNav extends Component {
      
      state={
        wishlist:"",
        categories:[]
      }
  
      render(){
          return(
            
            
             <nav className="row navbar navbar-expand-lg navbar-light justify-content-left position-sticky">
                  <div className="layer"/>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                               <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-pills nav-fill">
                              <li className="nav-item">
                                    <NavLink className="nav-link bg-secondary text-white" activeStyle={{borderBottom:"2px solid  #3195b1"}} to="/Home">Home</NavLink>
                               </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link bg-secondary text-white" activeStyle={{borderBottom:"2px solid  #3195b1"}} to="/WishList">New Church Wishlist</NavLink>
                              </li>
                        <li className="nav-item ">
                              <NavLink className="nav-link bg-secondary text-white" activeStyle={{borderBottom:"2px solid  #3195b1"}} to="/Admin-WishList">Dashboard</NavLink>
                        </li>
                        
                        </ul>
                  </div>
            
             </nav>
          
          )
      }
}