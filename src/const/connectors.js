import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const POLLING_INTERVAL = 12000

const RpcURL = 'https://mainnet.infura.io/v3/95c1fa6b73fd4bc5a0d80fa97dc8210d';

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const walletconnect = new WalletConnectConnector({
    infuraId: '95c1fa6b73fd4bc5a0d80fa97dc8210d',
    rpc: {1: RpcURL},
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
})

