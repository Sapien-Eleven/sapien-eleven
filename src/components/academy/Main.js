import {Container} from "@mui/material";
import {memo, useCallback, useState} from "react";
import Category from "./Category";
import Content from "./Content";

const Main = memo(props => {
    const [category, setCategory] = useState('mindfulness')
    const onChangeCategory = useCallback((value) => setCategory(value));
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Category category={category} setCategory={onChangeCategory} />
            <Content category={category} />
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
