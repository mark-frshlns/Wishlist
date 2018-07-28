import React from 'react';

const ItemDetail = (props)=>{

        return (
          <div className={props.col}>
              
                <span className="title text-muted">{props.item.item_name.toUpperCase()}</span>
                <div className="row item-box-content">
                <p className="text-dark">{`${props.item.item_description}`}</p>
                </div>
          </div>
        )



}

export default ItemDetail;