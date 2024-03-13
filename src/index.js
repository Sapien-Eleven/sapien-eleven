import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@mui/material';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducer from './store/reducers/index'
import { Buffer } from 'buffer';
import { SnackbarProvider } from 'notistack';

import '@rainbow-me/rainbowkit/styles.css';

import {
    connectorsForWallets,
    RainbowKitProvider,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {
    coinbaseWallet,
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet,
    phantomWallet,
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Popular',
            wallets: [metaMaskWallet, rainbowWallet, coinbaseWallet, walletConnectWallet, phantomWallet],
        },
    ],
    {
        appName: 'Sapien Eleven',
        projectId: 'ddb5107e6f6790ae6a3ccb638d2dd4cc',
    }
);

const config = createConfig({
    connectors,
    chains: [mainnet, polygon, optimism, arbitrum, base, zora,]
})

const queryClient = new QueryClient();

window.Buffer = window.Buffer || Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));
let theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#333333'
        }
    }
})

const store = createStore(reducer);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider theme={darkTheme()}>
                        <Provider store={store}>
                            <SnackbarProvider
                                anchorOrigin={{horizontal: 'center', vertical: 'top'}}
                                autoHideDuration={3500}
                            >
                                <App/>
                            </SnackbarProvider>
                        </Provider>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
