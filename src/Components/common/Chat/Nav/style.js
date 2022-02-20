import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    min-width: 460px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing:border-box;
    border-right:0.7px solid #D6D6D6;
  `,
  Title: styled.p`
    margin: 0px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    margin-top: 30px;
    margin-left: 30px;
    align-self: flex-start;
  `,
  HeadWrapper: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 162px;
  `,
  BodyWrapper: styled.div`
  width:100%;
  height:calc(100% - 222px);

  display:flex;
  flex-direction:column;
  align-items:center;
  
  `,
  Footer: styled.div`
    width: 100%;
    border-top: 0.7px solid #D6D6D6;
    height: 60px;
  `,

  BlockWrapper: styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 22px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
