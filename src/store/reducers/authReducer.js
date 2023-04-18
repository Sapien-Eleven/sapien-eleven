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
        default:
            return state;
    }
}

export default authReducer