import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const NewsContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding-top: 2rem;
  }

  @media only screen and (max-width: 564px) {
    padding-top: 2rem;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 404px;
  margin-bottom: 4rem;

  position: relative;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: ${(props) => props.$bgPosition};

  .bannerGradient {
    width: 100%;
    height: 100%;
    background: rgb(2, 0, 36);
    background: ${(props) => props.$gradientDirection};
    padding: 2rem 8rem;

    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    margin-bottom: 4rem;

    .bannerGradient {
      width: 100%;
      height: 100%;
      background: rgb(2, 0, 36);
      background: ${(props) => props.$gradientDirection};
      padding: 2rem 5rem;

      display: flex;
      align-items: center;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    height: 304px;
    margin-bottom: 2rem;

    .bannerGradient {
      width: 100%;
      height: 100%;
      background: rgb(2, 0, 36);
      background: ${(props) => props.$gradientDirection};
      padding: 2rem 1rem;

      display: flex;
      align-items: center;
    }
  }

  @media only screen and (max-width: 564px) {
    height: 304px;
    margin-bottom: 2rem;

    .bannerGradient {
      width: 100%;
      height: 100%;
      background: rgb(2, 0, 36);
      background: ${(props) => props.$gradientDirection};
      padding: 2rem 1rem;

      display: flex;
      align-items: center;
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

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    padding-right: 0rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding-right: 0rem;

    h1 {
      font-size: 2rem;
      color: #fefaf9;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 564px) {
    padding-right: 0rem;

    h1 {
      font-size: 1.44rem;
      color: #fefaf9;
      margin-bottom: 1rem;
    }

    span {
      font-size: 0.88rem;
    }

    p {
      font-size: 0.88rem;
    }
  }
`;

export const NewsMainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8rem;

  .breakingNews {
    display: flex;
    gap: 86px;
    justify-content: flex-start;
    margin-bottom: 4rem;
  }

  .breakingNewsContinue {
    width: 100%;
    display: flex;
    gap: 24px;
    justify-content: flex-start;
    overflow-x: scroll;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
  }

  a {
    text-decoration: none;
  }

  .mainNewContainer {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .mainNewImage {
    width: 600px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 4rem;
  }

  .mainNewDescription {
    font-size: 2rem;
    color: #0e0e0e;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Playfair Display", serif;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .mainNewAbout {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 36px;
    flex-wrap: wrap;
  }

  .authorContentContainer {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }

  .authorImg {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #8167f2;
  }

  .authorContainer {
    display: flex;
    flex-direction: column;
  }

  .author,
  .authorLabel {
    font-size: 0.9rem;
  }

  .author {
    color: #0e0e0e;
    font-weight: 500;
  }

  .authorLabel {
    color: #5e5e5e;
  }

  .sourceContainer {
    display: flex;
    flex-direction: column;
  }

  .source,
  .sourceLabel {
    font-size: 0.9rem;
  }

  .source {
    color: #0e0e0e;
    font-weight: 500;
  }

  .sourceLabel {
    color: #5e5e5e;
  }

  .mainNewUrl {
    padding: 0.3rem 4rem;
    background-color: #8167f2;
    color: #ffffff;
    border-radius: 100px;
    font-size: 0.9rem;
  }

  .breakingNewsList {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 56px;
    height: 100%;
  }

  .secundaryBreakingNewContainer {
    display: flex;
    gap: 28px;
  }

  .newsSource {
    display: block;
    margin-bottom: 0.5rem;
    color: #0e0e0e;
    font-size: 1rem;
    font-weight: 500;
  }

  .secundaryNewDescription {
    font-size: 0.8rem;
    color: #0e0e0e;
    font-family: "Playfair Display", serif;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .newsUrl {
    color: #5d44e9;
    font-size: 0.9rem;
    display: block;
  }

  .newsSectionTitleContainer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .newsSectionTitle {
    width: 496px;
    font-size: 1rem;
    font-weight: 500;
  }

  .article {
    position: relative;
    padding-bottom: 2rem;
  }

  .worldNewImage {
    width: 356px;
    height: 256px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .articleAbout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .articlePublishedDate {
    font-size: 0.9rem;
    color: #5e5e5e;
  }

  .articleSource {
    display: block;
    color: #0e0e0e;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .worldNewitle {
    font-size: 0.9rem;
    color: #0e0e0e;
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-family: "Playfair Display", serif;
  }

  .worldNewDescription {
    font-size: 0.8rem;
    color: #0e0e0e;
    height: 56px;
    overflow: hidden;
  }

  .worldNewText {
    width: 100%;
  }

  .articleInfos {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .articleAuthor {
    height: 20px;
    display: block;
    overflow: hidden;
    width: 150px;
    font-size: 0.9rem;
    color: #5e5e5e;
  }

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    width: 100%;

    flex-direction: column;

    padding: 0 3rem;

    .breakingNews {
      display: flex;
      gap: 28px;
      justify-content: center;

      margin-bottom: 4rem;
    }

    .breakingNewsList {
      gap: 28px;
    }

    .mainNewImage {
      width: 400px;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 2rem;
    }

    .mainNewDescription {
      font-size: 1.44rem;
      margin-bottom: 1rem;
    }

    .mainNewAbout {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 18px;
      flex-wrap: wrap;
    }

    .newsSource {
      font-size: 0.88rem;
    }

    .worldNewImage {
      width: 356px;
      height: 256px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }

    .articlePublishedDate {
      font-size: 0.7rem;
    }

    .breakingNewsContinue {
      width: 100%;
      display: flex;
      gap: 24px;
      justify-content: flex-start;
      margin-bottom: 4rem;
      padding-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 564px) {
    width: 100%;

    flex-direction: column;

    padding: 0 1rem;

    .breakingNews {
      display: flex;
      gap: 28px;
      justify-content: center;

      flex-direction: column;
      margin-bottom: 4rem;
    }

    .breakingNewsList {
      gap: 28px;
    }

    .mainNewImage {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 2rem;
    }

    .mainNewDescription {
      font-size: 1.44rem;
      margin-bottom: 1rem;
    }

    .mainNewAbout {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 18px;
      flex-wrap: wrap;
    }

    .newsSource {
      font-size: 0.88rem;
    }

    .worldNewImage {
      width: 100%;
      height: 256px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }

    .articlePublishedDate {
      font-size: 0.7rem;
    }

    .breakingNewsContinue {
      width: 100%;
      display: flex;
      gap: 24px;
      flex-direction: column;
      justify-content: flex-start;
      overflow-x: auto;
      margin-bottom: 4rem;
      padding-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    width: 100%;

    flex-direction: column;

    padding: 0 3rem;

    .breakingNews {
      display: flex;
      gap: 28px;
      justify-content: center;

      flex-direction: column;
      margin-bottom: 4rem;
    }

    .breakingNewsList {
      gap: 28px;
    }

    .mainNewImage {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 2rem;
    }

    .mainNewDescription {
      font-size: 1.44rem;
      margin-bottom: 1rem;
    }

    .mainNewAbout {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 18px;
      flex-wrap: wrap;
    }

    .newsSource {
      font-size: 0.88rem;
    }

    .worldNewImage {
      width: 100%;
      height: 256px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }

    .articlePublishedDate {
      font-size: 0.7rem;
    }

    .breakingNewsContinue {
      width: 100%;
      display: flex;
      gap: 24px;
      flex-direction: column;
      justify-content: flex-start;
      overflow-x: auto;
      margin-bottom: 4rem;
      padding-bottom: 2rem;
    }
  }
`;
