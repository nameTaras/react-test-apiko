import React, {Component} from 'react';
import './Wrapper.css';
import Loader from '../../Loader/Loader';
import Tweets from './Tweets/Tweets.js';
import { withRouter } from 'react-router-dom';
import {OAuth} from "oauthio-web/dist/oauth";

class Wrapper extends Component {
    constructor(props) {
        OAuth.initialize('KKkFUtwlpn3Nx3liPhGT2XA9aIg');
        super(props);
        this.state = {twitterObj: null, tweetObj: null, isLoading: true};

        this.auth = this.auth.bind(this);
        this.tweetObj = this.tweetObj.bind(this);

        this.auth();
    };

    tweetObj () {
        const key = this.props.history.location.search.split('=')[1];

        let promise = new Promise((resolve, reject) => {
            resolve(
                this.state.twitterObj.get(
                    `https://api.twitter.com/1.1/search/tweets.json?q=${key}&result_type=popular&count=100`
                )
            )
        });

        promise.then(
            response => {
                this.setState({
                    tweetObj: response,
                    isLoading: false
                });
            },
            error => {
                console.log(error);
            });
    };

    auth() {
        OAuth.popup('twitter')
            .done((twitter) => {
                this.setState({
                    twitterObj: twitter,
                });
                this.tweetObj();
            })
            .fail(function (err) {
                //handle error with err
            });
    }

    render() {
        if (this.state.isLoading) {
            return <Loader/>
        }

        const { statuses } = this.state.tweetObj;
        console.log(statuses);

            return (
                <div>
                    {statuses.map((item) => {
                            return <Tweets key={item.id} tweetObj={item}/>
                        }
                    )}
                </div>
        )
    }
}

export default withRouter(Wrapper);