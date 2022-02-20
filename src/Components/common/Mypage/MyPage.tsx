import React from "react";
// import ProfileIMG from "../../assets/img/90.png";
// import arrowL from "../../assets/img/arrowL.svg"
// import arrowR from "../../assets/img/arrowR.svg"

import * as S from "./style";

const MyPage = () => {
  return (
    <S.MyPage>
      {/* <HeaderLoginBefore /> */}
      <S.ProfileBorder>
        <S.Profile />
      </S.ProfileBorder>
      <S.MyName>아무개</S.MyName>
      <S.NameGuideLine />
      <S.SchoolName>#광주소프트웨어마이스터고</S.SchoolName>
      <S.MenuBox1>
        <S.arrowLImg/>
        <S.MenuBox2>
          <S.MenuTitle>내가 속한 그룹</S.MenuTitle>
          <S.MenuBox3>
            <S.OneThingBox>
              <S.OneThing />
              <S.OneThingName>Unknown</S.OneThingName>
            </S.OneThingBox>
            <S.OneThingBox>
              <S.OneThing />
              <S.OneThingName>Unknown</S.OneThingName>
            </S.OneThingBox>
            <S.OneThingBox>
              <S.OneThing />
              <S.OneThingName>Unknown</S.OneThingName>
            </S.OneThingBox>
            <S.OneThingBox>
              <S.OneThing />
              <S.OneThingName>Unknown</S.OneThingName>
            </S.OneThingBox>
            <S.OneThingBox>
              <S.OneThing />
              <S.OneThingName>Unknown</S.OneThingName>
            </S.OneThingBox>
            <S.OneThingBox>
              <S.OneThing />
              <S.OneThingName>Unknown</S.OneThingName>
            </S.OneThingBox>
          </S.MenuBox3>
        </S.MenuBox2>
        <S.arrowRImg/>
      </S.MenuBox1>
    </S.MyPage>
  );
};

export default MyPage;
