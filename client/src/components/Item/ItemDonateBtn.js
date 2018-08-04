import React from 'react';


const ItemDonateBtn = (props)=>{
      const payment_percentage = ((props.item.payment_Percentage * 100) > 100);
      return (
        <div className={props.col}>
              
            <span className="title text-white" style={{opacity:0.2}}>Donate</span>
        
        
             <button className="btn btn-block addtoBasket" style={{color:"rgba(50,50,50,0.6)"}} type="submit" 
              onClick={()=>{props.Item_Submit({item_name:props.item.item_name,
                                                item_id:props.item.id,
                                                quantity:props.quantity,
                                                total_amount:props.quantity * props.item.item_price
                                          })}} disabled={props.invalidValue || payment_percentage}>Add to Basket <i className="fa fa-thumbs-up"/></button>
       </div>
      )

}

export default ItemDonateBtn;