import {memo} from "react";
import {Box, Button, Container} from "@mui/material";
import {fonts, pixToRem} from "../../const/uivar";
import PanelBg from '../../assets/images/about/bg.jpg'

const IntroPanel = memo(props => {
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                ABOUT
            </Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                SAPIEN ELEVEN
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Sapien Eleven is an exclusive membership to an all inclusive Wellness Platform.
            </Box>
            <Button
                sx={styles.button}
            >LEARN MORE</Button>
        </Container>
    )
})

export default IntroPanel

const styles = {
    panel: {
        width: '100%',
        height: pixToRem(630),
        backgroundImage: `url(${PanelBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(55),
        marginLeft: pixToRem(70)
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(55),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    comment: {
        width: '28%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(26),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(40),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
        marginLeft: pixToRem(70)
    },
    button: {
        height: pixToRem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: pixToRem(20),
        marginLeft: pixToRem(70)
    }
}