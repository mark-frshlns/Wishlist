import React from 'react';


const AnyAmountForm = (props)=>{
    return (
      <div className="panel panel-primary col-md-4">
      <div className="panel-heading  text-white text-center"> Specify Options </div>
      <form className="panel-body" id="anyamountForm">
            <div className="row">
               <div className="form-group">
                    
                    <select className="selectAny list-group" name="categoryList" id="category" form="anyamountForm" onClick={props.handleCatPick} >
                            <option className="selectInner list-group-item" value="" disabled selected>pick a category...</option>
                            {props.data.map((category,i)=>{
                              return <option className="selectInner list-group-item" value={category.category_name} key={i} >{category.category_name}</option>
                            })}
                    </select>
                    {props.cat ? (
                      <div>
                      
                      <select className="selectAny list-group" name="itemList" id="item" form="anyamountForm" >
                      
                          {props.data.forEach((cat,i)=>{
                            console.log(cat.category_name + " " + props.cat)
                                if(cat.category_name === props.cat){
                                  console.log(cat.Items)
                                  cat.Items.forEach((item, i)=>{
                                    console.log(item.item_name);
                                    return (<option className="selectInner list-group-item" value={item.item_name} key={i}>{item.item_name}</option>)
                                  })
                                }
                                
                          })}
                      </select>
                      </div>
                    ):null}
               </div>
            </div>
      </form>
      </div>
    )
}

export default AnyAmountForm;