import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
// import CountAction from "../../store/";
import { toast } from "react-toastify";
import * as CountAction from "../../store/Actions/CountAction";

type IState = {
  countData: number;
};
const Count: React.FC = () => {
  let dispatchCount = useDispatch();

  let countState = useSelector((state: IState) => {
    return state.countData;
  });

  // const actionTypes = CountAction;
  //usig BindingAction way
  // const incre = bindActionCreators(CountAction.incrementCount, dispatchCount);

  //or
  //by method dispatch
  let increment = () => {
    dispatchCount(CountAction.incrementCount());
    toast.success("Count Incremented");
  };

  // let decre = bindActionCreators(CountAction.decrementCount, dispatchCount);

  let decrement = () => {
    dispatchCount(CountAction.decrementCount());
    toast.warning("Count Decremented");
  };

  return (
    <div className="my-5">
      <h1>By Functional Component</h1>
      {/* -----------------Increment------------- */}
      {/* <button className="btn btn-success" onClick={() => incre()}>
        Incremetn
      </button> */}
      {/* or */}
      <button className="btn btn-success" onClick={increment}>
        Incremetn
      </button>
      <h1>{countState}</h1>

      {/* -----------------Decrement------------- */}
      {/* <button className="btn btn-success" onClick={() => decre()}>
        Decrement
      </button> */}
      {/* or */}
      <button className="btn btn-danger" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
export default Count;
