import React from 'react';
//import './HomePage.css';
import SearchBarWithRouter from './SearchBar/SearchBar.js';

export default () => {
    return (
        <div className="wrapper">
            <img
                className='twitterIcon'
                src='https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png'
                alt='twitterIcon'
            />
            <h2>Find interesting tweets</h2>
            <SearchBarWithRouter />
        </div>
    )
}