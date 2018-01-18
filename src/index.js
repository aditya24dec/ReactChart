import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

render(<BrowserRouter>
			<App />
		</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
