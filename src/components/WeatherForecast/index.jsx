import NewsSection from "../../components/NewsSection";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import ClipLoader from "react-spinners/HashLoader";

import { gsap } from "gsap";

import {
  ForecastHeader,
  WeatherForecastContainer,
  WeatherHeader,
  ExceptionMessageContainer,
  CityWeatherInfosContainer,
  RequestErrorMessage,
  SearchContainer,
  SearchCityInput,
  SearchCityButton,
  CardWeatherHour,
  LoadingScreen,
  WeatherListHours,
  WeatherHoursContainer,
  HighLightCard,
  NewsSectionContainer,
} from "./styles";

import { Icons } from "../../assets/images/svg/icons/icons";

import { getWheather, getWheatherDays } from "../../services/wheater-api";
import { getImage, getRandomNumber } from "../../services/unsplash-api";

const WeatherForecast = () => {
  const storedCityName = localStorage.getItem("cityName") || "Brasília";

  const [cityName, setCityName] = useState(storedCityName);
  const [country, setCountry] = useState("");
  const [cityTemp, setCityTemp] = useState("");
  const [cityMaxTemp, setCityMaxTemp] = useState("");
  const [cityMinTemp, setCityMinTemp] = useState("");
  const [cityHumidity, setCityHumidity] = useState("");
  const [cityWind, setCityWind] = useState("");
  const [cityDescription, setCityDescription] = useState("");
  const [loadingName, setLoadingName] = useState(true);
  const [requestMade, setRequestMade] = useState(true);
  const [repeatedRequest, setRepeatedRequest] = useState(false);
  const [imageBgUrl, setImageBgUrl] = useState("");
  const [conditionImg, setConditionImg] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState("");

  useEffect(() => {
    let index = getRandomNumber(1, 9);
    async function setImage() {
      let data = await getImage("rain");
      setImageBgUrl(data.results[index].urls.regular);
    }

    setImage();

    const intervalId = setInterval(() => {
      let index = getRandomNumber(1, 9);
      async function setImage() {
        let data = await getImage("night");
        setImageBgUrl(data.results[index].urls.regular);
      }
      setImage();
    }, 100000);

    setData();

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getFormattedDate();
  }, []);

  useEffect(() => {
    const setConditionImage = async () => {
      await setData();

      const cityImages = {
        "chuva leve": "http://openweathermap.org/img/wn/09n@2x.png",
        "chuva moderada": "http://openweathermap.org/img/wn/10n@2x.png",
        "nuvens dispersas": "http://openweathermap.org/img/wn/03n@2x.png",
        chuva: "http://openweathermap.org/img/wn/10d@2x.png",
        "céu limpo": "http://openweathermap.org/img/wn/01d@2x.png",
        "poucas nuvens": "http://openweathermap.org/img/wn/02d@2x.png",
        trovoada: "http://openweathermap.org/img/wn/11d@2x.png",
        neve: "http://openweathermap.org/img/wn/13d@2x.png",
        névoa: "http://openweathermap.org/img/wn/50d@2x.png",
        nublado: "http://openweathermap.org/img/wn/04n@2x.png",
        "chuva forte": "http://openweathermap.org/img/wn/09n@2x.png",
      };

      setConditionImg(cityImages[cityDescription] || null);
    };
    setConditionImage();
  }, [cityDescription]);

  useEffect(() => {
    gsap.utils.toArray(".animated-item").forEach((item) => {
      gsap.fromTo(
        item,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const items = gsap.utils.toArray(".animation-no-scroll");
    gsap.fromTo(
      items,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.5 }
    );
  }, []);

  async function setData() {
    try {
      let data = await getWheatherDays(cityName); // Dados a cada 5 horas
      let mainData = await getWheather(cityName); // Dados Ao vivo

      const setCityData = (data) => {
        const { name, main, wind, weather, sys } = data; // Desestruturando
        setCityName(name);
        setCityTemp(main.temp);
        setCityMaxTemp(main.temp_max);
        setCityMinTemp(main.temp_min);
        setCityHumidity(main.humidity);
        setCityWind(wind.speed);
        setCityDescription(weather[0].description);
        setCountry(sys.country);
      };

      setCityData(mainData);
      setLoadingName(false);
      setWeatherList(data.list);

      localStorage.setItem("cityName", data.city.name);
    } catch (error) {
      setRequestMade(false);

      const timer = setTimeout(() => {
        setRequestMade(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }

  const handleCityChange = (event) => {
    if (!loadingName) {
      setCityName(event.target.value);
    }
  };

  function disapearMessage() {
    const timer = setTimeout(() => {
      setRepeatedRequest(false);
    }, 5000);

    return () => clearTimeout(timer);
  }

  const verify = () => {
    if (cityName == storedCityName) {
      setRepeatedRequest(true);

      disapearMessage();
    } else {
      setRepeatedRequest(false);
    }
  };

  const loadingData = () => {
    setLoading(true);

    let loadingTime = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTime);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setData();
      verify();
      loadingData();
    }
  };

  const getFormattedDate = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    setCurrentData(`${dayOfWeek} ${day}, ${month} ${year}`);
  };

  const listWeathers = () => {
    return (
      <WeatherListHours>
        {weatherList.slice(0, 10).map((item, index) => (
          <CardWeatherHour key={index}>
            <div className="CardWeatherHour_Header">
              <span className="CardWeatherHour_data">
                {format(item.dt_txt, "MMMM do yyyy, h:mm:ss a")}
              </span>
              <span className="CardWeatherHour_temp">
                {Number(item.main.temp).toFixed(0)}°
              </span>
            </div>
            <div className="CardWeatherHour_Description">
              <span className="weatherDescription">
                {item.weather[0].description}
              </span>
              <div className="aditionalInfos">
                <span>
                  <img src={Icons.arrowUpPurple} alt="" />{" "}
                  {Number(item.main.temp_max).toFixed(0)}°
                </span>
                <span>
                  <img src={Icons.humidityIconPurple} alt="" />{" "}
                  {Number(item.main.humidity).toFixed(0)}%
                </span>
              </div>
            </div>
          </CardWeatherHour>
        ))}
      </WeatherListHours>
    );
  };
  //

  return (
    <>
      {loading && (
        <LoadingScreen>
          <ClipLoader
            color={"#6937F5"}
            loading={loading}
            cssOverride={""}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </LoadingScreen>
      )}
      {!loading && (
        <WeatherForecastContainer>
          <ForecastHeader>
            <div className="forecastHeaderText animated-item">
              <h1>Weather Forecast</h1>
              <span className="currentData">{currentData}</span>
            </div>
            <SearchContainer>
              <SearchCityInput
                className="searchCityInput "
                type="text"
                placeholder={cityName}
                onChange={handleCityChange}
                onKeyDown={handleKeyDown}
              />
              <SearchCityButton
                onClick={() => {
                  setData();
                  verify();
                  loadingData();
                }}
              >
                <img
                  src={Icons.search}
                  alt="Search Indicator"
                  className="searchButtonIcon"
                />
              </SearchCityButton>
            </SearchContainer>
          </ForecastHeader>
          <CityWeatherInfosContainer
            $imagebg={imageBgUrl}
            className="animation-no-scroll"
          >
            <span className="company">WeatherTrip forecast 2024©</span>
            <div className="gradient">
              <ExceptionMessageContainer>
                {!requestMade && (
                  <ExceptionMessage message="City not found"></ExceptionMessage>
                )}
                {repeatedRequest && (
                  <ExceptionMessage
                    message="
We are already in this city"
                  ></ExceptionMessage>
                )}
              </ExceptionMessageContainer>
              <WeatherHeader>
                <span className="cityTemp animation-no-scroll">{Number(cityTemp).toFixed(0)}°</span>
                <div>
                  <span className="cityName animation-no-scroll">{storedCityName}</span>
                  <span className="country animation-no-scroll ">{country}</span>
                  <img src={conditionImg} className="conditionImg animation-no-scroll" />
                  <span className="cityWeatherDescription animation-no-scroll">
                    {cityDescription}
                  </span>
                </div>
              </WeatherHeader>
              <div className="weatherComplementContainer animation-no-scroll">
                <div className="weatherComplement">
                  <span className="cityHumidity">
                    {" "}
                    <img src={Icons.humidity} alt="Humidity indicator" />{" "}
                    {cityHumidity}%
                  </span>
                  <span className="cityMaxTemp">
                    {" "}
                    <img src={Icons.arrowUp} alt="Max Temp indicator" />
                    Máxima: {Number(cityMaxTemp).toFixed(0)}°
                  </span>
                  <span className="cityMinTemp">
                    {" "}
                    <img src={Icons.arrowDown} alt="Min Temp indicator" />
                    Mínima: {Number(cityMinTemp).toFixed(0)}°{" "}
                  </span>
                  <span className="cityWind">
                    {" "}
                    <img src={Icons.wind} alt="Wind Speed indicator" />{" "}
                    {cityWind}
                    Km/h
                  </span>
                </div>
              </div>
            </div>
          </CityWeatherInfosContainer>
          <WeatherHoursContainer className="animated-item">
            <div className="weatherHoursHeader">
              <nav>
                <ul>
                  <li className="selected">Today</li>
                  <li>Week</li>
                </ul>
              </nav>
            </div>
            {listWeathers()}
            <div className="weatherHighlightsContainer animated-item">
              <h3>Today´s highlight</h3>
              <div className="highLightCardsContainer">
                <HighLightCard>
                  <span className="highLightData">{currentData}</span>
                  <div className="highLightsStats">
                    <div className="highlightStat">
                      <img src={Icons.arrowUpPurple} alt="" />
                      <span>{cityMaxTemp}</span>
                    </div>
                    <div className="highlightStat">
                      <img src={Icons.arrowDownPurple} alt="" />
                      <span>{cityMinTemp}</span>
                    </div>
                  </div>
                </HighLightCard>
                <HighLightCard>
                  <span className="highLightData">Temp. variation</span>
                  <div className="highLightsStats">
                    <div className="highlightStat">
                      <img src={Icons.thermometerIconPurple} alt="" />
                      <span>{(cityMaxTemp - cityMinTemp).toFixed(2)}°</span>
                    </div>
                  </div>
                </HighLightCard>
              </div>
            </div>
          </WeatherHoursContainer>

          <NewsSectionContainer>
            <h3>Breaking news</h3>
            <NewsSection />
          </NewsSectionContainer>
        </WeatherForecastContainer>
      )}
    </>
  );
};

const ExceptionMessage = ({ message }) => {
  return (
    <RequestErrorMessage>
      <img src={Icons.alertIcon} alt="" />
      <span>{message}</span>
    </RequestErrorMessage>
  );
};

ExceptionMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default WeatherForecast;
