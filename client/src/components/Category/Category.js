import React,{Component} from 'react';
import './Category.css'
import Item from '../Item/Item';
export default class Category extends Component {

      constructor(props){
        super(props)
        this.state = {
          open:false,
          location: props.indicator,
          id:props.category.id,
          name:props.category.category_name.toUpperCase(),
          items:props.category.Items,
          icon: "fa fa-angle-down",

        }
      }
      componentWillMount(){
        if(this.state.location < 2){
          this.setState({
            open:true,
            icon: "fa fa-angle-up"
          })
        }
      }
      submitDonateRequest = (id)=>{
            const item_contributed = parseInt(document.getElementById("amount_picker"+id).value, 10);
            console.log({id:id,item_contributed:item_contributed})
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
                          icon: "fa fa-angle-up"});
        }
        else{
          this.setState({open:false,
                          icon: "fa fa-angle-down"});
        }
      }
      styles = function() {
        if(this.state.open){
            return ({background: "rgba(48,63,63,0.3)",
            zIndex: 99,
            textAlign: "center",
            color: "whitesmoke",
            boxShadow:"0 0rem 0.1rem rgba(48,63,63,0.3)"})
        }
        else{
          return ({background: "rgb(245,245,245,0.7)"})
        }
        
      }
      
      render(){
        return (
          <div>
              <div className="row categoryHeader">
                
                <div className="col-md-12 col-sm-12 mainCategory"  id={this.state.name} style={this.styles()}>
                    <span className="layer bg-light" style={{zIndex:-99,}} /> 
                    <a className="btn bg-dark clicks" type="button" name={this.state.name}   onClick={this.handleClick} style={{float:"left",
                                  fontWeight:"900",
                                  margin:"0.5%",
                                  display:"inline-block",
                                  lineHeight:"15px",
                                  verticalAlign:"middle",
                                  zIndex:"1100",
                                  
                                  }}><i className={this.state.icon} /></a>
                    <span style={{display:"inline-block",margin:"0.5%",fontWeight:"900",fontSize:"20px"}}>{this.state.name}</span>
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
