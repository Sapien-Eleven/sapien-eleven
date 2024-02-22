import {Box, Container, useMediaQuery, useTheme} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Humanhealth from '../../assets/images/human_health.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import {colors, fonts} from "../../const/uivar";

export function HumanHealth() {
    const [content, setContent] = useState({})
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
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
                'filters[section][$eq]': 'section3'
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
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={md ? styles.mobileRedTxt : styles.redTxt}
            >{content.title1}</Box>
            <Box
                component={'span'}
                sx={md ? styles.mobileTitle : styles.title}
            >{content.title2}</Box>
            {content.subcontents !== undefined &&
                <Grid
                    container
                    sx={styles.cardPanel}
                    spacing={3}
                >
                    <Grid
                        md={4}
                        xs={12}
                    >
                        <Box sx={styles.card}>
                            <Box
                                component={'span'}
                                sx={styles.cardTitle}
                            >
                                {content.subcontents[0].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.comment}
                            >{content.subcontents[0].subdescription}</Box>
                        </Box>
                    </Grid>
                    <Grid
                        md={4}
                        xs={12}
                    >
                        <Box sx={styles.card}>
                            <Box
                                component={'span'}
                                sx={styles.cardTitle}
                            >
                                {content.subcontents[1].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.comment}
                            >{content.subcontents[1].subdescription}</Box>
                        </Box>
                    </Grid>
                    <Grid
                        md={4}
                        xs={12}
                    >
                        <Box sx={styles.card}>
                            <Box
                                component={'span'}
                                sx={styles.cardTitle}
                            >
                                {content.subcontents[2].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.comment}
                            >{content.subcontents[2].subdescription}</Box>
                        </Box>
                    </Grid>
                </Grid>
            }
            {content.subcontents !== undefined &&
                <Grid
                    container
                    spacing={3}
                    sx={styles.cardPanel2}
                >
                    <Grid
                        md={4}
                        xs={12}
                    >
                        <Box sx={[styles.card, {height: 'auto'}]}>
                            <Box
                                component={'span'}
                                sx={styles.cardTitle}
                            >
                                {content.subcontents[3].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.comment}
                            >{content.subcontents[3].subdescription}</Box>
                        </Box>
                    </Grid>
                    {!md && <Grid
                        md={4}
                        xs={12}
                    >
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
                    </Grid>}
                    <Grid
                        md={4}
                        xs={12}
                    >
                        <Box
                            component='div'
                            sx={[styles.card, {height: 'auto'}]}
                        >
                            <Box
                                component={'span'}
                                sx={styles.cardTitle}
                            >
                                {content.subcontents[4].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.comment}
                            >{content.subcontents[4].subdescription}</Box>
                        </Box>
                    </Grid>
                    {md && <Grid
                        md={4}
                        xs={12}
                    >
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
                    </Grid>}
                </Grid>
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
        backgroundColor: '#F8F8F8'
    },
    redTxt: {
        fontFamily: fonts.roboto,
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        marginTop: '108px',
        marginBottom: '10px'
    },
    mobileRedTxt: {
        fontFamily: fonts.roboto,
        fontSize: '20px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        marginTop: '108px',
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
    cardPanel: {
        marginTop: '60px'
    },
    card: {
        backgroundColor: 'white',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        width: '90%',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999999',
        marginTop: '15px',
        marginBottom: '40px',
        textAlign: 'center',
        lineHeight: '24px'
    },
    cardPanel2: {
        marginTop: '30px',
    },
    cardImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '35px'
    },
    humanImage: {
        width: '85%',
    }
}