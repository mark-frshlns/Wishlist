import React from 'react';


const ItemQuantity = (props)=>{
      let max = props.item.item_requested - props.item.item_contributed;
      if(max < 0){
        max =0 ;
      }
      return (
        <div className={props.col}>
              
        <span className="title text-muted">Quantity</span>
        
        <div className="input-group input-group-small quantity">
          <button  type="submit" className="btn bg-danger text-center" id={`subt`} onClick={()=>{props.onClick(props.item.id, "subt", max)}}><span className="fa fa-minus text-white"/></button>
          <input type="number" name="amount" min="1" max={max} onKeyDown={()=>{return false}} id={`amount_picker${props.item.id}`} onChange={props.qChange}  />
          <button  type="submit" className="btn bg-success text-center"  id={`add`} onClick={()=>{props.onClick(props.item.id, "add", max)}}><span className="fa fa-plus text-white" /></button>        
        </div>
        
       </div>
      )

}

export default ItemQuantity;