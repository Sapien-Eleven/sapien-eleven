import {memo, useCallback, useEffect, useState} from "react";
import {Box, Breadcrumbs, Button, Link, Stack, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ColorsWide from '../../assets/images/academy/colors_wide.png'
import {ArrowDropDown, ArrowRight} from "@mui/icons-material";
import {useCollapse} from "react-collapsed";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";

const EatToHealItem = memo(props => {
    const [currentColor, setCurrentColor] = useState('red');
    const [content, setContent] = useState([]);
    const [showLearnMore, setShowLearnMore] = useState(false);

    useEffect(() => {
        fetchContent().then();
    }, [])

    const changeColor = (color) => {
        setCurrentColor(color);
    };

    const fetchContent = async () => {
        let tempContent;
        const data = (await axios.get(`${StrapiURL}academy-eattoheal-contents`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[title][$eq]': props.category,
                'populate': '*'
            }
        })).data;
        tempContent = {
            id: data.data[0].id,
            title: data.data[0].attributes.title,
            learnMore: data.data[0].attributes.learnMore,
            headerImage: `${StrapiBaseURL}${data.data[0].attributes.headerImage.data.attributes.url}`,
            hasCategory: data.data[0].attributes.hasCategory
        };
        if (tempContent.hasCategory) {
            const subCategories = (await axios.get(`${StrapiURL}academy-eattoheal-content-subcategories`, {
                headers: {
                    'Authorization': `bearer ${StrapiToken}`
                },
                params: {
                    'filters[category][$eq]': props.category,
                    'populate': '*'
                }
            })).data;
            tempContent = {
                ...tempContent,
                subCategories: subCategories.data.reduce((acc, cur) => [...acc, {
                    subCategory: cur.attributes.subCategory,
                    feature: cur.attributes.feature
                }], [])
            };
            setCurrentColor(tempContent.subCategories[0].subCategory);
        }
        const details = (await axios.get(`${StrapiURL}academy-eattoheal-details`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[category][$eq]': props.category,
                'populate': '*',
                'pagination[pageSize]': 100
            }
        })).data;
        tempContent = {
            ...tempContent,
            details: details.data.reduce((acc, cur) => [...acc, {
                title: cur.attributes.title,
                icon: `${StrapiBaseURL}${cur.attributes.icon.data.attributes.url}`,
                description: cur.attributes.description,
                ingredients: cur.attributes.ingredients,
                subCategory: cur.attributes.subCategory
            }], [])
        }
        setContent(tempContent);
    };
    const toggleLearnMore = useCallback(() => setShowLearnMore(!showLearnMore), [showLearnMore]);
    if (content.title === undefined) return <Box></Box>
    else return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'div'}
                sx={[styles.header, {backgroundImage: `url(${content.headerImage})`}]}
            >
                <Box
                    component={'div'}
                    sx={styles.headerContent}
                >
                    <Breadcrumb currentPage={content.title} goToMain={props.goToMain} />
                    <Box
                        component={'span'}
                        sx={styles.whiteTitle}
                    >{content.title}</Box>
                </Box>
                <Button
                    sx={styles.learnMoreBtn}
                    onClick={toggleLearnMore}
                >
                    {
                        showLearnMore ? 'X' : 'Learn More'
                    }
                </Button>
            </Box>
            {
                showLearnMore &&
                <Box
                    component={'div'}
                    sx={styles.learnMorePanel}
                >
                    {
                        content.learnMore.split('\n').map((item, index) => (
                            <Box
                                key={index}
                                component={'span'}
                                sx={styles.learnMoreTxt}
                            >{item}<br/></Box>
                        ))
                    }
                </Box>
            }
            <Box
                component={'div'}
                sx={styles.panel}
            >
                {
                    content.hasCategory &&
                    <Stack
                        sx={{width: '100%'}}
                        direction={'row'}
                        spacing={3}
                    >
                        {
                            content.subCategories.map((item, index) => (
                                <Box
                                    key={index}
                                    component={'div'}
                                    sx={[styles.colorsTab, {borderBottomColor: currentColor === item.subCategory ? item.feature : 'white'}]}
                                    onClick={() => changeColor(item.subCategory)}
                                >
                                    <Box component={'span'} sx={styles.colorsTabTxt}>{item.subCategory}</Box>
                                    <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: item.feature}]}/>
                                </Box>
                            ))
                        }
                    </Stack>
                }
                <Box sx={{height: pixToRem(50)}} />
                {
                    content.details.filter(item => content.hasCategory ? item.subCategory === currentColor : true).map((item, index) => (
                        <ContentItem
                            key={index}
                            item={item}
                            borderColor={
                            content.hasCategory ?
                                content.subCategories[content.subCategories.findIndex(t => t.subCategory === currentColor) === -1 ? 0 : content.subCategories.findIndex(t => t.subCategory === currentColor)].feature
                                : colors.red
                            }
                        />
                    ))
                }
                <Box sx={{height: pixToRem(50)}} />
            </Box>
        </Box>
    )
})

