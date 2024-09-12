import { useEffect } from "react";

import Header from "../../components/Header";
import WeatherForecast from "../../components/WeatherForecast";
import ClimateCard from "../../components/MainClimatesCard";
import Footer from "../../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HomeContainer } from "./styles";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <>
      <Header />
      <HomeContainer>
        <div className="weatherContainer">
          <WeatherForecast />
        </div>
        <div className="galleryCards__Container">
          <div className="cardContainer">
            <ClimateCard cityNameCard="Brasília" />
            <ClimateCard cityNameCard="Rio de Janeiro" />
            <ClimateCard cityNameCard="São Paulo" />
            <ClimateCard cityNameCard="Fortaleza" />
            <ClimateCard cityNameCard="Goiânia" />
            <ClimateCard cityNameCard="Belo Horizonte" />
            <ClimateCard cityNameCard="Curitiba" />
            <ClimateCard cityNameCard="Recife" />
            <ClimateCard cityNameCard="Aracaju" />
          </div>
        </div>
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
