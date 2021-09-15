import React from "react";
import Loading from "../Loading.png";

const NewsItem =(props)=>{
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
                src={props.imageUrl?props.imageUrl:Loading}
                style={{width:"288px" , height :"150px"}}
                className="card-img-top"
                alt="News Related Pic"
              />    
            <div className="card-body">
              <h5 className="card-title">
                {props.title.length > 45 ? props.title.slice(0, 45) + "..." : props.title}
              </h5>
              <p className="card-text">
                {props.description.length > 95
                  ? props.description.slice(0, 94)
                  : props.description}
                <span className="fw-light">
                 
                   {props.description.length ===0 ? "Click on the Read More button to find out more details about the news." :  props.description.length > 95 ? "...Read more" : "" }
                </span>
              </p>
              <a
                href={props.newsUrl}
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

export default NewsItem;
