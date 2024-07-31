import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getWheather } from "../../services/wheater-api";

import { CardContainer } from "./styles";

const ClimateCard = ({ cityNameCard }) => {
  const [cityName, setCityName] = useState(cityNameCard);
  const [cityTemp, setCityTemp] = useState("");
  const [cityDescription, setCityDescription] = useState("");

  useEffect(() => {
    setData();
  }, []);

  async function setData() {
    try {
      let data = await getWheather(cityName);
      setCityName(data.name);
      setCityTemp(data.main.temp);
      setCityDescription(data.weather[0].description);
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <CardContainer>
      <div className="cardHeader">
        <span className="cityTemp">{Number(cityTemp).toFixed(0)}°</span>
        <span className="cityName">{cityName}</span>
      </div>
      <span className="cityDescription">{cityDescription}</span>
    </CardContainer>
  );
};

ClimateCard.propTypes = {
  cityNameCard: PropTypes.string.isRequired,
};

export default ClimateCard;
