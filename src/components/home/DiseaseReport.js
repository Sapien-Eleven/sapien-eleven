import { Box, Container } from "@mui/material";
import '../../styles/home.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";

export function DiseaseReport() {
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
                'filters[section][$eq]': 'section4'
            }
        })).data;
        setContent(data.data.reduce((acc, cur) => [...acc, {
            title1: cur.attributes.title1,
            title2: cur.attributes.title2,
            description: cur.attributes.description
        }], []));
    }
    if (content.length > 0) return (
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
                        {content[0].title1}
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.unit}
                    >
                        {content[0].title2}
                    </Box>
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {content[0].description}
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
                        {content[1].title2}
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.number}
                    >
                        {content[1].title1}
                    </Box>
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {content[1].description}
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
        width: '80%',
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