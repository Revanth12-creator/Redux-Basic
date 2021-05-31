import React from "react";
import ClassCompoent from "./components/IncreDecre/ClassComponent";
import Count from "./components/IncreDecre/Count";
import Hooks from "./components/IncreDecre/Hooks";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        {/* <ToastContainer /> */}
        <Count />
        <ClassCompoent />
        <Hooks />
      </div>
    );
  }
}
export default App;
