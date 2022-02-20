import React, { useState } from "react";
import { LoginState } from "../../../Lib/export/LoginPageState";
import { baseURL } from "../../../Lib/export/BaseURL";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./style";

const LoginPage = () => {
  const [LoginInfo, setLoginInfo] = useRecoilState(LoginState);
  const [BaseURL, setBaseURL] = useRecoilState(baseURL);

  const onChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({ ...LoginInfo, [name]: value });
    console.log(LoginInfo);
  };

  const LoginInfoPost = () => {
    axios.post("http://3.36.108.34:8080/api/v1/account/auth/login", LoginInfo)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <S.LoginPageBox>
      {/* <HeaderLoginBefore /> */}
      <S.LoginTitle>SMUP</S.LoginTitle>
      <S.IdInput
        onChange={onChangeLoginInfo}
        name="email"
        placeholder="ID(이메일 혹은 아이디)"
      />
      <S.PasswordInput
        onChange={onChangeLoginInfo}
        name="password"
        placeholder="비밀번호"
      />
      <S.LoginGuideLine />
      <S.LoginButton onClick={LoginInfoPost}>로그인</S.LoginButton>
      <S.GotoSignUpButton>회원가입</S.GotoSignUpButton>
    </S.LoginPageBox>
  );
};

export default LoginPage;
