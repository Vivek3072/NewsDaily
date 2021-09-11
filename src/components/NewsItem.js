import React, { Component } from "react";
import Loading from "../Loading.png";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            zIndex:2
          }}
        >
          <div className="card my-3" style={{ width: "18rem" }}>
              <img
                src={imageUrl?imageUrl:Loading}
                style={{width:"288px" , height :"150px"}}
                className="card-img-top"
                alt="News Related Pic"
              />    
            <div className="card-body">
              <h5 className="card-title">
                {title.length > 45 ? title.slice(0, 45) + "..." : title}
              </h5>
              <p className="card-text">
                {description.length > 95
                  ? description.slice(0, 94)
                  : description}
                <span className="fw-light">
                 
                   {description.length ===0 ? "Click on the Read More button to find out more details about the news." :  description.length > 95 ? "...Read more" : "" }
                </span>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn rounded btn-sm btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
