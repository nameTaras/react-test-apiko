import React from 'react';
import HomePage from './HomePage/HomePage.js';
import SearchPage from './SearchPage/SearchPage.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/search' component={SearchPage}/>
            </Switch>
        </BrowserRouter>
    )
}
