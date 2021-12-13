import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import allExports from "../../store/Actions/GetProductAction";

type IState = {
  proData: [];
};

export default function GetProducts() {
  const [pData, setPdata] = useState([]);
  const dispatchPData = useDispatch();

  useEffect(() => {
    var url = "https://reqres.in/api/users?page=1";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.data);
        setPdata(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const productsList = useSelector((state: IState) => {
    console.log("Pdata", state);
  });
    //  const {pData}=bindActionCreators(allExports.getProducts(pData),dispatchPData);
  dispatchPData(allExports.getProducts(pData));

  return (
    <div>
      <h1>ddddd</h1>
    </div>
  );
}
