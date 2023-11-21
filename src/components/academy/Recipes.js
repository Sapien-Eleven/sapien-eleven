import {Box, Stack} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import FoodDetail from "./FoodDetail";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";

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
            return <SubContent setPage={setSubDetail} recipe={recipe}/>
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
    }
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
                'populate': '*'
            }
        })).data;

        setContent(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            title: cur.attributes.title,
            thumbnail: `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
            portionSize: cur.attributes.portionSize,
            cookTime: cur.attributes.cookTime,
            prepareTime: cur.attributes.prepareTime,
            video: `${StrapiBaseURL}${cur.attributes.video.data === null ? '' : cur.attributes.video.data.attributes.url}`,
            images: `${StrapiBaseURL}${cur.attributes.images.data === null ? '' : cur.attributes.images.data.attributes.url}`,
            ingredients: cur.attributes.ingredients,
            instructions: cur.attributes.instructions
        }], []));
    }
    if (props.recipe !== undefined) {
        return (
            <Box
                component={'div'}
                sx={styles.panel}
            >
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    {props.recipe.title1}
                </Box>
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
                >
                    {
                        content.map((item, index) => (
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
                                <Box component={'span'} sx={styles.imgTitle}>{item.title}</Box>
                            </Box>
                        ))
                    }
                </Stack>
                <Box sx={{height: pixToRem(200)}}/>
            </Box>
        )
    } else return <Box/>
})
