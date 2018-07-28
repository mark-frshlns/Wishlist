import React from 'react';
import './DashBoardSummary.css';
import Table from './Table';

const DashBoardSummary = (props)=>{
  

     
          return (
              
                <div>
                    {props.data.map((cat,i)=>{
                      return <Table cat={cat.category_name} items={cat.Items} key={i} Delete={props.Delete}/>
                    })}
                </div>
                
             
              
          )
      
}

export default DashBoardSummary;