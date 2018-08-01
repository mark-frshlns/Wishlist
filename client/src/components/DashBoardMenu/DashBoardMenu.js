import React from 'react';
import './DashBoardMenu.css';


const DashBoardMenu = (props)=>{


      return(
        <div className="main-menu col-sm-2 col-md-2">
              
              <ul className="menu-items">
                  <li className={`action ${props.current === "summary" ? "active":""}`}><button className="btn btn-block" name="summary" onClick={props.setView} type="submit">Summary</button></li>
                  <li className={`action ${props.current === "addCategory" ? "active":""}`}><button className="btn btn-block" name="addCategory" onClick={props.setView} type="submit">Add Category</button></li>
                  <li className={`action ${props.current === "addItem" ? "active":""}`}><button className="btn btn-block" name="addItem" onClick={props.setView} type="submit">Add Item</button></li>
               
              </ul>
        </div>
        
      )


}

export default DashBoardMenu;