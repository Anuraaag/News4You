import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className="my-3">
                <div className="card">
                    <span className="d-flex justify-content-end"><span className="position-absolute badge text-white bg-danger">{source}</span></span>
                    <img className="card-img-top" src={imageUrl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-info px-3">Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem