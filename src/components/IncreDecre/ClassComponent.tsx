import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as CountAction from "../../store/Actions/CountAction";
// import * as CountAction from "../../store/Actions/CountAction";
type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
class ClassCompoent extends React.Component<Props> {
  //   increment = () => {
  //     return this.props.increment();
  //   };

  //   decrement = () => {
  //     return this.props.decrement();
  //   };
  render() {
    return (
      <div>
        <h1>By Class Component</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}
const mapStoreToProps = (state: any) => {
  return {
    count: state.countData,
  };
};
const mapToDispatch = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(CountAction.incrementCount()),
    decrement: () => dispatch(CountAction.decrementCount()),
  };
};
export default connect(mapStoreToProps, mapToDispatch)(ClassCompoent);
