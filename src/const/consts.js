import MetaMaskIcon from "../assets/images/icons/metamask.png";
import MetaMaskLogo from '../assets/metamask.svg'
import PhantomLogo from '../assets/phantom_logo.png'
import RainbowIcon from '../assets/images/icons/rainbow.png';
import CoinbaseIcon from '../assets/images/icons/coinbase.png';
import WalletConnectIcon from '../assets/images/icons/walletconnect.png';
import PhantomIcon from '../assets/images/icons/phantom.jpg'
import {injected, walletconnect} from "./connectors";
export const pages = ['ACADEMY', 'ABOUT', 'MARKETPLACE', 'MEDIA', 'CONTACT'];

export const policies = ['PRIVACY POLICY', 'TERMS AND CONDITIONS', 'DISCLAIMER', 'COOKIE POLICY', 'SHIPPING POLICY', 'RETURN POLICY'];

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

export const StrapiURL = 'http://162.247.131.12:3000/api/'
export const StrapiBaseURL = 'http://162.247.131.12:3000'
// export const StrapiURL = 'http://localhost:3000/api/'
// export const StrapiBaseURL = 'http://localhost:3000'
export const StrapiToken = '7c00ee7a00372d4c2bbf7255ab3e9b40f6aff3d0a117cc62039bd42419faa4b6f9f58e1319d4227dfea4f0fe57282abc4d9e1668f0917b42e4842b3b66f28d4768244fcae5c6fa6cea8d7b60d3b2353311a021ef910f6abb9bf0792a36153958652f39fce4e707d5318b937f8236b140e3d96175657eb8d6f4820b52c9f91279'

export const SERVER_URL = 'http://162.247.131.12:3030/'

export const EmailJSPublicKey = 'WB1Ewno2NUKmytZsO';

export const EmailJSServiceID = 'service_j61mg88';

export const EmailJSTemplateID = 'template_3x6oxnb';

export const dataCancerArr = [
    { name: '1990', uv: 1.04, pv: 1.64 },
    { name: '1991', uv: 1.1, pv: 1.74 },
    { name: '1992', uv: 1.13, pv: 1.97 },
    { name: '1993', uv: 1.17, pv: 1.99 },
    { name: '1994', uv: 1.21, pv: 1.87 },
    { name: '1995', uv: 1.25, pv: 1.94 },
    { name: '1996', uv: 1.37, pv: 2.27 },
    { name: '1997', uv: 1.26, pv: 2.41 },
    { name: '1998', uv: 1.23, pv: 2.57 },
    { name: '1999', uv: 1.3, pv: 2.94 },
    { name: '2000', uv: 1.33, pv: 3.31 },
    { name: '2001', uv: 1.37, pv: 3.75 },
    { name: '2002', uv: 1.39, pv: 4.12 },
    { name: '2003', uv: 1.41, pv: 4.59 },
    { name: '2004', uv: 1.43, pv: 4.74 },
    { name: '2005', uv: 1.46, pv: 4.8 },
    { name: '2006', uv: 1.5, pv: 4.75 },
    { name: '2007', uv: 1.54, pv: 4.79 },
    { name: '2008', uv: 1.56, pv: 4.82 },
    { name: '2009', uv: 1.58, pv: 4.97 },
    { name: '2010', uv: 1.58, pv: 5.1 },
    { name: '2011', uv: 1.61, pv: 5.08 },
    { name: '2012', uv: 1.6, pv: 5.07 },
    { name: '2013', uv: 1.63, pv: 4.79 },
    { name: '2014', uv: 1.66, pv: 4.95 },
    { name: '2015', uv: 1.7, pv: 4.95 },
    { name: '2016', uv: 1.73, pv: 5.21 },
    { name: '2017', uv: 1.75, pv: 5.64 },
    { name: '2018', uv: 1.75, pv: 5.93 },
    { name: '2019', uv: 1.75, pv: 6.44 },
];

export const dataDeathArr =  [
    {name:'1990', dv: 47.140, hv: 503.627, ov: 232.155, uv: 612},
    {name:'1991', dv: 49.036, hv: 501.715, ov: 237.071, uv: 672},
    {name:'1992', dv: 51.045, hv: 499.454, ov: 241.696, uv: 728},
    {name:'1993', dv: 54.543, hv: 510.254, ov: 252.046, uv: 775},
    {name:'1994', dv: 57.261, hv: 512.209, ov: 258.503, uv: 818},
    {name:'1995', dv: 60.141, hv: 516.928, ov: 265.915, uv: 866},
    {name:'1996', dv: 62.422, hv: 515.725, ov: 269.938, uv: 915},
    {name:'1997', dv: 64.520, hv: 514.302, ov: 273.597, uv: 966},
    {name:'1998', dv: 67.163, hv: 517.240, ov: 279.281, uv: 1019},
    {name:'1999', dv: 70.341, hv: 523.804, ov: 287.496, uv: 1079},
    {name:'2000', dv: 72.376, hv: 522.147, ov: 292.865, uv: 1157},
    {name:'2001', dv: 74.236, hv: 515.688, ov: 298.050, uv: 1257},
    {name:'2002', dv: 75.715, hv: 505.748, ov: 303.480, uv: 1366},
    {name:'2003', dv: 76.291, hv: 489.705, ov: 306.668, uv: 1476},
    {name:'2004', dv: 75.309, hv: 467.423, ov: 305.079, uv: 1583},
    {name:'2005', dv: 75.892, hv: 460.457, ov: 310.455, uv: 1694},
    {name:'2006', dv: 74.669, hv: 449.055, ov: 311.855, uv: 1807},
    {name:'2007', dv: 73.228, hv: 437.157, ov: 312.758, uv: 1922},
    {name:'2008', dv: 72.592, hv: 431.300, ov: 317.477, uv: 2008},
    {name:'2009', dv: 71.235, hv: 423.002, ov: 319.825, uv: 2106},
    {name:'2010', dv: 69.915, hv: 420.422, ov: 322.489, uv: 2181},
    {name:'2011', dv: 68.571, hv: 426.323, ov: 329.075, uv: 2254},
    {name:'2012', dv: 67.741, hv: 430.713, ov: 334.656, uv: 2347},
    {name:'2013', dv: 67.235, hv: 437.970, ov: 341.827, uv: 2405},
    {name:'2014', dv: 67.583, hv: 445.918, ov: 349.779, uv: 2527},
    {name:'2015', dv: 68.860, hv: 456.936, ov: 359.659, uv: 2674},
    {name:'2016', dv: 70.534, hv: 465.558, ov: 369.396, uv: 2795},
    {name:'2017', dv: 72.240, hv: 467.248, ov: 373.207, uv: 2905},
    {name:'2018', dv: 75.082, hv: 481.551, ov: 384.191, uv: 3021},
    {name:'2019', dv: 77.719, hv: 495.201, ov: 393.859, uv: 3175},
];
