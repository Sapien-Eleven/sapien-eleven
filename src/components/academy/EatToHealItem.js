import {memo, useCallback, useEffect, useState} from "react";
import {Box, Breadcrumbs, dividerClasses, Link, Stack, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ColorsWide from '../../assets/images/academy/colors_wide.png'
import HerbsWide from '../../assets/images/academy/herbs_wide.png'
import NutsWide from '../../assets/images/academy/nuts_wide.png'
import SeedsWide from '../../assets/images/academy/seeds_wide.png'
import VeggiesWide from '../../assets/images/academy/veggies_wide.png'
import OilsWide from '../../assets/images/academy/oils_wide.png'
import Apple from "../../assets/images/academy/Apple";
import {ArrowDropDown, ArrowRight} from "@mui/icons-material";
import Cherry from "../../assets/images/academy/Cherry";
import Cranberry from "../../assets/images/academy/Cranberry";
import Pomegranate from "../../assets/images/academy/Pomegranate";
import Raspberry from "../../assets/images/academy/Raspberry";
import RedPepper from "../../assets/images/academy/RedPepper";
import Tomato from "../../assets/images/academy/Tomato";
import Watermelon from "../../assets/images/academy/Watermelon";
import {useCollapse} from "react-collapsed";
import Acai from "../../assets/images/academy/Acai";
import Eggplant from "../../assets/images/academy/Eggplant";
import Fig from "../../assets/images/academy/Fig";
import Grape from "../../assets/images/academy/Grape";
import Plumb from "../../assets/images/academy/Plumb";
import Artichoke from "../../assets/images/academy/Artichoke";
import Asparagus from "../../assets/images/academy/Asparagus";
import Avocado from "../../assets/images/academy/Avocado";
import Broccoli from "../../assets/images/academy/Broccoli";
import BrusselSprout from "../../assets/images/academy/BrusselSprout";
import Celery from "../../assets/images/academy/Celery";
import Cucumber from "../../assets/images/academy/Cucumber";
import Edamame from "../../assets/images/academy/Edamame";
import Kale from "../../assets/images/academy/Kale";
import Apricote from "../../assets/images/academy/Apricote";
import ButternutSquash from "../../assets/images/academy/ButternutSquash";
import Cantaloupe from "../../assets/images/academy/Cantaloupe";
import Mango from "../../assets/images/academy/Mango";
import Orange from "../../assets/images/academy/Orange";
import Papaya from "../../assets/images/academy/Papaya";
import PassionFruit from "../../assets/images/academy/PassionFruit";
import Peach from "../../assets/images/academy/Peach";
import Banana from "../../assets/images/academy/Banana";
import Lemon from "../../assets/images/academy/Lemon";
import Pineapple from "../../assets/images/academy/Pineapple";
import YellowSquash from "../../assets/images/academy/YellowSquash";
import Palm from "../../assets/images/academy/Palm";
import Astragalus from "../../assets/images/academy/Astragalus";
import Basil from "../../assets/images/academy/Basil";
import Cumin from "../../assets/images/academy/Cumin";
import Chamomile from "../../assets/images/academy/Chamomile";
import Cinnamon from "../../assets/images/academy/Cinnamon";
import Cloves from "../../assets/images/academy/Cloves";
import Flower from "../../assets/images/academy/Flower";
import Licorice from "../../assets/images/academy/Licorice";
import Oregano from "../../assets/images/academy/Oregano";
import Peppermint from "../../assets/images/academy/Peppermint";
import Rooibos from "../../assets/images/academy/Rooibos";
import Rosemary from "../../assets/images/academy/Rosemary";
import Sage from "../../assets/images/academy/Sage";
import Thyme from "../../assets/images/academy/Thyme";
import Almond from "../../assets/images/academy/Almond";
import BrazilNuts from "../../assets/images/academy/BrazilNuts";
import Cashew from "../../assets/images/academy/Cashew";
import Hazelnut from "../../assets/images/academy/Hazelnut";
import MacadamiaNut from "../../assets/images/academy/MacadamiaNut";
import Pecan from "../../assets/images/academy/Pecan";
import Pistachio from "../../assets/images/academy/Pistachio";
import Walnut from "../../assets/images/academy/Walnut";
import AvocadoOil from "../../assets/images/academy/AvocadoOil";
import CoconutOil from "../../assets/images/academy/CoconutOil";
import OliveOil from "../../assets/images/academy/OliveOil";
import Acorn from "../../assets/images/academy/Acorn";
import Beet from "../../assets/images/academy/Beet";
import Carrot from "../../assets/images/academy/Carrot";
import Fennel from "../../assets/images/academy/Fennel";
import Ginger from "../../assets/images/academy/Ginger";
import Onion from "../../assets/images/academy/Onion";
import Radish from "../../assets/images/academy/Radish";
import Potato from "../../assets/images/academy/Potato";
import SweetPotato from "../../assets/images/academy/SweetPotato";
import Turmeric from "../../assets/images/academy/Turmeric";
import Turnips from "../../assets/images/academy/Turnips";
import ChinaSeed from "../../assets/images/academy/ChinaSeed";
import FlaxSeed from "../../assets/images/academy/FlaxSeed";
import HempSeed from "../../assets/images/academy/HempSeed";
import MustardSeed from "../../assets/images/academy/MustardSeed";
import PumpkinSeed from "../../assets/images/academy/PumpkinSeed";
import SesameSeed from "../../assets/images/academy/SesameSeed";
import SunflowerSeed from "../../assets/images/academy/SunflowerSeed";

const reds = [
    {
        name: 'Apples',
        icon: <Apple />,
        content: <div>Apples are indeed a fantastic source of health benefits, often attributed to the famous saying, "An apple a day keeps the doctor away." They house a potent array of nutrients and compounds that are beneficial to our health, particularly for our immune system and gut health.
            <br/><br/>Apples are rich in a variety of phytochemicals like quercetin, catechin, phloridzin, and chlorogenic acid, all of which are potent antioxidants. These compounds help neutralize harmful free radicals in the body, reducing oxidative stress and thus, the risk of chronic diseases. Among commonly consumed fruits, apples rank second in antioxidant activity and total concentration of phenolic compounds, meaning they're a great source of antioxidants. Their high content of free phenolics indicates that these beneficial compounds are readily available for absorption and utilization in the body.
            <br/><br/>The soluble fiber in apples, known as pectin, is another remarkable health-boosting component. Pectin can shift the immune system response from pro-inflammatory to anti-inflammatory by increasing the production of anti-inflammatory cytokine IL-4. This anti-inflammatory response is crucial for managing chronic diseases and maintaining overall health.
            <br/><br/>Pectin also contributes significantly to gut health. It can interact directly with immune cells or indirectly influence the intestinal microbiota, helping to maintain a healthy gut environment. Studies have shown that pectin can enhance the integrity of the gut wall, which is essential for preventing harmful substances from leaking into the bloodstream, a condition often referred to as "leaky gut." Additionally, pectin can increase the production of short-chain fatty acids (SCFAs), the primary food source for beneficial gut bacteria. SCFAs also help maintain a low pH in the intestine, discouraging the growth of harmful bacteria and aiding digestion.
            <br/><br/>In addition to the aforementioned benefits, apples are a good source of vitamin C, with around 5mg per apple. Despite this seemingly small amount, the antioxidant activity of apple's vitamin C is equivalent to a hefty 1,500mg dose of a vitamin C supplement. This is due to the synergistic effect of the various antioxidants and phytochemicals present in apples.
            <br/><br/>In summary, apples pack a nutritional punch with their abundant antioxidants, immune-boosting pectin, and beneficial effects on gut health. An apple a day indeed could keep the doctor away, supporting your overall health and wellness through a delicious and nutritious snack.
        </div>
    },
    {
        name: 'Cherries',
        icon: <Cherry />,
        content: <div>Apples are indeed a fantastic source of health benefits, often attributed to the famous saying, "An apple a day keeps the doctor away." They house a potent array of nutrients and compounds that are beneficial to our health, particularly for our immune system and gut health.
            <br/><br/>Apples are rich in a variety of phytochemicals like quercetin, catechin, phloridzin, and chlorogenic acid, all of which are potent antioxidants. These compounds help neutralize harmful free radicals in the body, reducing oxidative stress and thus, the risk of chronic diseases. Among commonly consumed fruits, apples rank second in antioxidant activity and total concentration of phenolic compounds, meaning they're a great source of antioxidants. Their high content of free phenolics indicates that these beneficial compounds are readily available for absorption and utilization in the body.
            <br/><br/>The soluble fiber in apples, known as pectin, is another remarkable health-boosting component. Pectin can shift the immune system response from pro-inflammatory to anti-inflammatory by increasing the production of anti-inflammatory cytokine IL-4. This anti-inflammatory response is crucial for managing chronic diseases and maintaining overall health.
            <br/><br/>Pectin also contributes significantly to gut health. It can interact directly with immune cells or indirectly influence the intestinal microbiota, helping to maintain a healthy gut environment. Studies have shown that pectin can enhance the integrity of the gut wall, which is essential for preventing harmful substances from leaking into the bloodstream, a condition often referred to as "leaky gut." Additionally, pectin can increase the production of short-chain fatty acids (SCFAs), the primary food source for beneficial gut bacteria. SCFAs also help maintain a low pH in the intestine, discouraging the growth of harmful bacteria and aiding digestion.
            <br/><br/>In addition to the aforementioned benefits, apples are a good source of vitamin C, with around 5mg per apple. Despite this seemingly small amount, the antioxidant activity of apple's vitamin C is equivalent to a hefty 1,500mg dose of a vitamin C supplement. This is due to the synergistic effect of the various antioxidants and phytochemicals present in apples.
            <br/><br/>In summary, apples pack a nutritional punch with their abundant antioxidants, immune-boosting pectin, and beneficial effects on gut health. An apple a day indeed could keep the doctor away, supporting your overall health and wellness through a delicious and nutritious snack.
        </div>
    },
    {
        name: 'Cranberries',
        icon: <Cranberry />,
        content: <div>Apples are indeed a fantastic source of health benefits, often attributed to the famous saying, "An apple a day keeps the doctor away." They house a potent array of nutrients and compounds that are beneficial to our health, particularly for our immune system and gut health.
            <br/><br/>Apples are rich in a variety of phytochemicals like quercetin, catechin, phloridzin, and chlorogenic acid, all of which are potent antioxidants. These compounds help neutralize harmful free radicals in the body, reducing oxidative stress and thus, the risk of chronic diseases. Among commonly consumed fruits, apples rank second in antioxidant activity and total concentration of phenolic compounds, meaning they're a great source of antioxidants. Their high content of free phenolics indicates that these beneficial compounds are readily available for absorption and utilization in the body.
            <br/><br/>The soluble fiber in apples, known as pectin, is another remarkable health-boosting component. Pectin can shift the immune system response from pro-inflammatory to anti-inflammatory by increasing the production of anti-inflammatory cytokine IL-4. This anti-inflammatory response is crucial for managing chronic diseases and maintaining overall health.
            <br/><br/>Pectin also contributes significantly to gut health. It can interact directly with immune cells or indirectly influence the intestinal microbiota, helping to maintain a healthy gut environment. Studies have shown that pectin can enhance the integrity of the gut wall, which is essential for preventing harmful substances from leaking into the bloodstream, a condition often referred to as "leaky gut." Additionally, pectin can increase the production of short-chain fatty acids (SCFAs), the primary food source for beneficial gut bacteria. SCFAs also help maintain a low pH in the intestine, discouraging the growth of harmful bacteria and aiding digestion.
            <br/><br/>In addition to the aforementioned benefits, apples are a good source of vitamin C, with around 5mg per apple. Despite this seemingly small amount, the antioxidant activity of apple's vitamin C is equivalent to a hefty 1,500mg dose of a vitamin C supplement. This is due to the synergistic effect of the various antioxidants and phytochemicals present in apples.
            <br/><br/>In summary, apples pack a nutritional punch with their abundant antioxidants, immune-boosting pectin, and beneficial effects on gut health. An apple a day indeed could keep the doctor away, supporting your overall health and wellness through a delicious and nutritious snack.
        </div>
    },
    {
        name: 'Pomegranates',
        icon: <Pomegranate />,
        content: ''
    },
    {
        name: 'Raspberries',
        icon: <Raspberry />,
        content: ''
    },
    {
        name: 'Red Bell Peppers',
        icon: <RedPepper />,
        content: ''
    },
    {
        name: 'Tomatoes',
        icon: <Tomato />,
        content: ''
    },
    {
        name: 'Watermelon',
        icon: <Watermelon />,
        content: ''
    }
];
const blues = [
    {
        name: 'Berries',
        icon: <Acai />,
        content: ''
    },
    {
        name: 'Eggplants',
        icon: <Eggplant />,
        content: ''
    },
    {
        name: 'Figs',
        icon: <Fig />,
        content: ''
    },
    {
        name: 'Grapes',
        icon: <Grape />,
        content: ''
    },
    {
        name: 'Plumbs',
        icon: <Plumb />,
        content: ''
    }
];
const greens = [
    {
        name: 'Artichokes',
        icon: <Artichoke />,
        content: ''
    },
    {
        name: 'Asparagus',
        icon: <Asparagus />,
        content: ''
    },
    {
        name: 'Avocados',
        icon: <Avocado />,
        content: ''
    },
    {
        name: 'Broccoli',
        icon: <Broccoli />,
        content: ''
    },
    {
        name: 'Brussels Sprouts',
        icon: <BrusselSprout />,
        content: ''
    },
    {
        name: 'Celery',
        icon: <Celery />,
        content: ''
    },
    {
        name: 'Cucumbers',
        icon: <Cucumber />,
        content: ''
    },
    {
        name: 'Edamame',
        icon: <Edamame />,
        content: ''
    },
    {
        name: 'Kale',
        icon: <Kale />,
        content: ''
    }
];
const oranges = [
    {
        name: 'Apricotes',
        icon: <Apricote />,
        content: ''
    },
    {
        name: 'Butternut Squash',
        icon: <ButternutSquash />,
        content: ''
    },
    {
        name: 'Cantaloupes',
        icon: <Cantaloupe />,
        content: ''
    },
    {
        name: 'Mangoes',
        icon: <Mango />,
        content: ''
    },
    {
        name: 'Oranges',
        icon: <Orange />,
        content: ''
    },
    {
        name: 'Papayas',
        icon: <Papaya />,
        content: ''
    },
    {
        name: 'Passion Fruits',
        icon: <PassionFruit />,
        content: ''
    },
    {
        name: 'Peaches',
        icon: <Peach />,
        content: ''
    }
];
const yellows = [
    {
        name: 'Bananas',
        icon: <Banana />,
        content: '',
    },
    {
        name: 'Lemons',
        icon: <Lemon />,
        content: ''
    },
    {
        name: 'Pineapples',
        icon: <Pineapple />,
        content: ''
    },
    {
        name: 'Yellow Squash',
        icon: <YellowSquash />,
        content: ''
    }
];
const Colors = {
    red: {
        color: colors.red,
        content: reds
    },
    blue: {
        color: colors.blue,
        content: blues
    },
    green: {
        color: colors.darkGreen,
        content: greens
    },
    orange: {
        color: colors.orange,
        content: oranges
    },
    yellow: {
        color: colors.yellow,
        content: yellows
    }
}
const herbs = [
    {
        name: 'Andrographis',
        icon: <Palm />,
        content: ''
    },
    {
        name: 'Astragalus',
        icon: <Astragalus />,
        content: ''
    },
    {
        name: 'Basil',
        icon: <Basil />,
        content: ''
    },
    {
        name: 'Black Cumin',
        icon: <Cumin />,
        content: ''
    },
    {
        name: 'Chamomile',
        icon: <Chamomile />,
        content: ''
    },
    {
        name: 'Cinnamon',
        icon: <Cinnamon />,
        content: ''
    },
    {
        name: 'Cloves',
        icon: <Cloves />,
        content: ''
    },
    {
        name: 'Goldenseal',
        icon: <Flower />,
        content: ''
    },
    {
        name: 'Licorice',
        icon: <Licorice />,
        content: ''
    },
    {
        name: 'Oregano',
        icon: <Oregano />,
        content: ''
    },
    {
        name: 'Peppermint',
        icon: <Peppermint />,
        content: ''
    },
    {
        name: 'Rooibos',
        icon: <Rooibos />,
        content: ''
    },
    {
        name: 'Rosemary',
        icon: <Rosemary />,
        content: ''
    },
    {
        name: 'Sage',
        icon: <Sage />,
        content: ''
    },
    {
        name: 'Thyme',
        icon: <Thyme />,
        content: ''
    }
];
const nuts = [
    {
        name: 'Almonds',
        icon: <Almond />,
        content: ''
    },
    {
        name: 'Brazil Nuts',
        icon: <BrazilNuts />,
        content: ''
    },
    {
        name: 'Cashews',
        icon: <Cashew />,
        content: ''
    },
    {
        name: 'Hazelnuts',
        icon: <Hazelnut />,
        content: ''
    },
    {
        name: 'Macadamia Nuts',
        icon: <MacadamiaNut />,
        content: ''
    },
    {
        name: 'Pecans',
        icon: <Pecan />,
        content: ''
    },
    {
        name: 'Pistachios',
        icon: <Pistachio />,
        content: ''
    },
    {
        name: 'Walnuts',
        icon: <Walnut />,
        content: ''
    }
];
const seeds = [
    {
        name: 'China Seeds',
        icon: <ChinaSeed />,
        content: ''
    },
    {
        name: 'Flax Seeds',
        icon: <FlaxSeed />,
        content: ''
    },
    {
        name: 'Hemp Seeds',
        icon: <HempSeed />,
        content: ''
    },
    {
        name: 'Mustard Seeds',
        icon: <MustardSeed />,
        content: ''
    },
    {
        name: 'Pumpkin Seeds',
        icon: <PumpkinSeed />,
        content: ''
    },
    {
        name: 'Sesame Seeds',
        icon: <SesameSeed />,
        content: ''
    },
    {
        name: 'Sunflower Seeds',
        icon: <SunflowerSeed />,
        content: ''
    }
];
const veggies = [
    {
        name: 'Beetroot',
        icon: <Beet />,
        content: ''
    },
    {
        name: 'Carrot',
        icon: <Carrot />,
        content: ''
    },
    {
        name: 'Fennel',
        icon: <Fennel />,
        content: ''
    },
    {
        name: 'Ginger',
        icon: <Ginger />,
        content: ''
    },
    {
        name: 'Onions',
        icon: <Onion />,
        content: ''
    },
    {
        name: 'Radishes',
        icon: <Radish />,
        content: ''
    },
    {
        name: 'Red Potatoes',
        icon: <Potato />,
        content: ''
    },
    {
        name: 'Sweet Potatoes',
        icon: <SweetPotato />,
        content: ''
    },
    {
        name: 'Turmeric',
        icon: <Turmeric />,
        content: ''
    },
    {
        name: 'Turnips',
        icon: <Turnips />,
        content: ''
    }
];
const oils = [
    {
        name: 'Avocado Oil',
        icon: <AvocadoOil />,
        content: ''
    },
    {
        name: 'Coconut Oil',
        icon: <CoconutOil />,
        content: ''
    },
    {
        name: 'Olive Oil',
        icon: <OliveOil />,
        content: ''
    },
    {
        name: 'Nut & Seed Oils',
        icon: <Acorn />,
        content: ''
    }
];

const EatToHealItem = memo(props => {
    const [currentColor, setCurrentColor] = useState('red');
    const [content, setContent] = useState([]);
    const [background, setBackground] = useState();
    const [title, setTitle] = useState('');

    useEffect(() => {
        switch (props.currentItem) {
            case 'colors':
                setContent(reds);
                setBackground(ColorsWide);
                setTitle('Colors');
                break;
            case 'herbs':
                setContent(herbs);
                setBackground(HerbsWide);
                setTitle('Herbs');
                break;
            case 'nuts':
                setContent(nuts);
                setBackground(NutsWide);
                setTitle('Nuts');
                break;
            case 'oils':
                setContent(oils);
                setBackground(OilsWide);
                setTitle('Oils');
                break;
            case 'veggies':
                setContent(veggies);
                setBackground(VeggiesWide);
                setTitle('Root Vegetables');
                break;
            case 'seeds':
                setContent(seeds);
                setBackground(SeedsWide);
                setTitle('Seeds');
                break;
            default:
                break;
        }
    }, [])

    const changeColor = useCallback((color) => {
        setCurrentColor(color);
    }, [currentColor]);
    return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'div'}
                sx={[styles.header, {backgroundImage: `url(${background})`}]}
            >
                <Box
                    component={'div'}
                    sx={styles.headerContent}
                >
                    <Breadcrumb currentPage={title} goToMain={() => props.setPage('main')} />
                    <Box
                        component={'span'}
                        sx={styles.whiteTitle}
                    >{title}</Box>
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={styles.panel}
            >
                {
                    props.currentItem === 'colors' &&
                    <Stack
                        sx={{width: '100%'}}
                        direction={'row'}
                        spacing={3}
                    >
                        <Box
                            component={'div'}
                            sx={[styles.colorsTab, {borderBottomColor: currentColor === 'red' ? colors.red : 'white'}]}
                            onClick={() => changeColor('red')}
                        >
                            <Box component={'span'} sx={styles.colorsTabTxt}>Reds</Box>
                            <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: colors.red}]}></Box>
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.colorsTab, {borderBottomColor: currentColor === 'blue' ? colors.blue : 'white'}]}
                            onClick={() => changeColor('blue')}
                        >
                            <Box component={'span'} sx={styles.colorsTabTxt}>Blues</Box>
                            <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: colors.blue}]}></Box>
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.colorsTab, {borderBottomColor: currentColor === 'green' ? colors.darkGreen : 'white'}]}
                            onClick={() => changeColor('green')}
                        >
                            <Box component={'span'} sx={styles.colorsTabTxt}>Greens</Box>
                            <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: colors.darkGreen}]}></Box>
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.colorsTab, {borderBottomColor: currentColor === 'orange' ? colors.orange : 'white'}]}
                            onClick={() => changeColor('orange')}
                        >
                            <Box component={'span'} sx={styles.colorsTabTxt}>Oranges</Box>
                            <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: colors.orange}]}></Box>
                        </Box>
                        <Box
                            component={'div'}
                            sx={[styles.colorsTab, {borderBottomColor: currentColor === 'yellow' ? colors.yellow : 'white'}]}
                            onClick={() => changeColor('yellow')}
                        >
                            <Box component={'span'} sx={styles.colorsTabTxt}>Yellows</Box>
                            <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: colors.yellow}]}></Box>
                        </Box>
                    </Stack>
                }
                <Box sx={{height: pixToRem(50)}} />
                {
                    content.map((item, index) => (
                        <ContentItem key={index} item={item} borderColor={props.currentItem === 'colors' ? Colors[currentColor].color : colors.red} />
                    ))
                }
                <Box sx={{height: pixToRem(50)}} />
            </Box>
        </Box>
    )
})

