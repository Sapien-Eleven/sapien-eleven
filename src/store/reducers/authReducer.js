const initialState = {
    walletAddress: '',
    walletBalance: '',
    connectedWallet: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WALLET_ADDRESS':
            return {
                ...state,
                walletAddress: action.payload.walletAddress
            }
        case 'SET_CONNECTED_WALLET':
            return {
                ...state,
                connectedWallet: action.connectedWallet
            }
        default:
            return state;
    }
}

export default authReducer