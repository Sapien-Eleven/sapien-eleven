import {Box} from "@mui/material";
import {memo} from "react";
import {pixToRem} from "../../const/uivar";
import Mindfulness from "./Mindfulness";
import Meditation from "./Meditation";
import Yoga from "./Yoga";
import Mobility from "./Mobility";
import Fitness from "./Fitness";
import Recipes from "./Recipes";
import Diets from "./Diets";
import Superfoods from "./Superfoods";

const Content = memo(props => {
    const contents = {
        mindfulness: Mindfulness,
        meditation: Meditation,
        yoga: Yoga,
        mobility: Mobility,
        fitness: Fitness,
        recipes: Recipes,
        diets: Diets,
        superfoods: Superfoods
    };
    console.log(contents['mindfulness']);
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
        </Box>
    )
})

export default Content

const styles = {
    panel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(100),
        paddingLeft: pixToRem(100),
    }
}
