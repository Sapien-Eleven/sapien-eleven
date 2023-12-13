import {Box, Breadcrumbs, Link, Stack, Typography} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import FoodDetail from "./FoodDetail";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Recipes = memo(props => {
    const [header, setHeader] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [type, setType] = useState('main');
    const [recipe, setRecipe] = useState({});
    const [food, setFood] = useState({});

    useEffect(() => {
        fetchHeader().then();
        fetchRecipes().then();
    }, []);
    const fetchHeader = async () => {
        const data = (await axios.get(`${StrapiURL}recipes-headers`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setHeader({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    const fetchRecipes = async () => {
        const data = (await axios.get(`${StrapiURL}recipes`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setRecipes(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            category: cur.attributes.category,
            title1: cur.attributes.title1,
            title2: cur.attributes.title2,
            description: cur.attributes.description,
            thumbnail: `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
        }], []));
    }
    const setSubContent = useCallback((next) => {
        setType('sub');
        setRecipe(next);
    }, []);
    const setSubDetail = useCallback((next) => {
        setType('detail');
        setFood(next);
    }, [])
    switch (type) {
        case 'main':
            return <Main setPage={setSubContent} header={header} recipes={recipes}/>
        case 'sub':
            return <SubContent goToMain={() => setType('main')} setPage={setSubDetail} recipe={recipe}/>
        case 'detail':
            return <FoodDetail food={food} recipe={recipe} goToMain={() => setType('main')}
                               goToSub={() => setType('sub')} setPage={setSubDetail}/>
        default:
            break;
    }
})
export default Recipes

const Main = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {props.header.title1}
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                {props.header.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {props.header.description}
            </Box>
            <Stack
                sx={styles.upImgPanel}
                spacing={3}
                direction={'row'}
            >
                {
                    props.recipes.filter(i => i.title1 === 'BREAKFAST' || i.title1 === 'LUNCH' || i.title1 === 'DINNER').map((item, index) => (
                        <Box
                            key={index}
                            component={'div'}
                            sx={styles.upImgItem}
                            onClick={() => props.setPage(item)}
                        >
                            <Box
                                component={'img'}
                                sx={styles.upImg}
                                src={item.thumbnail}
                            />
                            <Box component={'span'} sx={styles.imgTitle}>{item.title1}</Box>
                        </Box>
                    ))
                }
            </Stack>
            <Stack
                sx={styles.downImgPanel}
                spacing={3}
                direction={'row'}
            >
                {
                    props.recipes.filter(i => i.title1 === 'SNACKS' || i.title1 === 'SIDES').map((item, index) => (
                        <Box
                            key={index}
                            component={'div'}
                            sx={styles.downImgItem}
                            onClick={() => props.setPage(item)}
                        >
                            <Box
                                component={'img'}
                                sx={styles.downImg}
                                src={item.thumbnail}
                            />
                            <Box component={'span'} sx={styles.imgTitle}>{item.title1}</Box>
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
})

const styles = {
    panel: {
        display: 'flex',
        flex: 1,
        width: '88%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom: pixToRem(30)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(45),
        color: colors.black,
        marginTop: pixToRem(5),
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
    upImgPanel: {
        width: '100%',
        marginTop: pixToRem(20),
    },
    upImgItem: {
        flex: 1,
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
    downImgPanel: {
        width: '100%',
        marginTop: pixToRem(20),
        marginBottom: pixToRem(80)
    },
    downImgItem: {
        display: 'inline-flex',
        position: 'relative',
        flex: 1,
        ':hover': {
            cursor: 'pointer'
        }
    },
    downImg: {
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
        lineHeight: pixToRem(30),
        color: 'white'
    },
    imgItem: {
        display: 'inline-flex',
        position: 'relative',
        width: '31%',
        ':hover': {
            cursor: 'pointer'
        },
    },
    imgBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)'
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.red,
        lineHeight: pixToRem(45),
        textTransform: 'capitalize',
        ':hover': {
            cursor: 'pointer'
        },
    },
}

const SubContent = memo(props => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        fetchContent().then();
    }, []);
    const fetchContent = async () => {
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
                'populate': '*',
                'pagination[start]': 0,
                'pagination[limit]': 100,
                'pagination[withCount]': true
            }
        })).data;

        setContent(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            title: cur.attributes.title,
            thumbnail: cur.attributes.thumbnail.data === null ? '' : `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
            portionSize: cur.attributes.portionSize,
            cookTime: cur.attributes.cookTime,
            prepareTime: cur.attributes.prepareTime,
            video: `${StrapiBaseURL}${cur.attributes.video.data === null ? '' : cur.attributes.video.data.attributes.url}`,
            images: cur.attributes.images.data === null ? [] : cur.attributes.images.data.reduce((a, c) => [...a, `${StrapiBaseURL}${c.attributes.url}`], []),
            ingredients: cur.attributes.ingredients,
            instructions: cur.attributes.instructions,
            dairyFree: cur.attributes.dairyFree,
            glutenFree: cur.attributes.glutenFree,
            vegan: cur.attributes.vegan
        }], []));
    }
    if (props.recipe !== undefined) {
        return (
            <Box
                component={'div'}
                sx={styles.panel}
            >
                <Breadcrumb title={props.recipe.title1} goToMain={props.goToMain}/>
                <Box
                    component={'span'}
                    sx={styles.blackTitle}
                >
                    {props.recipe.title2}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {props.recipe.description}
                </Box>
                <Stack
                    sx={styles.upImgPanel}
                    direction={'row'}
                    spacing={3}
                    useFlexGap
                    flexWrap={'wrap'}
                    justifyContent={'space-between'}
                >
                    {
                        content.map((item, index) => (
                            <Box
                                key={index}
                                component={'div'}
                                sx={[styles.imgItem, {height: item.thumbnail === '' ? pixToRem(240) : 'auto'}]}
                                onClick={() => props.setPage(item)}
                            >
                                {
                                    item.thumbnail !== '' &&
                                        <Box
                                            component={'img'}
                                            sx={styles.upImg}
                                            src={item.thumbnail}
                                        />
                                }
                                <Box
                                    component={'div'}
                                    sx={styles.imgBack}
                                >
                                    <Box component={'span'} sx={styles.imgTitle}>{item.title}</Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Stack>
                <Box sx={{height: pixToRem(200)}}/>
            </Box>
        )
    } else return <Box/>
})

const Breadcrumb = memo(props => {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon sx={{color: colors.red}} fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link
                underline="hover"
                key="1"
                sx={styles.breadcrumb}
                onClick={props.goToMain}
            >
                Recipes
            </Link>,
            <Typography key="3" color={colors.red} sx={styles.breadcrumb}>
                {props.title}
            </Typography>,
        </Breadcrumbs>
    )
})
