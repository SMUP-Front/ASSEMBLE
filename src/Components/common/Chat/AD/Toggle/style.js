import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
    max-height:30%;
  `,
  ToggleBarWrapper: styled.div`
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding:14px 0px 14px;
  `,
  Arrow: styled.img`
    transform: ${(props) => (props.toggle ? "rotate(180deg)" : "")};
    margin-right: 20px;
    width: 13px;
  `,
  Title: styled.p`
    margin: 0px;
    margin-left: 20px;
    font-family: Noto Sans KR;
  `,
  ChildrenWrapper:styled.div`
    width:90%;
    max-height:300px;
    overflow-y:scroll;
    height:fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-bottom:1px solid #606060;
    ::-webkit-scrollbar{
display:none;
    }
  `,
};
