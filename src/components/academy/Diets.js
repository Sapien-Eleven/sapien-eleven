import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import DietDetail from "./DietDetail";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import Grid from "@mui/material/Unstable_Grid2";

const Diets = memo(props => {
    const [content, setContent] = useState([])
    const [type, setType] = useState('main');
    const [diet, setDiet] = useState('');
    useEffect(() => {
        fetchContent().then()
    }, []);
    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}diets`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setContent(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            title1: cur.attributes.title1,
            title2: cur.attributes.title2,
            description: cur.attributes.description,
            thumbnail: `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
            thumbnailTitle: cur.attributes.thumbnailTitle,
            headerImage: `${StrapiBaseURL}${cur.attributes.headerImage.data.attributes.url}`,
            whatIsIt: cur.attributes.whatIsIt,
            howWhyWorks: cur.attributes.howWhyWorks,
            foodsToEat: cur.attributes.foodsToEat,
            foodsToAvoid: cur.attributes.foodsToAvoid,
            pros: cur.attributes.pros,
            cons: cur.attributes.cons
        }], []));
    }
    const changeDetail = useCallback((next) => {
        setType('detail');
        setDiet(next);
    }, []);
    switch (type) {
        case 'main':
            return (
                <Main setPage={changeDetail} content={content}/>
            )
        case 'detail':
            return <DietDetail diet={diet} recommendedDiets={content} goToMain={() => setType('main')} changeDetail={changeDetail} />
        default:
            return null;
    }
})

export default Diets

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom: pixToRem(80)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
    },
    mobileRedTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(36),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(35),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(45),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    mobileBlackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(36),
        color: colors.black,
        textAlign: 'center',
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(26),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    imgPanel: {
        width: '100%',
        marginTop: pixToRem(10),
        marginBottom: pixToRem(10)
    },
    imgItem: {
        width: '100%',
        display: 'inline-flex',
        position: 'relative',
        ':hover': {
            cursor: 'pointer'
        },
    },
    img: {
        width: '100%',
        height: 'auto',
    },
    imgTitle: {
        position: 'absolute',
        bottom: pixToRem(50),
        left: pixToRem(40),
        zIndex: 300,
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(25),
        lineHeight: pixToRem(35),
        color: 'white'
    },
    header: {
        position: 'relative',
        width: '100%',
        height: pixToRem(224),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
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
}

const Main = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    if (props.content !== undefined && props.content.length > 0)
        return (
            <Box
                component={'div'}
                sx={[styles.container, {
                    pt: sm ? 7 : 12,
                    pl: sm ? 2 : 12,
                    pr: sm ? 2 : 12,
                    alignItems: sm ? 'center' : 'flex-start'
                }]}
            >
                <Box
                    component={'span'}
                    sx={sm ? styles.mobileRedTitle : styles.redTitle}
                >
                    {props.content[0].title1}
                </Box>
                <Box
                    component={'span'}
                    sx={sm ? styles.mobileBlackTitle : styles.blackTitle}
                >
                    {props.content[0].title2}
                </Box>
                <Box
                    component={'span'}
                    sx={[styles.comment, {textAlign: sm ? 'center' : 'start'}]}
                >
                    {props.content[0].description}
                </Box>
                <Grid
                    container
                    sx={styles.imgPanel}
                    spacing={3}
                >
                    {
                        props.content.map((item, index) => (
                            <Grid
                                key={index}
                                item
                                md={6}
                                sm={12}
                            >
                                <Box
                                    component={'div'}
                                    sx={styles.imgItem}
                                    onClick={() => props.setPage(item)}
                                >
                                    <Box
                                        component={'img'}
                                        sx={styles.img}
                                        src={item.thumbnail}
                                    />
                                    <Box component={'span'} sx={styles.imgTitle}>{item.thumbnailTitle}</Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        )
    else return <Box/>
})
