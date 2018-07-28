import React from 'react';

const BasketItem = (props)=>{
      return (
      
        
            <li className=" list-group-item innerBasket" >
            <h6>{props.name}</h6><h6>{props.quantity}</h6><h6>${props.total}</h6><button className="btn" id={props.arrayIndex} onClick={props.remove}>&times;</button> 
                  
            </li>

      
      )
}

export default BasketItem;