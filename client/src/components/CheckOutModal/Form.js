import React from 'react';


const Form = (props)=>{
  return(
    <div className="panel panel-primary col-md-6">
       <div className="panel-heading  text-white text-center"> Payment Details </div>
       <form className="panel-body">
             <div className="row">
                <div className="form-group">
                      <label htmlFor="cardNumber">Card Number:</label>
                      <input type="text" className="form-control" id="cardNumber" />
                      <span className="helper-text"></span>
                      <label htmlFor="cvv">CVV:</label>
                      <input type="text" className="form-control" id="cvv" />
                      <span className="helper-text"></span>
                      <label htmlFor="expDate">Expiration</label>
                      <input type="month" className="form-control" id="expDate" />
                      <span className="helper-text"></span>
                      <label htmlFor="zipCode">Zipcode:</label>
                      <input type="number" className="form-control" id="zipCode" />
                      <span className="helper-text"></span>
                </div>
             </div>                               
                                        
       </form>
       </div>
  )
}

export default Form;