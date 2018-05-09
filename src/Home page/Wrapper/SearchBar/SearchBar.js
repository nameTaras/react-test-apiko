import React, {Component} from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
import { FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};

        this.changeSearch = this.changeSearch.bind(this);
        this.searchByKeyword = this.searchByKeyword.bind(this);
    };

    changeSearch = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value});
    };

    searchByKeyword = (e) => {
        e.preventDefault();
        this.props.history.push('/search?q=' + this.state.search);
    };

    render() {
        return (
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Button>
                                <Button onClick={this.searchByKeyword}>Search</Button>
                            </InputGroup.Button>
                            <FormControl type="text" className="form-control" placeholder="Search"
                                         onChange={this.changeSearch} />
                        </InputGroup>
                    </FormGroup>
        )
    }
}

export default withRouter(SearchBar);