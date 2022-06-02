import * as S from './TabMenu.style';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import Tab from "./Tab";
import {useState} from "react";
import TabContent from "./TabContent";

const TabMenu = () => {
    const tabList = useSelector((state:RootState)=>state.tabReducer);
    const [selectIndex,setSelectIndex] = useState(0);

    return (
        <S.Container>
            <div className='tabList'>
                {tabList.map((element,index)=> (
                    <Tab
                        key={`head ${element.label}`}
                        selected={selectIndex===index}
                        onClick={(event)=>setSelectIndex(index)}
                        label={element.label}
                    />
                ))}
            </div>
            <div className='tabContent'>
                {tabList.map((element,index)=> (
                    <TabContent
                        key={`content ${element.label}`}
                        selected={selectIndex===index}
                        children={element.children}
                    />
                ))}
            </div>
        </S.Container>
    );
}

export default TabMenu;
