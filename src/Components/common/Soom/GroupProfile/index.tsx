import React from "react";
import left from "../../../../Assets/image/Soom/left-arrow-angle.png";
import right from "../../../../Assets/image/Soom/right-arrow-angle.png";
import * as S from "./styles";

export default function GroupProfile() {
  return (
    <>
      <S.Group>
        <main>
          <img src={left} alt="" />
          <div>
            <div>
              <img src="" alt="그룹 프로필 사진" />
            </div>
            <div>
              <img src="" alt="그룹 프로필 사진" />
            </div>
            <div>
              <img src="" alt="그룹 프로필 사진" />
            </div>
            <div>
              <img src="" alt="그룹 프로필 사진" />
            </div>
            <div>
              <img src="" alt="그룹 프로필 사진" />
            </div>
          </div>
          <img src={right} alt="" />
        </main>
      </S.Group>
    </>
  );
}
