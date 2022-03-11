import React, { useState, useEffect } from 'react'
import Load from './Load'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = props => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const fetchNews = async () => {
        props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API}&page=${currentPage}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        props.setProgress(30)
        let json = await data.json()
        props.setProgress(70)
        return json
    }


    useEffect( async () => {
        let data = await fetchNews()
        if (data.status === "ok" && data.totalResults > 0) {

            document.title = `${props.category} - News 4 U`
            setLoading(false) // don't need the top scroll again after the first load
            setTotalResults(data.totalResults) // one time populate
            setArticles(data.articles) // one time populate
            setCurrentPage(currentPage + 1)
            props.setProgress(100)
        }
    }, [])


    const fetchMoreData = async () => {
        let data = await fetchNews();

        if (data.status === "ok") {
            setCurrentPage(currentPage + 1)
            setArticles(articles.concat(data.articles))
            props.setProgress(100)
        }
    }

    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5' style={{marginTop: '70px'}}> Top {props.category} Headlines</h2>

            {loading && <Load />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData} // Automatically awaits the response, so no need to use await
                hasMore={articles.length < totalResults}
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
                    {articles.map(
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


News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News