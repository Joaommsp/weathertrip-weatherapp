import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const HomeContainer = styled.div`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.primaryColor};

  .weatherContainer {
    width: 100%;
    height: 100%;
    padding: 0 8rem;
    margin-bottom: 4rem;
    min-height: 100vh;
  }

  .galleryCards__Container {
    width: 100%;
    padding: 0 9rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }

  .cardContainer {
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
  }

  .cardContainer::-webkit-scrollbar {
    width: 10px;
  }

  .cardContainer::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }

  .cardContainer::-webkit-scrollbar-thumb {
    background-color: ${theme.secondaryColor};
    border-radius: 100px;
  }

  @media only screen and (min-width: 964px) and (max-width: 1116px) {
    .weatherContainer {
      width: 100%;
      height: 100%;
      padding: 0 2rem;
      margin-bottom: 4rem;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    padding-top: 3rem;

    .weatherContainer {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      margin-bottom: 4rem;
    }

    .galleryCards__Container {
      width: 100%;
      padding: 0 1rem;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding-top: 3rem;

    .weatherContainer {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      margin-bottom: 4rem;
    }

    .galleryCards__Container {
      width: 100%;
      padding: 0 1rem;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 564px) {
    padding-top: 3rem;

    .weatherContainer {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      margin-bottom: 4rem;
    }

    .galleryCards__Container {
      width: 100%;
      padding: 0 1rem;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
