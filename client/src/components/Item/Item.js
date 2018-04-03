import React from 'react';
import './Item.css';
import ItemRequest from './ItemRequest';
import ItemImage from './ItemImage';
import ItemDetail from './ItemDetail';
import ItemContribute from './ItemConribute';
import ItemDonateBtn from './ItemDonateBtn';
import ItemQuantity from './ItemQuantity';
const Item = (props)=>{
  const componentClasses = ['items-container'];
  if(props.visible) {componentClasses.push('show')}
  return(
    <div>
      <div className={`row ${componentClasses.join(" ")}`} style={props.last ? {marginBottom:".5rem",borderBottom:"none"} : {}}>
                  
                  <ItemImage  item={props.item} col={`col-sm-2 col-md-2 item-box`} />
                  <ItemDetail  item={props.item} col={`col-sm-2 col-md-2 item-box`} />
                  <ItemRequest  item={props.item} col={`col-sm-2 col-md-2 item-box`} />
                  <ItemContribute item={props.item} col={`col-sm-2 col-md-2 item-box`} />
                  <ItemQuantity qChange={props.quantityChange} onClick={props.quantityClick}  item={props.item} col={`col-sm-2 col-md-2 item-box`} />
                  <ItemDonateBtn  Item_Submit={props.Item_Submit} item={props.item} col={`col-sm-2 col-md-2 item-box`} />
                  
        </div>
        
    </div>
  )
};


export default Item;