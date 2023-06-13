import {Box} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import MeditationImg from "../../assets/images/academy/meditation.png";

const Meditation = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                MEDITATION
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                UNLEASH YOUR INNER ZEN
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Learn the art of mindfulness and find Inner peace with our expert sessions!
            </Box>
            <Box
                component={'img'}
                sx={styles.img}
                src={MeditationImg}
            />
        </Box>
    )
})

export default Meditation

const styles = {
    panel: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: pixToRem(70),
        paddingBottom: pixToRem(30)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(55),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(55),
        color: colors.black,
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(20),
        lineHeight: pixToRem(26),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    img: {
        width: '110%',
        height: 'auto',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(100)
    }
}

