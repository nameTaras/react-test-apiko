import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { FormControl, Button } from 'react-bootstrap';
//import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
        this.changeSearch = this.changeSearch.bind(this);
        this.searchByKeyword = this.searchByKeyword.bind(this);
    };

    changeSearch = (e) => {
        e.preventDefault();
        const search = e.target.value.replace(/#/g, '%23');
        this.setState({search});
    };

    searchByKeyword = (e) => {
        e.preventDefault();
        this.props.history.push('/search?q=' + this.state.search);
    };

    render() {
        return (
            <form className='searchForm'>
                <FormControl
                    type="text"
                    placeholder="Search"
                    onChange={this.changeSearch}
                />
                <Button type='submit' bsSize='large' onClick={this.searchByKeyword}>Search</Button>
            </form>
        )
    }
}

export default withRouter(SearchBar);