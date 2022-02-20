import styled from "styled-components";

export const Post = styled.div`
  display: flex;
  justify-content: center;
  main {
    margin-top: 10px;
    width: 41%;
    height: 858px;
    padding: 21px 63px;
    box-shadow: 0px 0px 10px 0px #e8e8e8;
  }
`;

export const Top = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 14px;
  span {
    display: inline-flex;
  }
  span > img {
    width: 40px;
    height: 40px;
    background-color: #e8e8e8;
    border-radius: 6px;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 20px;
    object-fit: cover;
  }
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
  input {
    width: 590px;
    height: 30px;
    background: #dfdede;
    outline: none;
    border: none;
    border-radius: 24px;
    padding-left: 18px;
  }
`;

export const Profile = styled.div`
  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 100px;
    background-color: #e8e8e8;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: 75%;
`;

export const BigImage = styled.div`
  width: 49%;
  height: 55%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    margin-bottom: 7px;
    object-fit: cover;
  }
`;

export const SmallImage = styled.div`
  width: 32%;
  height: 40%;
  img {
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    object-fit: cover;
  }
`;

export const Explain = styled.div`
  width: 349px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding: 14px 0px 0px 14px;
  margin-bottom: 14px;
`;

export const Bottom = styled.div`
  padding-top: 32px;
`;

export const Review = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  img {
    margin-right: 9px;
    object-fit: cover;
  }
`;

export const Class = styled.div`
  font-size: 18px;
  color: #242424;
  margin-left: 9px;
`;

export const Time = styled.div`
  font-size: 13px;
  color: #242424;
  margin-left: 9px;
`;
