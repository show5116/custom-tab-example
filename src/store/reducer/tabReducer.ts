import * as A from '../action/tabAction';

type TTabAction = ReturnType<typeof A.initTabList> | ReturnType<typeof A.setTabList>;

export interface ITab {
    label : string;
    children : JSX.Element;
};

const initialState:ITab[] = [];


const tabReducer = (state = initialState ,action:TTabAction) => {
    switch (action.type) {
        case A.INIT_TAB_LIST :
            return [];
        case A.SET_TAB_LIST :
            return <ITab[]>action.payload;
        default :
            return state;
    }
};

export default tabReducer;
