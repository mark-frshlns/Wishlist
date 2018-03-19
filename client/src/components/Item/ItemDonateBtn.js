import React from 'react';


const ItemDonateBtn = (props)=>{
      const max = props.item.item_requested - props.item.item_contributed;
      return (
        <div className={props.col}>
              
        <span className="title text-muted"><i>Donate</i></span>
        <hr />
        
        <button className="btn btn-block bg-dark text-white" type="submit" onClick={()=>{props.Item_Submit(props.item.id)}}>DONATE <i className="fa fa-thank-you"/></button>
       </div>
      )

}

export default ItemDonateBtn;