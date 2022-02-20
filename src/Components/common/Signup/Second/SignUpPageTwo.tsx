import React from "react";
import * as S from "./style"

const SignUpPageTwo = () => {
  return (
    <S.SignUpPageBox>
      {/* <HeaderLoginBefore /> */}
      <S.SignUpTitle>SMUP</S.SignUpTitle>
      <S.SignUpText>사용하실 별명을 입력해주세요!</S.SignUpText>
      <S.SignUpInput placeholder="비속어, 은어는 사용하지 말아주세요" />
      <S.SignUpButton>회원가입</S.SignUpButton>
    </S.SignUpPageBox>
  );
};

export default SignUpPageTwo;
