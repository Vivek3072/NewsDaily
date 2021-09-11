import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../App.css";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8457750ad804346a7f788bd7dafca04&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,
    });
  }

  handleNext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8457750ad804346a7f788bd7dafca04&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading:false,
      });
    }
  };

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8457750ad804346a7f788bd7dafca04&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3" style={{zIndex:1}}>
          <h2 className="text-center heading">NewsDaily - Top Headlines</h2>
          <div className="spinnerbox" style={{height:"40px"}}>  
          { this.state.loading && <Spinner />}
           </div>
        
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
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
              disabled={this.state.page <= 1}
              className="btn btn-sm btn-dark"
              onClick={this.handlePrevious}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
              className="btn btn-sm btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
