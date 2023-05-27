import {Container} from "@mui/material";
import {memo} from "react";
import Category from "./Category";
import Content from "./Content";

const Main = memo(props => {
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Category />
            <Content />
        </Container>
    )
})

export default Main

const styles = {
    panel: {
        width: '100%',
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}
