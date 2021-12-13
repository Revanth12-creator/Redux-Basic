import allExports from "../Actions/GetProductAction";
import {Action} from "redux";
import { type } from "os";

type IAction={
    productData:any;
} & Action;

const getProducts=(state=[],action:IAction)=> {
    switch(action.type){
        case allExports.ActinTypes.GET_PRODUCT:
            return {state:action.productData};
         default:
            return state;
    }
}

export default  getProducts;