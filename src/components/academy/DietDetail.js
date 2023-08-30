import {memo, useCallback, useEffect, useState} from "react";
import {Box, Breadcrumbs, Link, Stack, Typography} from "@mui/material";
import MeditarraneanWide from "../../assets/images/academy/meditarranean_wide.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {colors, fonts, pixToRem} from "../../const/uivar";
import ManualBookGrey from "../../assets/images/academy/ManualBookGrey";
import QuestionMark from "../../assets/images/academy/QuestionMark";
import Plus from "../../assets/images/academy/Plus";
import Minus from "../../assets/images/academy/Minus";
import NoFood from "../../assets/images/academy/NoFood";
import IngredientGreen from "../../assets/images/academy/IngredientGreen";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";

const DietDetail = memo(props => {
    const [content, setContent] = useState({});
    const [recommendedDiets, setRecommendedDiets] = useState([]);
    useEffect(() => {
        fetchDietDetail().then();
        fetchRecommendDiets().then();
    }, []);
    const fetchDietDetail = useCallback(async () => {
        const data = (await axios.get(`${StrapiURL}academy-diet-details`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[diet][$eq]': props.diet,
                'populate': '*'
            }
        })).data;
        const pros = (await axios.get(`${StrapiURL}academy-diet-proses`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[diet][$eq]': props.diet,
                'populate': '*'
            }
        })).data;
        const cons = (await axios.get(`${StrapiURL}academy-diet-conses`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[diet][$eq]': props.diet,
                'populate': '*'
            }
        })).data;
        const foodsToEats = (await axios.get(`${StrapiURL}academy-diet-foodstoeats`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[diet][$eq]': props.diet,
                'populate': '*'
            }
        })).data;
        const foodsToAvoids = (await axios.get(`${StrapiURL}academy-diet-foodstoavoids`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[diet][$eq]': props.diet,
                'populate': '*'
            }
        })).data;
        setContent({
            id: data.data[0].id,
            diet: data.data[0].attributes.diet,
            whatIsIt: data.data[0].attributes.whatIsIt,
            howWhyWorks: data.data[0].attributes.howWhyWorks,
            headerImage: `${StrapiBaseURL}${data.data[0].attributes.headerImage.data.attributes.url}`,
            pros: pros.data.reduce((acc, cur) => [...acc, cur.attributes.description], []),
            cons: cons.data.reduce((acc, cur) => [...acc, cur.attributes.description], []),
            foodsToEats: foodsToEats.data.reduce((acc, cur) => [...acc, cur.attributes.food], []),
            foodsToAvoids: foodsToAvoids.data.reduce((acc, cur) => [...acc, cur.attributes.food], []),
        });
    }, []);
    const fetchRecommendDiets = useCallback(async () => {
        let diets = [];
        const image = (await axios.get(`${StrapiURL}image-labels`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'filters[categoryID][$eq]': 10,
                'filters[label][$ne]': props.diet,
                'populate': '*'
            }
        })).data;
        diets = image.data.reduce((acc, cur) => [...acc,
            {
                imageID: cur.id,
                label: cur.attributes.label,
                image: `${StrapiBaseURL}${cur.attributes.image.data.attributes.url}`
            }],
        []);
        setRecommendedDiets(diets);
    }, []);
    if (content.diet !== undefined) {
        return (
            <Box
                component={'div'}
                sx={styles.container}
            >
                <Box
                    component={'div'}
                    sx={styles.header}
                >
                    <Box
                        component={'div'}
                        sx={styles.headerContent}
                    >
                        <Breadcrumb diet={content.diet} />
                        <Box
                            component={'span'}
                            sx={styles.whiteTitle}
                        >{content.diet}</Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Box
                        component={'div'}
                        sx={styles.upPanel}
                    >
                        <Box
                            component={'div'}
                            sx={styles.leftPanel}
                        >
                            <Stack sx={{width: '100%'}} direction={'column'} spacing={4}>
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                    <Box
                                        component={'div'}
                                        sx={styles.commentPanel}
                                    >
                                        <ManualBookGrey />
                                        <Box
                                            component={'span'}
                                            sx={styles.blackCommentTitle}
                                        >What is it?</Box>
                                    </Box>
                                    <Box
                                        component={'div'}
                                        sx={styles.comment}
                                    >
                                        {content.whatIsIt}
                                    </Box>
                                </Stack>
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                    <Box
                                        component={'div'}
                                        sx={styles.commentPanel}
                                    >
                                        <QuestionMark />
                                        <Box
                                            component={'span'}
                                            sx={styles.blackCommentTitle}
                                        >How and why it works?</Box>
                                    </Box>
                                    <Box
                                        component={'div'}
                                        sx={styles.comment}
                                    >
                                        {content.howWhyWorks}
                                    </Box>
                                </Stack>
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                    <Box
                                        component={'div'}
                                        sx={styles.commentPanel}
                                    >
                                        <Plus />
                                        <Box
                                            component={'span'}
                                            sx={styles.blackCommentTitle}
                                        >Pros</Box>
                                    </Box>
                                    <Box
                                        component={'ul'}
                                        sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                    >
                                        {
                                            content.pros.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    component={'li'}
                                                >{item}</Box>
                                            ))
                                        }
                                    </Box>
                                </Stack>
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                    <Box
                                        component={'div'}
                                        sx={styles.commentPanel}
                                    >
                                        <Minus />
                                        <Box
                                            component={'span'}
                                            sx={styles.blackCommentTitle}
                                        >Cons</Box>
                                    </Box>
                                    <Box
                                        component={'ul'}
                                        sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                    >
                                        {
                                            content.cons.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    component={'li'}
                                                >{item}</Box>
                                            ))
                                        }
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            component={'div'}
                            sx={styles.rightPanel}
                        >
                            <Stack sx={{width: '100%'}} direction={'column'} spacing={4}>
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                    <Box
                                        component={'div'}
                                        sx={styles.commentPanel}
                                    >
                                        <IngredientGreen fill={colors.green} />
                                        <Box
                                            component={'span'}
                                            sx={[styles.blackCommentTitle, {color: colors.green}]}
                                        >Foods to eat!</Box>
                                    </Box>
                                    <Box
                                        component={'ul'}
                                        sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                    >
                                        {
                                            content.foodsToEats.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    component={'li'}
                                                >{item}</Box>
                                            ))
                                        }
                                    </Box>
                                </Stack>
                                <Stack sx={{width: '100%'}} direction={'column'} spacing={3}>
                                    <Box
                                        component={'div'}
                                        sx={styles.commentPanel}
                                    >
                                        <NoFood />
                                        <Box
                                            component={'span'}
                                            sx={[styles.blackCommentTitle, {color: colors.red}]}
                                        >Foods to avoid!</Box>
                                    </Box>
                                    <Box
                                        component={'ul'}
                                        sx={[styles.comment, {paddingLeft: pixToRem(80), paddingRight: pixToRem(60)}]}
                                    >
                                        {
                                            content.foodsToAvoids.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    component={'li'}
                                                >{item}</Box>
                                            ))
                                        }
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.downPanel}
                    >
                        <Box
                            component={'span'}
                            sx={styles.redTitle}
                        >
                            RECOMMENDED
                        </Box>
                        <Box
                            component={'span'}
                            sx={styles.blackTitle}
                        >Diets</Box>
                        <Stack sx={{width: '100%', marginTop: pixToRem(30)}} direction={'row'} spacing={3}>
                            {
                                recommendedDiets.map((item, index) => (
                                    <Box
                                        key={index}
                                        component={'div'}
                                        sx={styles.downImgItem}
                                    >
                                        <Box
                                            component={'img'}
                                            src={item.image}
                                            sx={styles.downImg}
                                        />
                                        <Box
                                            component={'span'}
                                            sx={styles.imgTitle}
                                        >{item.label}</Box>
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Box>
                </Box>
            </Box>
        )
    } else return <Box/>
})

