import {Box, Button, Container, Stack} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import AI_ML from '../../assets/images/blog/ai_ml.png';
import Fitness from '../../assets/images/academy/fitness.png'
import Health from '../../assets/images/academy/mobility.png'
import Mindfulness from '../../assets/images/blog/mindfulness.png'
import {ChevronRight} from "@mui/icons-material";

const contents = {
    blog: [
        {
            image: Fitness,
            title: 'Revolutionizing Fitness: How AI and VR are Transforming Your Workouts'
        },
        {
            image: Health,
            title: 'The Role of Blockchain in the Future of Healthcare and Wellness'
        },
        {
            image: Mindfulness,
            title: 'How Technology is Enhancing Mindfulness Practices'
        },
        {
            image: AI_ML,
            title: 'AI and Machine Learning are Personalizing Rehabilitation and Physical Therapy'
        },
    ],
    updates: [],
    news: [],
    podcasts: []
}

const CategoryPanel = memo(props => {
    const [currentCategory, setCurrentCategory] = useState('blog');
    const changeCategory = useCallback((category) => setCurrentCategory(category), []);
    return (
        <Container
            maxWidth={false}
            sx={styles.container}
        >
            <Stack
                sx={{width: '50%'}}
                direction={'row'}
                spacing={1}
            >
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'blog' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('blog')}
                >
                    Blog
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'updates' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('updates')}
                >
                    Updates
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'news' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('news')}
                >
                    News
                </Box>
                <Box
                    component={'div'}
                    sx={[styles.categoryTitle, {borderBottomColor: currentCategory === 'podcasts' ? colors.red : colors.bgWhiteColor}]}
                    onClick={() => changeCategory('podcasts')}
                >
                    Podcasts
                </Box>
            </Stack>
            <Stack
                sx={{width: '95%', marginTop: pixToRem(50)}}
                direction={'row'}
                spacing={3}
            >
                {
                    contents[currentCategory].map((item, index) => (
                        <Box
                            key={index}
                            sx={styles.contentItem}
                            item={item}
                        >
                            <Box
                                component={'img'}
                                src={item.image}
                                sx={styles.contentImage}
                            />
                            <Box
                                component={'span'}
                                sx={styles.contentTitle}
                            >{item.title}</Box>
                            <Button
                                sx={styles.contentButton}
                            >
                                READ MORE
                                <ChevronRight sx={{color: colors.red}} />
                            </Button>
                        </Box>
                    ))
                }
            </Stack>
        </Container>
    )
})
export default CategoryPanel

const styles = {
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: pixToRem(30),
        paddingRight: pixToRem(30),
        paddingTop: pixToRem(30),
        paddingBottom: pixToRem(60),
        backgroundColor: 'white'
    },
    categoryTitle: {
        flex: 1,
        backgroundColor: colors.bgWhiteColor,
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: pixToRem(3),
        borderBottomColor: colors.red,
        borderBottomStyle: 'solid',

        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: '#333',
    },
    contentItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentImage: {
        width: '100%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    contentTitle: {
        width: '50%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontWeight: '700',
        color: colors.bgBlackColor,
        textAlign: 'center',
        marginTop: pixToRem(20)
    },
    contentButton: {
        marginTop: pixToRem(15),
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(13),
        fontWeight: '700',
        color: '#999',
    }
}