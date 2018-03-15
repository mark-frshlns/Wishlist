import React from 'react';

const ItemDetail = (props)=>{

        return (
          <div className={props.col}>
              
                <span className="title text-muted"><i>{props.item.item_name.toUpperCase()}</i></span>
                <hr />
                <h3 style={{fontWeight:900}} className="text-danger">{`$${props.item.item_price}`}</h3>
              
          </div>
        )



}

export default ItemDetail;