import {Box} from "@mui/material";
import {memo} from "react";
import {pixToRem} from "../../const/uivar";

const Content = memo(props => {
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
