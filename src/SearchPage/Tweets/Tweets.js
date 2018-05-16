import React, {Component} from 'react';

class Tweets extends Component {
    constructor(props) {
        super(props);
        this.createdAt = this.createdAt.bind(this);
    };

    createdAt() {
        const created = this.props.tweetObj.created_at.split(' ');
        const atOclock = created[3].split(':');
        return `${atOclock[0]}:${atOclock[1]} - ${created[1]} ${created[2]} ${created[5]}`;
    };

    render(){
        const { tweetObj } = this.props;

        return (
            <div className='tweet'>
                <img  className="photoOfUser" src={tweetObj.user.profile_image_url} alt='user`s avatar'/>
                <span className='userName'><strong>{tweetObj.user.name}</strong></span>
                <span className='screenName'>@{tweetObj.user.screen_name}</span>
                <p className='text'>{tweetObj.text}</p>
                <p className="createdAt">{this.createdAt()}</p>
                {tweetObj.entities.media &&
                    <img className='mediaUrl' src={tweetObj.entities.media[0].media_url_https} alt='mediaContent' />
                }
            </div>
        )
    }
}

export default Tweets;