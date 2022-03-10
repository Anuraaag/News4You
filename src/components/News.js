import React, { Component } from 'react'
import Load from './Load'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            currentPage: 1,
            totalResults: 0,
        }
        document.title = `${this.props.category} - News 4 U`
    }


    async fetchNews() {
		this.props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.currentPage}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
		this.props.setProgress(30)
        let json = await data.json()
		this.props.setProgress(70)
		return json
    }


    async componentDidMount() {
console.log("apikey -> "+this.props.news_api_key)
		let data = await this.fetchNews();

        if (data.status === "ok" && data.totalResults > 0) {
            this.setState({ loading: false })
            this.setState({ totalResults: data.totalResults })
            this.setState({ articles: data.articles })
			this.props.setProgress(100)
        }
    }


    fetchMoreData = async () => {
        let data = await this.fetchNews();

        if (data.status === "ok") {
            this.setState({ currentPage: this.state.currentPage + 1 })
            this.setState({ articles: this.state.articles.concat(data.articles) })
			this.props.setProgress(100)
        }
    }


    render() {
        return (
            <div className='container my-4'>
                <h2 className='text-center mb-5'> News 4 You – Top {this.props.category} Headlines</h2>

                {this.state.loading && <Load />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData} // Automatically awaits the response, so no need to use await
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Load />}
                    endMessage={
                        <div style={{ textAlign: 'center' }} className="my-5">
                            <p> <b>You're All Caught Up</b></p>
                            <p className="card-text"><small className="text-muted">You've seen all the latest headlines</small></p>
                        </div>
                    }
                    style={{ overflow: "hidden" }}
                >

                    <div className="row">
                        {this.state.articles.map(
                            (element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : `News Title`} imageUrl={element.urlToImage ? element.urlToImage : `https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg`} newsUrl={element.url ? element.url : `\\`}
                                        description={element.description ? (element.description.length > 130 ? `${element.description.slice(0, 120)}...` : element.description) : `News Description`}
                                        author={element.author ? element.author : `Unknown`} date={element.publishedAt ? (new Date(element.publishedAt)).toGMTString() : `some day`}
                                        source={element.source.name ? element.source.name : `Unknown`} />
                                </div>
                            }
                        )}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}

export default News