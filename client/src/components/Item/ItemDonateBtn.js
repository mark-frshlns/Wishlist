import React from 'react';


const ItemDonateBtn = (props)=>{

      return (
        <div className={props.col}>
              
        <span className="title">Quantity</span>
        <hr />
        <div className="input-group">
          <input className="form-control" type="number" name="amount" min="1" max={props.item.item_requested} id="amount_picker" />
        </div>
        <button className="btn btn-outline-dark btn-block" type="submit" id={props.item.id} value="Submit" />
       </div>
      )

}

export default ItemDonateBtn;