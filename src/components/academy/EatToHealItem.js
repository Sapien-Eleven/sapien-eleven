import {memo, useCallback, useEffect, useState} from "react";
import {Box, Breadcrumbs, Button, dividerClasses, Link, Stack, Typography} from "@mui/material";
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
const learnMore = {
    'colors': 'Nutrient Supply: Consuming a diverse range of nutrient-rich foods provides the body with essential vitamins, minerals, and other compounds needed for optimal function and repair.\n\nImmune Support: A healthy diet boosts our immune system enhancing our body\'s ability to fight off infections and illnesses.\n\nDisease Prevention: Foods rich in antioxidants and anti-inflammatory compounds, such as fruits, and vegetables, can help prevent chronic diseases like heart disease, diabetes, and cancer by neutralizing harmful free radicals and reducing inflammation.\n\nGut Health: Fiber-rich foods nourish our gut microbiota, playing a vital role in digestion, nutrient absorption, and overall health, including immune and mental health.\n\nWeight Management: Nutrient-dense foods are typically lower in calories but keep us satiated longer, helping maintain a healthy weight and preventing obesity-related diseases.\n\nIn essence, "eat to heal" is about using food as medicine to naturally enhance the body\'s healing capabilities and promote long-term health and wellness.',
    'herbs': 'Indeed, herbs have been used by humans for thousands of years for their medicinal properties. They contain a variety of bioactive compounds that can support our health in various ways. Some can help soothe symptoms, support organ function, enhance sleep, reduce inflammation, and provide essential nutrients. Others can help modulate our immune system, either by calming an overactive immune response or by boosting a weak one.\n' +
        '\n' +
        'However, it\'s important to note that the impact of herbs on the immune system can be complex. For instance, herbs like echinacea or elderberry, which are known as immunostimulants, can boost the immune system and help it fight off infections. But for people with autoimmune diseases, where the immune system is already overactive, these herbs could potentially exacerbate the condition. Therefore, they should be used carefully under the guidance of a healthcare professional.\n' +
        '\n' +
        'In the case of autoimmune diseases, the goal is not to stimulate the immune system further, but to support and regulate it. Certain herbs have immunomodulatory properties, meaning they can help balance the immune response. The specific herbs that can help with this and other aspects of immune health will be discussed in detail in the following sections.\n' +
        '\n' +
        'However, it is important to remember that while herbs can provide health benefits, they should not be used as a replacement for conventional medical treatment, particularly for serious conditions like autoimmune diseases. Always consult with a healthcare provider before starting any herbal supplement regimen, especially if you have a chronic health condition or are taking other medications.\n' +
        '\n' +
        'Finally, the quality of the herbs used is important. Always choose high-quality, organic when possible, and ensure they come from a reputable source to avoid contamination with pesticides, heavy metals, and other harmful substances.\n',
    'nuts': 'Nuts, derived from the seeds of plants, are indeed rich in unsaturated fatty acids and provide a wide range of nutritional benefits. They are a great source of protein, dietary fiber, and various essential vitamins and minerals. Moreover, they contain a myriad of beneficial phytochemicals, making them a functional superfood.\n' +
        '\n' +
        'Different types of nuts contain varying compositions of these phytochemicals, including flavonoids, proanthocyanidins, phytosterols, carotenoids, polyphenols, and lignans. The heat applied during roasting or cooking does not typically degrade these bioactive compounds, making them an easy and convenient addition to many meals.\n' +
        '\n' +
        'Flavonoids, a subclass of phenolics, are present in nuts and come mainly in the forms of flavan-3-ols, flavonols, and anthocyanins. Like proanthocyanidins, they provide similar benefits to catechin and epicatechin, the flavonoids found in green tea. These benefits may include antioxidant properties and potential improvements in heart health.\n' +
        '\n' +
        'Phytosterols are plant compounds structurally similar to cholesterol. They are known to lower blood cholesterol levels by inhibiting cholesterol absorption in the intestines. The phytosterol content in tree nuts is relatively high compared to fruits and vegetables, ranging from 72 to 214 milligrams per 100 grams in tree nuts versus just 4 to 5 milligrams per 100 grams in fruits and vegetables. Beta-sitosterol is the primary phytosterol in tree nuts.\n' +
        '\n' +
        'The tannins in tree nuts have a beneficial impact on gut microbiota. They stimulate the production of short-chain fatty acids (SCFAs), which feed beneficial gut bacteria and contribute to a healthy gut microbiome. SCFAs are linked to improved immune function, reduced inflammation, and protection against certain diseases, including colorectal cancer.\n' +
        '\n' +
        'Moreover, the high fiber content in nuts can aid in digestive health, further promoting a healthy gut microbiome. Nuts are also rich in antioxidants, which help combat oxidative stress, a key factor in chronic disease development.\n' +
        '\n' +
        'Despite their nutritional value, nuts are calorie-dense, and overconsumption can contribute to excess caloric intake. Therefore, it is recommended to consume them in moderation, ideally as part of a balanced, nutrient-rich diet.\n' +
        '\n' +
        'In summary, incorporating a variety of nuts into your diet can provide multiple health benefits due to their rich nutrient and phytochemical content. They can support your immune system, provide antioxidant benefits, and promote a healthy gut, among other potential health benefits.\n',
    'oils': 'Understanding the various types of oils and their properties can indeed be complex but is essential for optimizing health benefits and cooking performance.\n\n' +
        '\n' +
        'The term \'omega\' in omega fatty acids refers to unsaturated fats, which have one or more double bonds in their chemical structure. The number that follows \'omega\' indicates the position of the first double bond in the molecular chain, counting from the end of the molecule. This determines the behavior of these fatty acids in the body.\n\n' +
        '\n' +
        'Omega fatty acids are classified as monounsaturated fatty acids (MUFAs) and polyunsaturated fatty acids (PUFAs). MUFAs, such as omega-7 and omega-9, have only one double bond in their structure, while PUFAs, like omega-3 and omega-6, have two or more.\n\n' +
        '\n' +
        'Each oil\'s smoke point, or the temperature at which it begins to smoke and break down, is another crucial consideration. When oils reach their smoke point, they can produce harmful oxidation products and become rancid. Generally, oils with more MUFAs and fewer PUFAs, such as those high in oleic acid, are more suitable for high-heat cooking as they have higher smoke points.\n\n' +
        '\n' +
        'Oils rich in tocopherols, a type of vitamin E, are also more stable when heated due to their antioxidant properties, which protect the oil against oxidation.\n\n' +
        '\n' +
        'On the other hand, oils with a high PUFA content are more prone to degradation when heated due to the multiple double bonds in their structure. Therefore, they are often better suited for use in salad dressings and other cold applications.\n\n' +
        '\n' +
        'We will delve deeper into the specific properties and uses of different oils, including their respective smoke points and health benefits. Remember, each oil has its own unique nutritional profile and is best suited to certain uses, so variety is key for a balanced and nutritious diet. A good rule of thumb is to avoid seed oils, cook with avocado and coconut oils, and flavor with olive oil.\n' +
        '\n' +
        'In summary, understanding the different types of fatty acids and the smoke points of different oils can help you make informed decisions about which oils to use in various cooking scenarios. This can enhance both the flavor and nutritional value of your meals, while also ensuring the safety and integrity of the oils you use.\n A good rule of thumb is to avoid seed oils, cook with avocado and coconut oils, and flavor with olive oil.\n',
    'veggies': 'Root vegetables, as the name implies, are a category of vegetables where the edible portion is the root of the plant. This includes beets, carrots, radishes, turnips, rutabagas, and many more. Each plant typically yields one root vegetable.\n' +
        '\n' +
        'There\'s a subcategory within root vegetables known as tubers, which include potatoes and jicama. The key difference between the two is that tubers have growth points or "eyes" that generate hairy roots. These roots, in turn, grow into more tubers, meaning that one plant often produces multiple tubers.\n' +
        'The function of the roots in a plant is crucial, serving as the primary channel for absorbing nutrients and water from the soil. Consequently, root vegetables are typically nutrient-dense, as they draw a rich variety of minerals and nutrients from the soil they inhabit.\n\n' +
        '\n' +
        'These vegetables contain an array of bioactive constituents such as phenolic compounds, glycoalkaloids, phytic acids, and saponins. Phenolic compounds have antioxidant properties, which help the body combat free radicals, potentially reducing the risk of chronic diseases. Glycoalkaloids are nitrogenous compounds that exhibit potential benefits like anti-inflammatory and antimicrobial effects but can be toxic in high amounts. Phytic acid has the ability to bind minerals, preventing their absorption in the human body, but it can also act as an antioxidant. Saponins have shown potential benefits in cholesterol management and boosting immunity.\n' +
        '\n' +
        'It\'s also worth mentioning that the nutritional value of root vegetables can vary depending on the soil health, the specific variety of vegetable, and the preparation method. Cooking methods can affect the nutrient content; for example, boiling can lead to a loss of water-soluble vitamins. However, certain cooking methods, like roasting, can enhance the natural sweetness of these vegetables, making them more palatable.\n' +
        '\n' +
        'One piece of information worth noting is the importance of consuming a diverse range of these root vegetables to ensure a varied nutrient intake. Additionally, root vegetables are often rich in dietary fiber, which is beneficial for gut health and can aid in weight management by promoting a feeling of fullness. They are also generally low in calories and fat, making them a healthy addition to most diets.\n\n' +
        'Finally, it\'s essential to clean root vegetables thoroughly, as they can carry soil-borne diseases. In some cases, peeling might be necessary to ensure safety, but keep in mind that many nutrients are found in or near the skin.\n',
    'seeds': 'Seeds are often overlooked despite their incredible nutritional value. They are the embryonic stage of a plant encapsulated within a protective outer covering and serve as a potent source of nutrients designed to nourish the developing plant. For us humans, they serve as a concentrated source of nutrients, including healthy fats, proteins, fiber, vitamins, minerals, and a host of bioactive compounds.\n' +
        '\n' +
        'Moreover, seeds contain a number of bioactive compounds including flavonoids, phenolic compounds, and phytosterols that exhibit health-promoting properties. These compounds possess antioxidant, anti-inflammatory, and heart-healthy benefits, among others.\n\n' +
        '\n' +
        'Like root vegetables, the preparation method can also affect the nutritional value of seeds. For example, some seeds, like flaxseeds, are best consumed ground as the body can more easily absorb their nutritional benefits. Similarly, soaking or sprouting seeds can enhance their nutrient availability.\n' +
        '\n' +
        'Despite their tiny size, seeds are indeed nutritional powerhouses and can provide a wide range of health benefits when incorporated into our diets. However, due to their high calorie content, they should be consumed in moderation, particularly for those monitoring their calorie intake.\n'
}

const EatToHealItem = memo(props => {
    const [currentColor, setCurrentColor] = useState('red');
    const [content, setContent] = useState([]);
    const [background, setBackground] = useState();
    const [title, setTitle] = useState('');
    const [showLearnMore, setShowLearnMore] = useState(false);

    useEffect(() => {
        switch (props.category) {
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
        switch (color) {
            case 'red':
                setContent(reds);
                break;
            case 'blue':
                setContent(blues);
                break;
            case 'green':
                setContent(greens);
                break;
            case 'orange':
                setContent(oranges);
                break;
            case 'yellow':
                setContent(yellows);
                break;
            default:
                break;
        }
    }, [currentColor]);
    const toggleLearnMore = useCallback(() => setShowLearnMore(!showLearnMore), [showLearnMore]);
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
                    <Breadcrumb currentPage={title} goToMain={props.goToMain} />
                    <Box
                        component={'span'}
                        sx={styles.whiteTitle}
                    >{title}</Box>
                </Box>
                <Button
                    sx={styles.learnMoreBtn}
                    onClick={toggleLearnMore}
                >
                    {
                        showLearnMore ? 'X' : 'Learn More'
                    }
                </Button>
            </Box>
            {
                showLearnMore &&
                <Box
                    component={'div'}
                    sx={styles.learnMorePanel}
                >
                    {
                        learnMore[props.category].split('\n').map(item => (
                            <Box
                                component={'span'}
                                sx={styles.learnMoreTxt}
                            >{item}<br/></Box>
                        ))
                    }
                </Box>
            }
            <Box
                component={'div'}
                sx={styles.panel}
            >
                {
                    props.category === 'colors' &&
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
                        <ContentItem key={index} item={item} borderColor={props.category === 'colors' ? Colors[currentColor].color : colors.red} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    learnMoreBtn: {
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: pixToRem(250),
        height: pixToRem(45),
        marginRight: '7%',
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        color: 'white'
    },
    learnMorePanel: {
        width: '100%',
        backgroundColor: '#111',
        paddingLeft: pixToRem(300),
        paddingRight: pixToRem(300),
        paddingTop: pixToRem(100),
        paddingBottom: pixToRem(100),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    learnMoreTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: '400',
        color: '#999',
        lineHeight: pixToRem(30)
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