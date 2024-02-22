import {Box, Button, Stack, useMediaQuery, useTheme} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {
    AccessTime,
    ChevronLeft,
    ChevronRight,
    Facebook,
    Instagram,
    LinkedIn,
    Twitter,
    WhatsApp
} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../Header";
import {Footer} from "../Footer";
import ReactMarkdown from "react-markdown";
import {StrapiBaseURL} from "../../const/consts";
import {BsMessenger, BsTiktok} from "react-icons/bs";
import Grid from "@mui/material/Unstable_Grid2";

const MediaDetail = memo(props => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={'app'}>
            <Header page={'media'}/>
            <Content
                content={state.detail}
                recommendItems={state.recommendItems}
                goToDetail={(detail, recommendItems) => navigate('/media/detail', {state: {detail, recommendItems}})}
            />
            {!sm && <Footer/>}
        </div>
    )
})
export default MediaDetail


const Content = memo(props => {
    const navigate = useNavigate();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <div style={styles.container}>
            <Box
                component={'div'}
                sx={[styles.headerPanel, {
                    backgroundImage: `url(${props.content.headerImage})`,
                    pt: sm ? 12 : pixToRem(60),
                    pb: sm ? 12 : pixToRem(60),
                }]}
            >
                <Box
                    component={'span'}
                    sx={sm ? styles.mobileRedTitle : styles.redTitle}
                >
                    {formatDate(props.content.updatedAt)}
                </Box>
                <Box
                    component={'span'}
                    sx={sm ? styles.mobileWhiteTitle : styles.whiteTitle}
                >
                    {props.content.title}
                </Box>
                <Box
                    component={'div'}
                    sx={styles.time}
                >
                    <AccessTime sx={{color: 'rgba(255, 255, 255, 0.69)'}} />
                    <Box component={'span'} sx={styles.timeTxt}>{`${props.content.readingTime}m Read Time`}</Box>
                </Box>
                <Button
                    sx={[styles.goBackBtn, {
                        top: sm ? pixToRem(20) : pixToRem(50),
                        left: sm ? pixToRem(20) : pixToRem(90)
                    }]}
                    startIcon={<ChevronLeft color={'white'} fontSize={'large'} />}
                    onClick={() => navigate(-1)}
                >{sm ? '' : 'Go back'}</Button>
            </Box>
            <Box
                component={'div'}
                sx={[styles.contentPanel, {
                    width: sm ? '100%' : '46%',
                    pl: sm ? 2 : 0,
                    pr: sm ? 2 : 0,
                    pt: sm ? 5 : pixToRem(80)
                }]}
            >
                <ReactMarkdown
                    className={sm ? 'mobileBlogContentTxt' : 'blogContentTxt'}
                    urlTransform={uri => `${StrapiBaseURL}${uri}`}
                >
                    {props.content.content}
                </ReactMarkdown>
                <Box
                    component={'div'}
                    sx={[styles.socialLinkPanel, {
                        width: sm ? '90%' : '100%',
                        pt: sm ? 10 : pixToRem(30),
                        pb: sm ? 5 : pixToRem(80)
                    }]}
                >
                    <Box
                        component={'span'}
                        sx={styles.socialLinkTitle}
                    >
                        Share on social media:
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.socialLinks}
                    >
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <BsMessenger color={colors.red} size={pixToRem(20)} />
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <Twitter sx={{color: colors.red, fontSize: pixToRem(25)}} />
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <Instagram sx={{color: colors.red, fontSize: pixToRem(25)}} />
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <WhatsApp sx={{color: colors.red, fontSize: pixToRem(25)}} />
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <Facebook sx={{color: colors.red, fontSize: pixToRem(25)}} />
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <LinkedIn sx={{color: colors.red, fontSize: pixToRem(25)}} />
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.socialLink, {
                                width: sm ? pixToRem(40) : pixToRem(46),
                                height: sm ? pixToRem(40) : pixToRem(46),
                            }]}
                        >
                            <BsTiktok color={colors.red} size={pixToRem(20)} />
                        </Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.recommendPanel, {
                        pl: sm ? 2 : 0,
                        pr: sm ? 2 : 0
                    }]}
                >
                    <Box
                        component={'span'}
                        sx={sm ? styles.mobileRecommendRedTitle : styles.recommendRedTitle}
                    >RECOMMENDED</Box>
                    <Box
                        component={'span'}
                        sx={sm ? styles.mobileRecommendBlackTitle : styles.recommendBlackTitle}
                    >You may also like...</Box>
                    <Grid
                        container
                        sx={{marginTop: pixToRem(60)}}
                        spacing={2}
                    >
                        {
                            props.recommendItems.slice(0, 2).map((item, index) => (
                                <Grid
                                    item
                                    sm={6}
                                    xs={12}
                                >
                                    <Box
                                        key={index}
                                        sx={styles.recommendItem}
                                        item={item}
                                    >
                                        <Box
                                            component={'img'}
                                            src={item.thumbnail}
                                            sx={styles.recommendItemImage}
                                        />
                                        <Box
                                            component={'span'}
                                            sx={styles.recommendItemTitle}
                                        >{item.title}</Box>
                                        <Button
                                            sx={styles.recommendItemButton}
                                            onClick={() => props.goToDetail(item, props.recommendItems.filter(e => e.id !== item.id))}
                                        >
                                            READ MORE
                                            <ChevronRight sx={{color: colors.red}} />
                                        </Button>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
})

const styles = {
    container: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerPanel: {
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        color: colors.red,
        lineHeight: pixToRem(45)
    },
    mobileRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        color: colors.red,
        lineHeight: pixToRem(45)
    },
    whiteTitle: {
        width: '60%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(50),
        fontWeight: '700',
        color: 'white',
        lineHeight: pixToRem(60),
        textAlign: 'center',
        marginTop: pixToRem(10)
    },
    mobileWhiteTitle: {
        width: '95%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        color: 'white',
        lineHeight: pixToRem(40),
        textAlign: 'center',
        marginTop: pixToRem(10)
    },
    time: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: pixToRem(25)
    },
    timeTxt: {
        marginLeft: pixToRem(5),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.69)'
    },
    goBackBtn: {
        border: '1px solid white',
        borderRadius: 0,
        paddingTop: pixToRem(5),
        paddingBottom: pixToRem(5),
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        position: 'absolute',
    },
    contentPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(80),
        paddingBottom: pixToRem(80),
    },
    socialLinkPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottom: '1px solid #D9D9D9'
    },
    socialLinkTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        lineHeight: pixToRem(20),
        color: colors.comment
    },
    socialLinks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: pixToRem(20)
    },
    socialLink: {
        marginRight: pixToRem(10),
        width: pixToRem(46),
        height: pixToRem(46),
        borderRadius: '100%',
        backgroundColor: '#EBE9E9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recommendPanel: {
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(60)
    },
    recommendRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        lineHeight: pixToRem(45),
        color: colors.red,
    },
    mobileRecommendRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: '700',
        lineHeight: pixToRem(39),
        color: colors.red,
    },
    recommendBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(50),
        fontWeight: '700',
        lineHeight: pixToRem(60),
        color: colors.bgBlackColor,
    },
    mobileRecommendBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: '700',
        lineHeight: pixToRem(39),
        color: colors.bgBlackColor,
    },
    recommendItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F8F8'
    },
    recommendItemImage: {
        width: '100%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    recommendItemTitle: {
        width: '75%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '700',
        color: colors.bgBlackColor,
        textAlign: 'center',
        marginTop: pixToRem(20)
    },
    recommendItemButton: {
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
    }
}