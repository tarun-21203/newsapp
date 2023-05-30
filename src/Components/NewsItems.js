import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItems extends Component {
  static propTypes = {}

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card text-center my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'93%', zIndex:'1'}}>
            {source}
          </span>
          <img src={imageUrl ? imageUrl : "https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small> </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems