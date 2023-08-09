import {Box} from "@mui/material";
import {memo} from "react";
import {colors, pixToRem} from "../../const/uivar";
import Mindfulness from "./Mindfulness";
import Meditation from "./Meditation";
import Yoga from "./Yoga";
import Mobility from "./Mobility";
import Fitness from "./Fitness";
import Recipes from "./Recipes";
import Diets from "./Diets";
import EatToHeal from "./EatToHeal";

const Content = memo(props => {
    switch (props.category.name) {
        case 'mindfulness':
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Mindfulness />
                </Box>
            )
        case 'meditation':
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Meditation />
                </Box>
            )
        case 'yoga':
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Yoga />
                </Box>
            )
        case 'mobility':
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Mobility />
                </Box>
            )
        case 'fitness':
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Fitness />
                </Box>
            )
        case 'recipes':
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Recipes />
                </Box>
            )
        case 'diets':
            return (
                <Diets />
            )
        case 'eat to heal':
            return (
                <EatToHeal />
            )
        default:
            return <Box></Box>;
    }
})

export default Content

const styles = {
    panel: {
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(100),
        paddingLeft: pixToRem(100),
    }
}
