import {Box, Button, Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {
    ArrowDropDown,
    ArrowRight,
    Cached,
    ChevronRight,
    PauseCircleOutline, PlayCircleOutline,
    SettingsVoice
} from "@mui/icons-material";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import {useCollapse} from "react-collapsed";
import ReactMarkdown from "react-markdown";
import useAudio from "../hooks/useAudio";
import WaveForm from "./WaveForm";
import Grid from "@mui/material/Unstable_Grid2";

const ContentPanel = memo(props => {
    const [currentCategory, setCurrentCategory] = useState('blog');
    const [content, setContent] = useState([]);
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        fetchContents(currentCategory).then();
    }, [])
    const changeCategory = useCallback(async (category) => {
        setCurrentCategory(category);
        setContent([]);
        props.changeCategory(category);
        await fetchContents(category);
    }, [currentCategory]);
    const fetchContents = async (category) => {
        switch (category) {
            case 'blog':
                const data = (await axios.get(`${StrapiURL}blogs`, {
                    headers: {
                        'Authorization': `bearer ${StrapiToken}`
                    },
                    params: {
                        'populate': '*'
                    }
                })).data;
                setContent(data.data.reduce((acc, cur) => [...acc, {
                    id: cur.id,
                    title: cur.attributes.title,
                    thumbnail: `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
                    headerImage: `${StrapiBaseURL}${cur.attributes.headerImage.data.attributes.url}`,
                    readingTime: cur.attributes.readingTime,
                    content: cur.attributes.content,
                    updatedAt: cur.attributes.updatedAt
                }], []));
                break;
            case 'updates':
                const updatesData = (await axios.get(`${StrapiURL}updates`, {
                    headers: {
                        'Authorization': `bearer ${StrapiToken}`
                    }
                })).data;
                setContent(updatesData.data.reduce((acc, cur) => [...acc, {
                    id: cur.id,
                    title: cur.attributes.title,
                    content: cur.attributes.content,
                    updatedAt: cur.attributes.updatedAt
                }], []));
                break;
            case 'news':
                const newsData = (await axios.get(`${StrapiURL}news`, {
                    headers: {
                        'Authorization': `bearer ${StrapiToken}`
                    },
                    params: {
                        'populate': '*'
                    }
                })).data;
                setContent(newsData.data.reduce((acc, cur) => [...acc, {
                    id: cur.id,
                    title: cur.attributes.title,
                    thumbnail: `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
                    headerImage: `${StrapiBaseURL}${cur.attributes.headerImage.data.attributes.url}`,
                    readingTime: cur.attributes.readingTime,
                    content: cur.attributes.content,
                    updatedAt: cur.attributes.updatedAt
                }], []));
                break;
            case 'podcasts':
                const podcastsData = (await axios.get(`${StrapiURL}podcasts`, {
                    headers: {
                        'Authorization': `bearer ${StrapiToken}`
                    },
                    params: {
                        'populate': '*'
                    }
                })).data;
                setContent(podcastsData.data.reduce((acc, cur) => [...acc, {
                    id: cur.id,
                    title: cur.attributes.title,
                    audio: `${StrapiBaseURL}${cur.attributes.audio.data.attributes.url}`,
                    content: cur.attributes.content,
                    updatedAt: cur.attributes.updatedAt
                }], []));
                break;
        }
    }
    return (
        <Container
            maxWidth={false}
            sx={styles.container}
        >
            <Stack
                sx={{width: sm ? '100%' : md ? '75%' : '50%'}}
                direction={'row'}
                spacing={1}
            >
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'blog' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('blog')}
                >
                    Blog
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'updates' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('updates')}
                >
                    Updates
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'news' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('news')}
                >
                    News
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'podcasts' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('podcasts')}
                >
                    Podcasts
                </Box>
            </Stack>
            {
                currentCategory === 'blog' ?
                    <Blog content={content} goToDetail={props.goToDetail} />
                    : currentCategory === 'updates' ? <Updates content={content} />
                        : currentCategory === 'news' ? <Blog content={content} goToDetail={props.goToDetail} />
                            : currentCategory === 'podcasts' ? <Podcasts content={content} /> : null
            }
        </Container>
    )
})
export default ContentPanel

const styles = {
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: pixToRem(30),
        paddingRight: pixToRem(30),
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(60),
        backgroundColor: 'white'
    },
    categoryTitle: {
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: pixToRem(3),
        borderBottomColor: colors.red,
        borderBottomStyle: 'solid',

        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: '#333',
    },
    contentItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(248, 248, 248, 1)'
    },
    contentImage: {
        width: '100%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    contentTitle: {
        width: '70%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '700',
        color: colors.bgBlackColor,
        textAlign: 'center',
        marginTop: pixToRem(20)
    },
    contentButton: {
        marginTop: pixToRem(15),
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(13),
        fontWeight: '700',
        color: '#999',
    },
    updatesItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: pixToRem(20),
        paddingBottom: pixToRem(20),
        paddingLeft: pixToRem(40),
        paddingRight: pixToRem(40)
    },
    updatesTitleGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    updatesItemTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(24),
        fontWeight: '700',
        lineHeight: pixToRem(30),
        color: colors.black,
        marginLeft: pixToRem(10)
    },
    updatesItemContent: {
        paddingBottom: pixToRem(20),
        paddingLeft: pixToRem(80),
        paddingRight: pixToRem(40)
    },
    updatesDateTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        lineHeight: pixToRem(30),
        color: '#999',
    },
    podcastsItem: {
        backgroundColor: colors.bgWhiteColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: pixToRem(20),
        paddingLeft: pixToRem(30),
        paddingRight: pixToRem(20),
    },
    podcastsItemContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: pixToRem(20)
    },
    podcastsItemTitlePanel: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: pixToRem(20)
    },
    podcastsItemTitleGroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: pixToRem(10)
    },
    podcastsItemTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        lineHeight: pixToRem(30),
        color: '#333'
    },
    podcastsItemDate: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '700',
        lineHeight: pixToRem(30),
        color: '#333',
        marginLeft: pixToRem(5)
    },
    podcastsItemContentTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '400',
        lineHeight: pixToRem(30),
        color: '#333',
        marginTop: pixToRem(10)
    }
}

