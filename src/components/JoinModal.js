import {Backdrop, Box, Button, Modal, TextField} from "@mui/material";
import React, {memo} from "react";
import {useSpring, animated} from "@react-spring/web";
import PropTypes from "prop-types";
import {colors, fonts, pixToRem} from "../const/uivar";
import TriangleVectors from "../assets/images/triangle_vectors";

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

const JoinModal = memo(props => {
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
                    <Box style={styles.vectorBg}>
                        <TriangleVectors />
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.title}
                    >JOIN OUR MAILING LIST</Box>
                    <Box component={'div'} sx={styles.redLine} />
                    <Box
                        component={'span'}
                        sx={styles.comment}
                    >
                        Please fill in the email below so that we can add you to mailing list.
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.inputLabel}
                    >Email*</Box>
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
                        required={true}
                        type={'text'}
                    />
                    <Button sx={styles.sendBtn}>Send</Button>
                </Box>
            </Fade>
        </Modal>
    )
})
export default JoinModal

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
        backgroundColor: '#F2F2F2',
        paddingLeft: pixToRem(120),
        paddingRight: pixToRem(120),
        paddingTop: pixToRem(140),
        paddingBottom: pixToRem(140),
        borderRadius: pixToRem(9)
    },
    title: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontWeight: '400',
        color: colors.black,
        lineHeight: pixToRem(45),
        paddingBottom: pixToRem(20)
    },
    redLine: {
        height: pixToRem(2),
        width: pixToRem(214),
        backgroundColor: colors.red,
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
    },
    sendBtn: {
        alignSelf: 'flex-end',
        marginTop: pixToRem(30),
        width: pixToRem(190),
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: colors.red,
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        fontWeight: 700,
        lineHeight: pixToRem(16),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        borderRadius: 0,
        ":hover": {
            backgroundColor: colors.red,
            color: 'white',
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