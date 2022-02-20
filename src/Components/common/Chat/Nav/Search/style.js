import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    width: 85%;
    height: 33px;
    background-color: #ededed;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50px;
    margin-top:47px;
    img {
      margin-left: 18px;
      margin-right: 8px;
    }
  `,
  Input: styled.input`
    height: 100%;
    width: 85%;
    outline: none;
    border:none;
    padding: 0px;
    background-color: rgb(0, 0, 0, 0);
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    :focus{
        ::placeholder{
            opacity:0;
        }
    }
  `,
};
