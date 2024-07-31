import styled from "styled-components";

export const HomeButtonElement = styled.button`
  padding: 0.69rem 6rem;

  background-color: ${(props) => props.$backroundColor};
  border: 2px solid ${(props) => props.$bdColor};
  color: ${(props) => props.$textColor};

  border-radius: 100px;

  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
  }

  @media only screen and (max-width: 564px) {
    font-size: 0.88rem;
    padding: 0.5rem 6rem;
  }
`;
