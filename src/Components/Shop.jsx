import React from 'react'
import { useDispatch } from 'react-redux';
import {bindactionCreator} from "redux"
import {actionCreators} from "./index"
function Shop() {
  const dispatch = useDispatch();
  return (
    <div>
        <div className='container my-4'>
            <h2>Deposit/Withdraw Money</h2>
            <button type='button' className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
            your Bank Balance
            <button type='button' className='btn btn-primary mx-2'  onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
        </div>
    </div>
  )
}

export default Shop