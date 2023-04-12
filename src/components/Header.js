import { AppBar, Box, Button, Container, Toolbar, styled } from '@mui/material'
import '../styles/common.css'
import '@fontsource/roboto/700.css';
import SapienLogo from '../assets/logo.png'
import MetaMaskLogo from '../assets/metamask_logo.png'
import {pages} from '../const/pages'

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
	padding: 10,
	gap: 10,
	width: 152.43,
	height: 35,
	backgroundColor: '#F8F8F8',
	color: '#333333',
	fontFamily: 'Roboto',
	fontSize: 10,
	fontWeight: 700,
	fontStyle: 'normal',
	lineHeight: 12,
	border: '1px solid #CA3C3D',
	borderRadius: 0,
}))

export function Header() {
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
							pages.map((page, index) => {
								return (
									<NavButton key={index} >{page}</NavButton>
								)
							})
						}
					</Container>
					<WalletButton startIcon={<img src={MetaMaskLogo} style={styles.metamaskLogo} alt='metamask' />}>
						CONNECT WALLET
					</WalletButton>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

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
		width: '201px',
		height: '80px'
	},
	metamaskLogo: {
		width: '15px',
		height: '15px'
	}
}