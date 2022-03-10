import React, { Component } from 'react'
import Load from './Load'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 3,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            currentPage: 1,
            pageCount: 0,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=b7dc570cdef848a3b1ae9518a91eb77a&page=${this.state.currentPage}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let json = await data.json()

        // console.log(json.totalResults) //70 here but only 38 results given + shows 38 only when hit on browser
        if (json.status === "ok" && json.totalResults > 0) {
            // this.setState({ pageCount: Math.ceil(json.totalResults / this.props.pageSize) })
            this.setState({ pageCount: 13 }) // hardcoding because of the above mentioned bug in API
            this.setState({ articles: json.articles })
        }
    }


    updateData = async (offset) => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&apiKey=b7dc570cdef848a3b1ae9518a91eb77a&page=${this.state.currentPage + offset}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let json = await data.json()
    
        if (json.status === "ok" && json.totalResults > 0) {
            this.setState({ loading: false })
            this.setState({currentPage: this.state.currentPage + offset})        
            this.setState({ articles: json.articles })
        } 
    }
    

    loadPrev = async (e) => { 
        if(this.state.currentPage > 1) {

            if(this.state.currentPage < this.state.pageCount){
                e.target.nextElementSibling.disabled = false
            }
            if(this.state.currentPage === 2){
                e.target.disabled = true
            }
            this.setState({ articles: [] })
            this.setState({ loading: true })
            this.updateData(-1)
        }
    }


    loadNext = async (e) => {

        console.log(this.state.currentPage)
        console.log(this.state.pageCount)
        console.log("-----")
        if(this.state.currentPage < this.state.pageCount) {

            if(this.state.currentPage >= 1){
                e.target.previousElementSibling.disabled = false
            }
            if(this.state.currentPage === this.state.pageCount - 1){
                e.target.disabled = true
            }
            this.setState({ articles: [] })
            this.setState({ loading: true })
            this.updateData(1)
        }
    } 


    render() {
        return (
            <div className='container my-4'>
                <h2 className='text-center mb-5'> News 4 You - Shorts</h2>
                
                {this.state.loading && <Load />}
                
                <div className="row">
                    {this.state.articles.map(
                        element => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : `News Title`} imageUrl={element.urlToImage ? element.urlToImage : `https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg`} newsUrl={element.url ? element.url : `\\`}
                                    description={element.description ? (element.description.length > 130 ? `${element.description.slice(0, 120)}...` : element.description) : `News Description`} 
                                    author={element.author ? element.author : `Unknown`} date={element.publishedAt ? (new Date(element.publishedAt)).toGMTString() : `some day`}
                                    source={element.source.name ? element.source.name : `Unknown`} />
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