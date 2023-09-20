import {Box, Stack} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import DietDetail from "./DietDetail";

const Diets = memo(props => {
    const [type, setType] = useState('main');
    const [diet, setDiet] = useState('');
    const changeDetail = useCallback((next) => {
        setType('detail');
        setDiet(next);
    }, []);
    switch (type) {
        case 'main':
            return (
                <Main setPage={changeDetail} content={props.content} />
            )
        case 'detail':
            return <DietDetail diet={diet} />
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
        paddingTop: pixToRem(100),
        paddingLeft: pixToRem(170),
        paddingRight: pixToRem(100),
        paddingBottom: pixToRem(80)
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(55),
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(65),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(20),
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
        width: '49%',
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
    return (
        <Box
            component={'div'}
            sx={styles.container}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {props.content.category.toUpperCase()}
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                {props.content.title}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {props.content.description}
            </Box>
            <Stack
                sx={styles.imgPanel}
                spacing={3}
                direction={'row'}
                useFlexGap
                flexWrap={'wrap'}
            >
                {
                    props.content.image.map((item, index) => (
                        <Box
                            key={index}
                            component={'div'}
                            sx={styles.imgItem}
                            onClick={() => props.setPage(item.label)}
                        >
                            <Box
                                component={'img'}
                                sx={styles.img}
                                src={item.image}
                            />
                            <Box component={'span'} sx={styles.imgTitle} >{item.label}</Box>
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
})
