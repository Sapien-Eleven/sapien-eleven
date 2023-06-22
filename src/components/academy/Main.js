import {Container} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import Category from "./Category";
import Content from "./Content";
import {academyCategories} from "../../const/consts";

const Main = memo(props => {
    const [category, setCategory] = useState({})
    useEffect(() => {
        setCategory(academyCategories.mental.subCategories[0]);
    }, []);
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
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0px!important'
    }
}
