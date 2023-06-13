import {Box, Container} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Mindfullness from '../../assets/images/academy/mindfulness_room.png'

const Middle = memo(props => {
    return (
        <Container
            maxWidth={false}
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'img'}
                sx={styles.image}
                src={Mindfullness}
            />
            <Box
                component={'div'}
                sx={styles.commentPanel}
            >
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >A SINGLE</Box>
                <Box
                    component={'span'}
                    sx={styles.blackTitle}
                >PLACE TO GO</Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    For all mental health and physical health experiences, as well as nutritional information.
                    <br/><br/>
                    A place built to eliminate all the excuses that come with beginning a new wellness journey.
                    <br/><br/>
                    The place where boring web2 wellness meets exciting, AI-powered web3 wellness.
                </Box>
            </Box>
        </Container>
    )
})
export default Middle

const styles = {
    panel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.bgWhiteColor,
        padding: '0px!important'
    },
    image: {
        width: '50%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    commentPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '12%'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(35),
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#333',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        width: '70%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
    },
}