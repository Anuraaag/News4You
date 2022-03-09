import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lauren Goode",
            "title": "Apple Continues Its Slow March Toward the MacPad Future",
            "description": "The new iPad Air gets a desktop-grade chip. Consider it a sign of things to come.",
            "url": "https://www.wired.com/story/apple-macpad-ipad-mac-merging/",
            "urlToImage": "https://media.wired.com/photos/6227da79cca6acf55fb70b46/191:100/w_1280,c_limit/Gear-Apple-iPad-Air-Magic-Keyboard-alt.jpg",
            "publishedAt": "2022-03-09T12:00:00Z",
            "content": "Will Apple ever ship a MacBook laptop with a touchscreen? Most likely not. But next week, Apple will begin shipping a device that closely resembles a MacBook with a touchscreen.\r\nTo be clear, Apple d… [+2793 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Simon Hill",
            "title": "What Is Apple One, and Should You Subscribe?",
            "description": "Going all-in with the services bundle could be a smart move, especially for families. We break down what’s included and how much it costs.",
            "url": "https://www.wired.com/story/what-is-apple-one/",
            "urlToImage": "https://media.wired.com/photos/6226759ee5e91991368ff63a/191:100/w_1280,c_limit/Gear-Apple-One-Primer-top.jpg",
            "publishedAt": "2022-03-09T13:00:00Z",
            "content": "What if you scored a free trial of Apple TV+ for three months, or you have six free months of Apple Music through an offer you redeemed? Unfortunately, Apple One will cut those free trials down to th… [+3791 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sam Byford",
            "title": "The redesigned MacBook Air might have an M1, not an M2",
            "description": "Analyst Ming-Chi Kuo “strongly believes” that the upcoming MacBook Air redesign will feature an M1 chip, instead of the widely expected “M2” upgrade. The redesigned MacBook Air had previously been reported to have an M2 chip by Bloomberg’s Mark Gurman.",
            "url": "https://www.theverge.com/2022/3/9/22968489/m2-macbook-air-redesign-m1-ming-chi-kuo",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/VLyTECj67PbeQ0Doj3ieyG3KNZA=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22046475/vpavic_4291_20201113_0380.0.jpg",
            "publishedAt": "2022-03-09T05:58:38Z",
            "content": "Ming-Chi Kuo strongly believes the new Air has an M1\r\nPhoto by Vjeran Pavic / The Verge\r\nTF International Securities analyst Ming-Chi Kuo strongly believes that the upcoming MacBook Air redesign will… [+1274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Phillip Tracy",
            "title": "The New MacBook Air's Upgrades May Be Mostly Shell Deep",
            "description": "Going into Apple’s “Peek performance” event on Tuesday, we hoped—however unlikely it was—that Apple would debut a new MacBook Pro and MacBook Air to replace the products released back in 2020. Alas, when Time Cook walked off the virtual stage, no laptop had b…",
            "url": "https://gizmodo.com/apple-macbook-air-2022-redesign-rumors-release-date-mac-1848627960",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/65f3f722af95c966b545280de79f6013.jpg",
            "publishedAt": "2022-03-09T17:10:00Z",
            "content": "Going into Apples Peek performance event on Tuesday, we hopedhowever unlikely it wasthat Apple would debut a new MacBook Pro and MacBook Air to replace the products released back in 2020. Alas, when … [+2396 chars]"
        }    
    ]

    constructor(){
        super()
        this.state = {
            articles: this.articles,
            loading: false            
        }
    }

    render() {
        return (
          <div className='container my-4'>
            <h2> News Shorts</h2>
            <div className="row">
                {this.state.articles.map(
                    element => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description.length > 130 ? `${element.description.slice(0, 120)}...` : element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    }
                )}
            </div>
          </div>
        )
    }
}

export default News