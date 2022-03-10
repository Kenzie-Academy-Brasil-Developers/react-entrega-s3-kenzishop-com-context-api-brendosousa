import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  header {
    width: 100%;
  }
  @media (min-width: 900px) {
  }
`;

export const Main = styled.div`
  max-height: 400px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 900px) {
    overflow-x: unset;
    max-height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
