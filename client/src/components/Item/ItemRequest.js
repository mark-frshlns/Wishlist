import React from 'react';

const ItemRequest = (props)=>{

      return(
        <div className={props.col}>
            
              <span className="title">Requested</span>
              <hr />
              <h5>{props.item.item_requested}</h5>
            
        </div>
      )


}

export default ItemRequest;