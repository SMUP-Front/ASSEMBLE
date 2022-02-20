import styled from 'styled-components'

export const Timetable = styled.div`
  width: 100%;
  height: 1080px;
  background-color: #f0f0f0;
`;

export const TimetableTitle = styled.span`
  display: block;
  padding-top: 142px;
  font-size: 36px;
  font-weight: bold;
  color: #ae6fff;
  text-align: center;
  margin-bottom: 46px;
`;

export const periodFrame = styled.div`
  width: 800px;
  height: 66px;
`;

export const period = styled.div`
  width: 510px;
  height: 66px;
  display: flex;
  margin: 10px auto;
  border-radius: 8px;
  background-color: #ffffff;
  z-index: 1;
`;

export const periodCount = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #ae6fff;
  border: solid 1px #ae6fff;
  background-color: #ffffff;
  margin-left: 3px;
  margin-top: 3px;
  font-weight: bold;
`;

export const periodName = styled.span`
  display: flex;
  padding-left: 32px;
  font-size: 16px;
  align-items: center;
  font-weight: bold;
`;

export const restTime = styled.div`
  display: inline;
  width: 105px;
  height: 60px;
  background-color: #ae6fff;
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
  float: right;
  z-index: 2;
  margin-left:220px;
`;