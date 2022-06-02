import * as S from './TabContent.style';

interface IProps {
    selected : boolean;
    children : JSX.Element;
}

const TabContent = ({selected , children}:IProps) => {
    return (
        <S.Container
            selected={selected}
        >
            {children}
        </S.Container>
    );
}

export default TabContent;
