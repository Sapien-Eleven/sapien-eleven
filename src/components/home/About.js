import { Box, Container } from "@mui/material";
import { colors, fonts, pixToRem } from "../../const/uivar";
import Activity from '../../assets/images/activity.png'
import Nutriution from '../../assets/images/nutriution.png'

export function About() {
    return (
        <Container
            maxWidth={false}
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'div'}
                sx={styles.titlePanel}
            >
                <Box
                    component={'span'}
                    sx={styles.about}
                >
                    ABOUT
                </Box>
                <Box
                    component={'span'}
                    sx={styles.title}
                >
                    SAPIEN ELEVEN
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    At Sapien Eleven, we believe that where is truly a global health problem.
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={styles.boxPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.box}
                >
                    <Box
                        component={'img'}
                        sx={styles.img}
                        src={Activity}
                        alt="Physical Activity"
                    />
                    <Box
                        component={'span'}
                        sx={styles.boxTitle}
                    >
                        PHYSICAL ACTIVITY
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.boxComment}
                    >
                        A diet rich in nutrient dense foods is the best way to nourish the body with the nutrients necessary. When the foods we consume are void of necessary nutrients, imbalances in the body's chemistry can occur and illness ensues. Supplements ensure that the necessary nutrients are consumed.
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.box}
                >
                    <Box
                        component={'img'}
                        sx={styles.img}
                        src={Nutriution}
                        alt="Nutriution and Supplementation"
                    />
                    <Box
                        component={'span'}
                        sx={styles.boxTitle}
                    >
                        NUTRIUTION AND SUPPLEMENTATION
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.boxComment}
                    >
                        A diet rich in nutrient dense foods is the best way to nourish the body with the nutrients necessary. When the foods we consume are void of necessary nutrients, imbalances in the body's chemistry can occur and illness ensues. Supplements ensure that the necessary nutrients are consumed.
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

const styles = {
    panel: {
        backgroundColor: colors.bgWhiteColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlePanel: {
        marginTop: '10em',
        marginBottom: '8em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    about: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.red
    },
    title: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.black
    },
    comment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: '2em'
    },
    boxPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '6em'
    },
    box: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        marginLeft: '1em',
        marginRight: '1em'
    },
    img: {
        marginTop: '-2.5em',
        height: pixToRem(214)
    },
    boxTitle: {
        marginTop: '2em',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(26),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.black
    },
    boxComment: {
        marginTop: '2em',
        marginBottom: '6em',
        width: '85%',
        textAlign: 'center',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: pixToRem(30),
        color: colors.comment
    }
}