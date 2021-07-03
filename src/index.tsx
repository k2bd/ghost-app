import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './redux/store';
import { Spinner } from '@blueprintjs/core';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <PersistGate loading={<Spinner />} persistor={persistor}>
                <App />
            </PersistGate>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);
