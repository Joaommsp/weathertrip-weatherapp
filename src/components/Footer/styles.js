import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  background-color: #e7e4e3;

  padding: 2rem;

  .logo {
    width: 86px;
  }

  .links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    font-weight: 500;
    color: #3f3f3f;
  }

  .link {
    font-size: 0.8rem;
  }

  .selected {
    color: #967ef4;
  }

  .socialLinks {
    list-style: none;
    display: flex;
    gap: 28px;
  }

  .socialLinks img {
    width: 24px;
  }

  .usePorpuse {
    text-align: center;
    font-size: 0.8rem;
    color: #3f3f3f;
    font-weight: 500;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
  }

  @media only screen and (max-width: 564px) {
    .logo {
      width: 56px;
    }

    .links {
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .socialLinks img {
      width: 18px;
    }
  }
`;
