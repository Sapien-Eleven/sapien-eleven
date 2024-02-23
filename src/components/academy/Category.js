import {Box, Button, useMediaQuery, useTheme} from "@mui/material";
import {memo} from "react";
import {fonts, pixToRem} from "../../const/uivar";
import {useCollapse} from "react-collapsed";
import {BiChevronRight, BiChevronDown} from 'react-icons/bi';

const Category = memo(props => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Box
            component={'div'}
            sx={[styles.panel, {
                pl: md ? 3 : 10
            }]}
        >
            {
                props.categories.filter(c => c.parent_id === 0).map((item, index) => {
                    return (
                        <CategoryItem
                            key={index}
                            categories={props.categories}
                            currentCategory={props.selectedCategory}
                            category={item}
                            setCategory={props.setCategory}
                        />
                    )
                })
            }
        </Box>
    )
})

export default Category

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: pixToRem(100),
        paddingLeft: pixToRem(100),
        paddingRight: pixToRem(20),
    },
    activeCategoryItem: {
        width: pixToRem(250),
        border: '1px #CA3C3D solid',
    },
    inactiveCategoryItem: {
        width: pixToRem(250),
        border: '1px #CCC solid',
    },
    categoryHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: pixToRem(10)
    },
    subcategoryHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: pixToRem(10),
        borderRadius: 0,
    },
    categoryLabelGroup: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeHeaderLabel: {
        flex: 1,
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(18),
        lineHeight: pixToRem(20),
        color: '#333',
        textTransform: 'capitalize',
        marginLeft: pixToRem(10)
    },
    inactiveHeaderLabel: {
        flex: 1,
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(18),
        lineHeight: pixToRem(20),
        color: '#999',
        textTransform: 'capitalize',
        marginLeft: pixToRem(10)
    },
    arrowIcon: {
        width: pixToRem(6),
        height: pixToRem(10),
        color: '#666'
    },
    inactiveSubCategoryLabel: {
        flex: 1,
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        lineHeight: pixToRem(18),
        color: '#999',
        textTransform: 'capitalize',
        marginLeft: pixToRem(10)
    },
    activeSubCategoryLabel: {
        flex: 1,
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        lineHeight: pixToRem(18),
        color: '#333',
        textTransform: 'capitalize',
        marginLeft: pixToRem(10)
    },
    categoryBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: pixToRem(10),
        paddingRight: pixToRem(10)
    }
}

const CategoryItem = memo(props => {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        duration: 1000,
    });
    return (
        <Box
            component={'div'}
            sx={props.categories.filter(c => c.parent_id === props.category.id).findIndex(item => item.id === props.currentCategory.id) > -1 ? styles.activeCategoryItem : styles.inactiveCategoryItem}
        >
            <Box
                component={'div'}
                sx={styles.categoryHeader}
                {...getToggleProps()}
            >
                <Box
                    component={'div'}
                    sx={styles.categoryLabelGroup}
                >
                    <img src={props.categories.filter(c => c.parent_id === props.category.id).findIndex(item => item.id === props.currentCategory.id) > -1 ? props.category.active_icon : props.category.inactive_icon} alt=""/>
                    <Box
                        component={'span'}
                        sx={props.categories.filter(c => c.parent_id === props.category.id).findIndex(item => item.id === props.currentCategory.id) > -1 ? styles.activeHeaderLabel : styles.inactiveHeaderLabel}
                    >
                        {props.category.name}
                    </Box>
                </Box>
                {
                    isExpanded ? <BiChevronDown /> : <BiChevronRight />
                }
            </Box>
            <Box
                component={'div'}
                sx={styles.categoryBody}
                {...getCollapseProps()}
            >
                {
                    props.categories.filter(c => c.parent_id === props.category.id).map((item, index) => (
                        <SubCategory key={index} currentCategory={props.currentCategory} subcategory={item} setCategory={() => props.setCategory(item)} />
                    ))
                }
            </Box>
        </Box>
    )
})

const SubCategory = memo(props => {
    return (
        <Button
            sx={styles.subcategoryHeader}
            startIcon={<img src={props.currentCategory.id === props.subcategory.id ? props.subcategory.active_icon : props.subcategory.inactive_icon} alt=""/>}
            onClick={props.setCategory}
        >
            <Box
                component={'span'}
                sx={props.currentCategory.id === props.subcategory.id ? styles.activeSubCategoryLabel : styles.inactiveSubCategoryLabel}
            >
                {props.subcategory.name}
            </Box>
        </Button>
    )
})
