import {AppBar, Box, Button, Container, Toolbar, styled, Stack} from '@mui/material'
import '../styles/common.css'
import '@fontsource/roboto/700.css';
import SapienLogo from '../assets/logo.png'
import MetaMaskLogo from '../assets/metamask_logo.png'
import {pages, wallets} from '../const/consts'
import WalletModal from "./WalletModal";
import {memo, useCallback, useEffect, useState} from "react";
import {pixToRem} from "../const/uivar";
import {setConnectedWallet, setWalletAddress} from "../store/actions/auth";
import {connect} from "react-redux";
import {useWeb3React} from "@web3-react/core";
import {useNavigate} from "react-router-dom";

const NavButton = styled(Button)((props) => ({
	height: 81,
	color: '#333333',
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 16,
	lineHeight: 18,
	borderRadius: 0
}));

const WalletButton = styled(Button)((props) => ({
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	paddingTop: pixToRem(10),
	paddingBottom: pixToRem(10),
	paddingLeft: pixToRem(20),
	paddingRight: pixToRem(20),
	height: pixToRem(35),
	backgroundColor: '#F8F8F8',
	color: '#333333',
	fontFamily: 'Roboto',
	fontSize: pixToRem(10),
	fontWeight: '700',
	fontStyle: 'normal',
	lineHeight: pixToRem(12),
	border: '1px solid #CA3C3D',
	borderRadius: 0,
}))

const Header = memo((props) => {
	const {account, active, deactivate} = useWeb3React();
	const [walletModalVisible, setWalletModalVisible] = useState(false);
	const closeWalletModal = useCallback(() => setWalletModalVisible(false), [])
	const navigate = useNavigate()
	useEffect(() => {
		if (active) {
			props.setWalletAddress(account)
		}
	}, [props]);
	const connectWallet = () => {
		if (active) {
			deactivate();
			props.setConnectedWallet('');
			props.setWalletAddress('');
		} else {
			console.log(account);
			console.log(active)
			setWalletModalVisible(true);
		}
	};
	const onNavigate = (page) => {
		navigate(`/${page.toLowerCase()}`)
	}
	return (
		<AppBar className='TopBar' sx={[props.page !== 'home' ? {borderBottom: '1px solid #F2F2F2'} : null, {boxShadow: 'none'}]} position={'sticky'}>
			<Container maxWidth={false}>
				<Toolbar disableGutters sx={styles.toolbar}>
					<Button
						sx={styles.logoBtn}
						onClick={() => onNavigate('')}
					>
						<Box
							component={'img'}
							sx={styles.logo}
							alt='Sapien Eleven'
							src={SapienLogo}
						/>
					</Button>
					<Stack
						// sx={styles.navBar}
						spacing={5}
						direction={'row'}
					>
						{
							pages.map((page, index) => {
								return (
									<NavButton
										key={index}
										onClick={() => onNavigate(page)}
										sx={
											props.page === page.toLowerCase() ?
												{
													borderBottom: '3px solid #CA3C3D'
												}
												:
												null
										}
									>
										{page}
									</NavButton>
								)
							})
						}
					</Stack>
					<WalletButton
						startIcon={<img src={props.connectedWallet === '' ? MetaMaskLogo : wallets[props.connectedWallet].remoteIcon} style={styles.metamaskLogo} alt='metamask' />}
						onClick={connectWallet}
					>
						{/*{active? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : 'CONNECT WALLET'}*/}
						{props.walletAddress !== '' ? `${props.walletAddress.substring(0, 4)}...${props.walletAddress.substring(props.walletAddress.length - 4)}` : 'CONNECT WALLET'}
					</WalletButton>
				</Toolbar>
			</Container>
			<WalletModal
				visible={walletModalVisible}
				closeModal={closeWalletModal}
			/>
		</AppBar>
	)
})
export default connect(
	state => ({
		walletAddress: state.authReducer.walletAddress,
		connectedWallet: state.authReducer.connectedWallet
	}),
	dispatch => ({
		setWalletAddress: (address) => dispatch(setWalletAddress(address)),
		setConnectedWallet: (wallet) => dispatch(setConnectedWallet(wallet))
	})
)(Header)

const styles = {
	toolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoBtn: {
		padding: '0px 0px'
	},
	logo: {
		width: pixToRem(201),
		height: pixToRem(80)
	},
	metamaskLogo: {
		width: pixToRem(15),
		height: pixToRem(15)
	}
}
