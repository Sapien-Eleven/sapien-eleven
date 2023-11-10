import { Box, Container } from "@mui/material";
import Chronic_Disease from '../../assets/images/chronic_disease.png'
import {pixToRem} from "../../const/uivar";
import {useEffect, useState} from "react";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";

export function ChronicDisease() {
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
                'filters[section][$eq]': 'section5'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'div'}
                sx={styles.explaination}
            >
                <Box
                    component={'span'}
                    sx={styles.whiteTxt}
                >
                    {content.title1}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTxt}
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
        </Container>
    )
}

const styles = {
    panel: {
        width: '100%',
        zIndex: 1,
        backgroundColor: '#1D1D1D',
        backgroundImage: `url(${Chronic_Disease})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'start',
        backgroundSize: 'cover',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(600)
    },
    explaination: {
        marginLeft: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    whiteTxt: {
        fontFamily: 'Roboto',
        fontSize: pixToRem(30),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: 'white'
    },
    redTxt: {
        fontFamily: 'besan',
        fontSize: pixToRem(30),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: '#CA3C3D'
    },
    comment: {
        fontFamily: 'Roboto',
        fontSize: pixToRem(18),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: pixToRem(30),
        color: '#999999',
        marginTop: pixToRem(10),
        width: '50%'
    }
}