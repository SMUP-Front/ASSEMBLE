import { useState } from "react";
import { S } from "./style";
import MORE from "../../../../../Assets/image/Chat/more.svg";
import NOMORE from "../../../../../Assets/image/Chat/nomore.svg";

type props = {
  img?: any;
  name?: string;
  type: number;
  admin?: boolean;
};

function Member({ img, type, name, admin }: props) {
  const [toggle, setToggle] = useState(false);
  return !type ? (
    <>
      <S.TotalWrapper>
        <S.ProfileWrapper>
          <S.ImgWrapper>{img ? <img src={img} alt="" /> : <></>}</S.ImgWrapper>
          <S.Name>{name}</S.Name>
        </S.ProfileWrapper>
        <S.MoreWrapper>
          {toggle ? (
            <>
              <p id="giveadmin">관리자 부여</p>
              <p id="kick">강퇴</p>
            </>
          ) : admin ? (
            <p id="admin">관리자</p>
          ) : (
            <></>
          )}
          <S.More
            src={!toggle ? MORE : NOMORE}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </S.MoreWrapper>
      </S.TotalWrapper>
    </>
  ) : (
    <>
      <S.TotalWrapper>
        <S.ProfileWrapper>
          <S.ImgWrapper>{img ? <img src={img} alt="" /> : <></>}</S.ImgWrapper>
          <S.Name>{name}</S.Name>
        </S.ProfileWrapper>
        <S.Change>변경</S.Change>
      </S.TotalWrapper>
    </>
  );
}
export default Member;
