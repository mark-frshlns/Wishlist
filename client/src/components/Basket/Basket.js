import React from 'react';
import { NavLink} from 'react-router-dom';
import {default as BasketItem} from './BasketItem';
import './Basket.css';
const Basket = (props)=>{
 
  return (
    <ul className="nav basket">
    <li className="nav-item" id="church_basket">
        <NavLink className="nav-link" to="#"><i className="fa fa-box" id="basketIcon" /><br/><h6>Basket</h6></NavLink>
        <div className="basketCart card">
        <div className="card-body">
            <h6 className="card-title">Donation Basket</h6>
            <ul className="list-group list-group-flush">
            {props.Basket.length ?  props.Basket.map((item,i)=>{
              return <BasketItem  item={item} name={item.item_name} total={item.total_amount} remove={props.remove} quantity={item.item_purchase_amount} key={i}/>
            }): (<h6 style={{textAlign:"center"}}>Empty!</h6>)}
            </ul>
            {props.total === 0 ? null:
              (<div className="card-text list-group-item">
                <h6><b>SubTotal</b>: ${props.total}</h6>
              </div>)}
            
        </div>
        </div>
    </li>
   
    </ul>
  )


}

export default Basket;