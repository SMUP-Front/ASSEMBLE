import styled from "styled-components";

export const displayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const SignUpTitle = styled.p`
  cursor: help;
  transition: all 10s;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 93px;
  color: #242424;

  margin: 0px;
  margin-top: 100px;

  &:hover {
    color: rgba(164, 96, 252, 1);
  }
`;

export const SignUpText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  color: #2e2e2e;

  margin: 0px;
  margin-top: 90px;
`;

export const SignUpInput = styled.input`
  width: 510px;
  height: 60px;
  background-color: rgba(240, 240, 240, 1);
  padding-left: 20px;
  margin-top: 30px;
  border-radius: 5px;
  border: none;
  outline: none;

  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #828282;
  }
`;

export const SignUpButton = styled.button`
  cursor: pointer;
  transition: all 0.5s;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;

  width: 530px;
  height: 65px;
  background-color: #a460fc;
  border-radius: 5px;
  border: none;
  margin-top: 40px;

  &:hover {
    background-color: rgba(138, 67, 229, 1);
  }
`;
