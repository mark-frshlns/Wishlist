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
          icon: "fa fa-plus",
          
        }
      }
      componentWillMount(){
        if(this.state.location < 2){
          this.setState({
            open:true,
            icon: "fa fa-minus"
          })
        }
      }
      
      handleClick = (e) => { 
        
        
        

        if(this.state.open===false){
          
        
          this.setState({open:true,
                          icon: "fa fa-minus"})
        }
        else{

          
          
          this.setState({open:false,
                          icon: "fa fa-plus"})
        }

      }
      styles = {
        background: "url('/assets/Images/pattern_5_thumb.png') fixed center",
        zIndex: 99,
        textAlign: "center",
        color: "whitesmoke",
        marginTop:"16px",
        boxShadow:"0 0 0.3rem grey",
        
      }
      
      render(){
        return (
          <div>
              <div className="row categoryHeader">
                <div className="col-md-1 col-sm-1" />
                <div className="col-md-10 col-sm-10"  id={this.state.name} style={this.styles}>
                    <span className="layer" style={{zIndex:-99,background:"rgba(0,0,0,0.8)"}} /> 
                    <a className="btn btn-secondary clicks" type="button" name={this.state.name}   onClick={this.handleClick} style={{float:"left",
                                  fontWeight:"900",
                                  margin:"0.5%",
                                  display:"inline-block",
                                  lineHeight:"15px",
                                  verticalAlign:"middle",
                                  zIndex:"1100"
                                  }}><i className={this.state.icon} /></a>
                    <span style={{display:"inline-block",margin:"0.5%",fontWeight:"900",fontSize:"20px"}}>{this.state.name}</span>
                </div>
                <div className="col-md-1 col-sm-1" />
              </div>
              {this.state.items.map((item, i)=>{
                return (<Item key={i} visible={this.state.open} item={item} col="col-sm-2 col-md-2" innerContainer="innerContainer"/>)
              })}
              
           </div>   
          )
      }
}
