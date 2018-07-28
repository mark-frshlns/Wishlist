import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import {Header} from '../../components/Header';
import {default as WishListNav} from '../../components/WishListNav';
import Footer from '../../components/Footer';

const Home = (props)=>{
 

  return (
    <div className="container-fluid">
        <Header />
        <WishListNav />
        <div className="row justify-content-center">
          <div className="col-sm-12 justify-content-center QouteContainer">
            <i><h6 className="card-title bibleQoute">" The God of heaven Himself will prosper us;  therefore we His servants will arise and build "</h6></i>
            <span>(Nehemiah 2:20)</span>
          </div>
        </div>
        <div className="row justify-content-center">
                <div className="card col-sm-12 ">
                    <div className="card-img imgContainer"  />
                    <div className="card-img-overlay">
                        <div className="overlayContent">
                        <i><h2>Building Up,<br /> Reaching Out</h2></i>
                        <NavLink className="nav-link "  to="/WishList">Go To Wishlist</NavLink>
                        </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Welcome to St. Anthony's</h3>
                    </div>
                </div>
          </div>
        <Footer />
    </div>
  )
}

export default Home;