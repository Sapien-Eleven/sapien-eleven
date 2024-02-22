import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {memo, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import NextHealthBg from '../../assets/images/about/next_health_bg.png';
import SapienMark from '../../assets/sapien.svg'
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";

const NextHealthApp = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [content, setContent] = useState({})
    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}abouts`, {
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
                sx={sm ? styles.mobileWhiteTitle : styles.whiteTitle}
            >
                {content.title1}
            </Box>
            <Box
                component={'span'}
                sx={sm ? styles.mobileRedTitle : styles.redTitle}
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={sm ? styles.mobileComment : styles.comment}
            >
                {content.description}
            </Box>
            <Button
                sx={styles.joinBtn}
                startIcon={<Box component={'img'} src={SapienMark} sx={{width: pixToRem(20), height: 'auto', marginRight: '10px'}} />}
            >Join Sapien Eleven</Button>
        </Container>
    )
})

export default NextHealthApp

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundImage: `url(${NextHealthBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: pixToRem(200),
        paddingBottom: pixToRem(200)
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: pixToRem(30),
        lineHeight: pixToRem(40),
        color: 'white'
    },
    mobileWhiteTitle: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: pixToRem(20),
        lineHeight: pixToRem(36),
        color: 'white'
    },
    redTitle: {
        fontFamily: fonts.besan,
        fontStyle: 'normal',
        fontSize: pixToRem(30),
        fontWeight: 400,
        lineHeight: pixToRem(40),
        color: colors.red,
        marginTop: pixToRem(5)
    },
    mobileRedTitle: {
        fontFamily: fonts.besan,
        fontStyle: 'normal',
        fontSize: pixToRem(25),
        fontWeight: 400,
        lineHeight: pixToRem(36),
        color: colors.red,
        marginTop: pixToRem(5)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: 'white',
        marginTop: pixToRem(20)
    },
    mobileComment: {
        width: '70%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(16),
        lineHeight: pixToRem(24),
        color: 'white',
        textAlign: 'center',
        mt: 3,
        mb: 2
    },
    joinBtn: {
        marginTop: pixToRem(30),
        borderRadius: 0,
        border: '1px solid #CA3C3D',
        fontFamily: fonts.roboto,
        fontStyle: 'bold',
        fontSize: pixToRem(16),
        padding: '15px 60px'
    }
}
