import React from 'react';
import './Item.css';
import ItemRequest from './ItemRequest';
import ItemImage from './ItemImage';
import ItemDetail from './ItemDetail';
import ItemContribute from './ItemConribute';
import ItemDonateBtn from './ItemDonateBtn';
const Item = (props)=>{
  const componentClasses = ['items-container'];
  if(props.visible) {componentClasses.push('show')}
  return(
    <div className="row ">
                <div className="col-md-1 col-sm-1" />
                <ItemImage  item={props.item} col={`col-sm-2 col-md-2 ${componentClasses.join(" ")} `} />
                <ItemDetail  item={props.item} col={`col-sm-2 col-md-2 ${componentClasses.join(" ")} `} />
                <ItemRequest  item={props.item} col={`col-sm-2 col-md-2 ${componentClasses.join(" ")} `} />
                <ItemContribute item={props.item} col={`col-sm-2 col-md-2 ${componentClasses.join(" ")} `} />
                <ItemDonateBtn item={props.item} col={`col-sm-2 col-md-2 ${componentClasses.join(" ")} `} />
    </div>
  )
};


export default Item;