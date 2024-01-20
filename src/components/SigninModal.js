import {Backdrop, Box, Button, Modal, TextField} from "@mui/material";
import React, {memo, useEffect, useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import PropTypes from "prop-types";
import {colors, fonts, pixToRem} from "../const/uivar";
import Triangles from '../assets/images/triangles.svg'
import SapienMark from '../assets/sapien.svg';
import {SERVER_URL} from "../const/consts";
import axios from "axios";
import {useSnackbar} from 'notistack';
import {useDispatch} from "react-redux";
import {signIn} from "../store/actions/auth";

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const SigninModal = memo(props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableBtn, setEnableBtn] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const handleInputChange = (event, input) => {
        if (input === 'email') setEmail(event.target.value);
        else setPassword(event.target.value);
    };
    useEffect(() => {
        if (email !== '' && password !== '') setEnableBtn(true);
        else setEnableBtn(false)
    }, [email, password]);
    const onSend = async () => {
        if (!enableBtn) return;
        const data = (await axios.post(`${SERVER_URL}login`, {email, password})).data;
        if (data.status === 'success') {
            props.onClose();
            dispatch(signIn(data.user));
            enqueueSnackbar('Successfully signed in', {variant: 'success'});
        } else {
            enqueueSnackbar(data.comment, {variant: 'error'});
        }
    }

    return(
        <Modal
            aria-labelledby={"spring-modal-title"}
            aria-describedby={'spring-modal-description'}
            open={props.visible}
            onClose={props.onClose}
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Fade in={props.visible}>
                <Box
                    component={'div'}
                    sx={styles.panel}
                >
                    <Box
                        component={'div'}
                        sx={styles.titlePanel}
                    >
                        <Box
                            component={'img'}
                            src={SapienMark}
                            sx={{width: pixToRem(22)}}
                        />
                        <Box
                            component={'span'}
                            sx={styles.title}
                        >
                            SIGN IN
                        </Box>
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.divider}
                    >
                        <Box component={'div'} sx={styles.redLine} />
                        <Box component={'div'} sx={styles.whiteLine} />
                    </Box>
                    <TextField
                        sx={styles.input}
                        fullWidth={true}
                        variant={'standard'}
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                paddingLeft: pixToRem(30),
                                paddingRight: pixToRem(30),
                                paddingTop: pixToRem(20),
                                paddingBottom: pixToRem(20),
                            }
                        }}
                        placeholder={'john.doe@email.com'}
                        required={true}
                        type={'text'}
                        onChange={(e) => handleInputChange(e, 'email')}
                    />
                    <TextField
                        sx={styles.input}
                        fullWidth={true}
                        variant={'standard'}
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                paddingLeft: pixToRem(30),
                                paddingRight: pixToRem(30),
                                paddingTop: pixToRem(20),
                                paddingBottom: pixToRem(20),
                            }
                        }}
                        placeholder={'Password'}
                        required={true}
                        type={'password'}
                        onChange={(e) => handleInputChange(e, 'password')}
                    />
                    <Button
                        sx={[styles.sendBtn, {backgroundColor: enableBtn ? colors.red : 'rgba(202, 60, 61, 0.10)'}]}
                        onClick={onSend}
                    >Send</Button>
                </Box>
            </Fade>
        </Modal>
    )
})
export default SigninModal

const styles = {
    panel: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: colors.bgBlackColor,
        backgroundImage: `url(${Triangles})`,
        backgroundPosition: 'center',
        backgroundClip: 'border-box',
        paddingLeft: pixToRem(120),
        paddingRight: pixToRem(120),
        paddingTop: pixToRem(140),
        paddingBottom: pixToRem(140),
        borderRadius: pixToRem(9)
    },
    titlePanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: pixToRem(20),
    },
    title: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: '400',
        color: 'white',
        lineHeight: pixToRem(45),
        marginLeft: pixToRem(20)
    },
    divider: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    redLine: {
        height: pixToRem(2),
        width: '30%',
        backgroundColor: colors.red,
        marginBottom: pixToRem(10)
    },
    whiteLine: {
        height: pixToRem(2),
        width: '70%',
        backgroundColor: '#F2F2F2',
        marginBottom: pixToRem(10)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        color: colors.comment,
        lineHeight: pixToRem(30),
        marginTop: pixToRem(20),
        marginBottom: pixToRem(20)
    },
    inputLabel: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '700',
        color: colors.bgBlackColor,
        lineHeight: pixToRem(30)
    },
    input: {
        flex: 1,
        marginTop: pixToRem(10),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '400',
        color: colors.bgBlackColor,
        backgroundColor: 'white',
        lineHeight: pixToRem(30),
        border: 'none',
        ":focused": {
            border: 'none'
        },
        borderRadius: pixToRem(10)
    },
    sendBtn: {
        alignSelf: 'flex-end',
        marginTop: pixToRem(30),
        width: pixToRem(190),
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderWidth: pixToRem(1),
        borderColor: colors.red,
        borderStyle: 'solid',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(16),
        fontWeight: 700,
        lineHeight: pixToRem(16),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        borderRadius: 0,
        ":hover": {
            backgroundColor: 'rgba(202, 60, 61, 0.10)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        },
    },
    vectorBg: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}