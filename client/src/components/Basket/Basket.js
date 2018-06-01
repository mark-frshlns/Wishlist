import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import {default as BasketItem} from './BasketItem';
import './Basket.css';
import CheckOutModal from '../CheckOutModal';
class Basket extends Component{
 
  
  state = {
    
    anyamount: false
  }
  setModalViewTrue(){
    this.setState({anyamount:true})
  }
  setModalViewFalse(){
    this.setState({anyamount:false})
  }
 render()
 {
  return (
    <div>
    <ul className="nav basket">
    <li className="nav-item" id="church_basket">
        <NavLink className="nav-link" to="#"><i className="fa fa-box" id="basketIcon" /><br/><h6>Basket</h6></NavLink>
        <div className="basketCart card">
        <div className="card-body">
        
           <ul className="list-group">
                     <li className="nav-item">
                             <button type="button" className="btn btn-block" data-toggle="modal" data-target="#checkoutModal" onClick={this.setModalViewTrue.bind(this)}>Pay Any Amount</button>
                      </li>
          </ul>
              
           
            <ul className="list-group list-group-flush">
            {this.props.Basket.length ?  this.props.Basket.map((item,i)=>{
              return <BasketItem  item={item} name={item.item_name} total={item.total_amount} remove={this.props.remove} quantity={item.item_purchase_amount} key={i}/>
            }): (<h6 style={{textAlign:"center"}}>Empty!</h6>)}
            </ul>
            {this.props.total === 0 ? null:
              (<div className="card-text list-group-item">
                <h6><b>SubTotal</b>: ${this.props.total}</h6>
                <button className="btn btn-success" type="button" data-toggle="modal" data-target="#checkoutModal" onClick={this.setModalViewFalse.bind(this)}>CheckOut</button>
              </div>)}
            
        </div>
        </div>
    </li>
   
    </ul>
    <CheckOutModal  anyamount ={this.state.anyamount} total={this.props.total} Basket={this.props.Basket} data={this.props.data} remove={this.props.remove}/>
    </div>
  )
 }

}

export default Basket;