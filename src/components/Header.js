import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	styled,
	Stack,
	useMediaQuery,
	IconButton, Collapse, Typography,
} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import '../styles/common.css'
import SapienLogo from '../assets/logo.svg'
import SapienIcon from '../assets/sapien.svg'
import MetaMaskLogo from '../assets/metamask.svg'
import {pages, wallets} from '../const/consts'
import WalletModal from "./WalletModal";
import {memo, useCallback, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../const/uivar";
import {setConnectedWallet, setWalletAddress} from "../store/actions/auth";
import {connect} from "react-redux";
import {useWeb3React} from "@web3-react/core";
import {useNavigate} from "react-router-dom";
import SigninModal from "./SigninModal";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../const/consts";
import axios from "axios";

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
	const [showSigninModal, setShowSigninModal] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const navigate = useNavigate()
	const theme = useTheme();
	const md = useMediaQuery(theme.breakpoints.down('md'));
	const sm = useMediaQuery(theme.breakpoints.down('sm'));
	const lg = useMediaQuery(theme.breakpoints.down('lg'));

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
			setWalletModalVisible(true);
		}
	};
	const onNavigate = (page) => {
		navigate(`/${page.toLowerCase()}`);
	}
	const handleShowMobileMenu = () => {
		setShowMobileMenu(true)
	}
	const handleCloseMobileMenu = () => {
		setShowMobileMenu(false)
	}
	return (
		<>
			<AppBar
				className='TopBar'
				sx={{
					borderBottom: props.page !== 'home' || showMobileMenu ? '1px solid #F2F2F2' : null,
					boxShadow: 'none',
					pr: lg ? 0 : pixToRem(70),
					pl: lg ? 0 : pixToRem(70)
				}}
				position={'sticky'}
			>
				<Container maxWidth={false}>
					<Toolbar disableGutters sx={styles.toolbar}>
						<Button
							sx={styles.logoBtn}
							onClick={() => onNavigate('')}
						>
							<Box
								component={'img'}
								src={SapienLogo}
								sx={styles.logo}
							/>
						</Button>
						{
							!sm &&
							<Stack
								spacing={lg ? 1 : 5}
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
						}
						{
							!md &&
							<WalletButton
								startIcon={<img src={props.connectedWallet === '' ? MetaMaskLogo : wallets[props.connectedWallet].remoteIcon} style={styles.metamaskLogo} alt='metamask' />}
								onClick={connectWallet}
							>
								{/*{active? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : 'CONNECT WALLET'}*/}
								{(props.walletAddress !== '' || props.isAuthenticated) ? props.walletAddress !== '' ? `${props.walletAddress.substring(0, 4)}...${props.walletAddress.substring(props.walletAddress.length - 4)}` : 'CONNECTED' : 'CONNECT WALLET'}
							</WalletButton>
						}
						{
							sm && !showMobileMenu &&
							<IconButton
								size={'large'}
								onClick={handleShowMobileMenu}
							>
								<MenuIcon sx={{color: colors.red, fontSize: pixToRem(40)}} />
							</IconButton>
						}
						{
							sm && showMobileMenu &&
							<IconButton
								size={'large'}
								onClick={handleCloseMobileMenu}
							>
								<CloseIcon sx={{color: colors.red, fontSize: pixToRem(40)}} />
							</IconButton>
						}
					</Toolbar>
				</Container>
				<WalletModal
					visible={walletModalVisible}
					closeModal={closeWalletModal}
					showSigninModal={() => setShowSigninModal(true)}
				/>
				<SigninModal
					visible={showSigninModal}
					onClose={() => setShowSigninModal(false)}
				/>
			</AppBar>
			{
				sm &&
				<Box
					sx={{width: '100%', boxShadow: 4, borderTop: '1px solid #ccc'}}
				>
					<Collapse in={showMobileMenu}>
						<AcademyMenu isConnected={props.walletAddress !== '' || props.isAuthenticated} closeMenu={handleCloseMobileMenu} />
						<Box sx={styles.mobileMenuItem} onClick={() => navigate('/about')}>
							<Typography sx={styles.mobileMenuText}>ABOUT</Typography>
						</Box>
						<Box sx={styles.mobileMenuItem}>
							<Typography sx={styles.mobileMenuText}>MARKETPLACE</Typography>
						</Box>
						<Box sx={styles.mobileMenuItem} onClick={() => navigate('/media')}>
							<Typography sx={styles.mobileMenuText}>MEDIA</Typography>
						</Box>
						<ResourcesMenu closeMenu={handleCloseMobileMenu} />
						<Box sx={styles.mobileMenuItem} onClick={() => navigate('/contact')}>
							<Typography sx={styles.mobileMenuText}>CONTACT</Typography>
						</Box>
						<Box
							sx={[styles.mobileMenuItem, {alignItems: 'center'}]}
						>
							<Button
								sx={styles.mobileWalletBtn}
								endIcon={<img src={props.connectedWallet === '' ? MetaMaskLogo : wallets[props.connectedWallet].remoteIcon} style={{width: pixToRem(20), height: pixToRem(20)}} alt='metamask' />}
								onClick={connectWallet}
							>
								{(props.walletAddress !== '' || props.isAuthenticated) ? 'DISCONNECT WALLET' : 'CONNECT WALLET'}
							</Button>
						</Box>
					</Collapse>
				</Box>
			}
		</>
	)
})
export default connect(
	state => ({
		walletAddress: state.authReducer.walletAddress,
		connectedWallet: state.authReducer.connectedWallet,
		isAuthenticated: state.authReducer.isAuthenticated
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
		padding: '0px 0px',
		marginRight: pixToRem(30)
	},
	logo: {
		width: pixToRem(201),
		height: pixToRem(80)
	},
	icon: {
		width: pixToRem(25),
		height: pixToRem(62)
	},
	metamaskLogo: {
		width: pixToRem(15),
		height: pixToRem(15)
	},
	mobileMenuItem: {
		pt: 2, pb: 2, pl: 3, pr: 3,
		borderBottom: '1px solid #ccc',
	},
	mobileMenuText: {
		pt: 3, pb: 3,
		fontFamily: fonts.roboto,
		fontSize: pixToRem(18),
		fontWeight: '700',
	},
	mobileWalletBtn: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'black',
		fontFamily: fonts.roboto,
		fontSize: pixToRem(18),
		fontWeight: 700,
		fontStyle: 'normal',
		lineHeight: pixToRem(25),
		border: '1px solid #CA3C3D',
		borderRadius: 0,
		pt: 2, pb: 2
	},
	subMenuItem: {
		pt: 1, pb: 1,
	}
}

