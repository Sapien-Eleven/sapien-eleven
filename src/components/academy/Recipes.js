import {Box, Stack} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import BreakfastImg from '../../assets/images/academy/breakfast.png'
import LunchImg from '../../assets/images/academy/lunch.png'
import DinnerImg from '../../assets/images/academy/dinner.png'
import SidesImg from '../../assets/images/academy/sides.png'
import SnacksImg from '../../assets/images/academy/snacks.png'
import BlueberryImg from '../../assets/images/academy/blueberry_banana_protein_waffle.png'
import DragonbowlImg from '../../assets/images/academy/dragon_bowl.png'
import PeanutImg from '../../assets/images/academy/peanut_butter.png'
import FoodDetail from "./FoodDetail";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";

const Recipes = memo(props => {
    const [type, setType] = useState('main');
    const [recipe, setRecipe] = useState('');
    const [food, setFood] = useState('');
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
            return <Main setPage={setSubContent} content={props.content} />
        case 'sub':
            return <SubContent setPage={setSubDetail} recipe={recipe} />
        case 'detail':
            return <FoodDetail food={food} />
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
                {props.content.category.toUpperCase()}
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                {props.content.title}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {props.content.description}
            </Box>
            <Stack
                sx={styles.upImgPanel}
                spacing={3}
                direction={'row'}
            >
                {
                    props.content.image.filter(i => i.position === 'up').map((item, index) => (
                        <Box
                            key={index}
                            component={'div'}
                            sx={styles.upImgItem}
                            onClick={() => props.setPage(item.label.toLowerCase())}
                        >
                            <Box
                                component={'img'}
                                sx={styles.upImg}
                                src={item.image}
                            />
                            <Box component={'span'} sx={styles.imgTitle} >{item.label}</Box>
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
                    props.content.image.filter(i => i.position === 'down').map((item, index) => (
                        <Box
                            key={index}
                            component={'div'}
                            sx={styles.downImgItem}
                        >
                            <Box
                                component={'img'}
                                sx={styles.downImg}
                                src={item.image}
                            />
                            <Box component={'span'} sx={styles.imgTitle}>{item.label}</Box>
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
        paddingLeft: pixToRem(70),
        paddingBottom: pixToRem(30)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(55),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(65),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
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
        width: '60%',
        display: 'block',
        position: 'absolute',
        bottom: pixToRem(50),
        left: pixToRem(40),
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(35),
        color: 'white'
    }
}

const SubContent = memo(props => {
    const [content, setContent] = useState({});
    useEffect(() => {
        fetchContent().then();
    }, []);
    const fetchContent = async () => {
        let images = [];
        const data = (await axios.get(`${StrapiURL}academy-recipes-contents`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[recipe][$eq]': props.recipe,
                'populate': '*'
            }
        })).data;
        const image = (await axios.get(`${StrapiURL}academy-recipes-image-labels`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[recipe][$eq]': props.recipe,
                'populate': '*'
            }
        })).data;
        images = image.data.reduce((acc, cur) => [...acc,
            {
                imageID: cur.id,
                recipe: cur.attributes.recipe,
                label: cur.attributes.label,
                image: `${StrapiBaseURL}${cur.attributes.image.data.attributes.url}`
            }],
        []);
        setContent({
            id: data.data[0].id,
            recipe: data.data[0].attributes.recipe,
            title: data.data[0].attributes.title,
            description: data.data[0].attributes.description,
            image: images
        });
    }
    if (content.recipe !== undefined) {
        return (
            <Box
                component={'div'}
                sx={styles.panel}
            >
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    {content.recipe.toUpperCase()}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.blackTitle}
                >
                    {content.title.toUpperCase()}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {content.description}
                </Box>
                <Stack
                    sx={styles.upImgPanel}
                    direction={'row'}
                    spacing={3}
                >
                    {
                        content.image.map((item, index) => (
                            <Box
                                key={index}
                                component={'div'}
                                sx={styles.upImgItem}
                                onClick={() => props.setPage(item.label)}
                            >
                                <Box
                                    component={'img'}
                                    sx={styles.upImg}
                                    src={item.image}
                                />
                                <Box component={'span'} sx={styles.imgTitle} >{item.label}</Box>
                            </Box>
                        ))
                    }
                </Stack>
                <Box sx={{height: pixToRem(200)}} />
            </Box>
        )
    } else return <Box/>
})
