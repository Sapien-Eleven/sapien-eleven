import {memo} from "react";
import {Box, Container} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import FrameImg from '../../assets/images/about/wellness_game.jpg'

const WellnessGame = memo(props => {
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'img'}
                src={FrameImg}
                sx={styles.img}
            />
            <Box
                component={'div'}
                sx={styles.commentPanel}
            >
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    ELEVATE YOUR
                </Box>
                <Box
                    component={'span'}
                    sx={styles.blackTitle}
                >WELLNESS GAME</Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    Sapien Eleven consists of two foundational pillars: Academy and Marketplace.<br /><br/>Within the Academy members will have access to incredible content. A healthy recipe book, yoga sessions, guided meditation, mindfulness practices, fitness movements, and much more.<br /><br/>The Marketplace will be the home of all Sapien Eleven products. Specifically designed premium athletic apparel and high quality supplements.
                </Box>
            </Box>
        </Container>
    )
})

export default WellnessGame

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(90),
        backgroundColor: colors.bgWhiteColor
    },
    img: {
        width: '45%',
        height: 'auto',
    },
    commentPanel: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        lineHeight: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        marginLeft: pixToRem(70)
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.black,
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    comment: {
        width: '85%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginLeft: pixToRem(70),
        marginTop: pixToRem(15)
    }
}