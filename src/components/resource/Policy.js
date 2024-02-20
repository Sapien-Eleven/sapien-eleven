import React, {memo, useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import Header from "../Header";
import {Footer} from "../Footer";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ReactMarkdown from 'react-markdown'

const Policy = memo(props => {
    const {state} = useLocation();
    const [content, setContent] = useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchContent().then();
    }, [state.policy])
    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}resources`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[title][$eq]': state.policy
            }
        })).data;
        setContent(data.data[0].attributes);
    }
    return (
        <div className={'app'}>
            <Header page={''}/>
            <ContentHeader updatedAt={content.updatedAt} title={content.title} />
            <Content content={content.content} contentList={content.contentList} />
            <Footer />
        </div>
    )
})
export default Policy

const styles = {
    contentHeaderContainer: {
        backgroundColor: colors.bgBlackColor,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(70),
        paddingBottom: pixToRem(70)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        lineHeight: pixToRem(45),
        color: colors.red
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(50),
        fontWeight: '700',
        lineHeight: pixToRem(60),
        color: 'white'
    },
    backBtn: {
        position: 'absolute',
        top: pixToRem(30),
        left: pixToRem(100),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: '#ccc'
    },
    backIcon: {
        fontSize: pixToRem(20),
        color: '#ccc'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },
    leftContainer: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.bgWhiteColor,
        paddingTop: pixToRem(100),
        paddingLeft: pixToRem(70),
        paddingRight: pixToRem(15)
    },
    rightContainer: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        paddingTop: pixToRem(100),
        paddingLeft: pixToRem(100),
        paddingRight: pixToRem(200),
        paddingBottom: pixToRem(100)
    },
    tableOfContents: {
        width: '100%',
        paddingBottom: pixToRem(20),
        marginBottom: pixToRem(20),
        borderBottomColor: 'rgba(217, 217, 217, 1)',
        borderBottomWidth: pixToRem(1),
        borderBottomStyle: 'solid',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        lineHeight: pixToRem(30),
        color: '#333',
        textTransform: 'uppercase'
    },
    contentTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '400',
        lineHeight: pixToRem(30),
        color: '#999'
    }
}

const ContentHeader = (props) => {
    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <Container
            maxWidth={false}
            sx={styles.contentHeaderContainer}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {`Last updated ${formatDate(props.updatedAt)}`}
            </Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                {props.title}
            </Box>
            <Button
                sx={styles.backBtn}
                startIcon={<ChevronLeft fontSize={'large'} htmlColor={'#ccc'} />}
                onClick={() => navigate(-1)}
            >Go Back</Button>
        </Container>
    )
}

const Content = (props) => {
    return (
        <Container
            maxWidth={false}
            sx={styles.container}
        >
            <Box
                component={'div'}
                sx={styles.leftContainer}
            >
                <Box
                    component={'span'}
                    sx={styles.tableOfContents}
                >Table Of Contents</Box>
                <ReactMarkdown
                    className={'reactMarkdownTxt'}
                >
                    {props.contentList}
                </ReactMarkdown>
            </Box>
            <Box
                component={'div'}
                sx={styles.rightContainer}
            >
                <ReactMarkdown
                    className={'reactMarkdownTxt'}
                >
                    {props.content}
                </ReactMarkdown>
            </Box>
        </Container>
    )
}