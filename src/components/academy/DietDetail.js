import {memo} from "react";
import {Box, Breadcrumbs, Link, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ManualBookGrey from "../../assets/images/academy/ManualBookGrey";
import QuestionMark from "../../assets/images/academy/QuestionMark";
import Plus from "../../assets/images/academy/Plus";
import Minus from "../../assets/images/academy/Minus";
import NoFood from "../../assets/images/academy/NoFood";
import IngredientGreen from "../../assets/images/academy/IngredientGreen";
import ReactMarkdown from "react-markdown";
import Grid from "@mui/material/Unstable_Grid2";

const DietDetail = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    if (props.diet !== undefined) {
        return (
            <Box
                component={'div'}
                sx={styles.container}
            >
                <Box
                    component={'div'}
                    sx={[sm ? styles.mobileHeader : styles.header, {backgroundImage: `url(${props.diet.headerImage})`}]}
                >
                    <Box
                        component={'div'}
                        sx={sm ? styles.mobileHeaderContent : styles.headerContent}
                    >
                        <Breadcrumb diet={props.diet} goToMain={props.goToMain} />
                        <Box
                            component={'span'}
                            sx={sm ? styles.mobileWhiteTitle : styles.whiteTitle}
                        >{props.diet.thumbnailTitle}</Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.panel, {
                        pt: sm ? 7 : 10,
                        pl: sm ? 2 : 12,
                        pr: sm ? 2 : 12,
                        pb: sm ? 7 : 10
                    }]}
                >
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={7}
                            sm={12}
                        >
                            <Box
                                component={'div'}
                                sx={styles.leftPanel}
                            >
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={4}>
                                    <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                        <Box
                                            component={'div'}
                                            sx={styles.commentPanel}
                                        >
                                            <ManualBookGrey />
                                            <Box
                                                component={'span'}
                                                sx={styles.blackCommentTitle}
                                            >What is it?</Box>
                                        </Box>
                                        <Box
                                            component={'div'}
                                            sx={styles.comment}
                                        >
                                            {props.diet.whatIsIt}
                                        </Box>
                                    </Stack>
                                    <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                        <Box
                                            component={'div'}
                                            sx={styles.commentPanel}
                                        >
                                            <QuestionMark />
                                            <Box
                                                component={'span'}
                                                sx={styles.blackCommentTitle}
                                            >How and why it works?</Box>
                                        </Box>
                                        <Box
                                            component={'div'}
                                            sx={styles.comment}
                                        >
                                            {props.diet.howWhyWorks}
                                        </Box>
                                    </Stack>
                                    <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                        <Box
                                            component={'div'}
                                            sx={styles.commentPanel}
                                        >
                                            <Plus />
                                            <Box
                                                component={'span'}
                                                sx={styles.blackCommentTitle}
                                            >Pros</Box>
                                        </Box>
                                        <ReactMarkdown className={'instructionTxt'}>
                                            {props.diet.pros}
                                        </ReactMarkdown>
                                    </Stack>
                                    <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                        <Box
                                            component={'div'}
                                            sx={styles.commentPanel}
                                        >
                                            <Minus />
                                            <Box
                                                component={'span'}
                                                sx={styles.blackCommentTitle}
                                            >Cons</Box>
                                        </Box>
                                        <ReactMarkdown className={'instructionTxt'}>
                                            {props.diet.cons}
                                        </ReactMarkdown>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            mdOffset={1}
                            md={4}
                            sm={12}
                        >
                            <Box
                                component={'div'}
                                sx={styles.rightPanel}
                            >
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={4}>
                                    <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                        <Box
                                            component={'div'}
                                            sx={styles.commentPanel}
                                        >
                                            <IngredientGreen fill={colors.green} />
                                            <Box
                                                component={'span'}
                                                sx={[styles.blackCommentTitle, {color: colors.green}]}
                                            >Foods to eat!</Box>
                                        </Box>
                                        <ReactMarkdown className={'ingredientTxt'}>
                                            {props.diet.foodsToEat}
                                        </ReactMarkdown>
                                    </Stack>
                                    <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                        <Box
                                            component={'div'}
                                            sx={styles.commentPanel}
                                        >
                                            <NoFood />
                                            <Box
                                                component={'span'}
                                                sx={[styles.blackCommentTitle, {color: colors.red}]}
                                            >Foods to avoid!</Box>
                                        </Box>
                                        <ReactMarkdown className={'ingredientTxt'}>
                                            {props.diet.foodsToAvoid}
                                        </ReactMarkdown>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box
                        component={'div'}
                        sx={[styles.downPanel, {
                            mt: sm ? 10 : pixToRem(80),
                            alignItems: sm ? 'center' : 'flex-start'
                        }]}
                    >
                        <Box
                            component={'span'}
                            sx={sm ? styles.mobileRedTitle : styles.redTitle}
                        >
                            RECOMMENDED
                        </Box>
                        <Box
                            component={'span'}
                            sx={sm ? styles.mobileBlackTitle : styles.blackTitle}
                        >Diets</Box>
                        <Grid
                            sx={{width: '100%', marginTop: pixToRem(30)}}
                            container
                            spacing={3}
                        >
                            {
                                props.recommendedDiets.filter(e => e.thumbnailTitle !== props.diet.thumbnailTitle).map((item, index) => (
                                    <Grid
                                        key={index}
                                        item
                                        md={4}
                                        sm={12}
                                    >
                                        <Box
                                            component={'div'}
                                            sx={styles.downImgItem}
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                                props.changeDetail(item);
                                            }}
                                        >
                                            <Box
                                                component={'img'}
                                                src={item.thumbnail}
                                                sx={styles.downImg}
                                            />
                                            <Box
                                                component={'span'}
                                                sx={styles.imgTitle}
                                            >{item.thumbnailTitle}</Box>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
            </Box>
        )
    } else return <Box/>
})

export default DietDetail

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: pixToRem(300),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    mobileHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: pixToRem(180)
    },
    mobileHeaderContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 20,
        pb: 5
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(55),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(75),
        color: 'white',
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    mobileWhiteTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(33),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(41.5),
        color: 'white',
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red
    },
    downPanel: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    commentPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    blackCommentTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        lineHeight: pixToRem(45),
        marginLeft: pixToRem(10)
    },
    comment: {
        backgroundColor: 'white',
        paddingTop: pixToRem(50),
        paddingBottom: pixToRem(50),
        paddingLeft: pixToRem(40),
        paddingRight: pixToRem(40),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        lineHeight: pixToRem(34),
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
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
        lineHeight: pixToRem(45),
    },
    blackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(65),
        color: colors.black,
    },
    mobileBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(33),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(36),
        color: colors.black,
    },
    downImgItem: {
        display: 'inline-flex',
        position: 'relative',
        ':hover': {
            cursor: 'pointer'
        }
    },
    downImg: {
        width: '100%',
        height: 'auto',
    },
    imgTitle: {
        width: '60%',
        display: 'block',
        position: 'absolute',
        bottom: pixToRem(15),
        left: pixToRem(20),
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(35),
        color: 'white'
    }
}

const Breadcrumb = memo(props => {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon sx={{color: colors.red}} fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link underline="hover" key="1" sx={styles.breadcrumb} onClick={props.goToMain} >
                Diets
            </Link>
            <Typography key="2" color={colors.red} sx={styles.breadcrumb}>
                {props.diet.thumbnailTitle}
            </Typography>
        </Breadcrumbs>
    )
})