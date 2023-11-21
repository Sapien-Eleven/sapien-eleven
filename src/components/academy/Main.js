import {Box, Container} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import Category from "./Category";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import axios from "axios";
import MainContent from "./MainContent";
import Recipes from "./Recipes";
import Diets from "./Diets";
import EatToHeal from "./EatToHeal";
import {colors, pixToRem} from "../../const/uivar";

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
    }
    const onChangeCategory = useCallback((value) => {
        selectCategory(value);
    }, []);


    return (
        <Container
            maxWidth={false}
            sx={styles.panel}
        >
            <Category categories={categories} selectedCategory={selectedCategory} setCategory={onChangeCategory} />
            {
                selectedCategory.parent_id <= 2 ?
                    <Box
                        component={'div'}
                        sx={styles.contentPanel}
                    >
                        <MainContent category={selectedCategory} />
                    </Box>
                    : selectedCategory.name === 'Recipes' ?
                        <Box
                            component={'div'}
                            sx={styles.contentPanel}
                        >
                            <Recipes category={selectedCategory} />
                        </Box>
                        : selectedCategory.name === 'Diets' ?
                            <Diets category={selectedCategory} />
                            : selectedCategory.name === 'Eat to Heal' ?
                                <EatToHeal category={selectedCategory} />
                                : null
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
    },
    contentPanel: {
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
