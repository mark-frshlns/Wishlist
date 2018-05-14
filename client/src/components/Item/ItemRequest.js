import React from 'react';

const ItemRequest = (props)=>{

      return(
        <div className={props.col}>
            
              <span className="title text-muted">Requested | Purchased</span>
              
              <span className="partial"><h5>{props.item.item_requested}</h5></span>
              <span className="partial"><h5>{props.item.item_fulfilled}</h5></span>
            
        </div>
      )


}

export default ItemRequest;