import styled from "styled-components";

export const LoginPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const LoginTitle = styled.p`
  cursor: help;
  transition: all 10s;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 93px;
  color: #242424;

  margin: 0px;
  margin-top: 140px;

  &:hover {
    color: rgba(164, 96, 252, 1);
  }
`;

export const IdInput = styled.input`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #242424;

  width: 580px;
  height: 70px;
  background: #f0f0f0;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 25px;
  margin-top: 65px;

  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #929292;
  }
`;

export const PasswordInput = styled.input`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #242424;

  width: 580px;
  height: 70px;
  background: #f0f0f0;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 25px;
  margin-top: 15px;

  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #929292;
  }
`;

export const LoginGuideLine = styled.div`
  width: 150px;
  height: 2px;
  background-color: #848484;
  border-radius: 100px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  transition: all 0.5s;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 600px;
  height: 70px;
  border-radius: 5px;
  background-color: rgba(164, 96, 252, 1);
  outline: none;
  border: none;

  &:hover {
    background-color: rgba(150, 79, 241, 1);
  }
`;

export const GotoSignUpButton = styled.button`
  cursor: pointer;
  transition: all 0.5s;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 600px;
  height: 70px;
  border-radius: 5px;
  margin-top: 15px;
  background-color: rgba(79, 30, 127, 1);
  outline: none;
  border: none;

  &:hover {
    background-color: rgba(61, 16, 104, 1);
  }
`;