export default EatToHealItem

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    panel: {
        display: 'flex',
        flex: 1,
        width: '76%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(30),
        marginLeft: pixToRem(170),
    },
    header: {
        width: '100%',
        height: pixToRem(300),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${ColorsWide})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: pixToRem(180)
    },
    learnMoreBtn: {
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: pixToRem(250),
        height: pixToRem(45),
        marginRight: '7%',
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        color: 'white'
    },
    learnMorePanel: {
        width: '100%',
        backgroundColor: '#111',
        paddingLeft: pixToRem(300),
        paddingRight: pixToRem(300),
        paddingTop: pixToRem(100),
        paddingBottom: pixToRem(100),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    learnMoreTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: '400',
        color: '#999',
        lineHeight: pixToRem(30)
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(55),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(75),
        color: 'white',
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        textTransform: 'uppercase'
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red
    },
    colorsTab: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: pixToRem(10),
        borderBottomWidth: pixToRem(2),
        borderBottomStyle: 'solid'
    },
    colorsTabTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.bgBlackColor
    },
    colorsTabColor: {
        width: pixToRem(16),
        height: pixToRem(16),
        borderRadius: pixToRem(16)
    },
    contentItem: {
        width: '100%',
        padding: pixToRem(20),
        backgroundColor: 'white',
        borderBottomWidth: pixToRem(1),
        borderBottomColor: '#ccc',
        borderBottomStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contentItemHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentItemTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        color: '#333',
        marginLeft: pixToRem(10)
    },
    contentItemBody: {
        paddingTop: pixToRem(40),
        paddingBottom: pixToRem(40),
        paddingLeft: pixToRem(30),
        paddingRight: pixToRem(30),
        color: colors.bgBlackColor,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        lineHeight: pixToRem(24),
        fontWeight: '500'
    }
}

const Breadcrumb = memo(props => {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon sx={{color: colors.red}} fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link underline="hover" key="1" sx={styles.breadcrumb} onClick={props.goToMain} >
                Eat to Heal
            </Link>
            <Typography key="2" color={colors.red} sx={styles.breadcrumb}>
                {props.currentPage}
            </Typography>
        </Breadcrumbs>
    )
})

const ContentItem = memo(props => {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        duration: 1000,
    });
    return (
        <Box
            component={'div'}
            sx={[styles.contentItem, {border: isExpanded ? `1px solid ${props.borderColor}` : null}]}
        >
            <Box
                component={'div'}
                sx={styles.contentItemHeader}
                {...getToggleProps()}
            >
                <Box
                    component={'img'}
                    src={props.item.icon}
                />
                <Box component={'span'} sx={styles.contentItemTitle}>{props.item.title}</Box>
                {
                    isExpanded ?
                        <ArrowDropDown sx={{marginLeft: pixToRem(10)}} />
                        :
                        <ArrowRight sx={{marginLeft: pixToRem(10)}} />
                }
            </Box>
            <Box
                component={'div'}
                sx={styles.contentItemBody}
                {...getCollapseProps()}
            >
                {props.item.description}
            </Box>
        </Box>
    )
})