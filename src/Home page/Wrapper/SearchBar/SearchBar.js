import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: '', path: ''};

        this.resultOfSearch = this.resultOfSearch.bind(this);
    };

    resultOfSearch(event) {
        event.preventDefault();
        const search = this.input.value;
        const path = "/search?" + search;
        this.setState({
            search,
            path
        });
    };

    render() {
        return (
            <form>
                <input id="search" type="text" ref={(input) => this.input = input} />
                <a href={this.state.path}>
                    <button id="button" type="button" onClick={this.resultOfSearch}>Search</button>
                </a>
            </form>
        )
    }
}

export default SearchBar;