import { S } from "./style";
import ARROW from "../../../../../Assets/image/Chat/arrow.svg";
import { useState } from "react";

type props = {
  title: string;
  children?: any;
};
function Toggle({ title, children }: props) {
  const [toggle, setToggle] = useState(false);

  return (
      <>
    <S.TotalWrapper>
      <S.ToggleBarWrapper>
        <S.Title>{title}</S.Title>
        <S.Arrow
          toggle={toggle}
          src={ARROW}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </S.ToggleBarWrapper>
      {toggle ? <S.ChildrenWrapper>{children}</S.ChildrenWrapper> : <></>}
    </S.TotalWrapper>
      </>
  );
}
export default Toggle;
