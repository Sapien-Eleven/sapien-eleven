import { Box, Container } from "@mui/material";
import Chronic_Disease from '../../assets/images/chronic_disease.png'
import {pixToRem} from "../../const/uivar";

export function ChronicDisease() {
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
                    sx={styles.whiteTxt}
                >
                    CHRONIC
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTxt}
                >
                    DISEASE TRENDS
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    We live in the age of advanced technology. If medicine had truly advanced why aren't illness associated deaths steadily declining? Where's all the money going?
                </Box>
            </Box>
        </Container>
    )
}

const styles = {
    panel: {
        width: '100%',
        zIndex: 1,
        backgroundColor: '#1D1D1D',
        backgroundImage: `url(${Chronic_Disease})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'start',
        backgroundSize: 'cover',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(600)
    },
    explaination: {
        marginLeft: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    whiteTxt: {
        fontFamily: 'Roboto',
        fontSize: pixToRem(30),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: 'white'
    },
    redTxt: {
        fontFamily: 'besan',
        fontSize: pixToRem(30),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: '#CA3C3D'
    },
    comment: {
        fontFamily: 'Roboto',
        fontSize: pixToRem(18),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: pixToRem(30),
        color: '#999999',
        marginTop: pixToRem(10),
        width: '50%'
    }
}