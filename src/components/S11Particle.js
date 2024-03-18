import {useEffect, useMemo} from "react";
import {colors} from "../const/uivar";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

const S11Particle = () => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then();
    }, [])
    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fullScreen: {enable: true, zIndex: -1},
            smooth: false,
            fpsLimit: 120,
            interactivity: {
                detectsOn: 'window',
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                    resize: {enable: true}
                },
                modes: {
                    grab: { distance: 400, links: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { quantity: 4 },
                    remove: { quantity: 2 }
                }
            },
            particles: {
                color: {
                    value: colors.red,
                },
                links: {
                    color: colors.red,
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {default: 'out'},
                    bounce: false,
                    attract: { enable: false, rotate: {x: 600, y: 1200} }
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 200,
                },
                opacity: {
                    value: {min: 0.1, max: 0.5},
                    animation: { enable: false, speed: 1, startValue: 'random', sync: false }
                },
                shape: {
                    type: "circle",
                    polygon: { sides: 5 },
                },
                size: {
                    value: {min: 0.1, max: 3},
                    animation: { enable: false, speed: 40, startValue: 'max', sync: false }
                },
            },
            detectRetina: true,
        }),
        [],
    );
    return (
        <Particles
            id={'tsparticles'}
            options={options}
            particlesLoaded={(container) => console.log(container)}
        />
    )
}
export default S11Particle