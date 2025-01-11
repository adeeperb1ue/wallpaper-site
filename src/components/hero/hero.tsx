import Lottie from 'react-lottie';
import { BMEnterFrameEvent } from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

import "./hero.css";
import * as animationData from './logo.json'

export default function Hero() {
    const lottieRef = useRef(null);
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        if (lottieRef.current) {
            const animationItem = (lottieRef.current as any).anim;

            const handleComplete = (e: BMEnterFrameEvent) => {
                if (e.currentTime > 40 && !animationDone) {
                    setAnimationDone(true);
                }
            };

            animationItem.addEventListener('enterFrame', handleComplete);
        }
    }, [])

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            filterSize: {
                width: '200%',
                height: '200%',
                x: '-50%',
                y: '-50%',
            }
        }
    };


    return (<div className="hero">
        <div className="container">
            <div className={"headerWrapper" + (animationDone ? " visible" : "")}>
                <h1 className='large'>DISTANT VOID</h1>
                <h1 className='small'>DISTANT<br/>VOID</h1>
            </div>
        </div>
        <div
            className="heroImage"
            style={{ backgroundImage: `url("/images/flux.webp")` }}
        ></div>
        <div className="lottie">
            <Lottie options={defaultOptions}
                ref={lottieRef}
            />
        </div>
    </div>)
}