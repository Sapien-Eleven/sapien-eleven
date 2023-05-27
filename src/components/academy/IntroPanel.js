import {memo} from "react";
import {Box, Container} from "@mui/material";
import Bg from '../../assets/images/academy/intro_bg.png'
import {fonts, pixToRem} from "../../const/uivar";

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
                WELLNESS
            </Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                ACADEMY
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                The Sapien Eleven Wellness Academy is an archive of experiences to motivate and empower you to achieve your wellness goals.
            </Box>
        </Container>
    )
})

export default IntroPanel

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: pixToRem(480),
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
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
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(55),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    comment: {
        width: '42%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(26),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(40),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
        marginLeft: pixToRem(70)
    }
}
