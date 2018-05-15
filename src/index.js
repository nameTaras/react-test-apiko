import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<App/>,document.getElementById('root'));
registerServiceWorker();
