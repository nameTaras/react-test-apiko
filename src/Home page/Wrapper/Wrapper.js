import React, {Component} from 'react';
import './Wrapper.css';
import SearchBarWithRouter from './SearchBar/SearchBar.js';

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <SearchBarWithRouter />
            </div>
        )
    }
}

export default Wrapper;