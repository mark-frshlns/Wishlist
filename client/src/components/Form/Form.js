import React from 'react';



const Form = (props)=>{
  return(
    <div className="panel panel-primary col-md-8">
       <div className="panel-heading  text-white text-center"> Payment Details </div>
       <div className="panel-body">
             <div className="row">
                <div className="form-group col-sm-12">
                      <label htmlFor="cardNumber">Card Number:</label>
                      <div className="form-control" id="cardNumber" />
                  
                      <span className="helper-text" id="cNum"></span>
                  </div>
                  <div className="row">
                      <div className="form-group col-sm-4">
                      <label htmlFor="cvv">CVV:</label>
                      <div className="form-control" id="cvv" />
                      <span className="helper-text" id="c_vv"></span>
                      </div>
                      <div className="form-group col-sm-4">
                      <label htmlFor="expDate">Expiration</label>

                      <div className="form-control" id="expDate" />
                      <span className="helper-text" id="exp-date"></span>
                      </div>
                      <div className="form-group col-sm-4">
                      <label htmlFor="zipCode">Zipcode:</label>
                      <div  className="form-control" id="zipCode" />
                      <span className="helper-text" id="zip-code"></span>
                      </div>
                  </div>
                  <div className="row">
                        <i className="col-sm-4">
                        <i className=" fas fa-lock"> SECURE</i>
                        <p style={{fontSize:"10px"}}>By clicking donate below you agree to make a payment to St. Anthony's Coptic Orthodox Church for the total specified on the right</p></i>
                       
                        <div className="col-sm-8">
                              
                              <div className="row dataImgs">
                              
                                    <i className="col-sm-2 iconCards fab fa-cc-visa"/>
                                    <i className="col-sm-2 iconCards fab fa-cc-mastercard"/>
                                    <i className="col-sm-2 iconCards fab fa-cc-discover"/>
                                    
                                    <i className="col-sm-2 iconCards fab fa-cc-paypal"/>
                                    <i className="col-sm-2 iconCards fab fa-cc-amex"/>
                                    
                                    
                                    
                              </div>
                        </div>
                  </div>
                </div>
             </div>                               
                                        
       </div>
      
  )
}

export default Form;