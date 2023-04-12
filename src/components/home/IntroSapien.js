import { Box, Button, Container } from "@mui/material";
import WellnessAcademy from '../../assets/images/wellness_academy.png'
import MarketPlace from '../../assets/images/marketplace.png'

export function IntroSapien() {
    return (
        <Container
            maxWidth={false}
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTxt}
            >WHAT IS</Box>
            <Box
                component={'span'}
                sx={styles.title}
            >SAPIEN ELEVEN</Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >Sapien Eleve is a NFT wellness brand that aims to educate and improve the<br/>health and wellness of our community members through prevention.</Box>
            <Container
                component={'div'}
                maxWidth={false}
                sx={styles.boxPanel}
            >
                <Box
                    component='div'
                    sx={styles.box}
                >
                    <Box
                        component={'img'}
                        src={WellnessAcademy}
                    />
                    <Box
                        component={'span'}
                        sx={styles.boxTitle}
                    >Wellness Academy</Box>
                    <Box
                        component='span'
                        sx={styles.comment}
                    >An exclusive platform to educate community members on<br/>wellness and the body's chemistry as well as an all-in-one<br/>place for interactive and instructional experiences.</Box>
                    <Button
                        sx={styles.boxButton}
                    >LEARN MORE</Button>
                </Box>
                <Box
                    component='div'
                    sx={styles.box}
                >
                    <Box
                        component={'img'}
                        src={MarketPlace}
                    />
                    <Box
                        component={'span'}
                        sx={styles.boxTitle}
                    >Marketplace</Box>
                    <Box
                        component='span'
                        sx={styles.comment}
                    >An online storefront providing carefully designed and<br/>professionally formulated wellness product drops.</Box>
                    <Button
                        sx={styles.boxButton}
                    >EXPLORE</Button>
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
        backgroundColor: 'white'
    },
    redTxt: {
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        marginTop: '77px',
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
    comment: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999999',
        marginTop: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        lineHeight: '35px'
    },
    boxPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '60px',
    },
    box: {
        width: '38%',
        height: '35rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '35px 81px',
        backgroundColor: '#F8F8F8',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.18)',
        marginLeft: '11px',
        marginRight: '11px'
    },
    boxTitle: {
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#333333',
        marginTop: '30px',
        marginBottom: '15px',
        textAlign: 'center',
        lineHeight: '35px'
    },
    boxButton: {
        width: '199px',
        height: '44px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #CA3C3D',
	    borderRadius: 0,

        fontFamily: 'Roboto',
        fontSize: '13px',
        fontWeight: 700,
        lineHeight: '15.32px',
        fontStyle: 'normal',
        color: '#333333'
    }
}