import {memo} from "react";
import {Box, Button, Container} from "@mui/material";
import Bg from '../../assets/images/academy/intro_bg.png'
import {colors, fonts, pixToRem} from "../../const/uivar";
import MetaMaskLogo from '../../assets/metamask_logo.png'
import Wellness from '../../assets/images/academy/wellness.png'

const IntroPanel = memo(props => {
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                SAPIEN ELEVEN
            </Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                WELLNESS ACADEMY
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                The idea of the Sapien Eleven Wellness Academy is what motivated us to create Sapien Eleven in the first place.
            </Box>
            <Button
                sx={styles.button}
                startIcon={<img src={MetaMaskLogo} style={styles.metamaskLogo} alt={'metamask'} />}
            >
                connect wallet
            </Button>
            <Box
                component={'img'}
                src={Wellness}
                sx={styles.img}
            />
        </Container>
    )
})

export default IntroPanel

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.bgBlackColor
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(150)
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(35),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        width: '30%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
        textAlign: 'center'
    },
    button: {
        height: pixToRem(50),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: pixToRem(40),
        paddingRight: pixToRem(40),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: pixToRem(15),
    },
    metamaskLogo: {
        width: pixToRem(20),
        height: pixToRem(20),
        marginRight: pixToRem(10)
    },
    img: {
        width: pixToRem(300),
        height: 'auto',
        marginTop: pixToRem(20)
    }
}
