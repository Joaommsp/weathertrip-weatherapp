import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const CardContainer = styled.div`
  min-width: 250px;
  height: 80px;
  border-radius: 10px;
  padding: 0.5rem;

  margin-bottom: 1rem;
  margin-right: 1rem;

  background-color: ${theme.secondaryColor};

  &:last-child {
    margin-right: 0rem;
  }

  .cardHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0rem;
  }

  .cityTemp {
    font-size: 1.5rem;
    color: ${theme.primaryColor};
  }

  .cityName {
    color: ${theme.primaryColor};
    font-size: 0.8rem;
  }

  .cityDescription {
    width: 100%;
    font-size: 0.8rem;
    color: ${theme.primaryColor};
  }

  @media only screen and (max-width: 480px) {
    height: 64px;
    margin-bottom: 0.5rem;

    .cityTemp {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    height: 74px;
    margin-bottom: 1rem;

    .cityTemp {
      font-size: 1rem;
    }
  }
`;
