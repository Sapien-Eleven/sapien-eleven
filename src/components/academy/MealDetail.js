import {Box, Breadcrumbs, Link, Stack, Typography} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Portion from "../../assets/images/academy/portion";
import Meal from "../../assets/images/academy/meal";
import Cooking from "../../assets/images/academy/cooking";
import MealDetailImg from '../../assets/images/academy/meal_detail_img.png'
import PlayIcon from "../../assets/images/academy/PlayIcon";
import ManualBook from "../../assets/images/academy/ManualBook";
import Ingredient from "../../assets/images/academy/Ingredient";
import BlueberryImg from "../../assets/images/academy/blueberry_banana_protein_waffle.png";
import DragonbowlImg from "../../assets/images/academy/dragon_bowl.png";
import PeanutImg from "../../assets/images/academy/peanut_butter.png";

const MealDetail = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'div'}
                sx={styles.upPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.leftPanel}
                >
                    <Breadcrumb />
                    <Box
                        component={'span'}
                        sx={styles.blackTitle}
                    >
                        Blueberry Banana Protein Waffles
                    </Box>
                    <Stack sx={styles.explainStack} direction={'row'} spacing={1}>
                        <Box
                            sx={styles.explainItem}
                            component={'div'}
                        >
                            <Portion />
                            <Box
                                component={'div'}
                                sx={styles.explainGroup}
                            >
                                <Box
                                    component={'span'}
                                    sx={styles.explainTitle}
                                >Portion Size:</Box>
                                <Box
                                    component={'span'}
                                    sx={styles.explainComment}
                                >
                                    2-3 Portions
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={styles.explainItem}
                            component={'div'}
                        >
                            <Meal />
                            <Box
                                component={'div'}
                                sx={styles.explainGroup}
                            >
                                <Box
                                    component={'span'}
                                    sx={styles.explainTitle}
                                >Prepare Time:</Box>
                                <Box
                                    component={'span'}
                                    sx={styles.explainComment}
                                >
                                    8 Minutes
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={styles.explainItem}
                            component={'div'}
                        >
                            <Cooking />
                            <Box
                                component={'div'}
                                sx={styles.explainGroup}
                            >
                                <Box
                                    component={'span'}
                                    sx={styles.explainTitle}
                                >Cook Time:</Box>
                                <Box
                                    component={'span'}
                                    sx={styles.explainComment}
                                >
                                    10 Minutes
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                    <Box
                        component={'div'}
                        sx={styles.detailImgGroup}
                    >
                        <Box
                            component={'img'}
                            sx={styles.detailImg}
                            src={MealDetailImg}
                        />
                        <Box
                            component={'div'}
                            sx={styles.playIcon}
                        >
                            <PlayIcon />
                        </Box>
                    </Box>
                    <Stack sx={styles.detailImgStack} spacing={2} direction={'row'}>
                        <Box
                            sx={styles.detailImgItem}
                            component={'div'}
                        >
                        </Box>
                        <Box
                            sx={styles.detailImgItem}
                            component={'div'}
                        >
                        </Box>
                        <Box
                            sx={styles.detailImgItem}
                            component={'div'}
                        >
                        </Box>
                        <Box
                            sx={styles.detailImgItem}
                            component={'div'}
                        >
                        </Box>
                    </Stack>
                    <Stack direction={'column'} spacing={2} sx={{width: '100%'}}>
                        <Box
                            component={'div'}
                            sx={styles.instructionHeader}
                        >
                            <ManualBook />
                            <Box
                                component={'span'}
                                sx={styles.instructionTitle}
                            >
                                INSTRUCTION
                            </Box>
                        </Box>
                        <Box
                            component={'ol'}
                            sx={styles.instructionBody}
                        >
                            {
                                instructions.map((item, index) => (
                                    <Box
                                        key={index}
                                        component={'li'}
                                        sx={styles.instructionTxt}
                                    >{item}</Box>
                                ))
                            }
                        </Box>
                    </Stack>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.rightPanel}
                >
                    <Stack direction={'column'} spacing={2} sx={{width: '100%'}}>
                        <Box
                            component={'div'}
                            sx={styles.ingredientHeader}
                        >
                            <Ingredient />
                            <Box
                                component={'span'}
                                sx={styles.ingredientTitle}
                            >
                                INGREDIENTS
                            </Box>
                        </Box>
                        <Box
                            component={'ul'}
                            sx={styles.ingredientBody}
                        >
                            {
                                ingredients.map((item, index) => (
                                    <Box
                                        key={index}
                                        component={'li'}
                                        sx={styles.ingredientTxt}
                                    >{item}</Box>
                                ))
                            }
                        </Box>
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
                >
                    Recipes
                </Box>
                <Stack direction={'row'} spacing={3} sx={{width: '100%', marginTop: pixToRem(30)}}>
                    <Box
                        component={'div'}
                        sx={styles.upImgItem}
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
                </Stack>
            </Box>
        </Box>
    )
})
export default MealDetail

const styles = {
    container: {
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
        fontSize: pixToRem(25),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
    },
    blackTitle: {
        width: '70%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(55),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(75),
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
    upPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    downPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    leftPanel: {
        width: '53%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    rightPanel: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red
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
        padding: pixToRem(10)
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
    explainComment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
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
        marginTop: pixToRem(15)
    },
    detailImgItem: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        height: pixToRem(84)
    },
    instructionHeader: {
        backgroundColor: 'white',
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
                Recipes
            </Link>,
            <Link
                underline="hover"
                key="2"
                sx={styles.breadcrumb}
            >
                Breakfast
            </Link>,
            <Typography key="3" color={colors.red} sx={styles.breadcrumb}>
                Blueberry Protein Waffles
            </Typography>,
        </Breadcrumbs>
    )
})

const instructions = [
    'Preheat waffle iron and spray with nonstick cooking spray (recommend organic avocado spray). In a large bowl, whisk together almond butter, eggs, banana, almond extract, coconut oil and almond milk until well combined and there aren\'t any large lumps.',
    'Stir in coconut flour, baking soda, cinnamon and salt; mix until well combined. Gently fold in blueberries.',
    'Spoon batter into waffle iron and cook until waffles are golden brown and slightly crispy on the outside. Repeat with remaining batter. The recipe makes about 3 waffles. Be sure to top with Banans, Granola, and honey!'
]

const ingredients = [
    '2/3 cup natural creamy almond butter',
    '2 eggs',
    '1/2 banana, mashed',
    '1/4 teaspoon almond extract',
    '1/2 tablespoon coconut oil, melted and cooled',
    '1/3 cup unsweetened almond milk',
    '1 tablespooon coconut flour',
    '1/2 teaspoon baking soda',
    '1 teaspoon cinnamon',
    '1/8 teaspoon salt (only if your almond butter isn\'t salted)',
    '2/3 cup fresh or frozen blueberries',
    '1 tablespoon Honey (for topping) 1/2 Banana (for topping)',
    'Granola Crunch (for topping)'
]