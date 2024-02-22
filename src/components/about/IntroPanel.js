import {memo, useEffect, useState} from "react";
import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {fonts, pixToRem} from "../../const/uivar";
import PanelBg from '../../assets/images/about/bg.jpg'
import MobilePanelBg from '../../assets/images/about/mobile_bg.png'
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";

const IntroPanel = memo(props => {
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
                'filters[section][$eq]': 'section1'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    if (sm) return (
        <Container
            maxWidth={false}
            sx={styles.mobilePanel}
        >
            <Box
                component={'span'}
                sx={styles.mobileRedTitle}
            >
                {content.title1}
            </Box>
            <Box
                component={'span'}
                sx={styles.mobileWhiteTitle}
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.mobileComment}
            >
                {content.description}
            </Box>
            <Button
                sx={styles.mobileButton}
            >LEARN MORE</Button>
        </Container>
    )
    return (
        <Container
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
                sx={styles.whiteTitle}
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {content.description}
            </Box>
            <Button
                sx={styles.button}
            >LEARN MORE</Button>
        </Container>
    )
})

export default IntroPanel

const styles = {
    panel: {
        width: '100%',
        backgroundImage: `url(${PanelBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(100),
        paddingBottom: pixToRem(100)
    },
    mobilePanel: {
        width: '100%',
        display: 'flex',
        backgroundImage: `url(${MobilePanelBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 15,
        pb: 75
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
        marginLeft: pixToRem(70)
    },
    mobileRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(26),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(30),
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    mobileWhiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(22),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
    },
    comment: {
        width: '28%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
        marginLeft: pixToRem(70)
    },
    mobileComment: {
        width: '90%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(24),
        textAlign: 'center',
        mt: 4
    },
    button: {
        height: pixToRem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: pixToRem(20),
        marginLeft: pixToRem(70)
    },
    mobileButton: {
        height: pixToRem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        mt: 6
    }
}