import {Box, Container, useMediaQuery, useTheme} from "@mui/material";
import {memo, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Mindfullness from '../../assets/images/academy/mindfulness_room.png'
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import ReactMarkdown from "react-markdown";
import Grid from "@mui/material/Unstable_Grid2";

const Middle = memo(props => {
    const [content, setContent] = useState({})
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
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
                'filters[section][$eq]': 'section2'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    return (
        <Grid
            container
            sx={styles.panel}
        >
            {!md && <Grid
                item
                md={6}
                sm={12}
            >
                <Box
                    component={'img'}
                    sx={styles.image}
                    src={Mindfullness}
                />
            </Grid>}
            <Grid
                item
                md={6}
                sm={12}
            >
                <Box
                    component={'div'}
                    sx={sm ? styles.mobileCommentPanel : styles.commentPanel}
                >
                    <Box
                        component={'span'}
                        sx={sm ? styles.mobileRedTitle : styles.redTitle}
                    >{content.title1}</Box>
                    <Box
                        component={'span'}
                        sx={sm ? styles.mobileBlackTitle : styles.blackTitle}
                    >{content.title2}</Box>
                    <ReactMarkdown className={sm ? 'mobileAcademyPlaceTxt' : 'academyPlaceTxt'}>
                        {content.description}
                    </ReactMarkdown>
                </Box>
            </Grid>
            {md && <Grid
                item
                md={6}
                sm={12}
            >
                <Box
                    component={'img'}
                    sx={styles.image}
                    src={Mindfullness}
                />
            </Grid>}
        </Grid>
    )
})
export default Middle

const styles = {
    panel: {
        backgroundColor: colors.bgWhiteColor,
        p: 0
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    commentPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pt: 10,
        pl: 13,
        pb: 5
    },
    mobileCommentPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 7,
        pb: 7
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
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
        fontSize: pixToRem(35),
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#333',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    mobileBlackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#333',
        lineHeight: pixToRem(36),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        width: '70%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#999',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
    },
}