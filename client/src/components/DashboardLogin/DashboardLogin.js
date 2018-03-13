import React from 'react';
import './DashboardLogin.css';

const DashboardLogin = (props)=>{
        const styles={
          marginTop:"10%",
          padding:"16px",
          background: "url('/assets/Images/pattern_5_thumb.png') fixed center",
          textAlign:"center",
          color:"whitesmoke",
          boxShadow:"0.3rem 0.3rem 0.3rem rgba(0,0,0,0.3)",
          borderRadius:"5px",
          border:"1px solid  rgba(63, 32, 7, 0.747)",
          "zIndex": "1000"
          
        }
        return(
          <form className="col-md-6 col-sm-12 col-xs-8 loginForm" style={styles}>
             <div className="layer" style={{zIndex:-99}} />
              <div className="form-group">
                  <label htmlFor="inputUsername">Email</label>
                  <input type="email" name="email" onChange={props.handleInputChange} className="form-control" id="inputUsername" aria-describedby="emailHelp"
                  placeholder="Enter Email" />
              </div>
              <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input type="password" name="password" onChange={props.handleInputChange} className="form-control" id="inputPassword" placeholder="Enter Password" />
              </div>
              <button type="submit" className="btn btn-dark" onClick={props.handleLogin}>Login</button>
          </form>
        );

}

export default DashboardLogin;