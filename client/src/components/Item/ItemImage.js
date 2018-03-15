import React from 'react';

const ItemImage = (props)=>{

        return (
          <div className={props.col}>
                <span className="title"  />
                <img className="item-image" src={props.item.item_imageUrl} alt={props.item.item_name} />
          </div>
        )



}

export default ItemImage;