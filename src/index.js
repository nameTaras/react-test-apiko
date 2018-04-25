import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './Wrapper/Wrapper.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wrapper/>, document.getElementById('root'));
registerServiceWorker();
