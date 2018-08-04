import React from 'react';


const ItemQuantity = (props)=>{
      let max = props.item.item_requested;
      const payment_percentage = ((props.item.payment_Percentage * 100) > 100);
      return (
        <div className={props.col}>
              
        <span className="title text-muted">Quantity</span>
        
        <div className="input-group input-group-small quantity">
          <button  type="submit" className="btn text-center" id={`subt`} onClick={()=>{props.onClick(props.item.id, "subt", max)}} disabled={payment_percentage}><span className="fa fa-minus "/></button>
          <input className={props.invalidValue ? "redFlag" : ""} type="number" name="amount" min="1" max={max} id={`amount_picker${props.item.id}`} onChange={props.qChange}  />
          <button  type="submit" className="btn  text-center"  id={`add`} onClick={()=>{props.onClick(props.item.id, "add", max)}} disabled={payment_percentage}><span className="fa fa-plus " /></button>        
        </div>
        
       </div>
      )

}

export default ItemQuantity;