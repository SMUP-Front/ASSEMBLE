import styled from "styled-components";

export const displayFlex = styled.div`
  display: flex;
`;

export const displayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 1080px;
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
  margin-bottom: 55px;

  &:hover {
    color: rgba(164, 96, 252, 1);
  }
`;

export const SignUpInfoBox = styled.div`
  display: flex;
  margin-right: 200px;
`;

export const SignUpInfoNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SignUpInfoNameOne = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #424242;

  margin: 0px;
  margin-top: 10px;
  margin-bottom: 42px;
`;

export const SignUpInfoName = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #424242;

  margin: 0px;
  margin-bottom: 30px;
`;

export const SignUpInfoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpInfoEmailInputBox = styled.div`
  display: flex;
`;

export const SignUpInfoEmailCheck = styled.button`
  cursor:pointer;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 55px;
  margin-left: 20px;
  background: #a460fc;
  border-radius: 3px;
  border: none;
  outline: none;
`;

export const SignUpInfoEmailInput = styled.input`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #242424;

  width: 350px;
  height: 55px;
  padding-left: 20px;
  background: #f0f0f0;
  border-radius: 3px;
  outline: none;
  border: none;

  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #828282;
  }
`;

export const SignUpInfoInputOne = styled.input`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #242424;

  width: 500px;
  height: 55px;
  padding-left: 20px;
  background: #f0f0f0;
  border-radius: 3px;
  outline: none;
  border: none;

  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #828282;
  }
`;

export const SignUpInfoInput = styled.input`
  width: 500px;
  height: 55px;
  padding-left: 20px;
  background: #f0f0f0;
  border-radius: 3px;
  outline: none;
  border: none;

  margin-top: 10px;

  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #828282;
  }
`;

export const SignUpInfoGuideLine = styled.div`
  width: 2px;
  height: 525px;
  background-color: #dabcff;
  margin-left: 45px;
  margin-right: 45px;
`;

export const SignUpButton = styled.button`
  cursor: pointer;
  transition: all 0.5s;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;

  width: 500px;
  height: 70px;
  background: #a460fc;
  border: none;
  border-radius: 5px;
  margin-top: 50px;

  &:hover {
    background: rgba(138, 70, 226, 1);
  }
`;
