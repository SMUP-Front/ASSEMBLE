import { S } from "./style";

type props = {
  img?: any;
  focused?: boolean;
};

function Block({ img, focused = false }: props) {
  return (
    <>
      <S.TotalWrapper focused={focused}>
        <S.ImgWrapper>{img ? <img src={img} alt="" /> : <></>}</S.ImgWrapper>
        <S.TextWrapper>
          <S.Title>
            {"제목"}
          </S.Title>
          <S.Detail focused={focused}>
            새로운 메세지 {0}개
          </S.Detail>
        </S.TextWrapper>
      </S.TotalWrapper>
    </>
  );
}

export default Block;
