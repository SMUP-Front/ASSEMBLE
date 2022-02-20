import styled from "styled-components";

export const Main = styled.div`
  width: 23%;
  height: 899px;
  background-color: #ffffff;
  box-shadow: 0px 10px 10px 0px #e8e8e8;
  border-radius: 12px 12px 0px 0px;
  margin-top: 10px;
  position: absolute;
  right: 0px;
`;

export const Head = styled.div`
  width: 100%;
  height: 33px;
  border-radius: 12px 12px 0px 0px;
  background-color: #ae6fff;
  img {
    padding: 2%;
  }
`;

export const Chatting = styled.div`
  padding: 7px 35px 25px 35px;
  overflow: hidden;
  height: 794px;
  overflow: overlay;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ae6fff;
    border-radius: 6px;
  }
`;

export const Chat = styled.div`
  height: 37px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  img {
    width: 37px;
    height: 37px;
    object-fit: cover;
    border-radius: 100px;
    border: none;
    background: #e8e8e8;
  }
`;

export const Content = styled.div`
  margin-left: 16px;
  color: #242424;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.div`
  margin-left: 7px;
  font-size: 12px;
  color: #909090;
`;
