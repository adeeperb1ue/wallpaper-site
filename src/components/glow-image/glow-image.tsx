import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { Wallpaper } from '../../image-manager/types';
import './glow-image.css';


export interface GlowImageProps{
    image: Wallpaper;
    scrollRef: React.RefObject<HTMLDivElement>,
    onClick: (wallpaper: Wallpaper) => void;
}


function GlowImage(props: GlowImageProps) {

    const { ref, inView } = useInView({
        // root: props.scrollRef.current,
        // rootMargin: "64px 0px",
        triggerOnce: true,
      });

    const [status, setStatus] = useState('loading')
    const style = { "--image": `url(${props.image.thumbnail})`} as React.CSSProperties;

  return (
      <div className={"imageWrapper " + (status === "loading" ? "loading " : "loaded ") + inView} ref={ref} style={status === "loaded" ? style : {}} onClick={() => props.onClick(props.image)}>
         <div className='imageOverflowWrapper'>
            { inView && (
            <img
                src={props.image.thumbnail}
                alt={props.image.name}
                className={"glowImage" + (status === "loading" ? " off" : "")}
                onLoad={() => setStatus('loaded')}
                onError={() => setStatus('failed')}
            />
            )}
         </div>
      </div>
  );
}

export default GlowImage;


