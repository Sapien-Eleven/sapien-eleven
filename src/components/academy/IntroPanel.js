import {memo, useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Wellness from '../../assets/images/academy/wellness.png'
import {connect} from "react-redux";
import axios from "axios";
import {StrapiToken, StrapiURL} from "../../const/consts";

const IntroPanel = memo(props => {
    const [content, setContent] = useState({})
    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}academy-landings`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section1'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                {content.title1}
            </Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                {content.title2}
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                {content.description}
            </Box>
            <Button
                sx={styles.enterButton}
                onClick={props.onPress}
            >
                {props.connectedWallet !== '' ? `Enter` : `CONNECT WALLET`}
            </Button>
            <Box
                component={'img'}
                src={Wellness}
                sx={styles.img}
            />
        </Container>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(IntroPanel)

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.bgBlackColor
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(35),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(150)
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(35),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(45),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
    },
    comment: {
        width: '40%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(60),
        textAlign: 'center'
    },
    button: {
        height: pixToRem(50),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: pixToRem(40),
        paddingRight: pixToRem(40),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: pixToRem(15),
    },
    metamaskLogo: {
        width: pixToRem(20),
        height: pixToRem(20),
        marginRight: pixToRem(10)
    },
    img: {
        width: pixToRem(300),
        height: 'auto',
        marginTop: pixToRem(20)
    },
    enterButton: {
        height: pixToRem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginBottom: pixToRem(30),
    }
}
