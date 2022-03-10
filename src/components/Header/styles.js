import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const StyledHeader = styled.header`
  background-color: #20b5d8;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1d8cc8;
  gap: 20px;
  h1 {
    color: #1976d2;
    margin-top: 20px;
    padding: 15px;
    cursor: pointer;
    &:hover {
      border: 1px solid white;
      border-radius: 10px;
    }
  }
  span {
    color: white;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    h1 {
      margin-left: 100px;
      margin-top: 0px;
    }
  }
`;

export const Box = styled.div`
  @media (min-width: 900px) {
    margin-right: 100px;
  }
`;

export const Button = styled(IconButton)`
  div {
    width: 20px;
    height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff5ea0;
    border-radius: 100%;
    margin-left: -10px;
    margin-top: -20px;
    &:hover {
      border: 1px solid white;
    }
  }
  h2 {
    font-size: 20px;
    font-weight: normal;
  }
`;
