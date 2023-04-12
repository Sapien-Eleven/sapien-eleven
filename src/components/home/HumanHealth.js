import { Box, Container } from '@mui/material'
import Humanhealth from '../../assets/images/human_health.png'

export function HumanHealth() {
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTxt}
            >STATE OF</Box>
            <Box
                component={'span'}
                sx={styles.title}
            >HUMAN HEALTH</Box>
            <Container
                component={'div'}
                maxWidth={false}
                sx={styles.cardPanel}
            >
                <Box
                    component='div'
                    sx={styles.card}
                >
                    <Box
                        component={'span'}
                        sx={styles.cardTitle}
                    >
                        Western Medicine
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >To identify and treat symptoms using drugs and<br/>surgery. Disease prevention and treating the<br/>underlying cause are neglected.</Box>
                </Box>
                <Box
                    component='div'
                    sx={styles.card}
                >
                    <Box
                        component={'span'}
                        sx={styles.cardTitle}
                    >
                        Corporate Rules
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >Doctors are often bound to protocols limiting their<br/>control and scope of practice. Leaving both<br/>patients and doctors frustrated.</Box>
                </Box>
                <Box
                    component='div'
                    sx={styles.card}
                >
                    <Box
                        component={'span'}
                        sx={styles.cardTitle}
                    >
                        Big Pharma
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >"To identify and treat symptoms using drugs and<br/>surgery. Disease prevention and treating the<br/>underlying cause are neglected."</Box>
                </Box>
            </Container>
            <Container
                component={'div'}
                maxWidth={false}
                sx={styles.cardPanel2}
            >
                <Box
                    component='div'
                    sx={styles.card}
                >
                    <Box
                        component={'span'}
                        sx={styles.cardTitle}
                    >
                        Processed Diets
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >"To identify and treat symptoms using drugs and<br/>surgery. Disease prevention and treating the<br/>underlying cause are neglected."</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.cardImage}
                >
                    <Box
                        component={'img'}
                        alt={'human health'}
                        src={Humanhealth}
                        sx={styles.humanImage}
                    />
                </Box>
                <Box
                    component='div'
                    sx={styles.card}
                >
                    <Box
                        component={'span'}
                        sx={styles.cardTitle}
                    >
                        Depleted Soils
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >"To identify and treat symptoms using drugs and<br/>surgery. Disease prevention and treating the<br/>underlying cause are neglected."</Box>
                </Box>
            </Container>
        </Container>
    )
}

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8'
    },
    redTxt: {
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        marginTop: '108px',
        marginBottom: '10px'
    },
    title: {
        fontFamily: 'besan',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#333333',
        marginBottom: '15px',
    },
    cardPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60px'
    },
    card: {
        backgroundColor: 'white',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '15px',
        marginRight: '15px'
    },
    cardTitle: {
        fontFamily: 'Roboto',
        fontSize: '26px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#333333',
        marginTop: '40px',
        marginBottom: '15px',
        textAlign: 'center',
        lineHeight: '40px'
    },
    comment: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999999',
        marginTop: '15px',
        marginBottom: '40px',
        textAlign: 'center',
        lineHeight: '30px'
    },
    cardPanel2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '30px',
    },
    cardImage: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '15px',
        marginRight: '15px',
        paddingTop: '35px'
    },
    humanImage: {
        width: '85%',
    }
}