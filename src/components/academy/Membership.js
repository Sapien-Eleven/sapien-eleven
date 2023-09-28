import {memo} from "react";
import {Box, Button, Container} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Running from "../../assets/images/running.png";
import Mark from '../../assets/mark.png'

const Membership = memo(props => {
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'div'}
                sx={styles.explaination}
            >
                <Box
                    component={'span'}
                    sx={styles.whiteTitle}
                >
                    EXCLUSIVE
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    MEMBERSHIP
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    For exclusive access to the Sapien Eleven Wellness Platform includig all content, experiences, and products join today.
                </Box>
                <Button
                    sx={styles.joinBtn}
                    startIcon={<img src={Mark} style={{width: '14px', height: '22px', marginRight: '6px'}} alt={'mark'} />}
                >
                    Join Sapien Eleven
                </Button>
            </Box>
        </Container>
    )
})

export default Membership

const styles = {
    panel: {
        backgroundColor: colors.bgBlackColor,
        backgroundImage: `url(${Running})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: pixToRem(150),
        paddingBottom: pixToRem(150)
    },
    explaination: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: pixToRem(50)
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(35),
        lineHeight: pixToRem(45)
    },
    redTitle: {
        fontFamily: fonts.besan,
        color: colors.red,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(35),
        lineHeight: pixToRem(45)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(23),
        lineHeight: pixToRem(40),
        color: colors.comment,
        marginTop: '1em'
    },
    joinBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(25),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: '2.5em',
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        paddingLeft: pixToRem(45),
        paddingRight: pixToRem(45)
    }
}