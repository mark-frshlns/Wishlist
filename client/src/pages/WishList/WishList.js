import React, {Component} from 'react';
import './Wishlist.css';
import {default as API} from '../../util/API';
import {default as Category} from '../../components/Category';
import {default as Checkout} from '../../components/Checkout/Checkout';
import Basket from '../../components/Basket/Basket';
import {Header} from '../../components/Header';
import {default as WishListNav} from '../../components/WishListNav';
import {default as Footer} from '../../components/Footer';

export default class Wishlist extends Component {
    constructor(props){
      super(props)
      this.updateState = this.updateState.bind(this);
      this.removeFromBasket = this.removeFromBasket.bind(this);
      this.addToBasket = this.addToBasket.bind(this);
      this.checkOut = this.checkOut.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
    state = {
      data: [],
      basket: [],
      message:null,
      success:false,
      item:"",
      
      total:0,
      checkout:false
    }
    componentDidMount(){
        this.hoverEffect();
        
        API.getAll().then(res=>{
            
            this.setState({
              data:res.data
            })
            
        }).catch(err=>{
                  })
    }
    checkOut (){
      this.setState({checkout:true});
    }
    
    handleInput (e){
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]:value});
    }
    updateState (e){
      e.preventDefault();
      API.getAll().then(res=>{
            
        this.setState({
          data:res.data
        })
        
    }).catch(err=>{
          })
    }
    addToBasket(Obj){
            let temp = [];
      
      temp = this.state.basket;
      if(Obj.quantity > 0){
        temp.push(Obj);
      }
      
      let total = this.getBasketTotal(temp);
      this.setState({basket:temp,total:total});
    }
    removeFromBasket(e){
        
        let temp = [];
        if(this.state.basket.length > 1){
          temp = this.state.basket.filter((item, i)=>i !== parseInt(e.target.id,10));
        }
        
        let total = this.getBasketTotal(temp);
        this.setState({basket:temp,total:total});
    }
    getBasketTotal(arr){
      let total = 0;
      arr.forEach(element => {
        total += element.total_amount;
      });
      return total;
    }
    hoverEffect(){
      
      let basket = document.getElementById("church_basket");
      let basketIcon = document.getElementById('basketIcon');
      
      basket.addEventListener('mouseout' , function(){
        basketIcon.className = "fa fa-box";
      })
      basket.addEventListener('mouseover', function(){
        basketIcon.className = "fa fa-box-open";
      })
    }
    render(){
      return(
            <div className="container-fluid ">
            <Header />
            <WishListNav />
            <div className="row  ">
                  <div className="wishlist_body">
                      {this.state.checkout ? (<Checkout basket={this.state.basket} total={this.state.total} remove={this.removeFromBasket} data={this.state.data} handleInput={this.handleInput} item={this.state.item}/>):(
                        <div>
                            <Basket Basket={this.state.basket} data={this.state.data}  remove={this.removeFromBasket} total={this.state.total} cout={this.checkOut}/>
                        
                              {this.state.data.length > 0 ? (
                                  this.state.data.map((cat,i)=>{
                                    return (<Category category={cat} key={i} indicator={i} handleAddToBasket={this.addToBasket} remove={this.removeFromBasket} total={this.state.total} />);
                                  })
                              )
                              :
                              (
                                null
                              )}
                         </div>
                      )}
                  
                </div>
            </div>
            <Footer />
            </div>
      )
    }
}