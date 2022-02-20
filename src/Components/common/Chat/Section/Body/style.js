import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    padding-top: 50px;
    height:${props=>props.toggle?'calc(100% - 130px)':'calc(100% - 330px)'};
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
  `,
};
