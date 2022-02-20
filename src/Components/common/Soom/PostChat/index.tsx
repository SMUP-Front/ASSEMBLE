import * as S from "./styles";
import arrow from "../../../../Assets/image/Soom/left-arrow-angle - white.png";
import $ from "jquery";

export default function PostChat() {
  onscroll = function () {
    var nVScroll: number =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (nVScroll > 0) {
      $("#ex_box").css({
        transform: "translate(" + 0 + "px, " + nVScroll + "px)",
      });
    } else {
      $("#ex_box").css({
        transform: "translate(" + 0 + "px, " + 0 + "px)",
      });
    }
  };
  return (
    <>
      <div id="ex_box" style={{ transition: "all 2s ease" }}>
        <S.Main>
          <S.Head>
            <img src={arrow} alt="" />
          </S.Head>
          <S.Chatting>
            <S.Chat>
              <img src="" alt="" />
              <S.Content>넵 알게씀니따~!~!</S.Content>
              <S.Time>8:32am</S.Time>
            </S.Chat>
          </S.Chatting>
        </S.Main>
      </div>
    </>
  );
}