const Blog = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid
            container
            sx={{width: sm ? '100%' : '95%', mt: 5}}
            spacing={3}
        >
            {
                props.content.map((item, index) => (
                    <Grid
                        item
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                    >
                        <Box
                            key={index}
                            sx={styles.contentItem}
                        >
                            <Box
                                component={'img'}
                                src={item.thumbnail}
                                sx={styles.contentImage}
                            />
                            <Box
                                component={'span'}
                                sx={styles.contentTitle}
                            >{item.title}</Box>
                            <Button
                                sx={styles.contentButton}
                                onClick={() => props.goToDetail(item, props.content.filter(e => e.id !== item.id))}
                            >
                                READ MORE
                                <ChevronRight sx={{color: colors.red}} />
                            </Button>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    )
})

const Updates = memo(props => {
    return (
        <Stack
            sx={{width: '95%', marginTop: pixToRem(50)}}
            direction={'column'}
            spacing={3}
        >
            {
                props.content.map((item, index) => (
                    <UpdateItem
                        key={index}
                        item={item}
                    />
                ))
            }
        </Stack>
    )
})

const UpdateItem = memo(props => {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        duration: 1000,
    });
    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <Box
            component={'div'}
            sx={{backgroundColor: colors.bgWhiteColor}}
        >
            <Box
                component={'div'}
                sx={styles.updatesItem}
                {...getToggleProps()}
            >
                <Box
                    component={'div'}
                    sx={styles.updatesTitleGroup}
                >
                    <Cached sx={{color: 'rgba(153, 153, 153, 1)'}} />
                    <Box
                        component={'span'}
                        sx={styles.updatesItemTitle}
                    >
                        {props.item.title}
                    </Box>
                </Box>
                {
                    isExpanded ?
                        <ArrowDropDown sx={{color: colors.black}} /> : <ArrowRight sx={{color: colors.black}} />
                }
            </Box>
            <Box
                component={'div'}
                sx={styles.updatesItemContent}
                {...getCollapseProps()}
            >
                <Box
                    component={'span'}
                    sx={styles.updatesDateTxt}
                >
                    {formatDate(props.item.updatedAt)}
                </Box>
                <ReactMarkdown className={'updatesContentTxt'}>
                    {props.item.content}
                </ReactMarkdown>
            </Box>
        </Box>
    )
})

const Podcasts = memo(props => {
    return (
        <Stack
            sx={{width: '95%', marginTop: pixToRem(50)}}
            direction={'column'}
            spacing={3}
        >
            {
                props.content.map((item, index) => (
                    <PodcastsItem
                        key={index}
                        item={item}
                    />
                ))
            }
        </Stack>
    )
})

const PodcastsItem = memo(props => {
    const [analyzerData, setAnalyzerData] = useState(null);
    const [audio, playing, toggle] = useAudio(props.item.audio);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    }

    let source

    useEffect(() => {
        // audioAnalyzer();
    }, []);

    const audioAnalyzer = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyzer = audioCtx.createAnalyser();
        analyzer.fftSize = 2048;

        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyzer);
        analyzer.connect(audioCtx.destination);
        source.onended = () => {
            source.disconnect();
        };

        setAnalyzerData({ analyzer, bufferLength, dataArray });
    };

    return (
        <Box
            sx={styles.podcastsItem}
            component={'div'}
        >
            <Box
                component={'div'}
                sx={styles.podcastsItemContent}
            >
                <Box
                    component={'div'}
                    sx={styles.podcastsItemTitlePanel}
                >
                    <SettingsVoice sx={{color: playing ? colors.red : 'rgba(102, 102, 102, 1)', fontSize: pixToRem(36)}} />
                    <Box
                        component={'div'}
                        sx={styles.podcastsItemTitleGroup}
                    >
                        <Box
                            component={'div'}
                            sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}
                        >
                            <Box
                                component={'span'}
                                sx={styles.podcastsItemTitle}
                            >
                                {props.item.title}
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.podcastsItemDate}
                            >
                                {`- ${formatDate(props.item.updatedAt)}`}
                            </Box>
                        </Box>
                        <Box
                            component={'span'}
                            sx={styles.podcastsItemContentTxt}
                        >
                            {props.item.content}
                        </Box>
                    </Box>
                </Box>
                <Button
                    onClick={toggle}
                >
                    {
                        playing ?
                            <PauseCircleOutline sx={{color: 'rgba(102, 102, 102, 1)', fontSize: pixToRem(36)}} />
                            : <PlayCircleOutline sx={{color: colors.red, fontSize: pixToRem(36)}} />
                    }
                </Button>
            </Box>
            { analyzerData && <WaveForm analyzerData={analyzerData} width={'100%'} height={100} /> }
        </Box>
    )
})