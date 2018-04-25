import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.dataOfInput = this.dataOfInput.bind(this);
    };

    dataOfInput(event) {
        event.preventDefault();
        this.props.click(this.input.value);
    }

    render() {
        return (
            <form>
                <input id="search" type="text" ref={(input) => this.input = input} placeholder="Search"/>
                <input id="submit" type="submit" onClick={this.dataOfInput}/>
            </form>
        )
    }
}

export default SearchBar;