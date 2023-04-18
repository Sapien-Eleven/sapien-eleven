import { AppBar, Box, Button, Container, Toolbar, styled } from '@mui/material'
import '../styles/common.css'
import '@fontsource/roboto/700.css';
import SapienLogo from '../assets/logo.png'
import MetaMaskLogo from '../assets/metamask_logo.png'
import {consts} from '../const/consts'
import WalletModal from "./WalletModal";
import {memo, useCallback, useEffect, useState} from "react";
import {pixToRem} from "../const/uivar";
import {setWalletAddress} from "../store/actions/auth";
import {connect} from "react-redux";
import {useWeb3React} from "@web3-react/core";

const NavButton = styled(Button)((props) => ({
	marginRight: 69.5,
	height: 35,
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
	gap: pixToRem(10),
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
	const {account, active} = useWeb3React();
	const [walletModalVisible, setWalletModalVisible] = useState(false);
	const closeWalletModal = useCallback(() => setWalletModalVisible(false), [])
	useEffect(() => {
		if (active) {
			props.setWalletAddress(account)
		}
	}, []);
	const connectWallet = () => {
		if (active) {
			alert('Do you want to disconnect wallet?')
		} else {
			setWalletModalVisible(true);
		}
	}
	return (
		<AppBar className='TopBar' position='relative'>
			<Container maxWidth={false}>
				<Toolbar disableGutters sx={styles.toolbar}>
					<Box
						component={'img'}
						sx={styles.logo}
						alt='Sapien Eleven'
						src={SapienLogo}
					/>
					<Container sx={styles.navBar}>
						{
							consts.map((page, index) => {
								return (
									<NavButton key={index} >{page}</NavButton>
								)
							})
						}
					</Container>
					<WalletButton
						startIcon={<img src={MetaMaskLogo} style={styles.metamaskLogo} alt='metamask' />}
						onClick={connectWallet}
					>
						{active? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : 'CONNECT WALLET'}
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
		authReducer: state.authReducer
	}),
	dispatch => ({
		setWalletAddress: (address) => dispatch(setWalletAddress(address))
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
	logo: {
		width: pixToRem(201),
		height: pixToRem(80)
	},
	metamaskLogo: {
		width: pixToRem(15),
		height: pixToRem(15)
	}
}