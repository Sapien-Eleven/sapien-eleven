import {Box, Button, Stack} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {AccessTime, ChevronLeft, ChevronRight} from "@mui/icons-material";
import BiMessenger from "../../assets/images/blog/bi_messenger";
import Twitter from '../../assets/images/blog/twitter'
import Instagram from "../../assets/images/blog/instagram";
import Whatsapp from "../../assets/images/blog/whatsapp";
import Facebook from "../../assets/images/blog/facebook";
import LinkedIn from '../../assets/images/blog/linkedin'
import Tiktok from "../../assets/images/blog/tiktok";

const Detail = memo(props => {
    return (
        <div style={styles.container}>
            <Box
                component={'div'}
                sx={[styles.headerPanel, {backgroundImage: `url(${props.content.backgroundImage})`}]}
            >
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    {props.content.createdAt} | {props.content.parentCategory} - {props.content.category}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.whiteTitle}
                >
                    {props.content.title}
                </Box>
                <Box
                    component={'div'}
                    sx={styles.time}
                >
                    <AccessTime sx={{color: 'rgba(255, 255, 255, 0.69)'}} />
                    <Box component={'span'} sx={styles.timeTxt}>{`${props.content.time}m Read Time`}</Box>
                </Box>
                <Button
                    sx={styles.goBackBtn}
                    startIcon={<ChevronLeft color={'white'} fontSize={'large'} />}
                    onClick={props.goBack}
                >Go back</Button>
            </Box>
            <Box
                component={'div'}
                sx={styles.contentPanel}
            >
                {
                    props.content.introduction.split('\n').map(item => (
                        <Box component={'span'} sx={styles.comment}>{item}<br/></Box>
                    ))
                }
                <Box
                    component={'img'}
                    src={props.content.contentImage}
                    sx={styles.contentImage}
                />
                <Box
                    component={'span'}
                    sx={styles.specialComment}
                >
                    {props.content.contentImageDescription}
                </Box>
                {
                    props.content.description.split('\n').map(item => (
                        <Box component={'span'} sx={styles.comment}>{item}<br/></Box>
                    ))
                }
                <Box
                    component={'div'}
                    sx={styles.socialLinkPanel}
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
                            sx={styles.socialLink}
                        >
                            <BiMessenger />
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.socialLink}
                        >
                            <Twitter />
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.socialLink}
                        >
                            <Instagram />
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.socialLink}
                        >
                            <Whatsapp />
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.socialLink}
                        >
                            <Facebook />
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.socialLink}
                        >
                            <LinkedIn />
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.socialLink}
                        >
                            <Tiktok />
                        </Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.recommendPanel}
                >
                    <Box
                        component={'span'}
                        sx={styles.recommendRedTitle}
                    >RECOMMENDED</Box>
                    <Box
                        component={'span'}
                        sx={styles.recommendBlackTitle}
                    >You may also like...</Box>
                    <Stack sx={{width: '100%', marginTop: pixToRem(60)}} direction={'row'} spacing={2}>
                        {
                            props.recommended.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={styles.recommendItem}
                                    item={item}
                                >
                                    <Box
                                        component={'img'}
                                        src={item.image}
                                        sx={styles.recommendItemImage}
                                    />
                                    <Box
                                        component={'span'}
                                        sx={styles.recommendItemTitle}
                                    >{item.title}</Box>
                                    <Button
                                        sx={styles.recommendItemButton}
                                        onClick={() => props.readContent(item)}
                                    >
                                        READ MORE
                                        <ChevronRight sx={{color: colors.red}} />
                                    </Button>
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Box>
        </div>
    )
})
export default Detail

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
        height: pixToRem(430),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: '700',
        color: colors.red,
        lineHeight: pixToRem(49)
    },
    whiteTitle: {
        width: '50%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(60),
        fontWeight: '700',
        color: 'white',
        lineHeight: pixToRem(70),
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
        top: pixToRem(50),
        left: pixToRem(90)
    },
    contentPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        paddingTop: pixToRem(80),
        paddingBottom: pixToRem(80),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        color: colors.comment,
        lineHeight: pixToRem(30)
    },
    contentImage: {
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        marginTop: pixToRem(40),
        marginBottom: pixToRem(40)
    },
    specialComment: {
        paddingLeft: pixToRem(20),
        borderLeft: '7px solid #CA3C3D',
        fontFamily: fonts.roboto,
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginBottom: pixToRem(40),
    },
    socialLinkPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(80),
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
    recommendBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(50),
        fontWeight: '700',
        lineHeight: pixToRem(60),
        color: colors.bgBlackColor,
    },
    recommendItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        width: '60%',
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