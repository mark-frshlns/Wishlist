import React, {Component} from 'react';
import {default as API} from '../../util/API';
import {default as Category} from '../../components/Category';
import Basket from '../../components/Basket/Basket';

export default class Wishlist extends Component {
    state = {
      data: [],
      basket: [],
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
    addToBasket(Obj){
      console.log(Obj);
      let temp = [];
      
      temp = this.state.basket;
      temp.push(Obj);
      let total = this.getBasketTotal(temp);
      this.setState({basket:temp,total:total});
    }
    removeFromBasket(Obj){
        let temp = [];
        temp = this.state.basket.filter(item=>item.item_id !== Obj.item_id)
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
      console.log(basket);
      basket.addEventListener('mouseout' , function(){
        basketIcon.className = "fa fa-box";
      })
      basket.addEventListener('mouseover', function(){
        basketIcon.className = "fa fa-box-open";
      })
    }
    render(){
      return(
        
            <div className="row">
            <Basket Basket={this.state.basket} remove={this.removeFromBasket.bind(this)} total={this.state.total} />
            
            {this.state.data.length > 0 ? (
                this.state.data.map((cat,i)=>{
                  return (<Category category={cat} key={i} indicator={i} handleAddToBasket={this.addToBasket.bind(this)} remove={this.removeFromBasket.bind(this)} total={this.state.total} />);
                })
            )
            :
            (
              null
            )}
            </div>
      )
    }
}