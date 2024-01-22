import { combineReducers } from "redux";
import amountreducer, { redducer } from "./amountreducer"

const reducers = combineReducers({
   amount : amountreducer
})
export default reducers