import { useState, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { buscarNoticias } from "../../services/news-api";

import newsBanner from "../../assets/images/newsBanner.jpg";
import DefaultArticleImage from "../../assets/images/defaultImagearticle.png";

import {
  NewsContainer,
  NewsContentContainer,
  BannerContainer,
  SloganNewsContainer,
  NewsMainContainer,
} from "./styles";

const News = () => {
  const [news, setNews] = useState([]);
  const [economyNews, setEconomyNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const apiNews = await buscarNoticias("weather forecasts");
    const economy = await buscarNoticias("economy");

    const filteredNews = apiNews.articles.filter(
      (article) => article.title !== "[Removed]" && article.title != null
    );
    const filteredEconomyNews = economy.articles.filter(
      (article) => article.title !== "[Removed]" && article.title != null
    );

    setNews(filteredNews);
    setEconomyNews(filteredEconomyNews);
  };

  const dataFormat = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = String(date.getUTCFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

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

  return (
    <NewsContainer>
      <Header />
      <NewsContentContainer>
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
                Your guide to weather: Accurate forecasts, storm warnings, tips
                for preparing and more.
              </p>
            </SloganNewsContainer>
          </div>
        </BannerContainer>
        <NewsMainContainer className="animated-item">
          {news.length > 0 ? (
            <div className="breakingNews">
              {
                <div className="mainNewContainer" key={news[0].url}>
                  <div>
                    <p className="mainNewDescription">{news[0].description}</p>
                    <img
                      className="mainNewImage"
                      src={news[0].urlToImage}
                      alt=""
                    />
                    <div className="mainNewAbout">
                      <div className="authorContentContainer">
                        <img
                          className="authorImg"
                          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                        <div className="authorContainer">
                          <span className="author">{news[0].author}</span>
                          <span className="authorLabel">Author</span>
                        </div>
                      </div>
                      <div className="sourceContainer">
                        <span className="source">{news[0].source.name}</span>
                        <span className="sourceLabel">
                          {dataFormat(news[0].publishedAt)}
                        </span>
                      </div>
                      <a
                        href={news[0].url}
                        target="_blank"
                        className="mainNewUrl"
                      >
                        Acess article
                      </a>
                    </div>
                  </div>
                </div>
              }
              <ul className="breakingNewsList">
                {news.slice(1, 5).map((article) => (
                  <li key={article.url}>
                    <div className="secundaryBreakingNewContainer">
                      <div className="secundaryNewText">
                        <span className="newsSource">
                          {article.source.name}
                        </span>
                        <p className="secundaryNewDescription">
                          {article.description}
                        </p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="newsUrl"
                        >
                          Access article
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading news...</p>
          )}
          <div className="newsSectionTitleContainer">
            <h2 className="newsSectionTitle">Breaking news</h2>
            <div className="line"></div>
          </div>
          {news.length > 0 ? (
            <div className="breakingNewsContinue">
              {news.slice(5, 25).map((article) => (
                <div className="article" key={article.url}>
                  <img
                    className="worldNewImage"
                    src={
                      article.urlToImage
                        ? article.urlToImage
                        : DefaultArticleImage
                    }
                    alt=""
                  />
                  <div className="worldNewContainer">
                    <div className="articleAbout">
                      <span className="articlePublishedDate">
                        {dataFormat(article.publishedAt)}
                      </span>
                      <span className="articleSource">
                        {article.source.name}
                      </span>
                    </div>
                    <div className="worldNewText">
                      <h3 className="worldNewitle">{article.title}</h3>
                      <p className="worldNewDescription">
                        {article.description}
                      </p>
                    </div>
                    <div className="articleInfos">
                      <span className="articleAuthor">{article.author}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="newsUrl"
                      >
                        Access article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading news...</p>
          )}
          <div className="newsSectionTitleContainer">
            <h2 className="newsSectionTitle">International</h2>
            <div className="line"></div>
          </div>
          {news.length > 0 ? (
            <div className="breakingNewsContinue">
              {economyNews.slice(5, 25).map((article) => (
                <div className="article" key={article.url}>
                  <img
                    className="worldNewImage"
                    src={
                      article.urlToImage
                        ? article.urlToImage
                        : DefaultArticleImage
                    }
                    alt=""
                  />
                  <div className="worldNewContainer">
                    <div className="articleAbout">
                      <span className="articlePublishedDate">
                        {dataFormat(article.publishedAt)}
                      </span>
                      <span className="articleSource">
                        {article.source.name}
                      </span>
                    </div>
                    <div className="worldNewText">
                      <h3 className="worldNewitle">{article.title}</h3>
                      <p className="worldNewDescription">
                        {article.description}
                      </p>
                    </div>
                    <div className="articleInfos">
                      <span className="articleAuthor">{article.author}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="newsUrl"
                      >
                        Access article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading news...</p>
          )}
        </NewsMainContainer>
        <Footer />
      </NewsContentContainer>
    </NewsContainer>
  );
};

export default News;
