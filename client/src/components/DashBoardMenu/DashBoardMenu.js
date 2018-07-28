import React from 'react';
import './DashBoardMenu.css';


const DashBoardMenu = (props)=>{


      return(
        <div className="main-menu col-sm-2 col-md-2">
              
              <ul className="menu-items">
                  <li className="action"><button className="btn btn-block">Summary</button></li>
                  <li className="action"><button className="btn btn-block">Add Category</button></li>
                  <li className="action"><button className="btn btn-block">Add Item</button></li>
                  <li className="action"><button className="btn btn-block">Manage Data</button></li>
              </ul>
        </div>
        
      )


}

export default DashBoardMenu;