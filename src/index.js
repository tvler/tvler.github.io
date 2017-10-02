import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'tachyons';
import 'typeface-work-sans';
import 'typeface-lato';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
