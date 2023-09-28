import {Box, Button, Container} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import NextHealthBg from '../../assets/images/about/next_health_bg.png';
import SapienMark from '../../assets/mark.png'

const NextHealthApp = memo(props => {
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                NOT JUST THE
            </Box>
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                NEXT HEALTH APP
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Our mission is to improve the state of human health.
            </Box>
            <Button
                sx={styles.joinBtn}
                startIcon={<Box component={'img'} src={SapienMark} sx={{width: pixToRem(20), height: 'auto', marginRight: '10px'}} />}
            >Join Sapien Eleven</Button>
        </Container>
    )
})

export default NextHealthApp

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundImage: `url(${NextHealthBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: pixToRem(200),
        paddingBottom: pixToRem(200)
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: pixToRem(30),
        lineHeight: pixToRem(40),
        color: 'white'
    },
    redTitle: {
        fontFamily: fonts.besan,
        fontStyle: 'normal',
        fontSize: pixToRem(30),
        fontWeight: 400,
        lineHeight: pixToRem(40),
        color: colors.red,
        marginTop: pixToRem(5)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: 'white',
        marginTop: pixToRem(20)
    },
    joinBtn: {
        marginTop: pixToRem(30),
        borderRadius: 0,
        border: '1px solid #CA3C3D',
        fontFamily: fonts.roboto,
        fontStyle: 'bold',
        fontSize: pixToRem(16),
        padding: '15px 60px'
    }
}
