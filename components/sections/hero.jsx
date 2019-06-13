import Particles from 'react-particles-js'

const config = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#b6b2b2'
            }
        },
        opacity: {
            value: 0.5211089197812949,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 8.017060304327615,
            random: true,
            anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 0.1,
                sync: true
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#c8c8c8',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'repulse'
            },
            onclick: {
                enable: false,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}

const Hero = () => (
    <section
        className="w-full h-full flex items-center justify-center relative"
        style={{
            width: '100%',
            height: '800px'
        }}>
        <div className="w-full h-full flex items-center justify-center absolute top-0 z-20">
            <div className="flex flex-col mx-8">
                <p className="text-6xl font-headline font-semibold leading-none text-black mb-3">
                    Thinc.
                </p>
                <p className="text-6xl font-headline font-semibold leading-none text-gray-600 mb-3">
                    Make
                </p>
                <p className="text-6xl font-headline font-semibold leading-none text-gray-600 mb-3">
                    Impact
                </p>
                <p className="text-2xl font-headline font-normal leading-relaxed text-gray-400">
                    Once a passion, now a profession.
                </p>
            </div>
        </div>
        <Particles
            width="100%"
            height={800}
            className="w-full h-full flex absolute top-0 z-10"
            params={config}
        />
    </section>
)

export default Hero
