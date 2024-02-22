import {Box, Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Activity from '../../assets/images/activity.png'
import Nutriution from '../../assets/images/nutriution.png'
import Coaching from '../../assets/images/coaching.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import Grid from "@mui/material/Unstable_Grid2";

export function About() {
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
                'filters[section][$eq]': 'section6'
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
                component={'div'}
                sx={styles.titlePanel}
            >
                <Box
                    component={'span'}
                    sx={md ? styles.mobileAbout : styles.about}
                >
                    {content.title1}
                </Box>
                <Box
                    component={'span'}
                    sx={md ? styles.mobileTitle : styles.title}
                >
                    {content.title2}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {content.description}
                </Box>
            </Box>
            {content.subcontents !== undefined &&
                <Grid
                    container
                    spacing={3}
                    sx={styles.boxPanel}
                >
                    <Grid
                        item
                        md={12}
                        lg={4}
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
                                {content.subcontents[0].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={[styles.boxComment, {width: md ? '70%' : '85%'}]}
                            >
                                {content.subcontents[0].subdescription}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={12}
                        lg={4}
                        sx={{mt : md ? 12 : 0}}
                    >
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
                                {content.subcontents[1].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={[styles.boxComment, {width: md ? '70%' : '85%'}]}
                            >
                                {content.subcontents[1].subdescription}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={12}
                        lg={4}
                        sx={{mt : md ? 12 : 0}}
                    >
                        <Box
                            component={'div'}
                            sx={styles.box}
                        >
                            <Box
                                component={'img'}
                                sx={styles.img}
                                src={Coaching}
                            />
                            <Box
                                component={'span'}
                                sx={styles.boxTitle}
                            >
                                {content.subcontents[2].subtitle}
                            </Box>
                            <Box
                                component={'span'}
                                sx={[styles.boxComment, {width: md ? '70%' : '85%'}]}
                            >
                                {content.subcontents[2].subdescription}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>}
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
        mt: 7,
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
    mobileAbout: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: pixToRem(36),
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
    mobileTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(24),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: pixToRem(36),
        color: colors.black
    },
    comment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: pixToRem(30),
        color: colors.comment,
        textAlign: 'center',
        marginTop: '2em'
    },
    boxPanel: {
        mb: '6em'
    },
    box: {
        backgroundColor: 'white',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        marginTop: '-2.5em',
        height: pixToRem(214)
    },
    boxTitle: {
        width: '90%',
        textAlign: 'center',
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
        textAlign: 'center',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: pixToRem(30),
        color: colors.comment
    }
}
