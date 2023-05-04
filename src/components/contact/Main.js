import {Box, Button} from "@mui/material";
import {memo, useCallback, useEffect, useState} from "react";
import StepBg from '../../assets/images/contact/step_bg.png'
import FinalBg from '../../assets/images/contact/final_bg.png'
import {colors, fonts, pixToRem} from "../../const/uivar";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Main = memo(props => {
    const [step, setStep] = useState(1);
    const stepBack = useCallback(() => {
        if (step > 0) setStep(step - 1);
    }, [step])
    const stepForward = useCallback(() => {
        if (step <= 3) setStep(step + 1)
    }, [step])
    return (
        <Box
            component={'div'}
            sx={[styles.container, {backgroundImage: step === 4 ? `url(${FinalBg})` : null}]}
        >
            {
                step <= 3 &&
                <Box
                    component={'div'}
                    sx={styles.stepPanel}
                >
                    <Box
                        component={'div'}
                        sx={styles.stepTitlePanel}
                    >
                        <Box
                            component={'span'}
                            sx={styles.stepTitle}
                        >CONTACT US</Box>
                        <Box
                            component={'div'}
                            sx={styles.stepperGroup}
                        >
                            <Box
                                component={'div'}
                                sx={styles.stepperProgress}
                            >
                                <CircularProgressbar
                                    value={25 * (step + 1)}
                                />
                            </Box>
                            <Box
                                component={'span'}
                                sx={styles.stepperCount}
                            >
                                {`${step + 1}/4`}
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        component={'span'}
                        sx={styles.stepComment}
                    >
                        Please fill in the details below so that we can get in contact with you.
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.stepActionPanel}
                    >
                        {
                            step === 0 && <Name />
                        }
                        {
                            step === 1 && <Email />
                        }
                        {
                            step === 2 && <PhoneNumber />
                        }
                        {
                            step === 3 && <Questions_Concerns />
                        }
                        <Box
                            component={'div'}
                            sx={styles.stepBtnPanel}
                        >
                            {
                                step > 0 ?
                                    <Button sx={styles.stepInactiveBtn} onClick={stepBack}>go back</Button>
                                    :
                                    <Box sx={{width: '30%'}} />
                            }
                            <Button sx={styles.stepActiveBtn} onClick={stepForward}>Next</Button>
                        </Box>
                    </Box>
                </Box>
            }
            {
                step <= 3 &&
                <Box
                    component={'img'}
                    sx={styles.stepBgImg}
                    src={StepBg}
                />
            }
            {
                step === 4 &&
                <Box
                    component={'div'}
                    sx={styles.finalStep}
                >
                    <Box
                        component={'span'}
                        sx={styles.finalStepTitle}
                    >THANK YOU</Box>
                    <Box
                        component={'div'}
                        sx={styles.finalStepDivider}
                    />
                    <Box
                        component={'span'}
                        sx={styles.finalStepComment}
                    >
                        Thanks for taking the time to complete this form. <br/>
                        We will be in contact within 24 hours.
                    </Box>
                    <Button
                        sx={styles.finalStepButton}
                    >explore sapiens eleven</Button>
                </Box>
            }
        </Box>
    )
})
export default Main

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100% 100%',
    },
    stepPanel: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepTitlePanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #F2F2F2'
    },
    stepTitle: {
        paddingBottom: pixToRem(30),
        fontFamily: fonts.besan,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(25),
        lineHeight: pixToRem(40),
        color: colors.black,
        borderBottom: '2px solid #CA3C3D'
    },
    stepperGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepperProgress: {
        width: '2rem',
        color: colors.red,
        border: '2px solid #F2F2F2',
        borderRadius: '50%',
        scale: '-1 1'
    },
    stepperCount: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(16),
        fontWeight: 700,
        marginLeft: pixToRem(10)
    },
    stepComment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        fontWeight: 400,
        color: '#999',
        alignSelf: 'flex-start',
        marginTop: pixToRem(20),
        marginBottom: pixToRem(20)
    },
    stepActionPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: pixToRem(15),
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(30)
    },
    stepBgImg: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: pixToRem(-22),
        width: '100%',
        height: 'auto',
        zIndex: -1
    },
    finalStep: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    finalStepTitle: {
        fontFamily: fonts.besan,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(25),
        lineHeight: pixToRem(40),
        textAlign: 'center',
        color: colors.black
    },
    finalStepDivider: {
        width: pixToRem(130),
        height: pixToRem(2),
        backgroundColor: colors.red,
        marginTop: pixToRem(30),
        marginBottom: pixToRem(30)
    },
    finalStepComment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(18),
        lineHeight: pixToRem(30),
        color: colors.comment,
        textAlign: 'center'
    },
    finalStepButton: {
        marginTop: pixToRem(30),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        paddingLeft: pixToRem(30),
        paddingRight: pixToRem(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
        color: 'white',
        borderRadius: 0,
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(16),
        fontWeight: 700,
        ":hover": {
            backgroundColor: colors.red,
            color: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }
    },
    stepBtnPanel: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: pixToRem(25),
    },
    stepInactiveBtn: {
        width: pixToRem(190),
        border: '1px solid #ccc',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ccc',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        fontWeight: 700,
        lineHeight: pixToRem(16),
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        borderRadius: 0,
        ":hover": {
            color: '#ccc',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        },
    },
    stepActiveBtn: {
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
    stepNamePanel: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stepNameItem: {
        width: '48%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    stepNameLabel: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        fontWeight: 700,
        lineHeight: pixToRem(30),
        color: colors.black,
        marginBottom: pixToRem(10)
    },
    stepNameInput: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(30),
        fontWeight: 400,
        color: colors.black,
        backgroundColor: 'white',
        width: '90%',
        border: 'none',
        ":focused": {
            border: 'none'
        },
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15)
    },
    stepEmailPanel: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepEmailLabel: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        fontWeight: 700,
        lineHeight: pixToRem(30),
        color: colors.black,
        marginBottom: pixToRem(10),
        alignSelf: 'flex-start'
    },
    stepEmailInput: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(30),
        fontWeight: 400,
        color: colors.black,
        backgroundColor: 'white',
        width: '95%',
        border: 'none',
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15)
    },
    stepPhoneNumberPanel: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepPhoneNumberLabel: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        fontWeight: 700,
        lineHeight: pixToRem(30),
        color: colors.black,
        marginBottom: pixToRem(10),
        alignSelf: 'flex-start'
    },
    stepPhoneNumberInput: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(30),
        fontWeight: 400,
        color: colors.black,
        backgroundColor: 'white',
        width: '95%',
        border: 'none',
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15)
    },
    stepQCPanel: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepQCLabel: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(18),
        fontWeight: 700,
        lineHeight: pixToRem(30),
        color: colors.black,
        marginBottom: pixToRem(10),
        alignSelf: 'flex-start'
    },
    stepQCInput: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(30),
        fontWeight: 400,
        color: colors.black,
        backgroundColor: 'white',
        width: '95%',
        border: 'none',
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15)
    }
}

