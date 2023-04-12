import { Box, Container } from "@mui/material";
import Chronic_Disease from '../../assets/images/chronic_disease.png'

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
        height: '70rem',
        zIndex: 1,
        backgroundColor: '#1D1D1D',
        backgroundImage: `url(${Chronic_Disease})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '100px',
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
        fontSize: '3rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '4rem',
        color: 'white'
    },
    redTxt: {
        fontFamily: 'besan',
        fontSize: '3rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '3rem',
        color: '#CA3C3D'
    },
    comment: {
        fontFamily: 'Roboto',
        fontSize: '1.4rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '2rem',
        color: '#999999',
        marginTop: '2rem',
        width: '47%'
    }
}