import React from 'react';


const ItemDonateBtn = (props)=>{
      // const max = props.item.item_requested - props.item.item_contributed;
      return (
        <div className={props.col}>
              
            <span className="title text-white" style={{opacity:0.2}}>Donate</span>
        
        
             <button className="btn btn-block" style={{background:"#B99664",color:"rgba(50,50,50,0.6)"}} type="submit" 
              onClick={()=>{props.Item_Submit({item_name:props.item.item_name,
                                                item_id:props.item.id,
                                                quantity:props.quantity,
                                                total_amount:props.quantity * props.item.item_price
                                          })}} disabled={props.invalidValue}>Add to Basket <i className="fa fa-thumbs-up"/></button>
       </div>
      )

}

export default ItemDonateBtn;