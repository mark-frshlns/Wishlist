import React from 'react';



const Form = (props)=>{
  return(
    <div className="panel panel-primary col-md-8">
       <div className="panel-heading  text-white text-center"> Payment Details </div>
       <div className="panel-body">
             <div className="row">
                <div className="form-group col-sm-12">
                      <label htmlFor="itemSelect">Choose Category/Item</label>
                      <select className="form-control" name="item" onChange={props.handleInputChange} id="itemSelect" disabled={props.confirm ? true:false}>
                            <option value="">Pick an item...</option>
                            {props.data.map((cat,i)=>{
                                  return <optgroup label={cat.category_name} key={i}>
                                                {cat.Items.map((item,i)=>{
                                                      return <option value={item.id} key={i}>{item.item_name}</option>
                                                })}
                                         </optgroup>
                            })}
                      </select>
                      
                  </div>
                  <div className="form-group col-sm-12">
                      <label htmlFor="getTotal">Donation Amount</label>
                      <input type="number" className="form-control" name="total" onChange={props.handleInputChange} disabled={props.confirm ? true:false} />        
                      <span className="helper-text text-danger" id="cNum">{props.alert}</span>
                      <button className="btn btn-success btn-block" onClick={props.handleTotalConfirm} type="button" id="confirm" disabled={props.confirm ? true:false}>Confirm</button>        
                  </div>
                  
                </div>
             </div>                               
                                        
       </div>
      
  )
}

export default Form;