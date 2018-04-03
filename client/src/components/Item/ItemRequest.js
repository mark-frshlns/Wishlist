import React from 'react';

const ItemRequest = (props)=>{

      return(
        <div className={props.col}>
            
              <span className="title text-muted">Requested</span>
              
              <h5>{props.item.item_requested}</h5>
            
        </div>
      )


}

export default ItemRequest;