import React from "react";
import { SignUpState } from "../../../../Lib/export/SignUpState";
import { useRecoilState } from "recoil";

import * as S from "./style";
const SignUpPage = () => {
  const [SignUpInfo,setSignUpInfo] = useRecoilState(SignUpState);

  return (
    <S.SignUpPageBox>
      {/* <HeaderLoginBefore /> */}
      <S.SignUpTitle>SMUP</S.SignUpTitle>
      <S.SignUpInfoBox>
        <S.SignUpInfoNameBox>
          <S.SignUpInfoNameOne>아이디</S.SignUpInfoNameOne>
          <S.SignUpInfoName>비밀번호</S.SignUpInfoName>
          <S.SignUpInfoName>비밀번호 확인</S.SignUpInfoName>
          <S.SignUpInfoName>이름</S.SignUpInfoName>
          <S.SignUpInfoName>생년월일</S.SignUpInfoName>
          <S.SignUpInfoName>입학 정보</S.SignUpInfoName>
          <S.SignUpInfoName>학번</S.SignUpInfoName>
          <S.SignUpInfoName>학과</S.SignUpInfoName>
        </S.SignUpInfoNameBox>
        <S.displayFlex>
          <S.SignUpInfoGuideLine />
          <S.SignUpInfoInputBox>
            <S.SignUpInfoEmailInputBox>
               <S.SignUpInfoEmailInput name="" placeholder="ID는 반드시 학교 이메일로 적어주세요" />
               <S.SignUpInfoEmailCheck>인증하기</S.SignUpInfoEmailCheck>
            </S.SignUpInfoEmailInputBox>
            <S.SignUpInfoInput name="" placeholder="8~20이내로 문자와 숫자를 포함해서 만들어 주세요" />
            <S.SignUpInfoInput name="" placeholder="8~20이내로 문자와 숫자를 포함해서 만들어 주세요" />
            <S.SignUpInfoInput name="" placeholder="실명을 입력해주세요" />
            <S.SignUpInfoInput name="" placeholder="예)050929" />
            <S.SignUpInfoInput name="" placeholder="몇년도에 입학하셨는지 입력해주세요" />
            <S.SignUpInfoInput name="" placeholder="예)1413" />
            <S.SignUpInfoInput name="" placeholder="학과를 입력해주세요" />
          </S.SignUpInfoInputBox>
        </S.displayFlex>
      </S.SignUpInfoBox>
      <S.SignUpButton>다음</S.SignUpButton>
    </S.SignUpPageBox>
  );
};

export default SignUpPage;
