import {Box} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import BreakfastImg from '../../assets/images/academy/breakfast.png'
import LunchImg from '../../assets/images/academy/lunch.png'
import DinnerImg from '../../assets/images/academy/dinner.png'
import SidesImg from '../../assets/images/academy/sides.png'
import SnacksImg from '../../assets/images/academy/snacks.png'
import BlueberryImg from '../../assets/images/academy/blueberry_banana_protein_waffle.png'
import DragonbowlImg from '../../assets/images/academy/dragon_bowl.png'
import PeanutImg from '../../assets/images/academy/peanut_butter.png'
import MealDetail from "./MealDetail";

const Recipes = memo(props => {
    const [page, setPage] = useState('main');
    const goToDetail = useCallback((next) => setPage(next), [page]);
    switch (page) {
        case 'main':
            return <Main setPage={goToDetail} />
        case 'breakfast':
            return <Breakfast setPage={goToDetail} />
        case 'mealdetail':
            return <MealDetail />
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
                RECIPES
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                HEALTH EATING MADE EASY
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Learn the art of mindfulness and find Inner peace with our expert sessions!
            </Box>
            <Box
                component={'div'}
                sx={styles.upImgPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.upImgItem}
                    onClick={() => props.setPage('breakfast')}
                >
                    <Box
                        component={'img'}
                        sx={styles.upImg}
                        src={BreakfastImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >BREAKFAST</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.upImgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.upImg}
                        src={LunchImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >LUNCH</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.upImgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.upImg}
                        src={DinnerImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >DINNER</Box>
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={styles.downImgPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.downImgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.downImg}
                        src={SidesImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle}>SIDES</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.downImgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.downImg}
                        src={SnacksImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle}>SNACKS</Box>
                </Box>
            </Box>
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: pixToRem(20),
    },
    upImgItem: {
        width: '32%',
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: pixToRem(20),
        marginBottom: pixToRem(80)
    },
    downImgItem: {
        display: 'inline-flex',
        position: 'relative',
        width: '49%',
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

const Breakfast = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                BREAKFAST
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                FUEL UP TO CRUSH EVERY DAY
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Whether you don't have the time to cook, or just have trouble deciding, we're constantly adding new healthy recipes to get you back on track with your health goals. Many of our recipes take minutes to prepare, slow cook while you're at work, and are formatted in an easy-to-follow way to help you be the chef you've always dreamed of being.
            </Box>
            <Box
                component={'div'}
                sx={styles.upImgPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.upImgItem}
                    onClick={() => props.setPage('mealdetail')}
                >
                    <Box
                        component={'img'}
                        sx={styles.upImg}
                        src={BlueberryImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >Blueberry Banana Protein Waffles</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.upImgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.upImg}
                        src={DragonbowlImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >Dragon Bowl</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.upImgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.upImg}
                        src={PeanutImg}
                    />
                    <Box component={'span'} sx={styles.imgTitle}>Peanut Butter + Coconut Overnight Protein Oats</Box>
                </Box>
            </Box>
            <Box sx={{height: pixToRem(200)}} />
        </Box>
    )
})
