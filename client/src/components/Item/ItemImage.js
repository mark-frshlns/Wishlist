import React from 'react';

const ItemImage = (props)=>{

        return (
          <div className={props.col}>
                <span />
                <a href={props.item.item_Url ? props.item_url: "#"} target="_blank" rel="noopener noreferrer">
                  <img className="item-image" src={props.item.item_imageUrl} alt={props.item.item_name} />
                </a>
          </div>
        )



}

export default ItemImage;