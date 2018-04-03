import React from 'react';

const ItemDetail = (props)=>{

        return (
          <div className={props.col}>
              
                <span className="title text-muted">{props.item.item_name.toUpperCase()}</span>
                
                <h4 style={{fontWeight:600, color:"#e90000"}} >{`$${props.item.item_price}`}</h4>
              
          </div>
        )



}

export default ItemDetail;