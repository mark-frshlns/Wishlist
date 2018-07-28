import React from 'react';

const ItemContribute = (props)=>{

      return(
        <div className={props.col}>
            
              <span className="title text-muted">Price</span>
              
              <h5 style={{fontWeight:600, color:"#bb8045"}}>{`$${props.item.item_price}`}</h5>
            
        </div>
      )


}

export default ItemContribute;