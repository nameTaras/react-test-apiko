import React, {Component} from 'react';
import './Wrapper.css';
import SearchBar from './SearchBar/SearchBar.js';

class Wrapper extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="wrapper">
                <SearchBar />
            </div>
        )
    }
}

export default Wrapper;