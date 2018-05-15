import React, {Component} from 'react';
//import './SearchPage.css';
import Loader from '../Loader/Loader';
import Tweets from './Tweets/Tweets.js';
import { withRouter } from 'react-router-dom';

const headers = {
    'oauthio': 'k=KKkFUtwlpn3Nx3liPhGT2XA9aIg&oauthv=1&oauth_token=880779595519328256-gbY32O0b5BaVFDJkv1rijWYfnhHa1fO&oauth_token_secret=9WjE92tiNt6VCo3TTSa1Xjvd4RIo3vUUuf0tRYvAz8kPf'
};

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {tweetObj: null, isLoading: true};
        this.tweetObj = this.tweetObj.bind(this);
    };

    tweetObj () {
        const key = this.props.history.location.search.split('=')[1];
        const url = `https://oauth.io/request/twitter/https://api.twitter.com/1.1/search/tweets.json?q=${key}&count=100`;

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