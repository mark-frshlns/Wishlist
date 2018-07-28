import React from 'react';
import './Footer.css';


const Footer = (props)=>{

        return (
          <div className="footerContainer ">
              <div className="footer col-md-12 col-sm-12 col-xs-12 ">
                  <span className="copyright-container">
                    <p align="center">Developed With <span id="heart">&#10084;</span> <a href="https://www.linkedin.com/in/m-soliman/" target="_blank" rel="noreferrer noopener"><i>&lt; Mark S /&gt;</i></a> </p>
                    
                  </span>
                  <p>&copy; 2018</p>
              </div>
          </div>
        )

}

export default Footer;