import React from 'react';

const ItemContribute = (props)=>{

      return(
        <div className={props.col}>
            
              <span className="title">Donated</span>
              <hr />
              <h5>{props.item.item_contributed}</h5>
            
        </div>
      )


}

export default ItemContribute;