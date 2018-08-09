import React from 'react';
import './forms.css';

const ItemForm = (props)=>{

  return (
    <div className="formContainer item_form">
        <form>
            <div className="form-group">
                  <label htmlFor="item_name_submit">ITEM NAME</label>
                  <input type="text" className="form-control" id="item_name_submit" placeholder="Type Item Name Here..." name="item_name" onChange={props.handleInputChange} />
                  
            </div>
            <div className="form-group">
            <label htmlFor="item_description_submit">ITEM DESCRIPTION</label>
            <input type="text" className="form-control" id="item_description_submit" placeholder="Type Item Description Here..." name="item_description" onChange={props.handleInputChange} />
            
            </div>   
            <div className="form-group">
              <label htmlFor="item_category_submit">CATEGORY</label>
              <select className="custom-select form-control" name="CategoryId" onChange={props.handleInputChange}>
                  <option value="">pick a category...</option>
                  {props.data.map((cat,i)=>{
                    return <option value={cat.id} key={i}>{cat.category_name}</option>
                  })}
              </select>
            </div>     
            <div className="form-group">
            <label htmlFor="item_price_submit">ITEM PRICE</label>
            <input type="number" className="form-control" id="item_price_submit" placeholder="Enter Price..." name="item_price" onChange={props.handleInputChange} />
            
            </div>
            <div className="form-group">
            <label htmlFor="item_requested_submit">ITEM REQUESTED</label>
            <input type="number" className="form-control" id="item_requested_submit" placeholder="Enter Quantity..." name="item_requested" onChange={props.handleInputChange} />
            
            </div>
            <div className="form-group">
            <label htmlFor="item_image_submit">UPLOAD IMAGE</label><br/>
            <input type="file" id="item_image_submit" placeholder="choose file..." name="item_image" onChange={props.handleInputChange}/>
            <span className="form-text text-muted">Only (JPEG, JPG, PNG) MAX SIZE 1MB</span>

            <span className={`form-text ${props.alert === 'success' ? 'text-success':'text-danger'}`}>{props.alert}</span>
            </div>
            <button type="button" className="btn btn-block btn-primary" onClick={props.handleSubmit}>Submit</button>
        </form>
    
    </div>
  )
}

export default ItemForm;