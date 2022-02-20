import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  ImgWrapper: styled.div`
    background-color: lightgray;
    width: 40px;
    height: 40px;
    border-radius: 100%;
  `,
  Name: styled.p`
    margin: 0px;
    margin-left: 15px;
  `,
  MoreWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    > p {
      margin-right: 15px;
    }
    > #admin {
      color: #a56dff;
      font-size: 16px;
    }
    #giveadmin {
      color: #726fff;
      font-size: 14px;
    }
    #kick {
      color: #e22727;
      font-size: 14px;
    }
  `,
  More: styled.img``,
  Change: styled.p`
    margin: 17px;
    margin-right: 10px;
    color: #ae6fff;
    font-size: 14px;
  `,
};
