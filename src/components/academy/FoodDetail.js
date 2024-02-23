import {Box, Breadcrumbs, Link, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Portion from "../../assets/images/academy/portion";
import Meal from "../../assets/images/academy/meal";
import Cooking from "../../assets/images/academy/cooking.svg";
import ManualBook from "../../assets/images/academy/ManualBook";
import Ingredient from "../../assets/images/academy/ingredient.svg";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import DairyFreeImg from '../../assets/images/academy/dairy.jpg'
import GlutenFreeImg from '../../assets/images/academy/gluten.jpg'
import VeganImg from '../../assets/images/academy/vegan.jpg'
import Grid from "@mui/material/Unstable_Grid2";

const FoodDetail = memo(props => {
    const [recommendedFoods, setRecommendedFoods] = useState([]);
    const [videoState, setVideoState] = useState({
        playing: true,
        muted: false,
        volume: 0.5,
        played: 0,
        seeking: false,
        Buffer : true
    });
    const videoPlayer = useRef(null);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0,0);
        fetchRecommendFoods().then();
    }, []);

    const fetchRecommendFoods = async () => {
        let collection = '';
        switch (props.recipe.title1.toLowerCase()) {
            case 'breakfast':
                collection = 'breakfasts';
                break;
            case 'lunch':
                collection = 'lunches';
                break;
            case 'dinner':
                collection = 'dinners';
                break;
            case 'sides':
                collection = 'sides';
                break;
            case 'snacks':
                collection = 'snacks';
                break;
            default:
                break;
        }
        const data = (await axios.get(`${StrapiURL}${collection}`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setRecommendedFoods(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            title: cur.attributes.title,
            thumbnail: cur.attributes.thumbnail.data === null ? '' : `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
            portionSize: cur.attributes.portionSize,
            cookTime: cur.attributes.cookTime,
            prepareTime: cur.attributes.prepareTime,
            video: `${StrapiBaseURL}${cur.attributes.video.data === null ? '' : cur.attributes.video.data.attributes.url}`,
            images: cur.attributes.images.data === null ? [] : cur.attributes.images.data.reduce((a, c) => [...a, `${StrapiBaseURL}${c.attributes.url}`], []),
            ingredients: cur.attributes.ingredients,
            instructions: cur.attributes.instructions
        }], []));
    }

    if (props.food !== undefined) {
        return (
            <Box
                component={'div'}
                sx={[styles.container, {
                    pt: sm ? 7 : 12,
                    pl: sm ? 2 : 12,
                    pr: sm ? 2 : 12,
                    pb: 10
                }]}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        md={6}
                        sm={12}
                    >
                        <Box
                            component={'div'}
                            sx={styles.leftPanel}
                        >
                            <Breadcrumb recipe={props.recipe} food={props.food} goToMain={props.goToMain} goToSub={props.goToSub} />
                            <Box
                                component={'div'}
                                sx={styles.titlePanel}
                            >
                                <Box
                                    component={'span'}
                                    sx={sm ? styles.mobileBlackTitle : styles.blackTitle}
                                >
                                    {props.food.title}
                                </Box>
                                <Stack
                                    direction={'row'}
                                    spacing={1}
                                    useFlexGap
                                    flexWrap={'wrap'}
                                >
                                    {
                                        props.food.dairyFree &&
                                        <Box
                                            component={'img'}
                                            src={DairyFreeImg}
                                            sx={styles.statusImg}
                                        />
                                    }
                                    {
                                        props.food.glutenFree &&
                                        <Box
                                            component={'img'}
                                            src={GlutenFreeImg}
                                            sx={styles.statusImg}
                                        />
                                    }
                                    {
                                        props.food.vegan &&
                                        <Box
                                            component={'img'}
                                            src={VeganImg}
                                            sx={styles.statusImg}
                                        />
                                    }
                                </Stack>
                            </Box>
                            <Stack sx={styles.explainStack} direction={'row'} spacing={1}>
                                <Box
                                    sx={[styles.explainItem, {padding: sm ? pixToRem(5) : pixToRem(10)}]}
                                    component={'div'}
                                >
                                    <Portion />
                                    <Box
                                        component={'div'}
                                        sx={styles.explainGroup}
                                    >
                                        <Box
                                            component={'span'}
                                            sx={sm ? styles.mobileExplainTitle : styles.explainTitle}
                                        >Portion Size:</Box>
                                        <Box
                                            component={'span'}
                                            sx={sm ? styles.mobileExplainComment : styles.explainComment}
                                        >
                                            {props.food.portionSize}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    sx={[styles.explainItem, {padding: sm ? pixToRem(5) : pixToRem(10)}]}
                                    component={'div'}
                                >
                                    <Meal />
                                    <Box
                                        component={'div'}
                                        sx={styles.explainGroup}
                                    >
                                        <Box
                                            component={'span'}
                                            sx={sm ? styles.mobileExplainTitle : styles.explainTitle}
                                        >Prepare Time:</Box>
                                        <Box
                                            component={'span'}
                                            sx={sm ? styles.mobileExplainComment : styles.explainComment}
                                        >
                                            {props.food.prepareTime}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    sx={[styles.explainItem, {padding: sm ? pixToRem(5) : pixToRem(10)}]}
                                    component={'div'}
                                >
                                    <Box
                                        component={'img'}
                                        sx={{width: 28, height: 28}}
                                        src={Cooking}
                                    />
                                    <Box
                                        component={'div'}
                                        sx={styles.explainGroup}
                                    >
                                        <Box
                                            component={'span'}
                                            sx={sm ? styles.mobileExplainTitle : styles.explainTitle}
                                        >Cook Time:</Box>
                                        <Box
                                            component={'span'}
                                            sx={sm ? styles.mobileExplainComment : styles.explainComment}
                                        >
                                            {props.food.cookTime}
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                            <Box
                                component={'div'}
                                sx={styles.detailImgGroup}
                            >
                                <ReactPlayer
                                    ref={videoPlayer}
                                    url={props.food.video}
                                    controls={true}
                                    width={'100%'}
                                    height={pixToRem(500)}
                                    playing={true}
                                    muted={false}
                                    onEnded={() => setVideoState({...videoState, played: 1, playing: false})}
                                />
                            </Box>
                            <Stack sx={styles.detailImgStack} spacing={2} direction={'row'}>
                                {
                                    props.food.images.map((item, index) => (
                                        <Box
                                            key={index}
                                            sx={styles.detailImgItem}
                                            component={'div'}
                                        >
                                            <Box
                                                component={'img'}
                                                src={item}
                                                sx={{width: '100%', height: 'auto', backgroundSize: 'cover'}}
                                            />
                                        </Box>
                                    ))
                                }
                            </Stack>
                            <Stack direction={'column'} spacing={2} sx={{width: '100%'}}>
                                <Box
                                    component={'div'}
                                    sx={[styles.instructionHeader, {mt: sm ? 7 : 5}]}
                                >
                                    <ManualBook />
                                    <Box
                                        component={'span'}
                                        sx={styles.instructionTitle}
                                    >
                                        INSTRUCTION
                                    </Box>
                                </Box>
                                <ReactMarkdown className={'instructionTxt'}>
                                    {props.food.instructions}
                                </ReactMarkdown>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        sm={12}
                    >
                        <Box
                            component={'div'}
                            sx={styles.rightPanel}
                        >
                            <Stack direction={'column'} spacing={2} sx={{width: '100%'}}>
                                <Box
                                    component={'div'}
                                    sx={[styles.ingredientHeader, {mt: sm ? 7 : 0}]}
                                >
                                    <Box
                                        component={'img'}
                                        sx={{width: 44, height: 44}}
                                        src={Ingredient}
                                    />
                                    <Box
                                        component={'span'}
                                        sx={styles.ingredientTitle}
                                    >
                                        INGREDIENTS
                                    </Box>
                                </Box>
                                <ReactMarkdown className={'ingredientTxt'}>
                                    {props.food.ingredients}
                                </ReactMarkdown>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    component={'div'}
                    sx={[styles.downPanel, {
                        mt: sm ? 10 : pixToRem(30),
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
                    >
                        Recipes
                    </Box>
                    <Grid
                        container
                        spacing={3}
                        sx={{width: '100%', marginTop: pixToRem(30)}}
                    >
                        {
                            recommendedFoods.slice(0, 3).map((item, index) => (
                                <Grid
                                    key={index}
                                    item
                                    md={4}
                                    sm={12}
                                    sx={{width: '100%'}}
                                >
                                    <Box
                                        component={'div'}
                                        sx={styles.upImgItem}
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            props.setPage(item);
                                        }}
                                    >
                                        <Box
                                            component={'img'}
                                            sx={styles.upImg}
                                            src={item.thumbnail}
                                        />
                                        <Box component={'span'} sx={styles.imgTitle} >{item.title}</Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        )
    } else return <Box/>
})
export default FoodDetail

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom: pixToRem(30)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(12),
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
    titlePanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    blackTitle: {
        width: '70%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(40),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(52.5),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    mobileBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(33),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(41.5),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    statusImg: {
        width: pixToRem(40),
        height: pixToRem(40)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(20),
        lineHeight: pixToRem(36),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    downPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    rightPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red,
        textTransform: 'capitalize',
        ':hover': {
            cursor: 'pointer'
        },
    },
    mobileBreadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(10),
        fontWeight: '700',
        color: colors.red,
        textTransform: 'capitalize',
        ':hover': {
            cursor: 'pointer'
        },
    },
    explainStack: {
        width: '100%'
    },
    explainItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    explainGroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: pixToRem(15),
    },
    explainTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(10),
        fontWeight: '700',
        color: colors.comment
    },
    mobileExplainTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(8),
        fontWeight: '700',
        color: colors.comment
    },
    explainComment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.black
    },
    mobileExplainComment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(11),
        fontWeight: '700',
        color: colors.black
    },
    detailImgGroup: {
        width: '100%',
        position: 'relative',
        marginTop: pixToRem(20),
    },
    detailImg: {
        width: '100%',
        height: 'auto'
    },
    playIcon: {
        position: 'absolute',
        transform: 'translate(-50%, 50%)',
        left: '50%',
        bottom: '50%',
    },
    detailImgStack: {
        width: '100%',
        marginTop: pixToRem(15),
        // overflowX: 'auto',
    },
    detailImgItem: {
        display: 'inline-flex',
        width: '24%',
        backgroundColor: '#D9D9D9',
    },
    instructionHeader: {
        padding: pixToRem(10),
        marginTop: pixToRem(50),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    instructionTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        color: colors.red,
        marginLeft: pixToRem(15)
    },
    instructionBody: {
        paddingTop: pixToRem(40),
        paddingBottom: pixToRem(30),
        paddingLeft: pixToRem(100),
        paddingRight: pixToRem(100),
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    instructionTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(34),
        fontWeight: '500',
        color: colors.bgBlackColor,
        marginBottom: pixToRem(30)
    },
    ingredientHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    ingredientTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        color: colors.red,
        marginLeft: pixToRem(15)
    },
    ingredientBody: {
        paddingTop: pixToRem(40),
        paddingBottom: pixToRem(40),
        paddingLeft: pixToRem(60),
        paddingRight: pixToRem(60),
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    ingredientTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(38),
        fontWeight: '500',
        color: '#666',
    },
    upImgItem: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'inline-flex',
        position: 'relative',
        ':hover': {
            cursor: 'pointer'
        },
    },
    upImg: {
        width: '100%',
        height: 'auto',
    },
    imgTitle: {
        width: '80%',
        display: 'block',
        position: 'absolute',
        bottom: pixToRem(30),
        left: pixToRem(35),
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(35),
        color: 'white'
    }
}

const Breadcrumb = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon sx={{color: colors.red}} fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link
                underline="hover"
                key="1"
                sx={sm ? styles.mobileBreadcrumb : styles.breadcrumb}
                onClick={props.goToMain}
            >
                Recipes
            </Link>,
            <Link
                underline="hover"
                key="2"
                sx={sm ? styles.mobileBreadcrumb : styles.breadcrumb}
                onClick={props.goToSub}
            >
                {props.recipe.title1}
            </Link>,
            <Typography key="3" color={colors.red} sx={sm ? styles.mobileBreadcrumb : styles.breadcrumb}>
                {props.food.title}
            </Typography>,
        </Breadcrumbs>
    )
})