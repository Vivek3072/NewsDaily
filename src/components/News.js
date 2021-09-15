import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../App.css";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d8457750ad804346a7f788bd7dafca04&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handleNext = async () => {
    if (
      !(page + 1 >
        Math.ceil(totalResults / props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=d8457750ad804346a7f788bd7dafca04&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page + 1);
      setLoading(false);
    }
  };

  const handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=d8457750ad804346a7f788bd7dafca04&page=${page - 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
      setPage(page - 1);
      setLoading(false);
  };

  return (
    <>
      <div className="container my-3" style={{ zIndex: 1 }}>
        <h2 className="text-center heading">NewsDaily - Top Headlines</h2>
        <div className="spinnerbox" style={{ height: "40px" }}>
          {loading && <Spinner />}
        </div>

        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-lg-4 col-sm-6" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-sm btn-dark"
            onClick={handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn btn-sm btn-dark"
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default News;

News.defaultProps = {
  pageSize: 9,
  country: "in",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
};
