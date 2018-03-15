import React from 'react';


const ItemDonateBtn = (props)=>{
      const max = props.item.item_requested - props.item.item_contributed;
      return (
        <div className={props.col}>
              
        <span className="title text-muted"><i>Quantity</i></span>
        <hr />
        <div className="input-group input-group-small quantity">
          <button  type="submit" className="btn bg-dark" id={`subt`} onClick={()=>{props.onClick(props.item.id, "subt", max)}}><span className="fa fa-minus text-white text-justify"/></button>
          <input type="number" name="amount" min="1" max={max} onKeyDown={()=>{return false}} id={`amount_picker${props.item.id}`} onChange={props.qChange}  />
          <button  type="submit" className="btn bg-dark"  id={`add`} onClick={()=>{props.onClick(props.item.id, "add", max)}}><span className="fa fa-plus text-white text-justify" /></button>        
        </div>
        <button className="btn btn-block bg-dark text-white" type="submit" onClick={()=>{props.Item_Submit(props.item.id)}}>DONATE <i className="fa fa-thank-you"/></button>
       </div>
      )

}

export default ItemDonateBtn;