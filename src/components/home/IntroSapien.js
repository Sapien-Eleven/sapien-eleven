import {Box, Button, Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import WellnessAcademy from '../../assets/images/wellness_academy.png'
import MarketPlace from '../../assets/images/marketplace.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import {colors, fonts} from "../../const/uivar";

export function IntroSapien() {
    const [content, setContent] = useState({});
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}landings`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section2'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
            subcontents: data.data.reduce((acc, cur) => [...acc, {
                subtitle: cur.attributes.subtitle,
                subdescription: cur.attributes.subdescription
            }], [])
        });
    }
    return (
        <Container
            maxWidth={false}
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={sm ? styles.mobileRedTxt : styles.redTxt}
            >{content.title1}</Box>
            <Box
                component={'span'}
                sx={sm ? styles.mobileTitle : styles.title}
            >{content.title2}</Box>
            <Box
                component={'span'}
                sx={sm ? styles.mobileComment : styles.comment}
            >{content.description}</Box>
            {content.subcontents !== undefined &&
                <Stack
                    sx={styles.boxPanel}
                    direction={'row'}
                    flexWrap={'wrap'}
                    useFlexGap
                    spacing={2}
                    justifyContent={'center'}
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
                            sx={sm ? styles.mobileBoxTitle : styles.boxTitle}
                        >{content.subcontents[0].subtitle}</Box>
                        <Box
                            component='span'
                            sx={sm ? styles.mobileComment : styles.comment}
                        >{content.subcontents[0].subdescription}</Box>
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
                            sx={sm ? styles.mobileBoxTitle : styles.boxTitle}
                        >{content.subcontents[1].subtitle}</Box>
                        <Box
                            component='span'
                            sx={sm ? styles.mobileComment : styles.comment}
                        >{content.subcontents[1].subdescription}</Box>
                        <Button
                            sx={styles.boxButton}
                        >EXPLORE</Button>
                    </Box>
                </Stack>
            }
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
        fontFamily: fonts.roboto,
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        marginTop: '77px',
        marginBottom: '10px'
    },
    mobileRedTxt: {
        fontFamily: fonts.roboto,
        fontSize: '20px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        marginTop: '77px',
        marginBottom: '10px'
    },
    title: {
        fontFamily: fonts.besan,
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#333333',
        marginBottom: '15px',
    },
    mobileTitle: {
        fontFamily: fonts.besan,
        fontSize: '25px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#333333',
        marginBottom: '15px',
    },
    comment: {
        width: '62%',
        fontFamily: fonts.roboto,
        fontSize: '18px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999999',
        marginTop: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        lineHeight: '35px'
    },
    mobileComment: {
        width: '95%',
        fontFamily: fonts.roboto,
        fontSize: '16px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999999',
        marginTop: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        lineHeight: '24px'
    },
    boxPanel: {
        marginTop: '20px',
        marginBottom: '60px',
    },
    box: {
        flex: 1,
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
        fontFamily: fonts.roboto,
        fontSize: '30px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#333333',
        marginTop: '30px',
        marginBottom: '15px',
        textAlign: 'center',
        lineHeight: '35px'
    },
    mobileBoxTitle: {
        fontFamily: fonts.roboto,
        fontSize: '25px',
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
