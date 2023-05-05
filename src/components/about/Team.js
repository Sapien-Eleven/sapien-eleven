import {Box, Container} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";

const Team = memo(props => {
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                OUR
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                TEAM
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Box>
            <Box
                component={'div'}
                sx={styles.teamLeader}
            />
            <Box
                component={'div'}
                sx={styles.memberPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
            </Box>
            <Box
                component={'div'}
                sx={styles.memberPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
            </Box>
            <Box
                component={'div'}
                sx={styles.memberPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
            </Box>
            <Box
                component={'div'}
                sx={styles.memberPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
                <Box
                    component={'div'}
                    sx={styles.memberBox}
                />
            </Box>
        </Container>
    )
})

export default Team

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(90),
        backgroundColor: 'white'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(55),
        marginTop: pixToRem(40)
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.black,
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
    },
    comment: {
        width: '45%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(28),
        lineHeight: pixToRem(40),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
        textAlign: 'center'
    },
    memberPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(30)
    },
    memberBox: {
        width: '25%',
        height: pixToRem(400),
        backgroundColor: '#F2F2F2',
    },
    teamLeader: {
        width: '40%',
        height: pixToRem(650),
        backgroundColor: '#F2F2F2',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(80)
    }
}