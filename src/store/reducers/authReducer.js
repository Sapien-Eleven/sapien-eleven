const initialState = {
    isAuthenticated: false,
    user: {},
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
        case 'SIGN_IN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            }
        default:
            return state;
    }
}

export default authReducer