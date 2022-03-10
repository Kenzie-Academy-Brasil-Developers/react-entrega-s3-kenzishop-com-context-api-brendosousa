import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  overflow-y: auto;
  max-height: 300px;
  gap: 10px;
  @media (min-width: 900px) {
    width: 70%;
    overflow-y: unset;
  }
`;

export const HeaderList = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 90%;
    border-bottom: 1px solid lightgray;
    span {
      font-weight: bold;
    }
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  background: white;
  gap: 20px;
  height: 140px;
  width: 90%;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  align-self: center;
  h1 {
    font-size: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 200px;
    align-self: center;
    margin-bottom: 5px;
    background: #1d8cc8;
    border: 2px solid #1d8cc8;
    border-radius: 8px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    height: 25px;
    text-align: center;
    &:hover {
      background-color: white;
      color: #1d8cc8;
    }
  }
  @media (min-width: 900px) {
    width: 25%;
    height: 200px;
  }
`;

export const InfoHeader = styled.div`
  display: none;
  @media (min-width: 900px) {
    width: 82%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 10px;
    span {
      font-weight: bold;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 50px;
  color: #1d8cc8;
`;
