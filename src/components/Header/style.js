import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6046F0",
};

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 5000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fefaf9;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.32);

  .dataContainer {
    width: 100%;
    background-color: #b5b5b5;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.2rem 0;
    user-select: none;
  }

  .data {
    font-size: 0.8rem;
    color: #ffffff;
    font-weight: 500;
  }

  .logo {
    width: 50px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .controlBTN {
    position: absolute;
    right: 1rem;
    top: 2rem;
    background-color: transparent;
    border: none;
    display: none;
  }

  .controlBTN img {
    width: 24px;
  }

  .controlBTN:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 700px) {
    .logo {
      width: 25px;
    }
  }

  @media only screen and (max-width: 564px) {
    .headerClosed {
      display: none;
    }

    .controlBTN {
      display: block;
    }
  }
`;

export const HeaderLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 8rem;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    font-size: 0.9rem;
  }

  ul li a {
    text-decoration: none;
    font-weight: 500;
    color: #0e0e0e;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in;
  }

  ul li a:hover {
    border-bottom: 2px solid ${theme.secondaryColor};
  }

  .homeLink {
    text-decoration: none;
    color: ${theme.secondaryColor};
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in;
  }

  .homeLink:hover {
    border-bottom: 2px solid ${theme.secondaryColor};
  }

  @media only screen and (min-width: 700px) and (max-width: 1064px) {
    padding: 0.5rem 5rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    padding: 0.5rem 1rem;

    ul li a {
      font-size: 0.8rem;
    }

    .homeLink {
      font-size: 0.8rem;
      border: 0;
    }
  }

  @media only screen and (max-width: 564px) {
    padding: 0.5rem 1rem;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .headerLinks {
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
    }

    .headerLinks li a {
      font-size: 0.8rem;
    }

    .homeLink {
      font-size: 0.8rem;
      border: 0;
    }
  }
`;

export const HeaderFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  padding-bottom: 2rem;
  margin-top: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid #0e0e0e30;

  display: none;

  .links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 500;
    color: #0e0e0e;
  }

  .link {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .socialLinks {
    border-top: 1px solid #0e0e0e30;
    padding-top: 2rem;
    list-style: none;
    display: flex;
    gap: 28px;
  }

  .socialLinks img {
    width: 18px;
  }

  .usePorpuse {
    text-align: left;
    width: 80%;
    font-size: 0.7rem;
    color: #3f3f3f;
    font-weight: 500;
  }

  @media only screen and (max-width: 564px) {
    display: flex;
  }
`;
