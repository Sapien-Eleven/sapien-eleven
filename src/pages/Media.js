import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo, useState} from "react";
import IntroPanel from "../components/media/IntroPanel";
import ContentPanel from "../components/media/ContentPanel";
import JoinPanel from "../components/media/JoinPanel";
import BlogBg from '../assets/images/media/blog_bg.png'
import UpdatesBg from '../assets/images/media/updates_bg.png'
import NewsBg from '../assets/images/media/news_bg.png'
import PodcastsBg from '../assets/images/media/podcasts_bg.png'
import {useNavigate} from "react-router-dom";

const intros = [
    {
        title: 'blog',
        description: 'Welcome to our wellness blog! Our mission is to provide you with practical tips and resources to help you live a healthier and happier life.',
        backgroundImage: BlogBg
    },
    {
        title: 'updates',
        description: 'Stay attuned to our journey and evolution, ensuring that you\'re always in the loop with the latest brand happenings.',
        backgroundImage: UpdatesBg
    },
    {
        title: 'news',
        description: 'A curated collection of the latest articles, research findings, and expert insights, ensuring members and visitors stay informed on the ever-evolving landscape of holistic health and well-being.',
        backgroundImage: NewsBg
    },
    {
        title: 'podcasts',
        description: 'Welcome to WELLNESS3.0 by Sapien Eleven. Dive into comprehensive wellness topics, gain expert insights, and embark on a journey to a healthier, happier you.',
        backgroundImage: PodcastsBg
    },
]


const Media = memo(props => {
    const [category, setCategory] = useState('blog');
    const navigate = useNavigate();
    return (
        <div className={'app'}>
            <Header page={'media'} />
            <IntroPanel content={intros.filter(e => e.title === category)[0]} />
            <ContentPanel
                changeCategory={(value) => setCategory(value)}
                goToDetail={(detail, recommendItems) => navigate('/media/detail', {state: {detail, recommendItems}})}
            />
            <JoinPanel />
            <Footer />
        </div>
    )
})

export default Media