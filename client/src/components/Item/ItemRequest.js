import React from 'react';

const ItemRequest = (props)=>{

      return(
        <div className={props.col}>
            <div className="summaryTarget row">
              <span className="title text-muted">Target</span>
              <span className="partial"><h5>{props.item.item_requested}</h5></span>
            </div>
            <div className="summaryTarget row">
              {/*<span className="title text-muted">Achieved:</span>
              <span className="partial"><h5>{(props.item.payment_Percentage*100).toFixed(2)}%</h5></span>*/}
              <div className="progress">
                  <div className="progress-bar" role="progressbar"  style={{width:`${(props.item.payment_Percentage*100).toFixed(2)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{(props.item.payment_Percentage*100).toFixed(2)}%</div>
              </div>
            </div>
        </div>
      )


}

export default ItemRequest;