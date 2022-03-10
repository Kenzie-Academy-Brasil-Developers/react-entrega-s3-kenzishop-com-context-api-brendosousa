import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 350px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 10px;
  min-width: 230px;
  width: 20%;
  img {
    height: 200px;
    width: 140px;
    margin-top: 10px;
  }
  &:hover {
    box-shadow: 0px 6px 32px -10px rgba(0, 0, 0, 0.25);
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  width: 100%;
  h1 {
    width: 80%;
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 10px;
    text-align: start;
  }
  p {
    color: #828282;
    font-size: 12px;
    margin-left: 10px;
    text-align: start;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    text-align: start;
  }
  button {
    background: #1d8cc8;
    border: 2px solid #1d8cc8;
    border-radius: 8px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    height: 35px;
    text-align: center;
    width: 150px;
    margin-left: 10px;
    &:hover {
      background-color: white;
      color: #1d8cc8;
    }
  }
`;
