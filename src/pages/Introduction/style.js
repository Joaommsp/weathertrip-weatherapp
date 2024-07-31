import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const IntroContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  padding-top: 5rem;

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding-top: 2rem;
  }

  @media only screen and (max-width: 564px) {
    padding-top: 2rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .wheatherAppPrevContainer {
    width: 100%;
    height: 50px;
    position: relative;
    background-color: red;
  }

  .weatherAppPrev {
    width: 350px;
    position: absolute;
    bottom: -14rem;
    right: 8rem;
    z-index: 1000;
  }

  @media only screen and (min-width: 964px) and (max-width: 1200px) {
    .weatherAppPrev {
      width: 350px;
      position: absolute;
      bottom: -14rem;
      right: 5rem;
      z-index: 1000;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1084px) {
    .weatherAppPrev {
      display: none;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    .weatherAppPrev {
      display: none;
    }
  }

  @media only screen and (max-width: 564px) {
    .weatherAppPrev {
      display: none;
    }
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 456px;

  position: relative;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: ${(props) => props.$bgPosition};

  .bannerGradient {
    width: 100%;
    height: 100%;
    background: ${(props) => props.$gradientDirection};
    padding: 2rem 8rem;

    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    .bannerGradient {
      padding: 2rem 5rem;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    height: 404px;

    .bannerGradient {
      padding: 2rem 2rem;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9132140084598841) 0%,
        rgba(0, 0, 0, 0.2109668174486482) 100%
      );
    }
  }

  @media only screen and (max-width: 564px) {
    height: 304px;

    .bannerGradient {
      padding: 2rem 1rem;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9132140084598841) 0%,
        rgba(0, 0, 0, 0.2109668174486482) 100%
      );
    }
  }
`;

export const SloganContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 5rem;
  z-index: 5;

  h1 {
    font-size: 3.25rem;
    color: #fefaf9;
    margin-bottom: 3rem;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 1.25rem;
    color: #fefaf9;
    width: 400px;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.4);
    font-weight: 300;
  }

  strong {
    font-weight: 500;
  }

  .aboutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10rem;
    padding-right: 2rem;
  }

  .about {
    text-align: center;
    color: ${theme.secondaryColor};
  }

  .about a {
    font-weight: bold;
    text-decoration: none;
    color: ${theme.secondaryColor};
  }

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    padding-right: 1rem;

    h1 {
      font-size: 3rem;
      color: #fefaf9;
      margin-bottom: 1rem;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1rem;
      color: #fefaf9;
      width: 60%;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
      font-weight: 300;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding-right: 1rem;

    h1 {
      font-size: 2rem;
      color: #fefaf9;
      margin-bottom: 1rem;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1rem;
      color: #fefaf9;
      width: 80%;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
      font-weight: 300;
    }
  }

  @media only screen and (max-width: 564px) {
    padding-right: 1rem;

    h1 {
      font-size: 1.44rem;
      color: #fefaf9;
      margin-bottom: 1rem;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 0.88rem;
      color: #fefaf9;
      width: 100%;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
      font-weight: 300;
    }
  }
`;

export const WeatherAppPreview = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1000;
`;

export const AboutTheAppContainer = styled.div`
  width: 100%;
  padding: 4rem 8rem;

  .aboutNewsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .aboutNewsText {
    width: 500px;
    color: #0e0e0e;
    margin-bottom: 2rem;
  }

  strong {
    font-size: 500;
  }

  .aboutAppContainer {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .appBanner {
    width: 456px;
  }

  .aboutAppText {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 4rem;
  }

  .aboutAppTitle {
    font-size: 1.5rem;
    color: #0e0e0e;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .alignRight {
    text-align: right;
  }

  @media only screen and (min-width: 1064px) and (max-width: 1200px) {
    .appBanner {
      width: 356px;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    padding: 3rem 5rem;

    .aboutAppText {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 4rem;
    }

    .aboutNewsText {
      width: 80%;
      color: #0e0e0e;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    .appBanner {
      width: 284px;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    .aboutNewsText {
      width: 50%;
      color: #0e0e0e;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .aboutAppContainer {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }

    .appBanner {
      width: 356px;
      margin-bottom: 2rem;
    }

    .aboutAppText {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 1.5rem;
    }

    .aboutAppTitle {
      font-size: 1.44rem;
    }

    .aboutNewsText {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding: 3rem 2rem;

    .aboutNewsText {
      width: 80%;
      color: #0e0e0e;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .aboutAppContainer {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }

    .appBanner {
      width: 356px;
      margin-bottom: 2rem;
    }

    .aboutAppText {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .aboutAppTitle {
      font-size: 1.44rem;
    }

    .aboutNewsText {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 564px) {
    padding: 3rem 1rem;

    .aboutNewsText {
      width: 80%;
      color: #0e0e0e;
      font-size: 0.88rem;
      margin-bottom: 2rem;
    }

    .aboutAppContainer {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }

    .appBanner {
      width: 256px;
      margin-bottom: 2rem;
    }

    .aboutAppText {
      display: flex;
      flex-direction: column;
      align-items: flex-edn;
      margin-bottom: 1.5rem;
    }

    .aboutAppTitle {
      font-size: 1.44rem;
    }

    .aboutNewsText {
      font-size: 0.88rem;
    }
  }
`;

export const SloganNewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 5rem;
  z-index: 5;

  h1 {
    font-size: 3.25rem;
    color: #fefaf9;
    margin-bottom: 3rem;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.4);
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 500;
  }

  span {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    color: #fefaf9;
    width: 400px;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.4);
    text-align: right;
    font-weight: 300;
  }

  strong {
    font-weight: 500;
  }

  .aboutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10rem;
    padding-right: 2rem;
  }

  .about {
    text-align: center;
    color: ${theme.secondaryColor};
  }

  .about a {
    font-weight: bold;
    text-decoration: none;
    color: ${theme.secondaryColor};
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    padding-right: 0;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1rem;
      color: #fefaf9;
      width: 100%;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
      text-align: right;
      font-weight: 300;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding-right: 0;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1rem;
      color: #fefaf9;
      width: 100%;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
      text-align: right;
      font-weight: 300;
    }
  }

  @media only screen and (max-width: 564px) {
    padding-right: 0;

    h1 {
      font-size: 1.44rem;
      margin-bottom: 1rem;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 0.88rem;
      color: #fefaf9;
      width: 100%;
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
      text-align: right;
      font-weight: 300;
    }
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 2rem;
  gap: 24px;

  .icon {
    width: 24px;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
  }

  @media only screen and (max-width: 564px) {
    gap: 18px;

    .icon {
      width: 18px;
    }
  }
`;

export const NewsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 8rem;

  .newsSectionTitleContainer {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .newsSectionTitle {
    width: 300px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .line {
    width: 100%;
    height: 4px;
    background-color: #6046f0;
  }

  @media only screen and (min-width: 964px) and (max-width: 1200px) {
    padding: 4rem 2rem;
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    padding: 4rem 5rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding: 3rem 2rem;

    .newsSectionTitle {
      width: 300px;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .line {
      width: 50%;
      height: 2px;
      background-color: #6046f0;
    }
  }

  @media only screen and (max-width: 564px) {
    padding: 3rem 1rem;

    .newsSectionTitle {
      width: 300px;
      font-size: 1.44rem;
      font-weight: 500;
    }

    .line {
      width: 50%;
      height: 2px;
      background-color: #6046f0;
    }
  }
`;