export default DietDetail

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
        width: '83%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: pixToRem(80),
        paddingBottom: pixToRem(80),
        marginLeft: pixToRem(170)
    },
    header: {
        width: '100%',
        height: pixToRem(300),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${MeditarraneanWide})`,
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
    whiteTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(55),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(75),
        color: 'white',
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    breadcrumb: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: colors.red
    },
    upPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    downPanel: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: pixToRem(80)
    },
    leftPanel: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightPanel: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    commentPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    blackCommentTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: '700',
        lineHeight: pixToRem(45),
        marginLeft: pixToRem(10)
    },
    comment: {
        backgroundColor: 'white',
        paddingTop: pixToRem(50),
        paddingBottom: pixToRem(50),
        paddingLeft: pixToRem(40),
        paddingRight: pixToRem(40),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        lineHeight: pixToRem(34),
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
    },
    blackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(65),
        color: colors.black,
    },
    downImgItem: {
        display: 'inline-flex',
        position: 'relative',
        ':hover': {
            cursor: 'pointer'
        }
    },
    downImg: {
        width: '100%',
        height: 'auto',
    },
    imgTitle: {
        width: '60%',
        display: 'block',
        position: 'absolute',
        bottom: pixToRem(50),
        left: pixToRem(40),
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(35),
        color: 'white'
    }
}

const Breadcrumb = memo(props => {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon sx={{color: colors.red}} fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link underline="hover" key="1" sx={styles.breadcrumb} >
                Diets
            </Link>
            <Typography key="2" color={colors.red} sx={styles.breadcrumb}>
                {props.diet}
            </Typography>
        </Breadcrumbs>
    )
})