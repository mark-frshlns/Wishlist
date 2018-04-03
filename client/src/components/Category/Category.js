import React,{Component} from 'react';
import './Category.css'
import Item from '../Item/Item';
import {default as API} from '../../util/API';
export default class Category extends Component {

      constructor(props){
        super(props)
        this.state = {
          open:false,
          location: props.indicator,
          id:props.category.id,
          name:props.category.category_name.toUpperCase(),
          items:props.category.Items,
          icon: "fa fa-caret-down",

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
      submitDonateRequest = (id)=>{
            const item_contributed = parseInt(document.getElementById("amount_picker"+id).value, 10);
            console.log({id:id,item_contributed:item_contributed});
            API.contribute({id:id,item_contributed:item_contributed}).then(res=>{
                    console.log(res);
            }).catch(err=>{

            });
      }

      handleSelectedQuantityChange = (e)=>{
        // this.setState({selectedQuantity:e.target.value});
        const dummy = {...this.state.selectedQuantity};
        dummy.itemId = e.target.id.split('r')[1];
        dummy.amount = e.target.value;
        console.log(dummy);
        this.setState({selectedQuantity:dummy});
      }
      handleAddSubtractQuantity = (id, opr, max)=>{
            const input = document.getElementById("amount_picker"+id);
            
            if(opr === "add"){
              if(input.value >= max){
                input.value=max;
              }else{
                input.value++;
              }
            }
            else if(opr === "subt"){
              if(input.value-1 < 0){
                  input.value=0
              }else{
                input.value--;
              }
            }
          
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
            return ({background: "rgba(50,50,50,0.5)", color:"white"})
        }
        else{
          
          return ({background: "rgba(50,50,50,0.3)", color:"rgba(50,50,50,0.6)"})
        }
        
      }
      
      render(){
        return (
          <div>
              <div className="row categoryHeader">
                
                <div className={`col-md-12 col-sm-12 mainCategory`}  id={this.state.name}  onClick={this.handleClick} style={this.styles()}>
                    
                    <span style={{float:"left",
                                  
                                  margin:"0.5%",
                                  display:"inline-block",
                                 
                                  
                                  }}><i className={this.state.icon} /></span>
                    <span style={{display:"inline-block",margin:"0.5%"}}>{`${this.state.name.toLowerCase()} (${this.state.items.length})`}</span>
                </div>
                <div className="col-md-1 col-sm-1" />
              </div>
              {this.state.items.map((item, i, array)=>{
                return (<Item key={i} visible={this.state.open} 
                              item={item} col="col-sm-2 col-md-2" 
                              quantityChange={this.handleSelectedQuantityChange}
                              quantityClick={this.handleAddSubtractQuantity}
                              Item_Submit={this.submitDonateRequest}
                              last={(i === (array.length-1)) ? true:false}/>
                              )
              })}
              
           </div>   
          )
      }
}
