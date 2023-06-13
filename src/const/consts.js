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
import Meditation_active_icon from "../assets/images/academy/meditation_active_icon";
import Meditation_inactive_icon from "../assets/images/academy/meditation_inactive_icon";
import Mindfulness_icon from "../assets/images/academy/mindfulness_icon";
import Mental_inactive_icon from "../assets/images/academy/mental_inactive_icon";
import Mental_active_icon from "../assets/images/academy/mental_active_icon";
import Physical_icon from "../assets/images/academy/physical_icon";
import Fitness_icon from "../assets/images/academy/fitness_icon";
import Yoga_active_icon from "../assets/images/academy/yoga_active_icon";
import Yoga_inactive_icon from "../assets/images/academy/yoga_inactive_icon";
import Mobility_icon from "../assets/images/academy/mobility_icon";
import Nutritional_icon from "../assets/images/academy/nutritional_icon";
import Recipes_active_icon from "../assets/images/academy/recipes_active_icon";
import Recipes_inactive_icon from "../assets/images/academy/recipes_inactive_icon";
import Diet_icon from "../assets/images/academy/diet_icon";
import Eattoheal_icon from "../assets/images/academy/eattoheal_icon";
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

export const academyCategories = {
    mental: {
        activeIcon: <Mental_active_icon />,
        inactiveIcon: <Mental_inactive_icon />,
        label: 'mental',
        subCategories: [
            {
                label: 'meditation',
                activeIcon: <Meditation_active_icon />,
                inactiveIcon: <Meditation_inactive_icon />,
            },
            {
                label: 'mindfulness',
                activeIcon: <Mindfulness_icon stroke={'black'} />,
                inactiveIcon: <Mindfulness_icon stroke={'#999'} />,
            }
        ]
    },
    physical: {
        activeIcon: <Physical_icon stroke={'#CA3C3D'} />,
        inactiveIcon: <Physical_icon stroke={'#999'} />,
        label: 'physical',
        subCategories: [
            {
                activeIcon: <Fitness_icon stroke={'black'} />,
                inactiveIcon: <Fitness_icon stroke={'#999'} />,
                label: 'fitness'
            },
            {
                activeIcon: <Yoga_active_icon />,
                inactiveIcon: <Yoga_inactive_icon />,
                label: 'yoga'
            },
            {
                activeIcon: <Mobility_icon stroke={'black'} />,
                inactiveIcon: <Mobility_icon stroke={'#999'} />,
                label: 'mobility'
            }
        ]
    },
    nutritional: {
        activeIcon: <Nutritional_icon stroke={'#CA3C3D'} />,
        inactiveIcon: <Nutritional_icon stroke={'#999'} />,
        label: 'nutritional',
        subCategories: [
            {
                activeIcon: <Recipes_active_icon stroke={'black'} />,
                inactiveIcon: <Recipes_inactive_icon stroke={'#999'} />,
                label: 'recipes'
            },
            {
                activeIcon: <Diet_icon stroke={'black'} />,
                inactiveIcon: <Diet_icon stroke={'#999'} />,
                label: 'diets'
            },
            {
                activeIcon: <Eattoheal_icon stroke={'black'} />,
                inactiveIcon: <Eattoheal_icon stroke={'#999'} />,
                label: 'eat to heal'
            }
        ]
    }
}
