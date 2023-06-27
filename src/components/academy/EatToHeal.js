import {Box, Stack} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import EatToHealItem from "./EatToHealItem";
import ColorsImg from '../../assets/images/academy/colors.png'
import HerbsImg from '../../assets/images/academy/herbs.png'
import NutsImg from '../../assets/images/academy/nuts.png'
import OilsImg from '../../assets/images/academy/oils.png'
import VeggiesImg from '../../assets/images/academy/veggies.png'
import SeedsImg from '../../assets/images/academy/seeds.png'

const EatToHeal = memo(props => {
    const [page, setPage] = useState('main');
    const goToDetail = useCallback((next) => setPage(next), [page]);
    if (page === 'main')
        return <Main setPage={goToDetail} />
    else return <EatToHealItem currentItem={page} setPage={goToDetail} />
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
        paddingLeft: pixToRem(170),
        paddingRight: pixToRem(80),
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
    smallBlackTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(40),
        color: colors.black,
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(20),
        lineHeight: pixToRem(30),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    imgItem: {
        width: '35%',
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
                EAT TO HEAL
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                FOOD IS THE MEDICINE
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                "Eat to heal!" is a philosophy emphasizing the consumption of nutrient-dense foods to support the body's natural healing processes, enhance overall wellness, and prevent disease.
            </Box>
            <Box
                component={'span'}
                sx={styles.smallBlackTitle}
            >
                Here's how it works:
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Nutrient Supply: Consuming a diverse range of nutrient-rich foods provides the body with essential vitamins, minerals, and other compounds needed for optimal function and repair.
                <br/><br/>
                Immune Support: A healthy diet boosts our immune system enhancing our body's ability to fight off infections and illnesses.
                <br/><br/>
                Disease Prevention: Foods rich in antioxidants and anti-inflammatory compounds, such as fruits, and vegetables, can help prevent chronic diseases like heart diseases, diabetes, and cancer by neutralizing harmful free radicals and reducing inflammation.
                <br/><br/>
                Gut Health: Fiber-rich foods nourish our gut microbiota, playing a vital role in degestion, nutrient absorption, and overall health, including immune and mental health.
                <br/><br/>
                Weight Management: Nutrient-dense foods are typically lower in calories but keep us satiated longer, helping maintain a healthy weight and preventing obesity-related disease.
                <br/><br/>
                In essence, "eat to heal" is about using food as medicine to naturally enhance the body's healing capabilities and promote long-term health and wellness.
            </Box>
            <Stack
                sx={{width: '100%', marginTop: pixToRem(20), marginBottom: pixToRem(50)}}
                direction={'column'}
                spacing={3}
            >
                <Stack
                    sx={{width: '100%'}}
                    spacing={3}
                    direction={'row'}
                >
                    <Box
                        component={'div'}
                        sx={styles.imgItem}
                        onClick={() => props.setPage('colors')}
                    >
                        <Box
                            component={'img'}
                            sx={styles.img}
                            src={ColorsImg}
                        />
                        <Box component={'span'} sx={styles.imgTitle} >COLORS</Box>
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.imgItem}
                        onClick={() => props.setPage('herbs')}
                    >
                        <Box
                            component={'img'}
                            sx={styles.img}
                            src={HerbsImg}
                        />
                        <Box component={'span'} sx={styles.imgTitle} >HERBS</Box>
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.imgItem}
                        onClick={() => props.setPage('nuts')}
                    >
                        <Box
                            component={'img'}
                            sx={styles.img}
                            src={NutsImg}
                        />
                        <Box component={'span'} sx={styles.imgTitle} >NUTS</Box>
                    </Box>
                </Stack>
                <Stack
                    sx={{width: '100%'}}
                    spacing={3}
                    direction={'row'}
                >
                    <Box
                        component={'div'}
                        sx={styles.imgItem}
                        onClick={() => props.setPage('oils')}
                    >
                        <Box
                            component={'img'}
                            sx={styles.img}
                            src={OilsImg}
                        />
                        <Box component={'span'} sx={styles.imgTitle} >OILS</Box>
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.imgItem}
                        onClick={() => props.setPage('veggies')}
                    >
                        <Box
                            component={'img'}
                            sx={styles.img}
                            src={VeggiesImg}
                        />
                        <Box component={'span'} sx={styles.imgTitle} >ROOT VEGETABLES</Box>
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.imgItem}
                        onClick={() => props.setPage('seeds')}
                    >
                        <Box
                            component={'img'}
                            sx={styles.img}
                            src={SeedsImg}
                        />
                        <Box component={'span'} sx={styles.imgTitle} >SEEDS</Box>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
})
