import styled from "styled-components";
import Background from "../../assets/images/aboutMeBg.png";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  background-image: url(${Background});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media only screen and (max-width: 564px) {
    background-position: top right;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
`;

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 8rem;
  margin-bottom: 20rem;
  display: flex;
  flex-direction: column;
  overflow: visible;

  h1 {
    font-size: 8rem;
    color: #fffffe;
    line-height: 8rem;
    text-shadow: 0px 2px 3px rgba(66, 68, 90, 0.25);
    margin-bottom: 3rem;
  }

  p {
    color: #3c3633;
    font-size: 1.2rem;
    text-align: justify;
  }

  span {
    color: #3c3633;
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .myLinks {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 28px;
  }

  a {
    text-decoration: none;
    color: ${theme.secondaryColor};
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  .portfolioLink {
    padding: 0.69rem 5rem;
    background-color: #0f0f0f;
    color: #ffffff;
    border-radius: 100px;
    font-weight: 500;
  }

  a img {
    width: 25px;
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    padding: 5rem 5rem;

    h1 {
      font-size: 6rem;
      color: #fffffe;
      line-height: 5rem;
      text-shadow: 0px 2px 3px rgba(66, 68, 90, 0.25);
      margin-bottom: 3rem;
    }

    .myLinks {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      gap: 10px;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding: 5rem 5rem;

    h1 {
      font-size: 5rem;
      color: #fffffe;
      line-height: 5rem;
      text-shadow: 0px 2px 3px rgba(66, 68, 90, 0.25);
      margin-bottom: 3rem;
    }

    .myLinks {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 564px) {
    padding: 5rem 1rem;

    h1 {
      font-size: 3rem;
      color: #fffffe;
      line-height: 3rem;
      text-shadow: 0px 2px 3px rgba(66, 68, 90, 0.25);
      margin-bottom: 3rem;
    }

    .myLinks {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;
