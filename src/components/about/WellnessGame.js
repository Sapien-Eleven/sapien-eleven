import {memo, useEffect, useState} from "react";
import {Box, Container, useMediaQuery, useTheme} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import FrameImg from '../../assets/images/about/wellness_game.jpg'
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import ReactMarkdown from "react-markdown";

const WellnessGame = memo(props => {
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
                'filters[section][$eq]': 'section2'
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
                sx={styles.mobileBlackTitle}
            >{content.title2}</Box>
            <Box
                component={'img'}
                src={FrameImg}
                sx={styles.mobileImg}
            />
            <ReactMarkdown className={'mobileAboutWellnessTxt'}>
                {content.description}
            </ReactMarkdown>
        </Container>
    )
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'img'}
                src={FrameImg}
                sx={styles.img}
            />
            <Box
                component={'div'}
                sx={styles.commentPanel}
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
                >{content.title2}</Box>
                <ReactMarkdown className={'aboutWellnessTxt'}>
                    {content.description}
                </ReactMarkdown>
            </Box>
        </Container>
    )
})

export default WellnessGame

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(90),
        backgroundColor: colors.bgWhiteColor
    },
    mobilePanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(90),
        backgroundColor: colors.bgWhiteColor
    },
    img: {
        width: '45%',
        height: 'auto',
    },
    mobileImg: {
        width: '95%',
        height: 'auto',
        mt: 5,
        mb: 5
    },
    commentPanel: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        lineHeight: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        marginLeft: pixToRem(70)
    },
    mobileRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        lineHeight: pixToRem(36),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.black,
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    mobileBlackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: 400,
        fontStyle: 'normal',
        color: colors.black,
        lineHeight: pixToRem(36),
    },
    comment: {
        width: '85%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginLeft: pixToRem(70),
        marginTop: pixToRem(15)
    },
    mobileComment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(16),
        lineHeight: pixToRem(24),
        color: colors.comment,
    },
}