import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 25px;
    font-weight: bolder;
    padding: 30px;
  }
  .menus{
    padding: 30px;
    display: flex;
    gap: 10px;
    .menu{
      cursor: pointer;
    }
  }
`;
