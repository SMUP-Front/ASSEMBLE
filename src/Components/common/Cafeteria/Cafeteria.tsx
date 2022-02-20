import axios from "axios";
import React from "react";
import * as S from './style'

const Cafeteria = () => {
  const params = { date: "20220214" };

  const CafeteriaGET = () => {
    axios.get("http://3.36.108.34:8080/api/v1/meal", { params }).then((res) => {
      console.log(res);
    });
  };

  return (
    <S.CafeteriaPage>
      <S.CafeteriaAria>
        <S.CafeteriaTextAria>
          <S.CafeteriaTitle onClick={CafeteriaGET}>
            오늘의 급식
          </S.CafeteriaTitle>
          <S.CafeteriaText>2022년 10월 21일</S.CafeteriaText>
        </S.CafeteriaTextAria>
        <S.CafeteriaMenuAria>
          <S.CafeteriaMenu>
            <S.CafeteriaMenuTitle>아침</S.CafeteriaMenuTitle>
            <S.CafeteriaMenuText>돈까스</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>짜장면</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>닭강정</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>밥</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>코다리튀김</S.CafeteriaMenuText>
          </S.CafeteriaMenu>
          <S.CafeteriaMenu>
            <S.CafeteriaMenuTitle>점심</S.CafeteriaMenuTitle>
            <S.CafeteriaMenuText>돈까스</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>짜장면</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>닭강정</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>밥</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>코다리튀김</S.CafeteriaMenuText>
          </S.CafeteriaMenu>
          <S.CafeteriaMenu>
            <S.CafeteriaMenuTitle>저녁</S.CafeteriaMenuTitle>
            <S.CafeteriaMenuText>돈까스</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>짜장면</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>닭강정</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>밥</S.CafeteriaMenuText>
            <S.CafeteriaMenuText>코다리튀김</S.CafeteriaMenuText>
          </S.CafeteriaMenu>
        </S.CafeteriaMenuAria>
        <S.CafeteriaDrawingAria></S.CafeteriaDrawingAria>
      </S.CafeteriaAria>
    </S.CafeteriaPage>
  );
};

export default Cafeteria;
