import React, {Component} from 'react';
import {Header} from '../../components/Header';
import {default as API} from '../../util/USERAPI';
import {default as DashboardLogin} from '../../components/DashboardLogin';

export default class DashBoard extends Component {
  state = {
      auth:false,
      Token:"",
      email:"",
      password:""
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
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.state.auth ? <div />:
          (
          <div className="row">
              <div className="col-md-3 col-sm-0"/>
              <DashboardLogin handleInputChange={this.handleInputChange} handleLogin={this.login} />
          </div>
          )
        }
        
      </div>
    )
  }
}