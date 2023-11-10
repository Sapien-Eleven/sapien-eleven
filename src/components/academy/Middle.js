import {Box, Container} from "@mui/material";
import {memo, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Mindfullness from '../../assets/images/academy/mindfulness_room.png'
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import ReactMarkdown from "react-markdown";

const Middle = memo(props => {
    const [content, setContent] = useState({})
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
        <Container
            maxWidth={false}
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'img'}
                sx={styles.image}
                src={Mindfullness}
            />
            <Box
                component={'div'}
                sx={styles.commentPanel}
            >
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >{content.title1}</Box>
                <Box
                    component={'span'}
                    sx={styles.blackTitle}
                >{content.title2}</Box>
                <ReactMarkdown className={'academyPlaceTxt'}>
                    {content.description}
                </ReactMarkdown>
            </Box>
        </Container>
    )
})
export default Middle

const styles = {
    panel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.bgWhiteColor,
        padding: '0px!important'
    },
    image: {
        width: '50%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    commentPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '12%'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
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