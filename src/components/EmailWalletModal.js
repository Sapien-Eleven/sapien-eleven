import React, {memo} from "react";
import {animated, useSpring} from "@react-spring/web";
import PropTypes from "prop-types";
import {Backdrop, Box, Button, Divider, Modal, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import {colors, fonts, pixToRem} from "../const/uivar";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import {SERVER_URL} from "../const/consts";
import Grid from "@mui/material/Unstable_Grid2";
import {ModalConnectButton} from "./WalletConnectButton";
import {useDispatch} from "react-redux";
import Triangles from "../assets/images/triangles.svg";

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

const EmailWalletModal = memo(props => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                const result = (await axios.post(`${SERVER_URL}login`, {
                    email: values.email,
                    password: values.password
                })).data;
                if (result.status === 'success') {
                    enqueueSnackbar('Successfully signed in!', {variant: 'success'});
                    dispatch({type: 'SIGN_IN', user: result.user});
                    props.onClose();
                } else {
                    enqueueSnackbar(result.comment, {variant: 'error'});
                }
            } catch (e) {
                enqueueSnackbar(e.toString(), {variant: 'error'});
            }
        }
    });
    if (sm) {
        return (
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
                    <Box sx={styles.mobilePanel}>
                        <Box
                            component={'span'}
                            sx={styles.panelTitle}
                        >
                            Log in
                        </Box>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid
                                container
                                fullWidth
                                spacing={1}
                                sx={{p: 2}}
                            >
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <ModalConnectButton onClosePrevious={() => props.onClose()} />
                                </Grid>
                                <Divider sx={{mt: 3, mb: 3, width: '100%', borderBottomColor: '#282e38'}} />
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        sx={styles.input}
                                        error={!!(formik.touched.email && formik.errors.email)}
                                        fullWidth
                                        helperText={formik.touched.email && formik.errors.email}
                                        label="Email Address"
                                        name="email"
                                        variant='filled'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="email"
                                        value={formik.values.email}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        sx={styles.input}
                                        error={!!(formik.touched.password && formik.errors.password)}
                                        fullWidth
                                        helperText={formik.touched.password && formik.errors.password}
                                        label="Password"
                                        name="password"
                                        variant='filled'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="password"
                                        value={formik.values.password}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <Button
                                        fullWidth
                                        type={'submit'}
                                        variant={'contained'}
                                        sx={styles.loginBtn}
                                    >
                                        Log in
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        <Divider sx={{borderColor: '#282e38', width: '100%'}} />
                        <Box sx={styles.footer}>
                            <Box component={'span'} sx={styles.footerTxt}>
                                By loggin in, you agree to <br/> our Terms of Service & Privacy Policy
                            </Box>
                            <Box component={'span'} sx={[styles.footerTxt, {mt: 2}]}>
                                Powered by Sapien Eleven
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        )
    }
    return (
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
                <Box sx={styles.panel}>
                    <Box
                        component={'span'}
                        sx={styles.panelTitle}
                    >
                        Log in
                    </Box>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid
                            container
                            fullWidth
                            spacing={1}
                            sx={styles.formPanel}
                        >
                            <Grid
                                item
                                md={12}
                            >
                                <ModalConnectButton onClosePrevious={() => props.onClose()} />
                            </Grid>
                            <Divider sx={{mt: 3, mb: 3, width: '100%', borderBottomColor: '#282e38'}} />
                            <Grid
                                item
                                md={12}
                            >
                                <TextField
                                    sx={styles.input}
                                    error={!!(formik.touched.email && formik.errors.email)}
                                    fullWidth
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Email Address"
                                    name="email"
                                    variant='filled'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.email}
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                            >
                                <TextField
                                    sx={styles.input}
                                    error={!!(formik.touched.password && formik.errors.password)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Password"
                                    name="password"
                                    variant='filled'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                            >
                                <Button
                                    fullWidth
                                    type={'submit'}
                                    variant={'contained'}
                                    sx={styles.loginBtn}
                                >
                                    Log in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Divider sx={{borderColor: '#282e38', width: '100%'}} />
                    <Box sx={styles.footer}>
                        <Box component={'span'} sx={styles.footerTxt}>
                            By loggin in, you agree to <br/> our Terms of Service & Privacy Policy
                        </Box>
                        <Box component={'span'} sx={[styles.footerTxt, {mt: 2}]}>
                            Powered by Sapien Eleven
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
});
export default EmailWalletModal

const styles = {
    panel: {
        transform: 'translate(-50%, 50%)',
        width: pixToRem(550),
        position: 'absolute',
        left: '50%',
        top: '-15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1a1b1f',
        borderRadius: 7,
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
        border: '1px solid #282e38',
    },
    mobilePanel: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1a1b1f',
        borderTopRightRadius: 20, borderTopLeftRadius: 20,
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
        border: '1px solid #282e38',
    },
    panelTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: '700',
        color: 'white',
        lineHeight: pixToRem(45),
        mt: 5
    },
    formPanel: {
        p: 5
    },
    loginBtn: {
        bgcolor: colors.red,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(22),
        fontWeight: '700',
        color: 'white',
        borderRadius: 3,
        textTransform: 'none',
        mt: 1, p: 1
    },
    continueBtn: {
        bgcolor: '#24272e',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(22),
        fontWeight: '700',
        color: 'white',
        borderRadius: 3,
        textTransform: 'none',
        p: 1
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3
    },
    footerTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '700',
        color: '#999',
        textAlign: 'center'
    },
    input: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '400',
        color: colors.bgBlackColor,
        backgroundColor: '#24272e',
        lineHeight: pixToRem(30),
        border: '1px solid #282e38',
        ":focused": {
            border: 'none'
        },
        borderRadius: pixToRem(10)
    }
}