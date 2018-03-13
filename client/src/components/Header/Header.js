import React from 'react';
import './Header.css';

export const Header = ()=>{
  return(
    <div className="row">
        <div className="header col-md-12 col-sm-12 col-xs-12">
        <div className="layer"></div>
        <div className="row">
            <div className='col-md-4 col-sm-0 col-xs-0'></div>
            <a className='col-xs-8' href="http://stanthonyorlando.org" >
                <img src="assets/Images/stanthonylogo.png" alt="St Anthony Orthodox Church"/>
            </a>
        </div>
        </div>
    </div>
  )
}