import {memo, useEffect, useState} from "react";
import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Running from "../../assets/images/running.png";
import Mark from '../../assets/sapien.svg'
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import MobileRunning from "../../assets/images/mobile_running.png";

const Membership = memo(props => {
    const [content, setContent] = useState({})
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}academy-landings`, {
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
    if (md) return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.mobilePanel}
        >
            <Box
                component={'div'}
                sx={styles.mobileExplaination}
            >
                <Box
                    component={'span'}
                    sx={styles.mobileWhiteTitle}
                >
                    {content.title1}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.mobileRedTitle}
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
                    sx={styles.joinBtn}
                    startIcon={<img src={Mark} style={{width: '14px', height: '22px', marginRight: '6px'}} alt={'mark'} />}
                >
                    Join Sapien Eleven
                </Button>
            </Box>
            <Box
                component={'img'}
                src={MobileRunning}
                sx={{width: '100%', height: 'auto', mt: 10}}
            />
        </Container>
    )
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
                    sx={styles.whiteTitle}
                >
                    {content.title1}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTitle}
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
                    sx={styles.joinBtn}
                    startIcon={<img src={Mark} style={{width: '14px', height: '22px', marginRight: '6px'}} alt={'mark'} />}
                >
                    Join Sapien Eleven
                </Button>
            </Box>
        </Container>
    )
})

export default Membership

const styles = {
    panel: {
        backgroundColor: colors.bgBlackColor,
        backgroundImage: `url(${Running})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: pixToRem(150),
        paddingBottom: pixToRem(150)
    },
    mobilePanel: {
        backgroundColor: colors.bgBlackColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        pt: 5
    },
    explaination: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: pixToRem(50)
    },
    mobileExplaination: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        m: 3
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(35),
        lineHeight: pixToRem(45)
    },
    mobileWhiteTitle: {
        fontFamily: fonts.roboto,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(40)
    },
    redTitle: {
        fontFamily: fonts.besan,
        color: colors.red,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(35),
        lineHeight: pixToRem(45)
    },
    mobileRedTitle: {
        fontFamily: fonts.besan,
        color: colors.red,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(30),
        lineHeight: pixToRem(45)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(23),
        lineHeight: pixToRem(40),
        color: colors.comment,
        marginTop: '1em'
    },
    mobileComment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(20),
        lineHeight: pixToRem(30),
        color: colors.comment,
        textAlign: 'center',
        marginTop: '1.6em'
    },
    joinBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(25),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: '2.5em',
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        paddingLeft: pixToRem(45),
        paddingRight: pixToRem(45)
    }
}