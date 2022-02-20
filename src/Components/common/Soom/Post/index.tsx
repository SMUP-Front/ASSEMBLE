import React from "react";
import * as S from "./styles";
import menu from "../../../../Assets/image/Soom/menu.png";
import like from "../../../../Assets/image/Soom/like.png";
import chat from "../../../../Assets/image/Soom/Chat.png";
import airplane from "../../../..Assets/image/Soom/airplane.png";

export default function Post() {
  return (
    <>
      <S.Post>
        <main>
          <S.Top>
            <span>
              <img src="" alt="" />
              <div>
                <S.Class>1-3반</S.Class>
                <S.Time>30분전</S.Time>
              </div>
            </span>
            <img src={menu} alt="" />
          </S.Top>
          <S.Explain>
            이번주 수요일 영어 단어 수행평가 있습니다. 모두 7-1 학습지 단어
            외우고 시험 보시기 바랍니다. 이번주 수요일 영어 단어 수행평가
            있습니다. 모두 7-1 학습지 단어 외우고 시험 보시기 바랍니다.
          </S.Explain>
          <S.Thumbnail>
            <S.BigImage>
              <img src="" alt="" />
            </S.BigImage>
            <S.BigImage>
              <img src="" alt="" />
            </S.BigImage>
            <S.SmallImage>
              <img src="" alt="" />
            </S.SmallImage>
            <S.SmallImage>
              <img src="" alt="" />
            </S.SmallImage>
            <S.SmallImage>
              <img src="" alt="" />
            </S.SmallImage>
            {/* 나중에 map함수 돌리기 big - 2, small - 3 */}
          </S.Thumbnail>
          <S.Bottom>
            <S.Review>
              <div>
                <img src={like} alt="" />
                <span>좋아요</span>
              </div>
              <div>
                <img src={chat} alt="" />
                <span>댓글 보기</span>
              </div>
            </S.Review>
            <S.Comment>
              <S.Profile>
                <img src="" alt="" />
              </S.Profile>
              <input type="search" placeholder="댓글을 입력해주세요..." />
              <img src={airplane} alt="" />
            </S.Comment>
          </S.Bottom>
        </main>
      </S.Post>
    </>
  );
}
