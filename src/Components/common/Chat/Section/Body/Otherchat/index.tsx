import { S } from "./style";

type props = {
  value?: string;
  img?: any;
};

function Otherchat({ value, img }: props) {
  return (
    <S.TotalWrapper>
      <S.ImgWrapper>{img ? <img src={img} alt="" /> : <></>}</S.ImgWrapper>
      <S.TextsWrapper>
        <S.Name>
            이름
        </S.Name>
        <S.TextWrapper>
            <p>{value}</p>
        </S.TextWrapper>
      </S.TextsWrapper>
    </S.TotalWrapper>
  );
}

export default Otherchat;
