import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <>
          <div className="card my-3" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="News Related Photo" />
            <div className="card-body" >
              <h5 className="card-title">{title.length>45? title.slice(0,45) + "..." : title }</h5>
              <p className="card-text">
               {description.length>95? description.slice(0,94): description }  
                <span className="fw-light"> {description.length>95? "...Read more": ""}</span>
              </p>
              <a href={newsUrl} target="_blank" className="btn rounded btn-sm btn-primary">
               Read More
              </a>
            </div>
          </div>
          </>
        )
    }
}

export default NewsItem