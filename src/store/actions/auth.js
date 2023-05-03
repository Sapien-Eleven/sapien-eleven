export const setWalletAddress = (address) => {
    return {
        type: 'SET_WALLET_ADDRESS',
        payload: {walletAddress: address}
    }
}

export const setConnectedWallet = (wallet) => {
    return {
        type: 'SET_CONNECTED_WALLET',
        connectedWallet: wallet
    }
}