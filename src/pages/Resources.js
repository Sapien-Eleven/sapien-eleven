import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo, useCallback, useState} from "react";
import IntroPanel from "../components/resources/IntroPanel";
import ContentPanel from "../components/resources/ContentPanel";
import JoinPanel from "../components/resources/JoinPanel";
import Mindfulness_Wide from '../assets/images/blog/mindfulness_wide.png'
import MindfulnessContentImage from '../assets/images/blog/mindfulness_content.png'
import Detail from "../components/resources/Detail";
import Health from "../assets/images/academy/mobility.png";
import AI_ML from "../assets/images/blog/ai_ml.png";

const temp = {
    id: 3,
    title: 'How Technology is Enhancing Mindfulness Practices',
    parentCategory: 'Blog',
    category: 'Mindfulness',
    createdAt: '25.04.2023',
    time: 3,
    backgroundImage: Mindfulness_Wide,
    introduction: 'Meditation has been practiced for centuries as a way to calm the mind and improve overall well-being. In recent years, the practice has seen a resurgence in popularity, thanks in part to the increasing availability of meditation apps and wearable technology designed to enhance mindfulness practices.\n' +
        '\n' +
        'Meditation apps have become incredibly popular in recent years. They provide users with access to guided meditations and other mindfulness practices, making it easier than ever to incorporate meditation into a daily routine. These apps are often designed to be user-friendly and accessible, with features such as customizable meditation timers and progress tracking.',
    contentImage: MindfulnessContentImage,
    contentImageDescription: 'One of the biggest benefits of meditation apps is that they allow users to practice mindfulness on-the-go. Many apps offer guided meditations that are specifically designed for busy people, with sessions as short as 5-10 minutes. This means that users can take a few minutes out of their day to focus on their mental and emotional well-being, no matter where they are.',
    description: 'One of the biggest benefits of meditation apps is that they allow users to practice mindfulness on-the-go. Many apps offer guided meditations that are specifically designed for busy people, with sessions as short as 5-10 minutes. This means that users can take a few minutes out of their day to focus on their mental and emotional well-being, no matter where they are.\n' +
        '\n' +
        'Wearable technology is another area where mindfulness practices are being enhanced by technology. Devices like the Muse Headband and the Spire Stone offer real-time feedback on a user\'s meditation practice, giving them insight into their mental and emotional state. The Muse Headband, for example, uses EEG sensors to measure brain activity during meditation sessions, providing users with real-time feedback on their progress.\n' +
        'In addition to providing real-time feedback, wearable technology can also help users stay motivated and accountable. Many devices offer progress tracking and reminders to help users stay on track with their meditation practice. This can be especially helpful for beginners who may struggle to establish a regular meditation routine.\n' +
        '\n' +
        'Another way that technology is enhancing mindfulness practices is through virtual reality (VR) experiences. VR has the potential to transport users to peaceful and calming environments, making it easier to enter a meditative state. There are already several VR apps and experiences available that are specifically designed for meditation and mindfulness practices.\n' +
        'Beyond meditation and mindfulness practices, technology is also being used to improve physical wellness and mobility. Wearable technology, such as fitness trackers and smart watches, can help users track their physical activity and monitor their progress towards fitness goals. Some devices even offer personalized workout recommendations based on a user\'s fitness level and goals.\n' +
        '\n' +
        'The use of technology in mindfulness practices and physical wellness is not without its challenges. Some experts worry that technology can be a distraction and prevent users from fully engaging in the present moment. Others caution that technology should be used in conjunction with, rather than as a replacement for, traditional mindfulness practices.\n' +
        'Despite these concerns, it is clear that technology has the potential to enhance mindfulness practices and improve overall well-being. From meditation apps to wearable technology and VR experiences, technology is providing users with new tools and resources to support their mental, emotional, and physical health. As technology continues to evolve, it will be interesting to see how it continues to shape the way we approach mindfulness and wellness practices.'
}

const recommededTemp = [
    {
        id: 2,
        image: Health,
        title: 'The Role of Blockchain in the Future of Healthcare and Wellness'
    },
    {
        id: 4,
        image: AI_ML,
        title: 'AI and Machine Learning are Personalizing Rehabilitation and Physical Therapy'
    },
]

const Resources = memo(props => {
    const [selectedContent, selectContent] = useState(false);
    const readContent = useCallback((category) => {
        // fetch the data with respect to the category and set content.
        selectContent(temp);
    }, [])
    const resetContent = useCallback(() => selectContent(false), []);
    return (
        <div className={'app'}>
            <Header page={'resources'} />
            {
                selectedContent === false ?
                    <Main readContent={readContent} />
                    :
                    <Detail
                        content={selectedContent}
                        recommended={recommededTemp}
                        goBack={resetContent}
                        readContent={readContent}
                    />
            }
            <Footer />
        </div>
    )
})

export default Resources

const Main = memo(props => {
    return (
        <div>
            <IntroPanel />
            <ContentPanel readContent={props.readContent} />
            <JoinPanel />
        </div>
    )
})