import {Box, Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import {memo, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import {Twitter} from "@mui/icons-material";

const Team = memo(props => {
    const [content, setContent] = useState({})
    const [ceoContent, setCEOContent] = useState({})
    const [teams, setTeams] = useState([]);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        fetchContent().then();
    }, []);

    useEffect(() => {
        fetchCEOContent().then();
    }, []);

    useEffect(() => {
        fetchTeams().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}abouts`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section4'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }

    const fetchCEOContent = async () => {
        const data = (await axios.get(`${StrapiURL}abouts`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section5'
            }
        })).data;

        setCEOContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
            twitter: data.data[0].attributes.twitter,
            image: `${StrapiBaseURL}${data.data[0].attributes.image.data.attributes.url}`
        });
    }

    const fetchTeams = async () => {
        const data = (await axios.get(`${StrapiURL}teams`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
            }
        })).data;

        setTeams(data.data.reduce((acc, cur) => [...acc, {
            name: cur.attributes.name,
            description: cur.attributes.description,
            image: cur.attributes.image.data === null ? '' : `${StrapiBaseURL}${cur.attributes.image.data.attributes.url}`
        }], []));
    }

    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={sm ? styles.mobileRedTitle : styles.redTitle}
            >
                {content.title1}
            </Box>
            <Box
                component={'span'}
                sx={sm ? styles.mobileBlackTitle : styles.blackTitle}
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={[styles.comment, {width: sm ? '95%' : '50%'}]}
            >
                {content.description}
            </Box>
            <Grid
                container
                sx={[styles.ceoPanel, {
                    ml: sm ? 0 : 10,
                    mr: sm ? 0 : 10
                }]}
            >
                {md && <Grid
                    item
                    md={12}
                >
                    <Box
                        component={'img'}
                        src={ceoContent.image}
                        sx={styles.ceoPhoto}
                    />
                </Grid>}
                <Grid
                    item
                    lg={7}
                    md={12}
                >
                    <Box
                        component={'div'}
                        sx={md ? styles.mobileCeoCommentPanel : styles.ceoCommentPanel}
                    >
                        <Box
                            component={'span'}
                            sx={sm ? styles.mobileRedTitle : styles.redTitle}
                        >{ceoContent.title1}</Box>
                        <Box
                            component={'span'}
                            sx={sm ? styles.mobileBlackTitle : styles.blackTitle}
                        >{ceoContent.title2}</Box>
                        <Box
                            component={'span'}
                            sx={[styles.ceoComment, {
                                width: md ? '100%' : '86%',
                            }]}
                        >
                            {ceoContent.description}
                        </Box>
                        <Twitter sx={{fontSize: pixToRem(31), color: colors.red, mb: sm ? 0 : 7}} />
                    </Box>
                </Grid>
                {!md && <Grid
                    item
                    lg={5}
                >
                    <Box
                        component={'img'}
                        src={ceoContent.image}
                        sx={styles.ceoPhoto}
                    />
                </Grid>}
            </Grid>
            <Grid
                container
                sx={[styles.memberPanel, {
                    ml: sm ? 0 : 8,
                    mr: sm ? 0 : 8
                }]}
                spacing={3}
            >
                {
                    teams.map((member, index) => (
                        <Grid
                            item
                            lg={3}
                            md={4}
                            sm={6}
                            xs={12}
                            sx={{
                                mt: 2.5,
                                mb: 2.5
                            }}
                        >
                            <Box
                                component={'div'}
                                sx={styles.memberBox}
                                key={index}
                            >
                                <Box
                                    component={'img'}
                                    src={member.image}
                                    sx={[styles.memberPhoto, {
                                        height: member.image === '' ? pixToRem(300) : '100%'
                                    }]}
                                />
                                <Box
                                    component={'div'}
                                    sx={[styles.memberComment, {
                                        background: member.image !== '' ? 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)' : 'none',
                                    }]}
                                >
                                    <Box
                                        component={'span'}
                                        sx={styles.memberName}
                                    >
                                        {member.name}
                                    </Box>
                                    <Box
                                        component={'span'}
                                        sx={styles.memberRole}
                                    >
                                        {member.description}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
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
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(40)
    },
    mobileRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(36),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.black,
        mt: pixToRem(15),
        mb: pixToRem(15),
    },
    mobileBlackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: 400,
        fontStyle: 'normal',
        color: colors.black,
        mt: pixToRem(15),
        mb: pixToRem(15),
    },
    comment: {
        width: '50%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: pixToRem(20),
        mb: 10,
        textAlign: 'center'
    },
    ceoPanel:  {
        backgroundColor: colors.bgWhiteColor,
        mt: 5
    },
    ceoCommentPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pl: pixToRem(130)
    },
    mobileCeoCommentPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: 5, pb: 5,
        pl: 3, pr: 3
    },
    ceoComment: {
        width: '86%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    ceoPhoto: {
        width: '100%',
        height: 'auto',
        backgroundSize: '100% 100%'
    },
    memberPanel: {
        p: 0,
        mt: pixToRem(20),
        mb: pixToRem(10)
    },
    memberBox: {
        height: '100%',
        backgroundColor: '#1F1F1F',
        padding: '17px 17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // marginBottom: pixToRem(10)
    },
    memberPhoto: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover'
    },
    memberComment: {
        marginTop: pixToRem(-125),
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(40),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)'
    },
    memberName: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(27),
        color: 'white',
    },
    memberRole: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(27),
        marginTop: pixToRem(5),
        textAlign: 'center'
    }
}
