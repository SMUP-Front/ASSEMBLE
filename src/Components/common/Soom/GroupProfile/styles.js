import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  justify-content: center;
  margin: 38px 0px;
  div > div {
    width: 162px;
    height: 162px;
    border-radius: 100px;
    background-color: #e8e8e8;
  }
  div > img {
    border: 3px solid #ffffff;
    width: 100%;
    height: 159px;
    border-radius: 100px;
    object-fit: cover;
  }
  div > img:hover {
    border: 3px solid #ae6fff;
  }
  div {
    display: inline-flex;
    width: 906px;
    justify-content: space-between;
  }
  main {
    display: flex;
    align-items: center;
    width: 1020px;
    justify-content: space-between;
  }
`;
