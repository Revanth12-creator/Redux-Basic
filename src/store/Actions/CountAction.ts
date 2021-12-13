import { type } from "os";

//Action
export const ActionTypes={
    INCCREMET:'INCCREMET',
    DECCREMET:'DECCREMET'
} 


//Action Crator
export const incrementCount= ()=> {
    return {
        type: ActionTypes.INCCREMET
    }
};

export const decrementCount=()=> {
    return {
        type : ActionTypes.DECCREMET
    }
}
// export default {ActionTypes, incrementCount,decrementCount};