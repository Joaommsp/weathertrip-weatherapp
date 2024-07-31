import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const WeatherForecastContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 4rem;

  @media only screen and (max-width: 564px) {
    margin-top: 3rem;
    padding: 0rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    margin-top: 3rem;
    padding: 1rem;
  }
`;

export const ForecastHeader = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #0e0e0e;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .currentData {
    color: #5e5e5e;
    font-size: 0.9rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    .forecastHeaderText {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 1.44rem;
      margin-bottom: 0;
    }

    .currentData {
      color: #5e5e5e;
      font-size: 0.88rem;
    }
  }

  @media only screen and (max-width: 564px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    .forecastHeaderText {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 1.44rem;
      margin-bottom: 0;
    }

    .currentData {
      color: #5e5e5e;
      font-size: 0.88rem;
    }
  }
`;

export const WeatherHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  span {
    margin: 0 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .cityName {
    font-size: 2em;
    color: #ffffff;
    text-shadow: 4px -1px 3px rgba(0, 0, 0, 0.3);
  }

  .country {
    font-size: 0.8rem;
    color: #b5b5b5;
  }

  .cityTemp {
    font-size: 4rem;
    font-weight: 500;
    color: #ffffff;
    text-shadow: 4px -1px 3px rgba(0, 0, 0, 0.3);
  }

  .conditionImg {
    width: 64px;
    margin-right: 2rem;
  }

  .cityWeatherDescription {
    font-size: 1rem;
    color: #b5b5b5;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    position: absolute;
    top: 4rem;

    .cityWeatherDescription {
      font-size: 0.88rem;
      color: #b5b5b5;
    }
  }

  @media only screen and (max-width: 564px) {
    position: absolute;
    top: 4rem;

    .cityName {
      font-size: 1.44em;
    }

    .cityTemp {
      font-size: 3rem;
    }

    .cityWeatherDescription {
      font-size: 0.88rem;
      color: #b5b5b5;
    }
  }
`;

export const CityWeatherInfosContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${(props) => props.$imagebg});
  background-size: cover;
  background-position: bottom;
  margin-bottom: 2rem;
  transition: 0.5s ease-in-out;
  border-radius: 16px;

  position: relative;

  .company {
    position: absolute;
    top: 1rem;
    color: #b1b1b1;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .gradient {
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: rgb(0, 0, 0);
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.921640974752019) 31%,
      rgba(0, 0, 0, 0.6407420983475246) 93%
    );
    border-radius: 16px;
  }

  .weatherComplementContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
  }

  .weatherComplementContainer div {
    margin-bottom: 1rem;
  }

  .weatherComplement {
    padding: 0rem 0.5rem;
    display: flex;
    color: ${theme.primaryColor};

    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .weatherComplement img {
    width: 18px;
    margin: 0.5rem;
  }

  .weatherComplement span {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  .cityMaxTemp {
    margin-right: 3.5rem;
  }

  .cityMaxTemp,
  .cityMinTemp {
    font-size: 1rem;
    color: #ffffff;
  }

  .cityHumidity {
    margin-right: 1rem;
  }

  .cityWind,
  .cityHumidity {
    font-size: 1rem;
    color: #ffffff;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    height: 70vh;

    .weatherComplementContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
    }

    .weatherComplement {
      width: 100%;
      padding: 0rem 0.5rem;
      display: flex;
      flex-direction: column;
      color: ${theme.primaryColor};

      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .cityMaxTemp {
      margin-right: 0.5rem;
    }
  }

  @media only screen and (max-width: 564px) {
    height: 70vh;

    .company {
      font-size: 0.7rem;
    }

    .weatherComplementContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
    }

    .weatherComplement {
      width: 100%;
      padding: 0rem 0.5rem;
      display: flex;
      flex-direction: column;
      color: ${theme.primaryColor};

      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .cityMaxTemp {
      margin-right: 0.5rem;
    }
  }
`;

export const CardWeatherHour = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 2px solid #919191;

  padding: 1rem;

  &:first-child {
    border-color: #8167f2;
  }

  span:first-child {
    margin-right: 1rem;
    font-size: 0.8rem;
  }

  span {
    color: #0e0e0e;
    font-size: 0.8rem;
  }

  .CardWeatherHour_data {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .CardWeatherHour_temp {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .CardWeatherHour_Header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .CardWeatherHour_Description {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .weatherDescription {
    color: #919191;
    display: block;
    margin-bottom: 0.5rem;
  }

  .aditionalInfos {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .aditionalInfos span {
    display: flex;
    align-items: center;
  }

  .aditionalInfos img {
    width: 18px;
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    width: 100%;
    min-width: 236px;
    padding: 0.8rem;

    .CardWeatherHour_temp {
      font-size: 1.44rem;
      font-weight: 500;
    }
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    width: 100%;
    min-width: 200px;
    padding: 0.8rem;

    .CardWeatherHour_temp {
      font-size: 1.44rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 564px) {
    width: 100%;
    min-width: 200px;
    padding: 0.8rem;

    .CardWeatherHour_temp {
      font-size: 1.44rem;
      font-weight: 500;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 564px) {
    width: 100%;
  }
`;

export const SearchCityInput = styled.input`
  width: 364px;
  height: 38px;
  border: 0;
  border-radius: 25px;
  padding: 0 1rem;
  background-color: #e7e7e7;
  color: #3f3f3f;
  position: relative;
  font-family: "Poppins", sans-serif;

  font-size: 0.9rem;
  padding-left: 3rem;

  @media only screen and (max-width: 564px) {
    width: 100%;
    font-size: 0.88rem;
  }
`;

export const SearchCityButton = styled.button`
  border: 0;
  border-radius: 25px;
  background-color: transparent;
  cursor: pointer;

  color: ${theme.secondaryColor};
  text-align: center;

  .searchButtonIcon {
    width: 18px;
    position: absolute;
    top: 9px;
    left: 1rem;
    transition: transform 0.3s ease-in-out;
  }

  .searchButtonIcon:hover {
    transform: scale(1.1);
  }
`;

export const ExceptionMessageContainer = styled.div`
  height: 50px;
  width: 200px;
  text-align: center;
  position: absolute;
  top: 2rem;
`;

export const RequestErrorMessage = styled.div`
  width: 200px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;

  img {
    width: 24px;
    margin-bottom: 0.5rem;
  }

  span {
    color: #ffffff;
    font-size: 1.2rem;
  }

  span {
    font-size: 1rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    top: 5rem;
    span {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 564px) {
    top: 5rem;
    span {
      font-size: 0.7rem;
    }
  }
`;

export const LoadingScreen = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primaryColor};

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    height: 70vh;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    height: 70vh;
  }

  @media only screen and (max-width: 564px) {
    height: 70vh;
  }
`;

export const WeatherListHours = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 0rem;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    width: 10px;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.secondaryColor};
    border-radius: 100px;
  }

  @media only screen and (min-width: 700px) and (max-width: 964px) {
    overflow-x: scroll;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 564px) and (max-width: 700px) {
    overflow-x: scroll;
    padding-bottom: 1rem;
  }

  @media only screen and (max-width: 564px) {
    overflow-x: scroll;
    padding-bottom: 1rem;
  }
`;

export const WeatherHoursContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  .weatherHoursHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
  }

  nav {
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 16px;
  }

  ul li {
    font-size: 1rem;
    font-weight: 500;
    color: #5e5e5e;
  }

  .selected {
    color: #0e0e0e;
  }

  .weatherHighlightsContainer {
    width: 100%;
  }

  .highLightCardsContainer {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  .weatherHighlightsContainer h3 {
    font-size: 1rem;
    color: #0e0e0e;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 564px) {
  }
`;

export const HighLightCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  background-color: #e7e7e7;
  padding: 1rem;
  border: 2px solid #919191;
  border-radius: 16px;

  .highLightData {
    font-size: 0.9rem;
    color: #0e0e0e;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .highLightsStats {
    width: 100%;
    display: flex;
    gap: 28px;
  }

  .highlightStat {
    display: flex;
    align-items: center;
  }

  .highlightStat span {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

export const NewsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    width: 100%;
    text-align: left;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;