const Name = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.stepNamePanel}
        >
            <Box
                component={'div'}
                sx={styles.stepNameItem}
            >
                <Box
                    component={'span'}
                    sx={styles.stepNameLabel}
                >First Name*</Box>
                <Box
                    component={'input'}
                    sx={styles.stepNameInput}
                />
            </Box>
            <Box
                component={'div'}
                sx={styles.stepNameItem}
            >
                <Box
                    component={'span'}
                    sx={styles.stepNameLabel}
                >Last Name*</Box>
                <Box
                    component={'input'}
                    sx={styles.stepNameInput}
                />
            </Box>
        </Box>
    )
})

const Email = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.stepEmailPanel}
        >
            <Box
                component={'span'}
                sx={styles.stepEmailLabel}
            >Email*</Box>
            <Box
                component={'input'}
                sx={styles.stepEmailInput}
            />
        </Box>
    )
})

const PhoneNumber = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.stepPhoneNumberPanel}
        >
            <Box
                component={'span'}
                sx={styles.stepPhoneNumberLabel}
            >Phone Number*</Box>
            <Box
                component={'input'}
                sx={styles.stepPhoneNumberInput}
            />
        </Box>
    )
})

const Questions_Concerns = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.stepQCPanel}
        >
            <Box
                component={'span'}
                sx={styles.stepQCLabel}
            >Questions / Concerns</Box>
            <Box
                component={'input'}
                sx={styles.stepQCInput}
            />
        </Box>
    )
})