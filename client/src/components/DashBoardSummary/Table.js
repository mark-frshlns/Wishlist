import React from 'react';
import TableInput from '../DashBoardComponents/TableInput';

const Table = (props)=>{
        return (
          <table className="table table-striped table-bordered table-dark">
          <thead>
              <tr className="table-title bg-info">
                  <th className=" text-center ">{props.cat.toUpperCase()}<button className="btn btn-warning btn-block text-muted"  onClick={props.Delete}  name="category" type="submit" id={props.catId}>DELETE</button></th>
              </tr>
              <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">ITEM</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">PRICE/ITEM</th>
                  <th scope="col">REQUESTED</th>
                  <th scope="col">TOTAL REQUESTED</th>
                  <th scope="col">% COLLECTED</th>
                  <th scope="col">VALUE COLLECTED</th>
                  <th scope="col">URL</th>
                  <th scope="col">REMOVE PERMANENTLY</th>
              </tr>
          </thead>
          <tbody>
              {props.items.map((item,i)=>{
                return (
                  <tr className={item.payment_Percentage <= 0.4 ? "bg-danger": "bg-success"} key={i}>
                    <th scope="row">{item.id}</th>
                    {props.inputCell === `${item.id}-name` ? <td><TableInput inputType='text' itemID={item.id} field="item_name" handleItemUpdate={props.handleInputUpdate}/></td> : <td id={`${item.id}-name`} onDoubleClick={props.handleDoubleClick}>{item.item_name}</td>}
                    {props.inputCell === `${item.id}-description` ? <td><TableInput itemID={item.id} field="item_description" handleItemUpdate={props.handleInputUpdate}/></td> : <td id={`${item.id}-description`} onDoubleClick={props.handleDoubleClick}>{item.item_description}</td>}
                    {props.inputCell === `${item.id}-price` ? <td><TableInput inputType='number' itemID={item.id} field="item_price" handleItemUpdate={props.handleInputUpdate}/></td> : <td id={`${item.id}-price`} onDoubleClick={props.handleDoubleClick}>$ {item.item_price}</td>}
                    {props.inputCell === `${item.id}-quantity` ? <td><TableInput inputType='number' itemID={item.id} field="item_requested" handleItemUpdate={props.handleInputUpdate} /></td> : <td id={`${item.id}-quantity`} onDoubleClick={props.handleDoubleClick}>{item.item_requested}</td>}
                    <td id={`${item.id}-total`}>$ {item.totalRequested.toFixed(2)}</td>
                    <td id={`${item.id}-percent`}>{(item.payment_Percentage*100).toFixed(2)}</td>
                    <td id={`${item.id}-fulfilled`} >$ {item.totalFulfilled}</td>
                    {props.inputCell === `${item.id}-itemUrl` ? <td><TableInput inputType="text" itemID={item.id} field="item_Url" handleItemUpdate={props.handleInputUpdate}/></td> : <td id={`${item.id}-itemUrl`} onDoubleClick={props.handleDoubleClick}>{`${item.item_Url}`}</td>}
                    {<td><button className="btn btn-warning btn-block text-muted" onClick={props.Delete} type="submit" id={item.id}>DELETE</button></td>}
                  </tr>
                )
              })}
          </tbody>
      </table>
        )
}

export default Table;