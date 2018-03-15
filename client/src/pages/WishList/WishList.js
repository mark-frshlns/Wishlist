import React, {Component} from 'react';
import {default as API} from '../../util/API';
import {default as Category} from '../../components/Category';

export default class Wishlist extends Component {
    state = {
      data: []
    }
    componentDidMount(){
        API.getAll().then(res=>{
            
            this.setState({
              data:res.data
            })
            console.log(res.data);
        }).catch(err=>{
          console.log(err);
        })
    }
    render(){
      return(
        
            <div>
            {this.state.data.length > 0 ? (
                this.state.data.map((cat,i)=>{
                  return (<Category category={cat} key={i} indicator={i} />)
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