import React from 'react';
import './forms.css';

const CategoryForm = (props)=>{
  return(
    <div className="formContainer">
       <form>
            <div className="form-group">
                <label htmlFor="category_name_submit">Category</label>
                <input name="category_name" onChange={props.handleInputChange} type="text" className="form-control" id="category_name_submit" placeholder="Type New Category Here..." />
                <span className={`form-text ${props.alert === "Successfully Created" ? 'text-success':'text-danger'}`}>{props.alert}</span>
            </div>
            <button type="button" className="btn btn-primary" onClick={props.handleAdd}>Submit</button>
       </form>
    </div>
  )
}

export default CategoryForm;