import React, {Component} from 'react';
import './Wishlist.css';
import {default as API} from '../../util/API';
import {default as Category} from '../../components/Category';
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
      
    }
    state = {
      data: [],
      basket: [],
      message:null,
      success:false,
      total:0
    }
    componentDidMount(){
        this.hoverEffect();
        
        API.getAll().then(res=>{
            
            this.setState({
              data:res.data
            })
            console.log(res.data);
        }).catch(err=>{
          console.log(err);
        })
    }
  
    updateState (e){
      e.preventDefault();
      API.getAll().then(res=>{
            
        this.setState({
          data:res.data
        })
        console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
    }
    addToBasket(Obj){
      console.log(Obj);
      let temp = [];
      
      temp = this.state.basket;
      if(Obj.quantity > 0){
        temp.push(Obj);
      }
      
      let total = this.getBasketTotal(temp);
      this.setState({basket:temp,total:total});
    }
    removeFromBasket(e){
        console.log(e.target.id);
        let temp = [];
        if(this.state.basket.length > 1){
          temp = this.state.basket.filter((item, i)=>i !== parseInt(e.target.id));
        }
        console.log(temp);
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
            <div className="container-fluid">
            <Header />
            <WishListNav />
            <div className="row wishlist_body">
              <Basket Basket={this.state.basket} data={this.state.data}  remove={this.removeFromBasket} total={this.state.total} setModalViewFalse={this.setModalViewFalse} setModalViewTrue={this.setModalViewTrue}/>
              
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
            <Footer />
            </div>
      )
    }
}