const AcademyMenu = (props) => {
	const [isExpanded, setExpaned] = useState(false)
	const [isSubExpanded, setSubExpanded] = useState(false)
	const [categories, setCategories] = useState([]);
	const [mainCategory, setMainCategory] = useState({});
    const [selectedCategory, selectCategory] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		if (props.isConnected) fetchCategories().then();
	}, [props.isConnected])
	const fetchCategories = async () => {
        const data = (await axios.get(`${StrapiURL}academy-categories`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'fields[0]': 'name',
                'fields[1]': 'icon',
                'fields[2]': 'parent_id',
                'populate': '*'
            }
        })).data;
        const result = data.data.reduce((acc, cur) => [...acc,
            {
                id: cur.id,
                name: cur.attributes.name,
                parent_id: cur.attributes.parent_id,
                active_icon: `${StrapiBaseURL}${cur.attributes.active_icon.data.attributes.url}`,
                inactive_icon: `${StrapiBaseURL}${cur.attributes.inactive_icon.data.attributes.url}`,
            }], []
        );
        setCategories(result);
        selectCategory(result.find(c => c.parent_id !== 0));
    }
	const handleExpandMenu = useCallback(
		() => {
			if (props.isConnected) setExpaned(!isExpanded)
			else navigate('/academy');
		}
	, [props.isConnected, isExpanded]);
	const toggleMenu = useCallback(
		(category) => {
			if (category.id === mainCategory.id) {
				setSubExpanded(!isSubExpanded);
			} else {
				if (!isSubExpanded) setSubExpanded(true);
			}
			setMainCategory(category);
		}
	, [mainCategory, isSubExpanded]);
	const handleClickSubMenu = useCallback(
		(subCategory) => {
			selectCategory(subCategory);
			navigate('/academy', {state: {category: subCategory}});
			props.closeMenu();
		}
	, []);
	return (
		<Box sx={styles.mobileMenuItem}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}
				onClick={handleExpandMenu}
			>
				<Typography sx={styles.mobileMenuText}>ACADEMY</Typography>
				{props.isConnected && (!isExpanded ? <ChevronRight sx={{marginLeft: pixToRem(10)}} /> : <ExpandMore sx={{marginLeft: pixToRem(10)}} />)}
			</Box>
			<Collapse in={isExpanded}>
				{
					categories.filter(c => c.parent_id === 0).map((category, index) => (
						<Box
							key={index}
							sx={styles.subMenuItem}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-start',
									alignItems: 'center'
								}}
								onClick={() => toggleMenu(category)}
							>
								<img
									src={categories.filter(c => c.parent_id === category.id).findIndex(item => item.id === selectedCategory.id) > -1 ? category.active_icon : category.inactive_icon}
									style={{marginRight: pixToRem(10)}}
									alt=""
								/>
								<Typography sx={styles.mobileMenuText}>{category.name}</Typography>
								{ mainCategory.id === category.id ? !isSubExpanded ? <ChevronRight sx={{marginLeft: pixToRem(10)}} /> : <ExpandMore sx={{marginLeft: pixToRem(10)}} /> : <ChevronRight sx={{marginLeft: pixToRem(10)}} />}
							</Box>
							<Collapse in={mainCategory.id === category.id && isSubExpanded}>
								{
									categories.filter(c => c.parent_id === category.id).map((subCategory, index) => (
										<Box key={index} sx={[styles.subMenuItem, {pl: 2}]}>
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'flex-start',
													alignItems: 'center'
												}}
												onClick={() => handleClickSubMenu(subCategory)}
											>
												<img
													src={selectedCategory.id === subCategory.id ? subCategory.active_icon : subCategory.inactive_icon}
													style={{marginRight: pixToRem(10)}}
													alt=""
												/>
												<Typography sx={styles.mobileMenuText}>{subCategory.name}</Typography>
											</Box>
										</Box>
									))
								}
							</Collapse>
						</Box>
					))
				}
			</Collapse>
		</Box>
	)
}

