import {Box} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Breakfast from '../../assets/images/academy/breakfast.png'
import Ketogenic from '../../assets/images/academy/ketogenic_diet.png'
import Meditarranean from '../../assets/images/academy/meditarranean_diet.png'
import Paleo from '../../assets/images/academy/paleo_diet.png'
import Whole from '../../assets/images/academy/whole_diet.png'

const Diets = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                DIETS
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                YOUR GUIDE TO HEALTH EATING
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Learn the art of mindfulness and find Inner peace with our expert sessions!
            </Box>
            <Box
                component={'div'}
                sx={styles.imgPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.imgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.img}
                        src={Ketogenic}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >Ketogenic Diet</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.imgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.img}
                        src={Meditarranean}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >Mediterranean Diet</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.imgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.img}
                        src={Paleo}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >Paleo Diet</Box>
                </Box>
                <Box
                    component={'div'}
                    sx={styles.imgItem}
                >
                    <Box
                        component={'img'}
                        sx={styles.img}
                        src={Whole}
                    />
                    <Box component={'span'} sx={styles.imgTitle} >Whole 30 Diet</Box>
                </Box>
            </Box>
        </Box>
    )
})

export default Diets

const styles = {
    panel: {
        display: 'flex',
        flex: 1,
        width: '88%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: pixToRem(70),
        paddingBottom: pixToRem(30)
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: pixToRem(10),
        marginBottom: pixToRem(10)
    },
    imgItem: {
        width: '49%',
        display: 'inline-flex',
        position: 'relative',
        marginTop: pixToRem(20)
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
    }
}
