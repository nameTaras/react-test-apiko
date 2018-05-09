import React, {Component} from 'react';
import './Tweets.css';

class Tweets extends Component {
    constructor(props) {
        super(props);

    };

    render(){
        const { tweetObj } = this.props;

        return (
            <div>
                <h1>{tweetObj.user.name}</h1>
                <p>{tweetObj.text}</p>
            </div>
        )
    }
}

export default Tweets;