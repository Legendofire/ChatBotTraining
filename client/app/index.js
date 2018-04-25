import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './modules/App';

render(
    (
        <Provider store={store}>
            <App>
                <h1>Hi</h1>
            </App>
        </Provider>
    ), document.getElementById('app')
);
