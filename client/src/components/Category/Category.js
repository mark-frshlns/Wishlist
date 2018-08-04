import React,{Component} from 'react';
import './Category.css'
import Item from '../Item/Item';

// import {default as API} from '../../util/API';
export default class Category extends Component {

      constructor(props){
        super(props)
        this.state = {
          open:false,
          location: props.indicator,
          id:props.category.id,
          name:props.category.category_name.toUpperCase(),
          items:props.category.Items,
          icon: "fa fa-caret-right",
          invalidValue: false,
          selectedQuantity: 0
        }
      }
      componentWillMount(){
        
        if(this.state.location < 2){
          this.setState({
            open:true,
            icon: "fa fa-caret-down"
          })
        }
      }
      // submitDonateRequest = (id)=>{
      //       const item_contributed = parseInt(document.getElementById("amount_picker"+id).value, 10);
      //       console.log({id:id,item_contributed:item_contributed});
      //       API.contribute({id:id,item_contributed:item_contributed}).then(res=>{
      //               console.log(res);
      //       }).catch(err=>{

      //       });
      // }

      handleSelectedQuantityChange = (e)=>{
        
        if(e.target.value > parseInt(e.target.max,10)  || e.target.value < 0){
                this.setState({
                  invalidValue:true
                })
        }else{
          this.setState({selectedQuantity:e.target.value,invalidValue:false});
        }
        
        
      }
      handleAddSubtractQuantity = (id, opr, max)=>{
            const input = document.getElementById("amount_picker"+id);
            
            if(opr === "add"){
              if(input.value >= max){
                input.value=max;
                alert("max quantity reached !")
              }
              else if(input.value < 0){
                input.value=0;
                alert("min quantity reached !");
              }
              else{
                input.value++;
              }
            }
            else if(opr === "subt"){
              if(input.value-1 < 0){
                  input.value=0
                  alert("min quantity reached !")
              }else if(input.value > max){
                input.value=max;
                alert("max quantity reached !")
              }
              else{
                input.value--;
              }
            }
          this.setState({selectedQuantity:input.value,invalidValue:false});
      }
      handleClick = (e) => { 
        if(this.state.open===false){
          this.setState({open:true,
                          icon: "fa fa-caret-down"});
        }
        else{
          this.setState({open:false,
                          icon: "fa fa-caret-right"});
        }
      }
      styles = function() {
        if(this.state.open){
            return ({background: "#725637", color:"white"})
        }
        else{
          
          return ({background: "#B99664", color:"rgba(50,50,50,0.6)"})
        }
        
      }
      
      render(){
        return (
          <div className="row ">
              <div className="row categoryHeader">
                
                <div className={`col-md-12 col-sm-12 mainCategory`}  id={this.state.name}  onClick={this.handleClick} style={this.styles()}>
                    
                    <span style={{float:"left",
                                  
                                  margin:"0.5%",
                                  display:"inline-block",
                                 
                                  
                                  }}><i className={this.state.icon} /></span>
                    <span style={{display:"inline-block",margin:"0.5%"}}>{`${this.state.name.toLowerCase()} (${this.state.items.length})`}</span>
                </div>
                
              </div>
              {this.state.items.map((item, i, array)=>{
                return (<Item key={i} visible={this.state.open} 
                              item={item} col="col-sm-2 col-md-2" 
                              invalidValue = {this.state.invalidValue}
                              quantityChange={this.handleSelectedQuantityChange}
                              quantityClick={this.handleAddSubtractQuantity}
                              quantity={this.state.selectedQuantity}
                              Item_Submit={this.props.handleAddToBasket}
                              last={(i === (array.length-1)) ? true:false}/>
                              )
              })}
              
           </div>   
          )
      }
}
