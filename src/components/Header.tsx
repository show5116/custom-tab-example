import * as S from './Header.style';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {initTabList, setTabList} from "../store/action/tabAction";
import {RootState} from "../store";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import Menu6 from "./Menu6";

type menuName = "menu1" | "menu2" | "menu3" | "menu4" | "menu5" | "menu6" | string;
type menu = {
    label : string;
    children : JSX.Element;
}

const MenuSet: Record<menuName, menu> = {
    menu1 : {
        label : "menu1",
        children : <Menu1 />
    },
    menu2 : {
        label : "menu2",
        children : <Menu2 />
    },
    menu3 : {
        label : "menu3",
        children : <Menu3 />
    },
    menu4 : {
        label : "menu4",
        children : <Menu4 />
    },
    menu5 : {
        label : "menu5",
        children : <Menu5 />
    },
    menu6 : {
        label : "menu6",
        children : <Menu6 />
    },
}



const Header = () => {



    const dispatch = useDispatch();
    const tabList = useSelector((state:RootState) => state.tabReducer);

    const onClick = (event:React.MouseEvent<HTMLDivElement>) => {
        const id:menuName = event.currentTarget.id;
        if(tabList.find((element) =>
                element.label===id) !== undefined){
            return;
        }

        dispatch(setTabList([...tabList,{
            label : MenuSet[id].label,
            children : MenuSet[id].children
        }]));
    }

    useEffect(()=>{
        dispatch(initTabList());
    },[]);

    return (
        <S.Container>
            <h1>Custom Tab Menu Example</h1>
            <div className='menus'>
                <div onClick={onClick} id="menu1" className='menu'>menu1</div>
                <div onClick={onClick} id="menu2" className='menu'>menu2</div>
                <div onClick={onClick} id="menu3" className='menu'>menu3</div>
                <div onClick={onClick} id="menu4" className='menu'>menu4</div>
                <div onClick={onClick} id="menu5" className='menu'>menu5</div>
                <div onClick={onClick} id="menu6" className='menu'>menu6</div>
            </div>
        </S.Container>
    );
}

export default Header;
