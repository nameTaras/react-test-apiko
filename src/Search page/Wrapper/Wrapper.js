import React, {Component} from 'react';
import './Wrapper.css';
import Loader from '../../Loader/Loader';
import Tweets from './Tweets/Tweets.js';
import { withRouter } from 'react-router-dom';

const headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6',
    'Connection': 'keep-alive',
    'Host': 'oauth.io',
    'oauthio': 'k=KKkFUtwlpn3Nx3liPhGT2XA9aIg&oauthv=1&oauth_token=880779595519328256-gbY32O0b5BaVFDJkv1rijWYfnhHa1fO&oauth_token_secret=9WjE92tiNt6VCo3TTSa1Xjvd4RIo3vUUuf0tRYvAz8kPf',
    'Origin': 'http://localhost:3000',
    'Referer': 'http://localhost:3000/search?q=nasa',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36'
};

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {tweetObj: null, isLoading: true};
        this.tweetObj = this.tweetObj.bind(this);
    };

    tweetObj () {
        const key = this.props.history.location.search.split('=')[1];
        const url = `https://oauth.io/request/twitter/https%3A%2F%2Fapi.twitter.com%2F1.1%2Fsearch%2Ftweets.json%3Fq%3D${key}%26count%3D100`;

        fetch(url, {headers, method: 'GET'})
            .then(response => response.json())
            .then(tweets => {
                this.setState({
                    tweetObj: tweets,
                    isLoading: false
                });
            })
            .catch(console.log);
    };

    componentDidMount() {
        this.tweetObj();
    }

    render() {
        if (this.state.isLoading) {
            return <Loader/>
        }

        const { statuses } = this.state.tweetObj;

            return (
                <div className='tweetsWrapper'>
                    {statuses.map((item) => {
                            return <Tweets key={item.id} tweetObj={item}/>
                        }
                    )}
                </div>
        )
    }
}

export default withRouter(Wrapper);