import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .breakingNews {
    display: flex;
    gap: 56px;
    justify-content: center;
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
    width: 450px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .mainNewTitle {
    font-size: 0.9rem;
    color: #6046f0;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .mainNewDescription {
    font-size: 0.8rem;
    color: #0e0e0e;
    overflow: hidden;
    text-overflow: ellipsis;
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

  .secundaryNewTitle {
    font-size: 0.9rem;
    color: #6046f0;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .secundaryNewDescription {
    font-size: 0.7rem;
    color: #0e0e0e;
  }

  .secundaryNewImage {
    width: 200px;
    object-fit: contain;
    border-radius: 5px;
  }

  .newsSectionTitleContainer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .newsSectionTitle {
    width: 496px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .line {
    width: 100%;
    height: 4px;
    background-color: #6046f0;
  }

  .aroundWorldList {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: center;
    justify-content: space-between;
    gap: 56px;
  }

  .worldNewImage {
    width: 100%;
    height: 256px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 5px;
  }

  .worldNewitle {
    font-size: 0.9rem;
    color: #6046f0;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .worldNewDescription {
    font-size: 0.8rem;
    color: #0e0e0e;
    height: 56px;
    overflow: hidden;
  }

  .aroundWorldList li {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .worldNewText {
    width: 100%;
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    .breakingNews {
      display: flex;
      gap: 28px;
      justify-content: center;
      flex-direction: column;
    }

    .mainNewContainer {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 2rem;
      border-bottom: 1px solid #00000030;
    }

    .mainNewImage {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 1rem;
    }

    .breakingNewsList {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 28px;
      height: 100%;
      margin-bottom: 2rem;
    }

    .secundaryBreakingNewContainer {
      display: flex;
      gap: 16px;
      flex-direction: column;
    }

    .secundaryNewImage {
      width: 400px;
      object-fit: contain;
      border-radius: 5px;
    }

    .newsSectionTitle {
      width: 100%;
      font-size: 1.44rem;
      font-weight: 500;
    }

    .line {
      width: 50%;
      height: 2px;
    }

    .aroundWorldList {
      flex-direction: column;
      gap: 28px;
    }

    .aroundWorldList li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    .breakingNews {
      display: flex;
      gap: 28px;
      justify-content: center;
      flex-direction: column;
    }

    .mainNewContainer {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 2rem;
      border-bottom: 1px solid #00000030;
    }

    .mainNewImage {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 1rem;
    }

    .breakingNewsList {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 28px;
      height: 100%;
      margin-bottom: 2rem;
    }

    .secundaryBreakingNewContainer {
      display: flex;
      gap: 16px;
      flex-direction: column;
    }

    .secundaryNewImage {
      width: 400px;
      object-fit: contain;
      border-radius: 5px;
    }

    .newsSectionTitle {
      width: 100%;
      font-size: 1.44rem;
      font-weight: 500;
    }

    .line {
      width: 50%;
      height: 2px;
    }

    .aroundWorldList {
      flex-direction: column;
      gap: 28px;
    }

    .aroundWorldList li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  @media only screen and (max-width: 564px) {
    .breakingNews {
      display: flex;
      gap: 28px;
      justify-content: center;
      flex-direction: column;
    }

    .mainNewContainer {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 2rem;
      border-bottom: 1px solid #00000030;
    }

    .mainNewImage {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 1rem;
    }

    .breakingNewsList {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 28px;
      height: 100%;
      margin-bottom: 2rem;
    }

    .secundaryBreakingNewContainer {
      display: flex;
      gap: 16px;
      flex-direction: column;
    }

    .secundaryNewImage {
      width: 300px;
      object-fit: contain;
      border-radius: 5px;
    }

    .newsSectionTitle {
      width: 100%;
      font-size: 1.44rem;
      font-weight: 500;
    }

    .line {
      width: 50%;
      height: 2px;
    }

    .aroundWorldList {
      flex-direction: column;
      gap: 28px;
    }

    .aroundWorldList li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

export const NewsPageLinkContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #00000030;

  .newsLink {
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    color: #0e0e0e;
    text-decoration: none;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    .newsLink {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 564px) {
    .newsLink {
      font-size: 0.88rem;
    }
  }
`;
