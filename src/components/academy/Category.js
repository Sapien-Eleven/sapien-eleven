import {Box, Button} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {academyCategories} from "../../const/consts";
import {useCollapse} from "react-collapsed";
import {BiChevronRight, BiChevronDown} from 'react-icons/bi';

const Category = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            {
                Object.keys(academyCategories).map((item, index) => {
                    return (
                        <CategoryItem currentCategory={props.category} key={index} category={academyCategories[item]} setCategory={props.setCategory} />
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
            sx={props.category.subCategories.findIndex(item => item.label === props.currentCategory.label) > -1 ? styles.activeCategoryItem : styles.inactiveCategoryItem}
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
                    {props.category.subCategories.findIndex(item => item.label === props.currentCategory.label) > -1 ? props.category.activeIcon : props.category.inactiveIcon}
                    <Box
                        component={'span'}
                        sx={props.category.subCategories.findIndex(item => item.label === props.currentCategory.label) > -1 ? styles.activeHeaderLabel : styles.inactiveHeaderLabel}
                    >
                        {props.category.label}
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
                    props.category.subCategories.map((item, index) => (
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
            startIcon={props.currentCategory.label === props.subcategory.label ? props.subcategory.activeIcon : props.subcategory.inactiveIcon}
            onClick={props.setCategory}
        >
            <Box
                component={'span'}
                sx={props.currentCategory.label === props.subcategory.label ? styles.activeSubCategoryLabel : styles.inactiveSubCategoryLabel}
            >
                {props.subcategory.label}
            </Box>
        </Button>
    )
})
