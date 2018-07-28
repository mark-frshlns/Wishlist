import React, {Component} from 'react';
import {default as API} from '../../util/API';
import {default as DashboardLogin} from '../../components/DashboardLogin';
import DashBoardMenu from '../../components/DashBoardMenu';
import './DashBoard.css';
import {Header} from '../../components/Header';
import {default as WishListNav} from '../../components/WishListNav';
import {default as Footer} from '../../components/Footer';
import DashBoardSummary from '../../components/DashBoardSummary/DashBoardSummary';
export default class DashBoard extends Component {
  state = {
      auth:false,
      Token:"",
      email:"",
      password:"",
      data:[],
      category_name:"",
      item_obj:{},
      dashBoardComp: "summary"
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
  handleInputChange = (event)=>{
    let target = event.target.name;
    let input = event.target.value.trim();
    this.setState({
      [target]:input
    })
  }
  categoryAdd = ()=>{
    API.addCategory({category_name:this.state.category_name})
      .then(res=>{

      })
      .catch(err=>{

      })
  }
  itemAdd = ()=>{
    API.addItem(this.state.item_obj).then(res=>{

    }).catch(err=>{
      
    })
  }
  deleteItem = (e)=>{
    let id = e.target.id;
    API.deleteItem(id).then(res=>{
        
        API.getAll().then(res=>{
          this.setState({data:res.data});
      }).catch(err=>{

      })
    })
  }
  currentComponent = ()=>{

    // switch (this.state.dashBoardComp){
    //   case "summary": return <DashBoardSummary />
    //   case "addItem": return <ItemForm />
    //   case "addCategory": return <CategoryForm />
    //   default: return <DashBoardSummary />
    // }

  }
  render(){
    return (
      <div className="container-fluid">
        <Header />
        <WishListNav />
        {this.state.auth ? <DashboardLogin />:
          (
          <div className="row">
              <DashBoardMenu />
              <div className="main col-md-10">
                    <DashBoardSummary data={this.state.data} Delete={this.deleteItem}/>
              </div>
          </div>
          )
        }
      <Footer />
      </div>
    )
  }
}