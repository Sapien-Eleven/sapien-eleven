import {memo, useCallback, useEffect, useState} from "react";
import {Box, Breadcrumbs, Button, Link, Stack, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {ArrowDropDown, ArrowRight} from "@mui/icons-material";
import {useCollapse} from "react-collapsed";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import ReactMarkdown from "react-markdown";

const preColors = [
    {
        name: 'Reds',
        color: '#CA3C3D'
    },
    {
        name: 'Blues',
        color: '#0000FD'
    },
    {
        name: 'Greens',
        color: '#3DCA6C'
    },
    {
        name: 'Oranges',
        color: '#FF7F01'
    },
    {
        name: 'Yellows',
        color: '#FEDD4B'
    }
]

const EatToHealItem = memo(props => {
    const [currentColor, setCurrentColor] = useState('Reds');
    const [content, setContent] = useState([]);
    const [showLearnMore, setShowLearnMore] = useState(false);

    useEffect(() => {
        fetchContent().then();
    }, [props.heal, currentColor])

    const changeColor = (color) => {
        setCurrentColor(color);
    };

    const fetchContent = async () => {
        let collection = '';
        if (props.heal.title.toLowerCase() === 'root vegetables') {
            collection = 'root-vegetables';
        }
        else if (props.heal.title.toLowerCase() === 'colors') {
            collection = currentColor.toLowerCase();
        } else collection = props.heal.title.toLowerCase();
        const data = (await axios.get(`${StrapiURL}${collection}`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setContent(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            title: cur.attributes.title,
            description: cur.attributes.description,
            icon: `${StrapiBaseURL}${cur.attributes.icon.data.attributes.url}`,
        }], []));
    };
    const toggleLearnMore = useCallback(() => setShowLearnMore(!showLearnMore), [showLearnMore]);
    if (props.heal.title === undefined) return <Box></Box>
    else return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'div'}
                sx={[styles.header, {backgroundImage: `url(${props.heal.headerImage})`}]}
            >
                <Box
                    component={'div'}
                    sx={styles.headerContent}
                >
                    <Breadcrumb currentPage={props.heal.title} goToMain={props.goToMain} />
                    <Box
                        component={'span'}
                        sx={styles.whiteTitle}
                    >{props.heal.title}</Box>
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
                    <ReactMarkdown className={'learnMoreTxt'}>
                        {props.heal.learnMore}
                    </ReactMarkdown>
                </Box>
            }
            <Box
                component={'div'}
                sx={styles.panel}
            >
                {
                    props.heal.title.toLowerCase() === 'colors' &&
                    <Stack
                        sx={{width: '100%'}}
                        direction={'row'}
                        spacing={3}
                    >
                        {
                            preColors.map((item, index) => (
                                <Box
                                    key={index}
                                    component={'div'}
                                    sx={[styles.colorsTab, {borderBottomColor: currentColor === item.name ? item.color : 'white'}]}
                                    onClick={() => changeColor(item.name)}
                                >
                                    <Box component={'span'} sx={styles.colorsTabTxt}>{item.name}</Box>
                                    <Box component={'div'} sx={[styles.colorsTabColor, {backgroundColor: item.color}]}/>
                                </Box>
                            ))
                        }
                    </Stack>
                }
                <Box sx={{height: pixToRem(50)}} />
                {
                    content.map((item, index) => (
                        <ContentItem
                            key={index}
                            item={item}
                            borderColor={
                            props.heal.title === 'COLORS' ?
                                preColors.find(e => e.name === currentColor).color
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
        marginLeft: pixToRem(100),
    },
    header: {
        width: '100%',
        height: pixToRem(300),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: pixToRem(100)
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
        fontSize: pixToRem(14),
        color: 'white'
    },
    learnMorePanel: {
        width: '100%',
        backgroundColor: '#111',
        paddingLeft: pixToRem(200),
        paddingRight: pixToRem(200),
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
        fontSize: pixToRem(35),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(45),
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
    const {getCollapseProps, getToggleProps, isExpanded, setExpanded} = useCollapse({
        duration: 1000,
    });
    useEffect(() => {
        setExpanded(false);
    }, [props.borderColor]);
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
                <ReactMarkdown className={'eatToHealDescriptionTxt'}>
                    {props.item.description}
                </ReactMarkdown>
            </Box>

        </Box>
    )
})