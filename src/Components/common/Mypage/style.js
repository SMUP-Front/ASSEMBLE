import styled from "styled-components";

export const MyPage = styled.div`
  width: 100%;
  height: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  border-radius: 1000px;
  border: 3px solid rgba(174, 111, 255, 1);
  margin-top: 50px;
`;

export const Profile = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 1000px;
`;

export const MyName = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  color: #343434;

  margin: 0px;
  margin-top: 25px;
`;

export const NameGuideLine = styled.div`
  width: 200px;
  height: 1px;
  background-color: rgba(36, 36, 36, 1);
  margin-top: 13px;
`;

export const SchoolName = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #9d9d9d;

  margin: 0px;
  margin-top: 10px;
`;

export const MenuBox1 = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuTitle = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #242424;
`;

export const MenuBox3 = styled.div`
  display: flex;
  align-items: center;
`;

export const OneThingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
`;

export const OneThing = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  background-color: black;
`;

export const OneThingName = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #242424;

  margin-top: 10px;
`;

export const arrowLImg = styled.img`
  margin-top: 30px;
  margin-right: 40px;
`

export const arrowRImg = styled.img`
  margin-top: 30px;
  margin-left: 40px;
`