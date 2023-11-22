import {Box, Stack} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import EatToHealItem from "./EatToHealItem";
import axios from "axios";
import {StrapiBaseURL, StrapiToken, StrapiURL} from "../../const/consts";
import ReactMarkdown from "react-markdown";

const EatToHeal = memo(props => {
    const [header, setHeader] = useState({});
    const [heals, setHeals] = useState([]);
    const [page, setPage] = useState('main');
    const [heal, setHeal] = useState({});

    useEffect(() => {
        fetchHeader().then();
        fetchHeals().then();
    }, [])
    const fetchHeader = async () => {
        const data = (await axios.get(`${StrapiURL}eattoheal-headers`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setHeader({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
            howItWorks: data.data[0].attributes.howItWorks,
        });
    }
    const fetchHeals = async () => {
        const data = (await axios.get(`${StrapiURL}eattoheals`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*'
            }
        })).data;

        setHeals(data.data.reduce((acc, cur) => [...acc, {
            id: cur.id,
            title: cur.attributes.title,
            thumbnail: `${StrapiBaseURL}${cur.attributes.thumbnail.data.attributes.url}`,
            headerImage: `${StrapiBaseURL}${cur.attributes.headerImage.data.attributes.url}`,
            learnMore: cur.attributes.learnMore
        }], []));
    }
    const goToDetail = useCallback((next) => {
        setPage('detail');
        setHeal(next);
    }, []);
    const goToMain = useCallback(() => setPage('main'), []);
    if (page === 'main')
        return <Main goToDetail={goToDetail} header={header} heals={heals} />
    else return <EatToHealItem heal={heal} goToMain={goToMain} />
})

export default EatToHeal

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '80%',
        paddingTop: pixToRem(80),
        paddingBottom: pixToRem(80),
        paddingLeft: pixToRem(100),
        paddingRight: pixToRem(80),
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
        fontFamily: fonts.besan,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(45),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    smallBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(24),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        maxWidth: '90%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    imgItem: {
        width: '31%',
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
        bottom: pixToRem(35),
        left: pixToRem(30),
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
    return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {props.header.title1}
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                {props.header.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {props.header.description}
            </Box>
            <Box
                component={'span'}
                sx={styles.smallBlackTitle}
            >
                Here's how it works:
            </Box>
            <ReactMarkdown className={'howItWorksTxt'}>
                {props.header.howItWorks}
            </ReactMarkdown>
            <Stack
                sx={{width: '100%', marginTop: pixToRem(20), marginBottom: pixToRem(50)}}
                direction={'column'}
                spacing={3}
            >
                <Stack
                    sx={{width: '100%'}}
                    spacing={3}
                    direction={'row'}
                    useFlexGap
                    flexWrap={'wrap'}
                >
                    {
                        props.heals.map((item, index) => (
                            <Box
                                key={index}
                                component={'div'}
                                sx={styles.imgItem}
                                onClick={() => props.goToDetail(item)}
                            >
                                <Box
                                    component={'img'}
                                    sx={styles.img}
                                    src={item.thumbnail}
                                />
                                <Box component={'span'} sx={styles.imgTitle} >{item.title}</Box>
                            </Box>
                        ))
                    }
                </Stack>
            </Stack>
        </Box>
    )
})
