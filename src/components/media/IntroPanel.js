import {memo} from "react";
import {Box, Container, useMediaQuery, useTheme} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";

const IntroPanel = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    if (sm) return (
        <Container
            maxWidth={false}
            sx={[styles.mobileContainer, {backgroundImage: `url(${props.content.mobileBackgroundImage})`,}]}
        >
            <Box
                component={'span'}
                sx={styles.mobileRedTitle}
            >SAPIEN ELEVEN</Box>
            <Box
                component={'span'}
                sx={styles.mobileWhiteTitle}
            >
                {props.content.title.toUpperCase()}
            </Box>
            <Box
                component={'span'}
                sx={styles.mobileComment}
            >
                {props.content.description}
            </Box>
        </Container>
    )
    return (
        <Container
            maxWidth={false}
            sx={[styles.container, {backgroundImage: `url(${props.content.backgroundImage})`,}]}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >SAPIEN ELEVEN</Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                {props.content.title.toUpperCase()}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {props.content.description}
            </Box>
        </Container>
    )
})

export default IntroPanel

const styles = {
    container: {
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right bottom',
        backgroundColor: colors.bgBlackColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(120),
        paddingBottom: pixToRem(70)
    },
    mobileContainer: {
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: colors.bgBlackColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 10,
        pb: 30
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(40),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(50),
        marginLeft: pixToRem(70)
    },
    mobileRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(26),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(30),
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(40),
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(50),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    mobileWhiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(22),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        mt: pixToRem(5),
    },
    comment: {
        width: '52%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(22),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(36),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
        marginLeft: pixToRem(70)
    },
    mobileComment: {
        width: '95%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(24),
        textAlign: 'center',
        marginTop: pixToRem(15),
    }
}