import PropTypes from "prop-types";

import { Icons } from "../../assets/images/svg/icons/icons";

import Logo from "../../assets/images/weatherTrip-logo.png";

import { FooterContainer } from "./styles";

function Footer(props) {
  return (
    <FooterContainer>
      <img className="logo" src={Logo} alt="" />
      <ul className="links">
        <li className="link selected"> Useless link </li>
        <li className="link"> Useless link </li>
        <li className="link"> Useless link </li>
        <li className="link"> Useless link </li>
      </ul>
      <ul className="socialLinks">
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
    </FooterContainer>
  );
}

Footer.propTypes = {};

export default Footer;
