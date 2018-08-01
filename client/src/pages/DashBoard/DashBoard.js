import React, {Component} from 'react';
import {default as API} from '../../util/API';
import {default as DashboardLogin} from '../../components/DashboardLogin';
import DashBoardMenu from '../../components/DashBoardMenu';
import './DashBoard.css';
import {Header} from '../../components/Header';
import {default as WishListNav} from '../../components/WishListNav';
import {default as Footer} from '../../components/Footer';
import DashBoardSummary from '../../components/DashBoardSummary/DashBoardSummary';
import CategoryForm from '../../components/DashBoardComponents/CategoryForm';
import ItemForm from '../../components/DashBoardComponents/ItemForm';
export default class DashBoard extends Component {
  state = {
      auth:false,
      Token:"",
      email:"",
      password:"",
      data:[],
      alert:"",
      category_name:"",
      item_obj:{},
      dashBoardComp: ""
  }
  componentDidMount (){
      API.getAll().then(res=>{
          this.setState({data:res.data});
      }).catch(err=>{

      })
  }
  login = (event)=>{
    event.preventDefault();
    const username = this.state.email;
    const password = this.state.password;
    API.login(username, password).then(res=>{

    }).catch(err=>{
        console.log(err);
        alert("User Not Found contact admin!")
    })
  }
  setView = (e)=>{
    this.setState({dashBoardComp:e.target.name});
  }
  handleInputChange = (event)=>{
    let target = event.target.name;
    let input = event.target.value.trim();
    this.setState({
      [target]:input
    })
  }
  categoryAdd = (event)=>{
    event.preventDefault();
    console.log("in function");
    let categories = this.state.data.map(cat=>{return cat.category_name.toLowerCase()});
    console.log(categories);
    if(categories.indexOf(this.state.category_name.toLowerCase()) > -1){
      this.setState({alert:"Category Already Exists"});
    }else{
      API.addCategory({category_name:this.state.category_name})
      .then(res=>{
                API.getAll().then(res=>{
                  this.setState({alert:"Successfully Created",data:res.data})
              }).catch(err=>{

              })
          
      })
      .catch(err=>{
          this.setState({alert:"Unable to Create"})
      })
    }
    
  }
  
  itemAdd = ()=>{
    API.addItem(this.state.item_obj).then(res=>{

    }).catch(err=>{
      
    })
  }
  deleteItem = (e)=>{
    let id = e.target.id;
    console.log(e.target.name);
    if(e.target.name === "category"){
      API.deleteCategory(e.target.id).then(res=>{
        API.getAll().then(res=>{
          this.setState({data:res.data});
      }).catch(err=>{

      })
      })
    }
    else{
      API.deleteItem(id).then(res=>{
        
        API.getAll().then(res=>{
          this.setState({data:res.data});
      }).catch(err=>{

      })
    })
    }
   
  }
  handleItemForm = (e)=>{
          let dummy = this.state.item_obj;
          dummy[e.target.name] = e.target.value;
          this.setState({item_obj:dummy});
  }
  handleItemSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.item_obj);
    
    
        let form = document.querySelector('form');
        let data = new FormData(form);
        
        console.log(typeof data);
        API.addItem(data).then(res=>{
          console.log(res);
      }).catch(err=>{
        console.log(err);
      })
  
   
  }
  currentComponent = ()=>{

    switch (this.state.dashBoardComp){
      case "summary": return <DashBoardSummary data={this.state.data} Delete={this.deleteItem} />
      case "addItem": return <ItemForm data={this.state.data} handleInputChange={this.handleItemForm} handleSubmit={this.handleItemSubmit}/>
      case "addCategory": return <CategoryForm alert={this.state.alert} handleInputChange={this.handleInputChange} handleAdd={this.categoryAdd}/>
      default: return <DashBoardSummary data={this.state.data} Delete={this.deleteItem} />
    }

  }
  render(){
    return (
      <div className="container-fluid">
        <Header />
        <WishListNav />
        {this.state.auth ? <DashboardLogin />:
          (
          <div className="row">
              <DashBoardMenu setView={this.setView} current={this.state.dashBoardComp}/>
              <div className="main col-md-10">
                   {this.currentComponent()}
              </div>
          </div>
          )
        }
      <Footer />
      </div>
    )
  }
}