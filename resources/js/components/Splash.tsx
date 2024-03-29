import {FunctionComponent, h, Fragment} from "preact";
import {useEffect} from "preact/hooks";
import {tsParticles} from "tsparticles";
import Wave from "react-wavify";

interface SplashProps {
    full?: boolean,
    title?: string
}

const Splash: FunctionComponent<SplashProps> = (props) => {

    useEffect(() => {
        tsParticles.load("particles", {
            background: {
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            },
            "fpsLimit": 60,
            "interactivity": {
                "detectsOn": "window",
                "events": {
                    // "onClick": {
                    //     "enable": true,
                    //     "mode": "push"
                    // },
                    "onHover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "repulse": {
                        distance: 125
                    }
                }
            },
            "particles": {
                "color": {
                    "value": "#fff",
                },
                "links": {
                    "color": {
                        "value": "#ffffff"
                    },
                    "enable": true,
                    "opacity": 0.4
                },
                "move": {
                    "attract": {
                        "rotate": {
                            "x": 600,
                            "y": 1200
                        }
                    },
                    "enable": true,
                    "outModes": "out",
                    "speed": 1.5
                },
                "number": {
                    "density": {
                        "enable": true
                    },
                    "value": 60
                },
                "opacity": {
                    "value": 0.5,
                    "animation": {
                        "minimumValue": 0.1,
                        "speed": 3
                    }
                },
                "size": {
                    "random": true,
                    "animation": {
                        "minimumValue": 0.25,
                        "speed": 25
                    }
                }
            }
        });
    })

    return (
        <div class='parallax overflow-y-auto h-screen'>
            <div id="particles"/>

            <div>
                <div class={'bg-transparent ' + (props.full === false ? '' : 'h-screen')} style={props.full === false ? "height: 50vh" : ""}>
                    <div class='h-full flex justify-center'>
                        <div class='flex flex-col self-center'>
                            {
                                props.full === false ?
                                    <>
                                        <h1 class='inline-block text-6xl text-white font-inter text-center font-black mt-10'>Amnesia Network</h1>
                                        <h2 class='inline-block text-4xl text-gray-200 font-inter italic text-center font-bold'>{props.title}</h2>
                                    </>
                                    :
                                    <>
                                        <img src='/assets/decorated.png' class="h-64 w-64 pb-4 flex self-center"/>
                                        <h1 class='inline-block text-6xl text-white font-inter text-center font-black'>Amnesia Network</h1>
                                        <h2 class='inline-block text-4xl text-gray-400 font-inter italic text-center font-medium'>Play, Forget, Replay</h2>
                                    </>

                            }
                        </div>
                    </div>
                </div>

                <div className='wave text-gray-100 dark:text-gray-900 transition-colors'>
                    {/* @ts-ignore Doesn't have valid typings */}
                    <Wave fill='currentColor'
                          options={{
                              height: 40,
                              amplitude: 45,
                              speed: 0.2,
                              points: 3
                          }}
                    />
                </div>

                <div class="bg-gray-100 dark:bg-gray-900 -mt-2 pt-28 transition-colors">
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default Splash;
