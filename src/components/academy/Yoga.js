import {Box} from "@mui/material";
import {memo} from "react";
import YogaImg from "../../assets/images/academy/yoga.png";
import {colors, fonts, pixToRem} from "../../const/uivar";

const Yoga = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                YOGA
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                DISCOVER THE POWER OF YOGA
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
                src={YogaImg}
            />
        </Box>
    )
})

export default Yoga

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
        width: '65%',
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(65),
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
        width: '90%',
        height: 'auto',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(100)
    }
}

