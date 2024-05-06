import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Running from '../../assets/images/FooterRunning.jpg'
import MobileRunning from '../../assets/images/FooterMobileRunning.png'
import SapienMark from '../../assets/sapien.svg'
import {connect, useSelector} from "react-redux";
import {memo, useEffect, useState} from "react";
import {Twitter} from "@mui/icons-material";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import {useAccount} from "wagmi";

const Drop = memo(props => {
    const [content, setContent] = useState({})
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)
    const {isConnected} = useAccount()
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}landings`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section7'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    if (md) return (
        <Container
            maxWidth={false}
            sx={styles.mobilePanel}
        >
            <Box
                component={'div'}
                sx={styles.mobileExplaination}
            >
                <Box
                    component={'span'}
                    sx={styles.mobileWhiteTitle}
                >
                    {(!isConnected && !isAuthenticated) ? content.title1 : 'FULL'}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.mobileRedTitle}
                >
                    {(!isConnected && !isAuthenticated) ? content.title2 : 'TRANSPARENCY'}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.mobileComment}
                >
                    {
                        (!isConnected && !isAuthenticated) ?
                            content.description
                            : 'It\'s no secret that transparency is necessary to gain full trust and support of the community. Stay up to date on what the Sapien Eleven team is striving to accomplish.'
                    }
                </Box>
                {
                    (!isConnected && !isAuthenticated) ?
                        <Button
                            sx={styles.twitterBtn}
                            startIcon={<Box component={'img'} src={SapienMark}
                                            sx={{width: '24px', height: 'auto', marginRight: '10px'}}/>}
                        >
                            JOIN SAPIEN ELEVEN
                        </Button>
                        :
                        <Button
                            sx={styles.twitterBtn}
                            startIcon={<Twitter sx={{width: '24px', height: 'auto', marginRight: '10px'}}/>}
                        >
                            FOLLOW US ON TWITTER
                        </Button>
                }
            </Box>
        </Container>
    )
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'div'}
                sx={styles.explaination}
            >
                <Box
                    component={'span'}
                    sx={styles.whiteTitle}
                >
                    {(!isConnected && !isAuthenticated) ? content.title1 : 'FULL'}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    {(!isConnected && !isAuthenticated) ? content.title2 : 'TRANSPARENCY'}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {
                        (!isConnected && !isAuthenticated) ?
                            content.description
                            : 'It\'s no secret that transparency is necessary to gain full trust and support of the community. Stay up to date on what the Sapien Eleven team is striving to accomplish.'
                    }
                </Box>
                {
                    (!isConnected && !isAuthenticated) ?
                        <Button
                            sx={styles.twitterBtn}
                            startIcon={<Box component={'img'} src={SapienMark}
                                            sx={{width: '24px', height: 'auto', marginRight: '10px'}}/>}
                        >
                            JOIN SAPIEN ELEVEN
                        </Button>
                        :
                        <Button
                            sx={styles.twitterBtn}
                            startIcon={<Twitter sx={{width: '24px', height: 'auto', marginRight: '10px'}}/>}
                        >
                            FOLLOW US ON TWITTER
                        </Button>
                }
            </Box>
        </Container>
    )
})

export default connect(
    state => ({
        isAuthenticated: state.authReducer.isAuthenticated
    })
)(Drop)

const styles = {
    panel: {
        minHeight: '100vh',
        backgroundColor: colors.bgBlackColor,
        backgroundImage: `url(${Running})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: pixToRem(150),
        paddingBottom: pixToRem(150)
    },
    mobilePanel: {
        backgroundColor: colors.bgBlackColor,
        backgroundImage: `url(${MobileRunning})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        pt: 7, pb: 47
    },
    explaination: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: pixToRem(50)
    },
    mobileExplaination: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        m: 3
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(35),
        lineHeight: pixToRem(45)
    },
    mobileWhiteTitle: {
        fontFamily: fonts.roboto,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(40)
    },
    redTitle: {
        fontFamily: fonts.besan,
        color: colors.red,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(35),
        lineHeight: pixToRem(45)
    },
    mobileRedTitle: {
        fontFamily: fonts.besan,
        color: colors.red,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(30),
        lineHeight: pixToRem(45)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(23),
        lineHeight: pixToRem(35),
        color: colors.comment,
        marginTop: '1.6em'
    },
    mobileComment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(20),
        lineHeight: pixToRem(30),
        color: colors.comment,
        textAlign: 'center',
        marginTop: '1.6em'
    },
    twitterBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(25),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: '2em',
        paddingTop: pixToRem(12),
        paddingBottom: pixToRem(12),
        paddingLeft: pixToRem(45),
        paddingRight: pixToRem(45)
    }
}
