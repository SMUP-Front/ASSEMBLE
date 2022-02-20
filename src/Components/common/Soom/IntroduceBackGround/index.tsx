import BackGround1 from "../../../../Assets/image/Soom/BackGround1.png";
import BackGround2 from "../../../..Assets/image/Soom/BackGround2.png";
import * as S from "./styles";

export default function IntroduceBackGround() {
  const backGround: [string, string] = [BackGround1, BackGround2];

  const randomBackGround: string = backGround[getRandomIntInclusive(0, 1)];

  function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <S.BackGround>
        <img src={randomBackGround} alt="" />
      </S.BackGround>
    </>
  );
}
