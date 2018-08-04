import React, {Component} from 'react';
import {default as ppButton} from '../../util/Paypal';
import {default as Form} from '../Form';
import './Checkout.css';
import CheckoutTable from './CheckoutTable';

export default class Checkout extends Component {
     
    
    constructor(props){
        super(props)
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    state = {
        alert:"",
        confirm:false,
    }
         
     componentDidMount(){
         if(this.props.total !== 0){
            
            ppButton.render(this.props.total, {data:this.props.basket});
         }
        
         
     }
     handleConfirm () {
        if(this.props.total === 0 || this.props.item === ""){
            this.setState({alert:"please choose an item and specify a total in order to continue"})
        }else{
            ppButton.render(this.props.total, {data:[{item_id:this.props.item,total_amount:this.props.total}]});
            this.setState({alert:"",confirm:true});
        }
        
     }
     
     render(){
         return (
             <div className="row">
                    <div className="col-md-10 col-sm-10 mainCheckOut">
                    {this.props.basket.length ? (
                        <table className="table checkouttable">
                                <thead>
                                    <tr className="table-title">
                                    <th className=" text-center text-white" colSpan="3"><h4>Basket</h4></th>
                                        
                                    </tr>
                                    <tr>
                                        
                                        <th scope="col" className="text-center">ITEM</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-center">TOTAL</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                            
                            {this.props.basket.map((item,i)=>{
                                return (
                                    
                                    <CheckoutTable item={item} name={item.item_name} total={item.total_amount} quantity={item.quantity} key={i} arrayIndex={i}/>
                                )
                            
                            })}
                            <tr className="text-center"><td colSpan="2"></td><td ><h6 className="text-muted" style={{'borderTop':'1px solid #484848',margin:0}}>Subtotal: $ {this.props.total}</h6></td></tr>
                            </tbody>

                        </table>                            
                       
                    ):(<Form data={this.props.data} confirm={this.state.confirm} alert={this.state.alert} total={this.props.total} handleInputChange={this.props.handleInput} handleTotalConfirm={this.handleConfirm}/>)}
                    <div>
                    <div className="row">
                    <div className="col-md-4 col-sm-4 secureMSG bg-light">
                        <div id="paypal-button" /> 
                        <div className="backtoWishlist">
                        <a href="/Wishlist">Back to Wishlist &larr;</a>
                        </div>
                    </div> 
                    </div>

                    </div>
                    
                    </div>
             </div>
         )
     }
}