const ResourcesMenu = (props) => {
	const [isExpanded, setExpaned] = useState(false);
	const handleExpandMenu = useCallback(
		() => {
			setExpaned(!isExpanded)
		}
	, [isExpanded]);
	const [policies, setPolicies] = useState([]);
	const navigate = useNavigate();
    useEffect(() => {
        fetchPolicies().then()
    }, [])
    const fetchPolicies = async () => {
        const data = (await axios.get(`${StrapiURL}resources`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'fields[0]': 'title'
            }
        })).data;
        setPolicies(data.data.map(t => t.attributes.title));
    }
	const handleClickItem = (policy) => {
		props.closeMenu();
		navigate(`/resource`, {state: {policy: policy}});
	}

	return (
		<Box sx={styles.mobileMenuItem}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}
				onClick={handleExpandMenu}
			>
				<Typography sx={styles.mobileMenuText}>RESOURCES</Typography>
				{!isExpanded ? <ChevronRight sx={{marginLeft: pixToRem(10)}} /> : <ExpandMore sx={{marginLeft: pixToRem(10)}} />}
			</Box>
			<Collapse in={isExpanded}>
				{
					policies.map((item, index) => (
						<Box key={index} sx={styles.subMenuItem} onClick={() => handleClickItem(item)}>
							<Typography sx={styles.mobileMenuText}>{item}</Typography>
						</Box>
					))
				}
			</Collapse>
		</Box>
	)
}
