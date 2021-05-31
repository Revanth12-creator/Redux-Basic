import {Action} from 'redux';
import * as  CountAction from '../Actions/CountAction';

//State Type
type IAction={
    count:number
} & Action;

//Reducre function

const countReducer=(state= 0, action:IAction) => {
    switch(action.type){
        case CountAction.ActionTypes.INCCREMET:
        return state + 1;

        case CountAction.ActionTypes.DECCREMET:
            return state>0 ? state - 1 : state;
            
        default : return state
    }
};
export default countReducer;