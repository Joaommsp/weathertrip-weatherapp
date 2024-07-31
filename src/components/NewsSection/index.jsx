import { useEffect, useState } from "react";
import { buscarNoticias } from "../../services/news-api";

import { NewsContainer, NewsPageLinkContainer } from "./styles";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DefaultArticleImage from "../../assets/images/defaultImagearticle.png";

function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const apiNews = await buscarNoticias("weather forecasts");

    const news = apiNews.articles;
    const currentNew = news.filter(
      (currentNew) => currentNew.title != "[Removed]"
    );
    
    setNews(currentNew);
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
      {news.length > 0 ? (
        <div className="breakingNews">
          {
            <div className="mainNewContainer" key={news[0].title}>
              <a href={news[0].url} target="_blank" rel="noopener noreferrer">
                <img
                  className="mainNewImage"
                  src={DefaultArticleImage}
                  alt=""
                />
                <h3 className="mainNewTitle">{news[0].title}</h3>
                <p className="mainNewDescription">{news[0].description}</p>
              </a>
            </div>
          }
          <ul className="breakingNewsList">
            {news.slice(1, 4).map((article) => (
              <li key={article.title}>
                <a
                  className="secundaryBreakingNewContainer"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="secundaryNewText">
                    <h3 className="secundaryNewTitle">{article.title}</h3>
                    <p className="secundaryNewDescription">
                      {article.description}
                    </p>
                  </div>
                  <img
                    className="secundaryNewImage"
                    src={article.urlToImage}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading news...</p>
      )}
      <div className="newsSectionTitleContainer">
        <h2 className="newsSectionTitle animated-item">ALL AROUND THE WORLD</h2>
        <div className="line"></div>
      </div>
      {news.length > 0 ? (
        <div className="breakingNews">
          <ul className="aroundWorldList">
            {news.slice(5, 7).map((article) => (
              <li key={article.url}>
                <img
                  className="worldNewImage"
                  src={
                    article.urlToImage
                      ? article.urlToImage
                      : DefaultArticleImage
                  }
                  alt=""
                />
                <a
                  className="worldNewContainer"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="worldNewText">
                    <h3 className="worldNewitle">{article.title}</h3>
                    <p className="worldNewDescription">{article.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading news...</p>
      )}
      <NewsPageLinkContainer className="newsPageLinkContainer">
        <Link className="newsLink" to={"/news"}>
          All news
        </Link>
      </NewsPageLinkContainer>
    </NewsContainer>
  );
}

export default NewsSection;
