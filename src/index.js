import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@mui/material';
import {Web3ReactProvider} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducer from './store/reducers/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
let theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#333333'
        }
    }
})
const getLibrary = (provider) => {
    let library;
    if (provider.chainType === 'hmy') library = provider.blockchain;
    else {
        library = new Web3Provider(provider);
        library.pollingInterval = 12000;
    }
    return library;
}

const store = createStore(reducer);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <App/>
                </Web3ReactProvider>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
