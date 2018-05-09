import React, {Component} from 'react';
import './App.css';
import WrapperHome from './Home page/Wrapper/Wrapper.js';
import WrapperSearchPage from './Search page/Wrapper/Wrapper.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={WrapperHome}/>
                    <Route path='/search' component={WrapperSearchPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;