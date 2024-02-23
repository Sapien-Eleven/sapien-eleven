import {Box, useMediaQuery, useTheme} from "@mui/material";
import {memo, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";

const MainContent = memo(props => {
    const [content, setContent] = useState([]);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        fetchContent().then();
    }, [props.category]);
    const fetchContent = async () => {
        let collection = '';
        if (props.category.parent_id === 1) collection = 'mentals';
        else if (props.category.parent_id === 2) collection = 'physicals';
        const data = (await axios.get(`${StrapiURL}${collection}`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[category][$eq]': props.category.name,
                'populate': '*'
            }
        })).data;

        setContent({
            id: data.data[0].id,
            category: data.data[0].attributes.category,
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
            thumbnail: `${StrapiBaseURL}${data.data[0].attributes.thumbnail.data.attributes.url}`,
        });
    }
    if (sm) return (
        <Box
            component={'div'}
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
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.mobileComment}
            >
                {content.description}
            </Box>
            <Box
                component={'img'}
                sx={styles.img}
                src={content.thumbnail}
            />
        </Box>
    )
    return (
        <Box
            component={'div'}
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
                component={'img'}
                sx={styles.img}
                src={content.thumbnail}
            />
        </Box>
    )
})

export default MainContent

const styles = {
    panel: {
        display: 'flex',
        flex: 1,
        width: '68%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: pixToRem(70),
        paddingBottom: pixToRem(30),
    },
    mobilePanel: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 7
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(40),
    },
    mobileRedTitle: {fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(36),
    },
    blackTitle: {
        maxWidth: '80%',
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.black,
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
    },
    mobileBlackTitle: {
        maxWidth: '90%',
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(36),
        color: colors.black,
        textAlign: 'center',
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    mobileComment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(24),
        color: colors.comment,
        textAlign: 'center',
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    img: {
        width: '100%',
        height: 'auto',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(100)
    }
}