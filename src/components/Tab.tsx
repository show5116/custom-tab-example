import * as S from './Tab.style';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {setTabList} from "../store/action/tabAction";
import {MouseEventFunction} from "../types/type";

interface IProps {
    selected : boolean;
    label : string;
    onClick : MouseEventFunction;
}

const Tab = ({selected , label , onClick}:IProps) => {

    const tabList = useSelector((state:RootState)=>state.tabReducer);
    const dispatch = useDispatch();

    const onDelete = () => {
        const index = tabList.findIndex((element)=>element.label === label);
        if(index !== -1) {
            tabList.splice(index,1);
            dispatch(setTabList([...tabList]));
        }
    }

    return (
        <S.Container
            selected={selected}
            onClick={onClick}
        >
            <div
                className='tab-label'
            >
                {label}
            </div>
            <div
                className='tab-delete'
                onClick={onDelete}
            >
                X
            </div>
        </S.Container>
    );
}

export default Tab;
