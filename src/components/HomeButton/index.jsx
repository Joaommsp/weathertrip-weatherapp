import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { HomeButtonElement } from "./styles";

function HomeButton({ borderColor, bgColor, color, text, href }) {
  return (
    <Link to={href}>
      <HomeButtonElement
        $backroundColor={bgColor}
        $bdColor={borderColor}
        $textColor={color}
      >
        {text}
      </HomeButtonElement>
    </Link>
  );
}

HomeButton.propTypes = {
  borderColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default HomeButton;
