import { S } from "./style";
import MOREBUTTON from "../../../../../Assets/image/Chat/addfile.svg";
import SEND from "../../../../../Assets/image/Chat/send.svg";
import Addfile from "./Addfile";

type props = {
    filetoggle:boolean,
    setFileToggle:any
}

function Footer({filetoggle,setFileToggle}:props) {

  return (
    <>

      <S.TotalWrapper>
        <S.MoreButton toggle={filetoggle} src={MOREBUTTON} onClick={()=>{
            setFileToggle(!filetoggle);
        }}/>
        <S.MessageInputWrapper>
          <S.MessageInput placeholder={"메세지를 입력해주세요"} />
        </S.MessageInputWrapper>
        <S.SendButton src={SEND} />
      </S.TotalWrapper>
    </>
  );
}

export default Footer;
