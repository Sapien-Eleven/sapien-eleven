import {Box, Container, useMediaQuery, useTheme} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import Category from "./Category";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import axios from "axios";
import MainContent from "./MainContent";
import Recipes from "./Recipes";
import Diets from "./Diets";
import EatToHeal from "./EatToHeal";
import {colors, pixToRem} from "../../const/uivar";
import Grid from "@mui/material/Unstable_Grid2";
import {useLocation} from "react-router-dom";

const Main = memo(props => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, selectCategory] = useState({})
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        fetchCategories().then();
    }, []);
    useEffect(() => {
        if (sm && props.mobileCategory !== null) selectCategory(props.mobileCategory)
    }, [sm, props.mobileCategory]);
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
        if (sm && props.mobileCategory !== null) selectCategory(props.mobileCategory)
        else selectCategory(result.find(c => c.parent_id !== 0));
    }
    const onChangeCategory = useCallback((value) => {
        selectCategory(value);
    }, []);


    return (
        <Grid
            container
            sx={{p: 0}}
        >
            <Grid
                item
                lg={3}
                md={4.2}
                sm={5}
                xs={0}
            >
                <Category categories={categories} selectedCategory={selectedCategory} setCategory={onChangeCategory} />
            </Grid>
            <Grid
                item
                lg={9}
                md={7.8}
                sm={7}
                xs={12}
            >
                {
                    selectedCategory.parent_id <= 2 ?
                        <Box
                            component={'div'}
                            sx={[styles.contentPanel, {
                                pt: sm ? 0 : 15,
                                pl: sm ? 0 : 6
                            }]}
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
            </Grid>
        </Grid>
    )
})

export default Main

const styles = {
    contentPanel: {
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
}
