import styled from "styled-components";

export const Group = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px 0px #c7c7c7;
  border-radius: 6px;
`;

export const Title = styled.div`
  width: 100%;
  height: 26px;
  background-color: #242424;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

export const Content = styled.div`
  main {
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #767676;
    margin-bottom: 35px;
    font-size: 13px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  button {
    width: 72px;
    height: 22px;
    font-size: 10px;
    border: none;
    background-color: #242424;
    color: white;
    border-radius: 24px;
  }
`;
