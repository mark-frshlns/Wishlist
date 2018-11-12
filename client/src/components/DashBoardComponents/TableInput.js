import React from 'react';

const TableInput = (props) =>{

    return (
        <input type={props.inputType} onKeyUp={(e)=>{props.handleItemUpdate(e,props.itemID,props.field)}}  />  
    )
}

export default TableInput;