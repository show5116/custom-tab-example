import {ITab} from "../reducer/tabReducer";

export const INIT_TAB_LIST = 'INIT_TAB_LIST';

export const SET_TAB_LIST = 'ADD_TAB_LIST';

export const initTabList = () : {type : string , payload? : null} => {
    return {
        type : INIT_TAB_LIST
    }
}

export const setTabList = (tabList:ITab[]) : {type : string , payload:ITab[]} => {
    return {
        type : SET_TAB_LIST,
        payload : tabList
    };
};
