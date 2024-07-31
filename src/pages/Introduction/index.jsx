import { useEffect } from "react";

import { Icons } from "../../assets/images/svg/icons/icons";
import NewsSection from "../../components/NewsSection";

import Header from "../../components/Header";
import HomeButton from "../../components/HomeButton";
import Footer from "../../components/Footer";

import Banner from "../../assets/images/weatherTrip-banner.png";
import WeatherAppPrev from "../../assets/images/weather-app-preview.png";
import mainBanner from "../../assets/images/womanNatureBanner.jpg";
import newsBanner from "../../assets/images/newsBanner.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  IntroContainer,
  BannerContainer,
  SloganContainer,
  ContentContainer,
  AboutTheAppContainer,
  SloganNewsContainer,
  SocialLinksContainer,
  NewsSectionContainer,
} from "./style";

const Introduction = () => {
  gsap.registerPlugin(ScrollTrigger);

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
    gsap.utils.toArray(".socialLinks").forEach((item) => {
      gsap.fromTo(
        item,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      <IntroContainer>
        <ContentContainer>
          <BannerContainer
            $bgImage={mainBanner}
            $gradientDirection="linear-gradient(
      221deg,
      rgba(2, 0, 36, 0) 35%,
      rgba(0, 0, 0, 0.8991690646396594) 100%
    );"
            $bgPosition="center"
          >
            <div className="bannerGradient">
              <SloganContainer className="animated-item">
                <h1>WeatherTrip</h1>
                <p>
                  Your Weather, Your Journey: Always a Step Ahead with Our
                  <strong> Weather Forecasting App</strong>!
                </p>
              </SloganContainer>
            </div>
          </BannerContainer>
          <div className="wheatherAppPrevContainer+">
            <img
              className="weatherAppPrev animated-item"
              src={WeatherAppPrev}
              alt=""
            />
          </div>
          <AboutTheAppContainer>
            <div className="aboutNewsContainer animated-item">
              <p className="aboutNewsText">
                The best way to be<strong> Weather-Ready i</strong>s to avoid hazardous weather –
                change plans, leave early, pack it in
              </p>
              <HomeButton
                text="Explore"
                borderColor="#6046F0"
                bgColor="transparent"
                color="#6046F0"
                href="/home"
              />
            </div>
            <div className="aboutAppContainer">
              <img className="appBanner" src={Banner} alt="" />
              <div className="aboutAppText animated-item">
                <h2 className="aboutAppTitle">Don´t guess the Weather.</h2>
                <p className="aboutNewsText alignRight">
                  Stay prepared for upcomming weather with
                  <strong> daily wheather news</strong>.
                </p>
                <HomeButton
                  text="Get started"
                  borderColor="#6046F0"
                  bgColor="#6046F0"
                  color="#FEFAF9"
                  href="/news"
                />
              </div>
            </div>
          </AboutTheAppContainer>
          <BannerContainer
            $bgImage={newsBanner}
            $gradientDirection="background: rgb(2,0,36);
background: linear-gradient(137deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%);"
            $bgPosition="top"
          >
            <div className="bannerGradient">
              <SloganNewsContainer className="animated-item">
                <h1>
                  WeatherTrip.<span>news</span>
                </h1>
                <p>
                  Your guide to weather: Accurate forecasts, storm warnings,
                  tips for preparing and more.
                </p>
              </SloganNewsContainer>
              <SocialLinksContainer className="socialLinks">
                <a href="">
                  <img className="icon" src={Icons.instagramIcon} alt="" />
                </a>
                <a href="">
                  <img className="icon" src={Icons.linkedin} alt="" />
                </a>
                <a href="">
                  <img className="icon" src={Icons.gittHub} alt="" />
                </a>
              </SocialLinksContainer>
            </div>
          </BannerContainer>
          <NewsSectionContainer>
            <div className="newsSectionTitleContainer">
              <h2 className="newsSectionTitle socialLinks">LASTEST NEWS</h2>
              <div className="line"></div>
            </div>
            <NewsSection />
          </NewsSectionContainer>
        </ContentContainer>
        <Footer />
      </IntroContainer>
    </>
  );
};

export default Introduction;
