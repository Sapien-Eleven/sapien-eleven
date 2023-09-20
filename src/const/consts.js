import MetaMaskIcon from "../assets/images/icons/metamask.png";
import MetaMaskLogo from '../assets/metamask_logo.png'
import PhantomLogo from '../assets/phantom_logo.png'
import RainbowIcon from '../assets/images/icons/rainbow.png';
import CoinbaseIcon from '../assets/images/icons/coinbase.png';
import WalletConnectIcon from '../assets/images/icons/walletconnect.png';
import PhantomIcon from '../assets/images/icons/phantom.jpg'
import {injected, walletconnect} from "./connectors";
import Brenton from '../assets/images/about/brenton.png'
import Svensei from '../assets/images/about/sv3nsei.jpg'
export const pages = ['ACADEMY', 'ABOUT', 'MARKETPLACE', 'RESOURCES', 'CONTACT'];

export const policies = ['PRIVACY POLICY', 'TERMS AND CONDITIONS', 'DISCLAMER', 'COOKIE POLICY'];

export const wallets = {
    'metamask': {
        icon: MetaMaskIcon,
        remoteIcon: MetaMaskLogo,
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
        remoteIcon: PhantomLogo,
        name: 'Phantom',
        platform: 'Brower Extension',
        stepCount: 1,
        url: 'https://phantom.app/download'
    }
}

export const teamMembers = [
    {
        name: 'BRENTON',
        role: 'Lead Content Creator',
        image: Brenton
    },
    {
        name: 'BRETT',
        role: 'Brand Strategy and Development',
        image: ''
    },
    {
        name: 'SVENSEI',
        role: 'UI/UX Designer',
        image: Svensei
    },
    {
        name: 'AMRA',
        role: 'Illustrator & Graphic Designer',
        image: ''
    },
    {
        name: 'WANG',
        role: 'Full Stack Developer',
        image: ''
    },
    {
        name: 'JIN',
        role: 'Full Stack Developer',
        image: ''
    },
    {
        name: 'KEVIN',
        role: 'Senior Financial Analyst',
        image: ''
    },
    {
        name: 'STE',
        role: 'Life and Mental Health Coach',
        image: ''
    },
    {
        name: 'KIERSTON',
        role: 'Chef',
        image: ''
    },
    {
        name: 'KAT',
        role: 'Fitness Coach',
        image: ''
    },
    {
        name: 'EMILIE',
        role: 'Yogini',
        image: ''
    },
    {
        name: 'HYGEIA',
        role: 'Wellness AI',
        image: ''
    }
]

export const StrapiURL = 'http://162.247.131.12:3000/api/'
export const StrapiBaseURL = 'http://162.247.131.12:3000'
export const StrapiToken = '19af21921143805a3c206a83551206a0c9e745e3b4a3943897d2a315985df9955da0f1563c615c0b6cb557e38b374f3eedbdf12ad9415f721e4efd2446162b8fbdb185b71387e8c3ba9b85f08b820ed14646e3a2146e7d697e5183ebf0b1863bb0b5c405d97e8bce3f02d7f5fde5e2f7b5b8955ea0b1ec636bf2baaa81a7547a'
