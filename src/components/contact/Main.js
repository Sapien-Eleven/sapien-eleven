import {Box, Button, TextField, useMediaQuery, useTheme} from "@mui/material";
import {memo, useEffect, useState} from "react";
import StepBg from '../../assets/images/contact/step_bg.png'
import FinalBg from '../../assets/images/contact/final_bg.png'
import {colors, fonts, pixToRem} from "../../const/uivar";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import validator from 'validator'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import {EmailJSPublicKey, EmailJSServiceID, EmailJSTemplateID} from "../../const/consts";

const Main = memo(props => {
    const [step, setStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [qc, setQC] = useState('')
    const [stepForwardBtnDisabled, setStepForwardBtnDisabled] = useState(true)
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        emailjs.init(EmailJSPublicKey)
    }, [])

    const stepBack = () => {
        if (step > 0) {
            setStep(step - 1);
            setStepForwardBtnDisabled(false)
        }
    }
    const stepForward = async () => {
        if (step === 0) {
           if (firstName === '' || lastName === '') return;
        }
        else if (step === 1) {
            if (email === '') return;
            if (!validator.isEmail(email)) {
                toast.error('Email is not valid',
                    {position: toast.POSITION.TOP_RIGHT})
                return;
            }
        }
        else if (step === 2) {
            if (phoneNumber === '') return;
            if (!validator.isMobilePhone(phoneNumber)) {
                toast.error('Phone number is not valid',
                    {position: toast.POSITION.TOP_RIGHT})
                return;
            }
        }
        if (step <= 3) {
            setStep(step + 1)
            if (step === 0 && email !== '') setStepForwardBtnDisabled(false)
            else if (step === 1 && phoneNumber !== '') setStepForwardBtnDisabled(false)
            else if (step === 2 && qc !== '') setStepForwardBtnDisabled(false)
            else setStepForwardBtnDisabled(true)
        }
        if (step === 3) {
            await emailjs.send(EmailJSServiceID, EmailJSTemplateID, {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email: email,
                qc: qc
            });
        }
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
        if (lastName) setStepForwardBtnDisabled(false)
        if (e.target.value === '') setStepForwardBtnDisabled(true)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
        if (firstName) setStepForwardBtnDisabled(false)
        if (e.target.value === '') setStepForwardBtnDisabled(true)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value === '') setStepForwardBtnDisabled(true)
        else setStepForwardBtnDisabled(false)
    }
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        if (e.target.value === '') setStepForwardBtnDisabled(true)
        else setStepForwardBtnDisabled(false)
    }
    const onChangeQC = (e) => {
        setQC(e.target.value);
        if (e.target.value === '') setStepForwardBtnDisabled(true)
        else setStepForwardBtnDisabled(false)
    }
    return (
        <Box
            component={'div'}
            sx={[styles.container, {
                backgroundImage: step === 4 ? `url(${FinalBg})` : null,
                backgroundSize: sm ? 'cover' : '100% 100%'
            }]}
        >
            {
                step <= 3 &&
                <Box
                    component={'div'}
                    sx={[styles.stepPanel, {
                        width: md ? '90%' : lg ? '70%' : '50%'
                    }]}
                >
                    <Box
                        component={'div'}
                        sx={styles.stepTitlePanel}
                    >
                        <Box
                            component={'span'}
                            sx={sm ? styles.mobileStepTitle : styles.stepTitle}
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
                                    styles={buildStyles({
                                        pathColor: colors.red
                                    })}
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
                        sx={sm ? styles.mobileStepComment : styles.stepComment}
                    >
                        Please fill in the details below so that we can get in contact with you.
                    </Box>
                    <Box
                        component={'div'}
                        sx={styles.stepActionPanel}
                    >
                        {
                            step === 0 &&
                            <Name
                                defaultFirstName={firstName}
                                defaultLastName={lastName}
                                onChangeFirstName={onChangeFirstName}
                                onChangeLastName={onChangeLastName}
                            />
                        }
                        {
                            step === 1 && <Email defaultValue={email} onChangeEmail={onChangeEmail} />
                        }
                        {
                            step === 2 && <PhoneNumber defaultValue={phoneNumber} onChangePhoneNumber={onChangePhoneNumber} />
                        }
                        {
                            step === 3 && <QuestionsConcerns defaultValue={qc} onChangeQC={onChangeQC} />
                        }
                        <Box
                            component={'div'}
                            sx={sm ? styles.mobileStepBtnPanel : styles.stepBtnPanel}
                        >
                            {
                                step > 0 ?
                                    <Button sx={[styles.stepBackBtn, {mb: sm ? 3 : 0}]} onClick={stepBack}>go back</Button>
                                    :
                                    <Box sx={{width: '30%'}} />
                            }
                            <Button sx={styles.stepForwardBtn} disabled={stepForwardBtnDisabled} onClick={stepForward}>Next</Button>
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
                        Thanks for taking the time to complete this form.
                        We will be in contact within 24 hours.
                    </Box>
                    <Button
                        sx={styles.finalStepButton}
                    >explore sapiens eleven</Button>
                </Box>
            }
            <ToastContainer
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
        backgroundPosition: 'center'
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
    mobileStepTitle: {
        pb: 2,
        fontFamily: fonts.besan,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(20),
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
        transform: 'rotate(-90deg)'
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
    mobileStepComment: {
        width: '80%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(16),
        lineHeight: pixToRem(24),
        fontWeight: 400,
        color: '#999',
        alignSelf: 'flex-start',
        mt: 2, mb: 3
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
    mobileStepBtnPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: pixToRem(25),
    },
    stepBackBtn: {
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
    stepForwardBtn: {
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
        '&.Mui-disabled': {
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
        }
    },
    stepNamePanel: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stepNameItem: {
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
        width: '95%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(30),
        fontWeight: 700,
        color: colors.black,
        backgroundColor: 'white',
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        paddingTop: pixToRem(20),
        paddingBottom: pixToRem(20)
    }
}

const Name = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            component={'div'}
            sx={[styles.stepNamePanel, {flexDirection: sm ? 'column' : 'row'}]}
        >
            <Box
                component={'div'}
                sx={[styles.stepNameItem, {
                    width: sm ? '100%' : '48%',
                    mt: sm ? 2 : 0,
                    mb: sm ? 2 : 0
                }]}
            >
                <Box
                    component={'span'}
                    sx={styles.stepNameLabel}
                >First Name*</Box>
                <TextField
                    sx={styles.stepNameInput}
                    fullWidth={true}
                    variant={'standard'}
                    InputProps={{
                        disableUnderline: true
                    }}
                    required={true}
                    type={'text'}
                    placeholder={'Please enter your name'}
                    defaultValue={props.defaultFirstName}
                    onChange={props.onChangeFirstName}
                />
            </Box>
            <Box
                component={'div'}
                sx={[styles.stepNameItem, {
                    width: sm ? '100%' : '48%',
                    mt: sm ? 2 : 0,
                    mb: sm ? 2 : 0
                }]}
            >
                <Box
                    component={'span'}
                    sx={styles.stepNameLabel}
                >Last Name*</Box>
                <TextField
                    sx={styles.stepNameInput}
                    fullWidth={true}
                    variant={'standard'}
                    InputProps={{
                        disableUnderline: true
                    }}
                    required={true}
                    placeholder={'Please enter your last name'}
                    defaultValue={props.defaultLastName}
                    onChange={props.onChangeLastName}
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
            <TextField
                sx={styles.stepEmailInput}
                fullWidth={true}
                variant={'standard'}
                InputProps={{
                    disableUnderline: true
                }}
                required={true}
                type={'email'}
                defaultValue={props.defaultValue}
                onChange={props.onChangeEmail}
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
            <TextField
                sx={styles.stepPhoneNumberInput}
                fullWidth={true}
                variant={'standard'}
                InputProps={{
                    disableUnderline: true
                }}
                required={true}
                defaultValue={props.defaultValue}
                onChange={props.onChangePhoneNumber}
            />
        </Box>
    )
})

const QuestionsConcerns = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.stepQCPanel}
        >
            <Box
                component={'span'}
                sx={styles.stepQCLabel}
            >Questions / Concerns</Box>
            <TextField
                sx={styles.stepQCInput}
                multiline
                fullWidth={true}
                minRows={4}
                maxRows={7}
                placeholder={'Please write your question...'}
                variant={'standard'}
                InputProps={{
                    disableUnderline: true,
                }}
                defaultValue={props.defaultValue}
                onChange={props.onChangeQC}
            />
        </Box>
    )
})