import {memo} from "react";
import {Box, Breadcrumbs, Link, Stack, Typography} from "@mui/material";
import MeditarraneanWide from "../../assets/images/academy/meditarranean_wide.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ManualBookGrey from "../../assets/images/academy/ManualBookGrey";
import QuestionMark from "../../assets/images/academy/QuestionMark";
import Plus from "../../assets/images/academy/Plus";
import Minus from "../../assets/images/academy/Minus";
import NoFood from "../../assets/images/academy/NoFood";
import IngredientGreen from "../../assets/images/academy/IngredientGreen";
import Ketogenic from '../../assets/images/academy/ketogenic_diet.png'
import Paleo from '../../assets/images/academy/paleo_diet.png'
import Whole from '../../assets/images/academy/whole_diet.png'

const DietItem = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'div'}
                sx={styles.header}
            >
                <Box
                    component={'div'}
                    sx={styles.headerContent}
                >
                    <Breadcrumb />
                    <Box
                        component={'span'}
                        sx={styles.whiteTitle}
                    >Meditarranean Diet</Box>
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={styles.panel}
            >
                <Box
                    component={'div'}
                    sx={styles.upPanel}
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
                                    The Meditarranean Diet follows the heart eating habits of individuals living around the Meditarranean Sea. A whole food, plant-based approach comprised mostly of veggies and healthy fats, and fish and chicken being a side dish.
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
                                    This well-rounded approach replaces processed foods with whole foods. <br/><br/> Even though this diet is more of a style of eating, rather than a weight loss diet, consuming primarily nutrient dens whole foods will likely lead to some weight loss. <br/><br/> Plus, this diet ensures you'll be getting the appropriate amounts of essential nutrients necessary for good health.
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
                                <Box
                                    component={'ul'}
                                    sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                >
                                    {
                                        pros.map((item, index) => (
                                            <Box
                                                key={index}
                                                component={'li'}
                                            >{item}</Box>
                                        ))
                                    }
                                </Box>
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
                                <Box
                                    component={'ul'}
                                    sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                >
                                    {
                                        cons.map((item, index) => (
                                            <Box
                                                key={index}
                                                component={'li'}
                                            >{item}</Box>
                                        ))
                                    }
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
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
                                <Box
                                    component={'ul'}
                                    sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                >
                                    {
                                        foodsToEat.map((item, index) => (
                                            <Box
                                                key={index}
                                                component={'li'}
                                            >{item}</Box>
                                        ))
                                    }
                                </Box>
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
                                <Box
                                    component={'ul'}
                                    sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                >
                                    {
                                        foodsToAvoid.map((item, index) => (
                                            <Box
                                                key={index}
                                                component={'li'}
                                            >{item}</Box>
                                        ))
                                    }
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.downPanel}
                >
                    <Box
                        component={'span'}
                        sx={styles.redTitle}
                    >
                        RECOMMENDED
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.blackTitle}
                    >Diets</Box>
                    <Stack sx={{width: '100%', marginTop: pixToRem(30)}} direction={'row'} spacing={3}>
                        <Box
                            component={'div'}
                            sx={styles.downImgItem}
                        >
                            <Box
                                component={'img'}
                                src={Ketogenic}
                                sx={styles.downImg}
                            />
                            <Box
                                component={'span'}
                                sx={styles.imgTitle}
                            >Ketogenic Diet</Box>
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.downImgItem}
                        >
                            <Box
                                component={'img'}
                                src={Paleo}
                                sx={styles.downImg}
                            />
                            <Box
                                component={'span'}
                                sx={styles.imgTitle}
                            >Paleo Diet</Box>
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.downImgItem}
                        >
                            <Box
                                component={'img'}
                                src={Whole}
                                sx={styles.downImg}
                            />
                            <Box
                                component={'span'}
                                sx={styles.imgTitle}
                            >Whole 30 Diet</Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
})

export default DietItem

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
        width: '83%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(80),
        paddingBottom: pixToRem(80),
        marginLeft: pixToRem(170)
    },
    header: {
        width: '100%',
        height: pixToRem(300),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${MeditarraneanWide})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: pixToRem(180)
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
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red
    },
    upPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    downPanel: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: pixToRem(80)
    },
    leftPanel: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightPanel: {
        width: '35%',
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
    blackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(65),
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
        bottom: pixToRem(50),
        left: pixToRem(40),
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
            <Link underline="hover" key="1" sx={styles.breadcrumb} >
                Diets
            </Link>
            <Typography key="2" color={colors.red} sx={styles.breadcrumb}>
                Meditarranean Diet
            </Typography>
        </Breadcrumbs>
    )
})

const pros = [
    'This diet is great for heart health by lowering the risk factors for heart disease and heart attacks.',
    'Allows alcohol (wine)',
    'May reduce the risk of stroke in women.',
    'May prevent cognitive decline and Alzheimer\'s disease.',
    'May help with weight loss and management.',
    'may health prevent type 2 diabetes by lowering blood sugar.',
    'May improve mental health.',
    'May result in improvements in symptoms of rheumatoid arthritis.'
];

const cons = [
    'No guidelines are set for portion control. Must eat in moderation.'
]

const foodsToEat = [
    'Fish',
    'Chicken',
    'Fresh veggies',
    'Fruit',
    'Whole grains(brown rice)',
    'Legumes(beans)',
    'Nuts',
    'Fresh cheese and yogurt',
    'Eggs',
    'Pasta(in small portions)',
    'Olive oil',
    'Moderate amount of red wine(5oz)'
];

const foodsToAvoid = [
    'Processed foods',
    'Packages meals',
    'Refined sugar',
    'Refined grains and oils',
    'Red meat(limited)',
    'Butter',
    'Flower and seed oils'
]