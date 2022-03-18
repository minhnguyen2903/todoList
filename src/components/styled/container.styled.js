import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 50px;
  user-select: none;
  box-shadow: 0 0 10px 5px rgba(0,0,0,0.05);
  @media (max-width: 768px) {
    padding: 10px;
    margin: 0;
  box-shadow: none;
  }
`;
