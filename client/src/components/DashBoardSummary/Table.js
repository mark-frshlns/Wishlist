import React from 'react';


const Table = (props)=>{
        return (
          <table className="table table-striped table-bordered table-dark">
          <thead>
              <tr className="table-title bg-primary">
                  <th className=" text-center ">{props.cat.toUpperCase()}</th>
              </tr>
              <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">ITEM</th>
                  <th scope="col">PRICE/ITEM</th>
                  <th scope="col">REQUESTED</th>
                  <th scope="col">TOTAL REQUESTED</th>
                  <th scope="col">% COLLECTED</th>
                  <th scope="col">VALUE COLLECTED</th>
                  <th scope="col">REMOVE PERMANENTLY</th>
              </tr>
          </thead>
          <tbody>
              {props.items.map((item,i)=>{
                return (
                  <tr className={item.payment_Percentage <= 0.4 ? "bg-danger": "bg-success"} key={i}>
                    <th scope="row">{item.id}</th>
                    <td>{item.item_name}</td>
                    <td>$ {item.item_price}</td>
                    <td>{item.item_requested}</td>
                    <td>$ {item.totalRequested.toFixed(2)}</td>
                    <td>{(item.payment_Percentage*100).toFixed(2)}</td>
                    <td>$ {item.totalFulfilled}</td>
                    <td><button className="btn btn-warning btn-block text-muted" onClick={props.Delete} type="submit" id={item.id}>DELETE</button></td>
                  </tr>
                )
              })}
          </tbody>
      </table>
        )
}

export default Table;