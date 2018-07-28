import React,{Component} from 'react';
import './WishListNav.css';
import { NavLink} from 'react-router-dom';


export default class WishListNav extends Component {
      
      state={
        wishlist:"",
        categories:[],
        modalShow: false
      }
      showModal= ()=>{
            this.state({modalShow:true});
      }
      render(){
          return(
            
            
             <nav className="navbar navbar-expand-lg navbar-light justify-content-left position-sticky">
                  <div className="layer"/>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                               <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="row justify-content-start">
                              <ul className="nav nav-pills nav-fill col">
                                    <li className="nav-item">
                                          <NavLink className="nav-link " style={{color:"white"}}  activeStyle={{backgroundColor:"#B99664",color:"rgba(50,50,50,0.6)",borderBottom:"0.08em solid orangered"}} exact to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link " style={{color:"white"}} activeStyle={{backgroundColor:"#B99664",color:"rgba(50,50,50,0.6)",borderBottom:"0.08em solid orangered"}} to="/WishList">New Church Wishlist</NavLink>
                                    </li>
                              
                              
                              </ul>
                        </div>
                        
                  </div>
            
             </nav>
          
          )
      }
}