import {Container} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import Category from "./Category";
import Content from "./Content";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import axios from "axios";

const Main = memo(props => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, selectCategory] = useState({})
    const [content, setContent] = useState({});
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
        const result = data.data.reduce((acc, cur) => [...acc,
            {
                id: cur.id,
                name: cur.attributes.name,
                parent_id: cur.attributes.parent_id,
                active_icon: `${StrapiBaseURL}${cur.attributes.active_icon.data.attributes.url}`,
                inactive_icon: `${StrapiBaseURL}${cur.attributes.inactive_icon.data.attributes.url}`,
            }], []
        );
        setCategories(result);
        selectCategory(result.find(c => c.parent_id !== 0));
        await fetchContent(result.find(c => c.parent_id !== 0));
    }
    const onChangeCategory = useCallback(async (value) => {
        await selectCategory(value);
        await fetchContent(value);
    }, []);

    const fetchContent = async (category) => {
        let images = [];
        const data = (await axios.get(`${StrapiURL}academy-main-contents`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[categoryID][$eq]': category.id,
                'populate': '*'
            }
        })).data;
        if (category.id >= 9 && category.id <= 11) {
            const image = (await axios.get(`${StrapiURL}image-labels`, {
                headers: {
                    'Authorization': `bearer ${StrapiToken}`
                },
                params: {
                    'filters[categoryID][$eq]': category.id,
                    'populate': '*'
                }
            })).data;
            images = image.data.reduce((acc, cur) => [...acc,
                {
                    imageID: cur.id,
                    categoryID: cur.attributes.categoryID,
                    label: cur.attributes.label,
                    position: cur.attributes.position,
                    image: `${StrapiBaseURL}${cur.attributes.image.data.attributes.url}`
                }],
            []);
            console.log(images);
        } else {
            images = data.data[0].attributes.image.data.reduce((acc, cur) => [...acc, `${StrapiBaseURL}${cur.attributes.url}`], [])
        }
        setContent({
            id: data.data[0].id,
            categoryID: data.data[0].attributes.categoryID,
            category: data.data[0].attributes.category,
            title: data.data[0].attributes.title,
            description: data.data[0].attributes.description,
            image: images
        });
    }
    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Category categories={categories} selectedCategory={selectedCategory} setCategory={onChangeCategory} />
            {
                content.category !== undefined &&
                <Content selectedCategory={selectedCategory} content={content} />
            }
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
