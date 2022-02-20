import styled from 'styled-components'

export const Schedule = styled.div`
  height: 750px;
`;
export const ScheduleTitle = styled.span`
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #ae6fff;
  text-align: center;
`;
// text-align: center;
export const ScheduleBoard = styled.div`
  width: 26%;
  height: 750px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: beige;
`;
export const ScheduleList = styled.li`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
`;

export const TodayTitle = styled.span`
  display: block;
  padding-top: 12px;
  margin-bottom: 21px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ae6fff;
`;
// [위 오른쪽 아래 왼쪽]
export const LongButton = styled.button`
  width: 80%;
  height: 32px;
  display: block;
  font-size: 18px;
  background-color: #ae6fff;
  color: #ffffff;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border-radius: 30px;
`;
export const Line = styled.hr`
  width: 30%;
  border: solid 1px #c8c8c8;
`;
