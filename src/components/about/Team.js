import {Box, Container} from "@mui/material";
import {memo} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import CEOPhoto from '../../assets/images/about/ceo_jeremy.png'
import {teamMembers} from "../../const/consts";

const Team = memo(props => {
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
                OUR
            </Box>
            <Box
                component={'span'}
                sx={styles.blackTitle}
            >
                TEAM
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Meet our incredible team of dedicated professionals who bring a wealth of knowledge, experience and passion to everything they do.
            </Box>
            <Box
                component={'div'}
                sx={styles.ceoPanel}
            >
                <Box
                    component={'div'}
                    sx={styles.ceoCommentPanel}
                >
                    <Box
                        component={'span'}
                        sx={styles.redTitle}
                    >Founder & CEO</Box>
                    <Box
                        component={'span'}
                        sx={styles.blackTitle}
                    >JEREMY</Box>
                    <Box
                        component={'span'}
                        sx={styles.ceoComment}
                    >
                        A licensed medical provider in the United States with a degree in Nutrition, Exercise, and Health Sciences. Having experienced the pros and, particularly, the cons of the healthcare system from both the provider and patient sides, I made it my mission to create change. To educate and empower individuals to take control of their own wellness to live healthier and happier.
                    </Box>
                </Box>
                <Box
                    component={'img'}
                    src={CEOPhoto}
                    sx={styles.ceoPhoto}
                />
            </Box>
            <Box
                component={'div'}
                sx={styles.memberPanel}
            >
                {
                    teamMembers.map((member, index) => (
                        <Box
                            component={'div'}
                            sx={styles.memberBox}
                            key={index}
                        >
                            <Box
                                component={'img'}
                                src={member.image}
                                sx={styles.memberPhoto}
                            />
                            <Box
                                component={'div'}
                                sx={styles.memberComment}
                            >
                                <Box
                                    component={'span'}
                                    sx={styles.memberName}
                                >
                                    {member.name}
                                </Box>
                                <Box
                                    component={'span'}
                                    sx={styles.memberRole}
                                >
                                    {member.role}
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )
})

export default Team

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(90),
        backgroundColor: 'white'
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(55),
        marginTop: pixToRem(40)
    },
    blackTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(45),
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.black,
        marginTop: pixToRem(15),
        marginBottom: pixToRem(15),
    },
    comment: {
        width: '50%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(28),
        lineHeight: pixToRem(40),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
        textAlign: 'center'
    },
    ceoPanel:  {
        backgroundColor: colors.bgWhiteColor,
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: pixToRem(30)
    },
    ceoCommentPanel: {
        height: pixToRem(640),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: pixToRem(130),
    },
    ceoComment: {
        width: '86%',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: pixToRem(28),
        lineHeight: pixToRem(40),
        color: colors.comment,
        marginTop: pixToRem(20),
        marginBottom: pixToRem(30),
    },
    ceoPhoto: {
        width: 'auto',
        height: pixToRem(640),
        backgroundSize: '100% 100%'
    },
    memberPanel: {
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: pixToRem(20),
        marginBottom: pixToRem(10)
    },
    memberBox: {
        width: '22%',
        height: pixToRem(440),
        backgroundColor: '#1F1F1F',
        padding: '17px 17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: pixToRem(30)
    },
    memberPhoto: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover'
    },
    memberComment: {
        marginTop: pixToRem(-140),
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(40),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)'
    },
    memberName: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(32),
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: pixToRem(33),
        color: 'white',
    },
    memberRole: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(33),
        marginTop: pixToRem(5)
    }
}
