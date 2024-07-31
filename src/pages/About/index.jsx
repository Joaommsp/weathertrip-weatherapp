import { useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AboutContainer, AboutMeContainer } from "./style";

const About = () => {
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
      <AboutContainer>
        <AboutMeContainer>
          <h1 className="animated-item">
            WEB <br /> DEVELOPER
          </h1>
          <div className="myLinks animated-item">
            <a href="" className="portfolioLink">
              Portfólio
            </a>
          </div>
        </AboutMeContainer>
        <Footer />
      </AboutContainer>
    </>
  );
};

export default About;
