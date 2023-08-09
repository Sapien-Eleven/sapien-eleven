import {Container} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import Category from "./Category";
import Content from "./Content";
import {academyCategories, StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import axios from "axios";

const Main = memo(props => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, selectCategory] = useState({})
    useEffect(() => {
        fetchCategories().then()
    }, []);
    const fetchCategories = async () => {
        const data = (await axios.get(`${StrapiURL}academy-categories`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'fields[0]': 'name',
                'fields[1]': 'icon',
                'fields[2]': 'parent_id',
                'populate': '*'
            }
        })).data;
        console.log(data);
        setCategories(data.data.reduce((acc, cur) => [...acc,
            {
                id: cur.id,
                name: cur.attributes.name,
                parent_id: cur.attributes.parent_id,
                active_icon: `${StrapiBaseURL}${cur.attributes.active_icon.data.attributes.url}`,
                inactive_icon: `${StrapiBaseURL}${cur.attributes.inactive_icon.data.attributes.url}`,
            }], []));
    }
    const onChangeCategory = useCallback((value) => selectCategory(value));
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Category categories={categories} selectedCategory={selectedCategory} setCategory={onChangeCategory} />
            {/*<Content selectedCategory={selectedCategory} />*/}
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
