import React from 'react';
import './DashBoardSummary.css';
import Table from './Table';

const DashBoardSummary = (props)=>{
  

     
          return (
              
                <div>
                    {props.data.map((cat,i)=>{
                      return <Table cat={cat.category_name} catId={cat.id} items={cat.Items} key={i} Delete={props.Delete} handleDoubleClick={props.handleDoubleClick} inputCell={props.inputCell} handleInputUpdate={props.handleInputUpdate}/>
                    })}
                </div>
                
             
              
          )
      
}

export default DashBoardSummary;