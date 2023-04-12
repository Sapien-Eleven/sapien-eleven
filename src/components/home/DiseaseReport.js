import { Box, Container } from "@mui/material";
import '../../styles/home.css'

export function DiseaseReport() {
    return (
        <Container
                component={'div'}
                maxWidth={false}
                sx={styles.panel}
            >
                <Box
                    component={'div'}
                    sx={styles.box}
                >
                    <Box
                        component={'div'}
                        sx={styles.title}
                    >
                        <Box
                            component={'span'}
                            sx={styles.number}
                        >
                            71
                        </Box>
                        <Box
                            component={'span'}
                            sx={styles.unit}
                        >
                            %
                        </Box>
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >
                        71% of All Adult Deaths Are<br/>Caused By Chronic Disease
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.box}
                >
                    <Box
                        component={'div'}
                        sx={styles.title}
                    >
                        <Box
                            component={'span'}
                            sx={styles.unit}
                        >
                            $
                        </Box>
                        <Box
                            component={'span'}
                            sx={styles.number}
                        >
                            3.8T
                        </Box>
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >
                        Chronic Disease Is The Leading Driver Of The<br/>Nation's $3.8 Trillion In Annual Health Care Costs
                    </Box>
                </Box>
            </Container>
    )
}

const styles = {
    panel: {
        zIndex: 100,
        position: 'relative',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#1D1D1D',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '100px'
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '96px',
        fontStyle: 'normal',
        fontWeight: '700'
    },
    unit: {
        color: '#CA3C3D',
        fontFamily: 'Roboto',
        fontSize: '96px',
        fontStyle: 'normal',
        fontWeight: '700'
    },
    comment: {
        marginTop: '20px',
        color: '#999999',
        fontFamily: 'Roboto',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '30px',
        textAlign: 'center'
    }
}