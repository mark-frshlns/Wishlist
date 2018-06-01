import React, {Component} from 'react';
import {default as BTree} from '../../util/BTree/main';
import './CheckOutModal.css';
import BasketItem from '../Basket/BasketItem';
import Form from './Form';
import AnyAmountForm from './AnyAmountForm';

class CheckOutModal extends Component{
        
       
           
        
        state = {
            anyamount: this.props.anyamount,
            Basket: this.props.Basket,
            categoryChosen: ""
        }
        componentDidMount(){
                BTree.establish().then(clientInstance=>{
                        console.log(clientInstance);
                }).catch(err=>{
                    
                })
        }
        setCategoryAnyAmount = (e)=>{
                
                this.setState({categoryChosen:e.target.value});
        }
        render()
        {
        return(
          <div className="modal fade" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    
                          <div className="modal-header">
                              <h5 className="modal-title" id="checkoutModalLabel">DONATION CHECKOUT</h5>
                              
                          </div>
                          <div className="modal-body">
                              <div className="modalForm row justify-content-start">
                              
                              {this.props.anyamount ? (<AnyAmountForm data={this.props.data} cat={this.state.categoryChosen} handleCatPick={this.setCategoryAnyAmount}/>):
                              <ul className="list-group list-group-flush">{this.state.Basket.map((item,i)=>{
                                return <BasketItem  item={item} name={item.item_name} total={item.total_amount} remove={this.props.remove} quantity={item.item_purchase_amount} key={i}/>
                              })}<li className=" list-group-item innerBasket"> <h6><b>SubTotal</b>: ${this.props.total}</h6></li></ul>}
                              
                                    <div className="pipe" />
                                    
                                    <Form />
                              </div>
                              
                          </div>
                          <div className="modal-footer">
                                  <button type="button" className="btn " data-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn ">Donate</button>
                          </div>
                    </div>
                </div>
          </div>
        )

    }


}

export default CheckOutModal;