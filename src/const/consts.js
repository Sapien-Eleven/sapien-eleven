import MetaMaskIcon from "../assets/images/icons/metamask.png";
import MetaMaskLogo from '../assets/metamask_logo.png'
import PhantomLogo from '../assets/phantom_logo.png'
import RainbowIcon from '../assets/images/icons/rainbow.png';
import CoinbaseIcon from '../assets/images/icons/coinbase.png';
import WalletConnectIcon from '../assets/images/icons/walletconnect.png';
import PhantomIcon from '../assets/images/icons/phantom.jpg'
import {injected, walletconnect} from "./connectors";
import {useWeb3React} from "@web3-react/core";
import {useEffect, useState} from "react";
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

export const academyCategories = ['mindfulness', 'meditation', 'yoga', 'mobility', 'fitness', 'recipes', 'diets', 'superfoods'];
