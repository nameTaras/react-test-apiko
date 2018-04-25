import React, {Component} from 'react';
import './Wrapper.css';
import SearchBar from './SearchBar/SearchBar.js';

class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.resultOfSearch = this.resultOfSearch.bind(this);
    };

    resultOfSearch(event) {
        console.log(event);
    };

    render() {
        return (
            <div id="wrapper">
                <SearchBar click={this.resultOfSearch}/>
            </div>
        )
    }
}

export default Wrapper;