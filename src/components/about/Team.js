import {Box, Container, Stack} from "@mui/material";
import {memo, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import Twitter from "../../assets/images/media/twitter";
import axios from "axios";

const Team = memo(props => {
    const [content, setContent] = useState({})
    const [ceoContent, setCEOContent] = useState({})
    const [teams, setTeams] = useState([]);

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
                sx={styles.redTitle}
            >
                {content.title1}
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {content.description}
            </Box>
            <Box
                component={'div'}
                sx={styles.ceoPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.ceoCommentPanel}
                >
                    <Box
                        component={'span'}
                        sx={styles.redTitle}
                    >{ceoContent.title1}</Box>
                    <Box
                        component={'span'}
                        sx={styles.blackTitle}
                    >{ceoContent.title2}</Box>
                    <Box
                        component={'span'}
                        sx={styles.ceoComment}
                    >
                        {ceoContent.description}
                    </Box>
                    <Twitter />
                </Box>
                <Box
                    component={'img'}
                    src={ceoContent.image}
                    sx={styles.ceoPhoto}
                />
            </Box>
            <Stack
                sx={styles.memberPanel}
                spacing={2.5}
                direction={'row'}
                useFlexGap
                flexWrap={'wrap'}
            >
                {
                    teams.map((member, index) => (
                        <Box
                            component={'div'}
                            sx={styles.memberBox}
                            key={index}
                        >
                            <Box
                                component={'img'}
                                src={member.image}
                                sx={styles.memberPhoto}
                            />
                            <Box
                                component={'div'}
                                sx={styles.memberComment}
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
                    ))
                }
            </Stack>
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
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.black,
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
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
        marginBottom: pixToRem(30),
        textAlign: 'center'
    },
    ceoPanel:  {
        backgroundColor: colors.bgWhiteColor,
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: pixToRem(30)
    },
    ceoCommentPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: pixToRem(130),
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
        width: 'auto',
        height: '100%',
        backgroundSize: '100% 100%'
    },
    memberPanel: {
        width: '92%',
        marginTop: pixToRem(20),
        marginBottom: pixToRem(10)
    },
    memberBox: {
        width: '21%',
        height: pixToRem(300),
        backgroundColor: '#1F1F1F',
        padding: '17px 17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: pixToRem(10)
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
