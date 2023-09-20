import {Box} from "@mui/material";
import {memo} from "react";
import {colors, pixToRem} from "../../const/uivar";
import Recipes from "./Recipes";
import Diets from "./Diets";
import EatToHeal from "./EatToHeal";
import MainContent from "./MainContent";

const Content = memo(props => {
    if (props.selectedCategory.parent_id !== 3) {
        return (
            <Box
                component={'div'}
                sx={styles.panel}
            >
                <MainContent content={props.content} />
            </Box>
        )
    } else {
        if (props.selectedCategory.id === 9) {
            return (
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Recipes content={props.content} />
                </Box>
            )
        }
        else if (props.selectedCategory.id === 10) {
            return <Diets content={props.content} />
        }
        else if (props.selectedCategory.id === 11) {
            return <EatToHeal content={props.content} />
        }
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
