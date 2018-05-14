import React from 'react';

const BasketItem = (props)=>{
      return (
      
        
            <li className=" list-group-item innerBasket">
            <h6>{props.name}</h6><h6>{props.quantity}</h6><h6>${props.total}</h6><button className="btn" onClick={()=>props.remove(props.item)}>&times;</button> 
                  
            </li>

      
      )
}

export default BasketItem;