export default EatToHealItem

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
        flex: 1,
        width: '76%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(30),
        marginLeft: pixToRem(170),
    },
    header: {
        width: '100%',
        height: pixToRem(300),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${ColorsWide})`,
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
        fontFamily: fonts.besan,
        fontSize: pixToRem(55),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(75),
        color: 'white',
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        textTransform: 'uppercase'
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red
    },
    colorsTab: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: pixToRem(10),
        borderBottomWidth: pixToRem(2),
        borderBottomStyle: 'solid'
    },
    colorsTabTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.bgBlackColor
    },
    colorsTabColor: {
        width: pixToRem(16),
        height: pixToRem(16),
        borderRadius: pixToRem(16)
    },
    contentItem: {
        width: '100%',
        padding: pixToRem(20),
        backgroundColor: 'white',
        borderBottomWidth: pixToRem(1),
        borderBottomColor: '#ccc',
        borderBottomStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contentItemHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentItemTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        color: '#333',
        marginLeft: pixToRem(10)
    },
    contentItemBody: {
        paddingTop: pixToRem(40),
        paddingBottom: pixToRem(40),
        paddingLeft: pixToRem(30),
        paddingRight: pixToRem(30),
        color: colors.bgBlackColor,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        lineHeight: pixToRem(24),
        fontWeight: '500'
    }
}

const Breadcrumb = memo(props => {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon sx={{color: colors.red}} fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link underline="hover" key="1" sx={styles.breadcrumb} onClick={props.goToMain} >
                Eat to Heal
            </Link>
            <Typography key="2" color={colors.red} sx={styles.breadcrumb}>
                {props.currentPage}
            </Typography>
        </Breadcrumbs>
    )
})

const ContentItem = memo(props => {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        duration: 1000,
    });
    return (
        <Box
            component={'div'}
            sx={[styles.contentItem, {border: isExpanded ? `1px solid ${props.borderColor}` : null}]}
        >
            <Box
                component={'div'}
                sx={styles.contentItemHeader}
                {...getToggleProps()}
            >
                {props.item.icon}
                <Box component={'span'} sx={styles.contentItemTitle}>{props.item.name}</Box>
                {
                    isExpanded ?
                        <ArrowDropDown sx={{marginLeft: pixToRem(10)}} />
                        :
                        <ArrowRight sx={{marginLeft: pixToRem(10)}} />
                }
            </Box>
            <Box
                component={'div'}
                sx={styles.contentItemBody}
                {...getCollapseProps()}
            >
                {props.item.content}
            </Box>
        </Box>
    )
})