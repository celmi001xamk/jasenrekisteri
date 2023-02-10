import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MemberProvider } from './context/MemberContext';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MemberProvider>
                <App />
            </MemberProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);