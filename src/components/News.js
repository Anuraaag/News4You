import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: true,
            currentPage: 1,
            pageCount: 0,
            pageSize: 3
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=800a198b3d174af8853a3b2854117755&page=${this.state.currentPage}&pageSize=${this.state.pageSize}`
        let data = await fetch(url)
        let json = await data.json()

        if (json.status === "ok" && json.totalResults > 0) {
            this.setState({ pageCount: Math.ceil(json.totalResults / this.state.pageSize) })
            this.setState({ articles: json.articles })
        }
    }


    updateData = async (offset) => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=800a198b3d174af8853a3b2854117755&page=${this.state.currentPage + offset}&pageSize=${this.state.pageSize}`
        let data = await fetch(url)
        let json = await data.json()
    
        if (json.status === "ok" && json.totalResults > 0) {
            this.setState({currentPage: this.state.currentPage + offset})        
            this.setState({ articles: json.articles })
        } 
    }
    

    loadPrev = async (e) => { 

        if(this.state.currentPage < this.state.pageCount){
            e.target.nextElementSibling.disabled = false
        }
        if(this.state.currentPage === 2){
            e.target.disabled = true
        }
        this.updateData(-1)
    }


    loadNext = async (e) => {

        if(this.state.currentPage >= 1){
            e.target.previousElementSibling.disabled = false
        }
        if(this.state.currentPage === this.state.pageCount - 1){
            e.target.disabled = true
        }
        this.updateData(1)
    } 


    render() {
        return (
            <div className='container my-4'>
                <h2> News Shorts</h2>
                <div className="row">
                    {this.state.articles.map(
                        element => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : `News Title`} imageUrl={element.urlToImage ? element.urlToImage : `\\`} newsUrl={element.url ? element.url : `\\`}
                                    description={element.description ? (element.description.length > 130 ? `${element.description.slice(0, 120)}...` : element.description) : `News Description`} />
                            </div>
                        }
                    )}
                </div>

                <div className='container my-5 d-flex justify-content-between'>
                    <button type='button' className="btn btn-sm btn-primary py-2 px-3 disabled" onClick={this.loadPrev}>&larr; &nbsp; Prev</button>
                    <button type='button' className="btn btn-sm btn-primary p-2 px-3" onClick={this.loadNext}>Next &nbsp; &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News