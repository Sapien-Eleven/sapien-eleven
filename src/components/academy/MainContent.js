import {Box} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";

const MainContent = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {props.content.category.toUpperCase()}
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                {props.content.title}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {props.content.description}
            </Box>
            <Box
                component={'img'}
                sx={styles.img}
                src={props.content.image}
            />
        </Box>
    )
})

export default MainContent

const styles = {
    panel: {
        display: 'flex',
        flex: 1,
        width: '68%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: pixToRem(70),
        paddingBottom: pixToRem(30),
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(40),
    },
    blackTitle: {
        maxWidth: '80%',
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.black,
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    img: {
        width: '100%',
        height: 'auto',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(100)
    }
}