import {Box, Container} from '@mui/material'
import Humanhealth from '../../assets/images/human_health.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";

export function HumanHealth() {
    const [content, setContent] = useState({})
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
                sx={styles.redTxt}
            >{content.title1}</Box>
            <Box
                component={'span'}
                sx={styles.title}
            >{content.title2}</Box>
            {content.subcontents !== undefined && <Container
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
                        {content.subcontents[0].subtitle}
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >{content.subcontents[0].subdescription}</Box>
                </Box>
                <Box
                    component='div'
                    sx={styles.card}
                >
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
                <Box
                    component='div'
                    sx={styles.card}
                >
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
            </Container>}
            {content.subcontents !== undefined && <Container
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
                        {content.subcontents[3].subtitle}
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >{content.subcontents[3].subdescription}</Box>
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
                        {content.subcontents[4].subtitle}
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >{content.subcontents[4].subdescription}</Box>
                </Box>
            </Container>}
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
        width: '90%',
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