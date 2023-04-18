export const setWalletAddress = (address) => {
    return {
        type: 'SET_WALLET_ADDRESS',
        payload: {walletAddress: address}
    }
}