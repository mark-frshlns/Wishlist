import React, {Component} from 'react';
import {default as API} from '../../util/API';
import {default as USERAPI} from '../../util/USERAPI';
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
    USERAPI.login(username, password).then(res=>{
        
        if(res.data.msg){
          this.setState({auth:true});
        }
    }).catch(err=>{
        
        alert("User Not Found contact admin!")
    })
  }
  logout = ()=>{
      USERAPI.logout().then(res=>{
            this.setState({auth:res.data.msg})
      }).catch(err=>{
        alert("something went wrong reload page");
      });
  }
  setView = (e)=>{
    this.setState({dashBoardComp:e.target.name,alert:""});
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
    }else if(this.state.category_name.search(/[^a-zA-Z][\s]/) > -1){
        this.setState({alert:'category can only have letters'});
    }else{
      API.addCategory({category_name:this.state.category_name})
      .then(res=>{
                API.getAll().then(res=>{
                  this.setState({alert:"Successfully Created",data:res.data})
              }).catch(err=>{
                alert("please login again");
                this.setState({auth:false});
              })
          
      })
      .catch(err=>{
        alert('please login again');
          this.setState({alert:"Unable to Create",auth:false})
      })
    }
    
  }
  
  deleteItem = (e)=>{
    let id = e.target.id;
    
    if(e.target.name === "category"){
      API.deleteCategory(e.target.id).then(res=>{
        API.getAll().then(res=>{
          this.setState({data:res.data});
      }).catch(err=>{
          alert("please login again");
          this.setState({auth:false});
      })
      })
    }
    else{
      API.deleteItem(id).then(res=>{
        
        API.getAll().then(res=>{
          this.setState({data:res.data});
      }).catch(err=>{
        alert("please login again");
        this.setState({auth:false});
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
    
    if(Object.keys(this.state.item_obj).length < 6){
            this.setState({alert:"please fill missing fields"});
    }
    else if((this.state.item_obj.item_name.search(/[^a-zA-Z][\s][^0-9]/g) > -1)){
      this.setState({alert:"item contain only English letters, spaces and numbers\n"})
    }
      else { 
        let form = document.querySelector('form');
        
        let data = new FormData(form);
        
        
        API.addItem(data).then(res=>{
          
          API.getAll().then(newRes=>{
            this.setState({alert:"success",data:newRes.data});
          })
      }).catch(err=>{
        this.setState({alert:"file too large"});
      })}
  
   
  }
  currentComponent = ()=>{

    switch (this.state.dashBoardComp){
      case "summary": return <DashBoardSummary data={this.state.data} Delete={this.deleteItem} />
      case "addItem": return <ItemForm data={this.state.data} alert={this.state.alert} handleInputChange={this.handleItemForm} handleSubmit={this.handleItemSubmit}/>
      case "addCategory": return <CategoryForm alert={this.state.alert} handleInputChange={this.handleInputChange} handleAdd={this.categoryAdd}/>
      default: return <DashBoardSummary data={this.state.data} Delete={this.deleteItem} />
    }

  }
  render(){
    return (
      <div className="container-fluid">
        <Header />
        <WishListNav />
        {!this.state.auth ? <DashboardLogin handleLogin={this.login} handleInputChange={this.handleInputChange}/>:
          (
          <div className="row">
              <DashBoardMenu setView={this.setView} current={this.state.dashBoardComp} handleLogout={this.logout}/>
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