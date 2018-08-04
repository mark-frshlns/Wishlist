import React from 'react';

const CheckoutTable = (props)=>{
    return (
      
         
           
              <tr>
                
                <td className="text-center">{props.name}</td>
                <td className="text-center">{props.quantity}</td>
                <td className="text-center">$ {props.total}</td>
              </tr>
    
    )
}

export default CheckoutTable;