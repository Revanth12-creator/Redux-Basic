import React from "react";
import ClassCompoent from "./components/IncreDecre/ClassComponent";
import Count from "./components/IncreDecre/Count";
import NavHeader from "./components/IncreDecre/NavHeader";
import GetProducts from "./components/products/GetProducts";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        {/* <ToastContainer /> */}
        {/* <NavHeader />
        <Count />
        <ClassCompoent /> */}
        <GetProducts />
      </div>
    );
  }
}
export default App;
