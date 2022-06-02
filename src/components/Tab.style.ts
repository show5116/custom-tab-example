import styled from "styled-components";

export const Container = styled.div<{selected:boolean}>`
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-right: 1px solid lightgray;
  ${(props) => props.selected && 
          `background : blue;`}
  .tab-delete{
    margin-left: 2px;
    background: lightgray;
  }
  .tab-delete:hover{
    opacity: 0.7;
  }
`;
