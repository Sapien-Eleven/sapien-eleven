import React, {memo, useEffect, useState} from "react";
import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import Header from "../Header";
import {Footer} from "../Footer";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ReactMarkdown from 'react-markdown'
import Grid from "@mui/material/Unstable_Grid2";

const Policy = memo(props => {
    const {state} = useLocation();
    const [content, setContent] = useState({});
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
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
            {!sm && <Footer/>}
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
    mobileWhiteTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: '700',
        lineHeight: pixToRem(40),
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
    mobileBackBtn: {
        position: 'absolute',
        top: pixToRem(20),
        left: pixToRem(20),
        border: '1px solid #ccc'
    },
    backIcon: {
        fontSize: pixToRem(20),
        color: '#ccc'
    },
    leftContainer: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.bgWhiteColor,
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
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
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <Container
            maxWidth={false}
            sx={[styles.contentHeaderContainer, {
                pt: sm ? 12 : pixToRem(70)
            }]}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {`Last updated ${formatDate(props.updatedAt)}`}
            </Box>
            <Box
                component={'span'}
                sx={sm ? styles.mobileWhiteTitle : styles.whiteTitle}
            >
                {props.title}
            </Box>
            <Button
                sx={sm ? styles.mobileBackBtn : styles.backBtn}
                startIcon={<ChevronLeft style={{fontSize: sm ? 25 : 20}} htmlColor={'#ccc'} />}
                onClick={() => navigate(-1)}
            >{sm ? '' : 'Go Back'}</Button>
        </Container>
    )
}

const Content = (props) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid
            container
            spacing={0}
        >
            <Grid
                item
                sm={3.5}
                xs={12}
            >
                <Box
                    component={'div'}
                    sx={[styles.leftContainer, {
                        pt: sm ? 8 : pixToRem(100),
                        pl: sm ? 5 : pixToRem(70),
                        pr: sm ? 3 : pixToRem(15)
                    }]}
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
            </Grid>
            <Grid
                item
                sm={8.5}
                xs={12}
            >
                <Box
                    component={'div'}
                    sx={[styles.rightContainer, {
                        pt: sm ? 10 : pixToRem(100),
                        pl: sm ? 3 : pixToRem(100),
                        pr: sm ? 3 : pixToRem(200),
                        pb: 10
                    }]}
                >
                    <ReactMarkdown
                        className={'reactMarkdownTxt'}
                    >
                        {props.content}
                    </ReactMarkdown>
                </Box>
            </Grid>
        </Grid>
    )
}