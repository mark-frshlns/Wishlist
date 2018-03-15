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
                  <span className="col-md-1 col-sm-1" />
                  <ul className="nav nav-tabs ">
                      <li className="nav-item">
                            <NavLink className="nav-link bg-dark text-white" activeStyle={{borderBottom:"3px solid  rgb(18, 72, 99)"}} to="/Home">Home</NavLink>
                      </li>
                      <li className="nav-item">
                             <NavLink className="nav-link bg-dark text-white" activeStyle={{borderBottom:"3px solid  rgb(18, 72, 99)"}} to="/WishList">New Church Wishlist</NavLink>
                      </li>
                      <li className="nav-item ">
                            <NavLink className="nav-link bg-dark text-white" activeStyle={{borderBottom:"3px solid  rgb(18, 72, 99)"}} to="/Admin-WishList">Dashboard</NavLink>
                      </li>
                      
                  </ul>
               
            
             </nav>
          
          )
      }
}