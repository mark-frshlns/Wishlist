import React from 'react';

const ItemDetail = (props)=>{

        return (
          <div className={props.col}>
              
                <span className="title">Item</span>
                <hr />
                <h5>{props.item.item_name}</h5>
                <p><i>{`Price: $${props.item.item_price}`}</i></p>
              
          </div>
        )



}

export default ItemDetail;