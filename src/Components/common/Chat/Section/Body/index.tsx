import Addfile from "../Footer/Addfile";
import Mychat from "./Mychat";
import Otherchat from "./Otherchat";
import { S } from "./style";

type props = {
  filetoggle: any;
};

function Body({ filetoggle }: props) {
  return (
    <>
      <S.TotalWrapper toggle={!filetoggle}>
        <Mychat value="채asdfj;lkajsd;lfkja;lwjeg;aihwefuiawusghpiahuwefophapoweiewwww팅" />
        <Otherchat value="테스ㅡㅌasdflna;lskndghoi;awhbeoi;gnab;odsng;vaowebnoifab;oedgno;awiehao;" />
      </S.TotalWrapper>
      {filetoggle?<Addfile />:<></>}
    </>
  );
}

export default Body;
