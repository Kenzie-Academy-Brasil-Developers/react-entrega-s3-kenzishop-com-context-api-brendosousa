import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  gap: 10px;
  button {
    align-self: flex-start;
    margin-bottom: 5px;
    margin-left: 5%;
    background: #1d8cc8;
    border: 2px solid #1d8cc8;
    border-radius: 6px;
    box-sizing: border-box;
    color: #fff;
    font-size: 12px;
    height: 20px;
    text-align: center;
    width: 100px;
    &:hover {
      background-color: white;
      color: #1d8cc8;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  width: 90%;
  img {
    height: 100px;
    width: 70px;
  }
  h1 {
    font-size: 15px;
    text-align: start;
    width: 100%;
  }
  span {
    text-align: end;
    width: 65%;
  }
`;
