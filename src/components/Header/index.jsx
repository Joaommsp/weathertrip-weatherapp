import { Link } from "react-router-dom";

import Logo from "../../assets/images/weatherTrip-logo.png";

import { HeaderContainer, HeaderLinks, HeaderFooter } from "./style";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

import { Icons } from "../../assets/images/svg/icons/icons";

const Header = () => {
  const [data, setData] = useState("");
  const [iconMenu, setIconMenu] = useState(Icons.menuIcon);

  useEffect(() => {
    const items = gsap.utils.toArray(".headerLink");
    gsap.fromTo(
      items,
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.5 }
    );
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".headerLinkMobile",
      { x: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: .3, stagger: 0.3 }
    );
  }, [iconMenu]);

  const getData = () => {
    let dataBrasilia = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    setData(`${dataBrasilia} GMT-3`);
  };

  const controlHeader = () => {
    const headerLinks = document.querySelector(".headerLinks");

    headerLinks.classList.toggle("headerClosed");

    if (iconMenu == Icons.menuIcon) {
      setIconMenu(Icons.closeMenuIcon);
    } else {
      setIconMenu(Icons.menuIcon);
    }
  };

  return (
    <HeaderContainer>
      <div className="dataContainer">
        <marquee className="data" direction="left">
          {data}
        </marquee>
      </div>
      <HeaderLinks>
        <img src={Logo} alt="Logo Weather Trip" className="logo " />
        <ul className="headerLinks headerClosed">
          <li>
            <Link to="/" className="homeLink headerLink ">
              Home
            </Link>
          </li>
          <li>
            <Link className="headerLink  " to="/home">
              Weather Forecast
            </Link>
          </li>
          <li>
            <Link className="headerLink " to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="headerLink" to="/about">
              About
            </Link>
          </li>
          <li>
            <HeaderFooter className="headerFooter headerLinkMobile">
              <ul className="links">
                <li className="link selected "> Useless link </li>
                <li className="link "> Useless link </li>
                <li className="link "> Useless link </li>
                <li className="link "> Useless link </li>
              </ul>
              <ul className="socialLinks ">
                <li>
                  {" "}
                  <a href="">
                    <img src={Icons.linkedinPurple} alt="" />{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="">
                    <img src={Icons.gittHubPurple} alt="" />{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="">
                    <img src={Icons.instagramIconPurple} alt="" />{" "}
                  </a>
                </li>
              </ul>
              <span className="usePorpuse">
                Website developed by João Marcos for personal and non-commercial
                <br />
                purposes, follow me on social media.
              </span>
            </HeaderFooter>
          </li>
        </ul>
      </HeaderLinks>
      <button onClick={() => controlHeader()} className="controlBTN">
        <img src={iconMenu} alt="" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
