import MetaMaskIcon from "../assets/images/icons/metamask.png";
import RainbowIcon from '../assets/images/icons/rainbow.png';
import CoinbaseIcon from '../assets/images/icons/coinbase.png';
import WalletConnectIcon from '../assets/images/icons/walletconnect.png';
import PhantomIcon from '../assets/images/icons/phantom.jpg'
import {injected, walletconnect} from "./connectors";
import {useWeb3React} from "@web3-react/core";
import {useEffect, useState} from "react";
export const consts = ['ACADEMY', 'ABOUT', 'MARKETPLACE', 'RESOURCES', 'CONTACT'];

export const policies = ['PRIVACY POLICY', 'TERMS AND CONDITIONS', 'DISCLAMER', 'COOKIE POLICY'];

export const wallets = {
    'metamask': {
        icon: MetaMaskIcon,
        name: 'MetaMask',
        platform: 'Browser Extension',
        stepCount: 0,
        connector: injected,
        url: 'https://metamask.io/download'
    },
    'rainbow': {
        icon: RainbowIcon,
        name: 'Rainbow',
        platform: 'Mobile Wallet',
        stepCount: 3,
        url: 'https://learn.rainbow.me/get-started-with-rainbow'
    },
    'coinbase': {
        icon: CoinbaseIcon,
        name: 'Coinbase Wallet',
        platform: 'Mobile Wallet',
        stepCount: 3,
        url: 'https://www.coinbase.com/wallet'
    },
    'walletconnect': {
        icon: WalletConnectIcon,
        name: 'WalletConnect',
        stepCount: 1,
        connector: walletconnect,
        url: 'https://explorer.walletconnect.com/?type=wallet'
    },
    'phantom': {
        icon: PhantomIcon,
        name: 'Phantom',
        platform: 'Brower Extension',
        stepCount: 0,
        url: 'https://phantom.app/download'
    }
}

export const useEagerConnect = () => {
    const {active, activate} = useWeb3React();
    const [tried, setTried] = useState(false);

    useEffect(() => {
        injected.isAuthorized().then((isAuthorized) => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(() => {
                    setTried(true);
                });
            } else setTried(true);
        })
    }, []);

    useEffect(() => {
        if (!tried && active) setTried(true)
    }, [tried, active]);

    return tried;
}

export const useInactiveListener = (suppress = false) => {
    const {active, activate, error} = useWeb3React();

    useEffect(() => {
        const {ethereum} = window;

        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleConnect = () => {
                console.log('Handling connect event');
                activate(injected);
            };
            const handleChainChanged = (chainId) => {
                console.log(`Handling 'ChainChanged' with payload ${chainId}`);
                activate(injected)
            }
            const handleAccountsChanged = (accounts) => {
                console.log(`Handling 'AccountChanged' with payload ${accounts}`);
                if (accounts.length > 0) activate(injected)
            }
            const handleNetworkChanged = (networkId) => {
                console.log(`Handling 'NetworkChanged' with payload ${networkId}`);
                activate(injected)
            }

            ethereum.on('connect', handleConnect)
            ethereum.on('chainChanged', handleChainChanged)
            ethereum.on('accountsChanged', handleAccountsChanged)
            ethereum.on('networkChanged', handleNetworkChanged)

            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener('connect', handleConnect)
                    ethereum.removeListener('chainChanged', handleChainChanged)
                    ethereum.removeListener('accountsChanged', handleAccountsChanged)
                    ethereum.removeListener('networkChanged', handleNetworkChanged)
                }
            }
        }
    }, [active, error, suppress, activate])
}