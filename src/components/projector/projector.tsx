import { useEffect, useRef, useState } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useCookies } from "react-cookie";
import { Wallpaper } from "../../image-manager/types";
import { IconButton } from "../toggle-button/toggle-button";
import "./projector.css";
import imageSize from "image-size";
import { decreaseHeart, increaseHeart, logDownload, logView } from "../../firebase";

export interface ProjectorProps {
  image: Wallpaper | null;
  onClick: () => void;
}

const resizeImage = () => {
  const aspectRatio = 9 / 16;
  const maxWidth = 540;
  const maxHeight = 960;
  let windowWidth = window.innerWidth - 32;
  let windowHeight = window.innerHeight - 180;

  //Special case the mobile version
  if (window.innerWidth < 600) {
    windowWidth = window.innerWidth - 32;
    windowHeight = window.innerHeight - 96;
  }

  // Calculate possible new dimensions based on the aspect ratio
  let newWidth, newHeight;

  if (windowWidth / windowHeight < aspectRatio) {
    ;
    // Width is the limiting factor
    newWidth = windowWidth;
    newHeight = newWidth / aspectRatio;
  } else {
    // Height is the limiting factor
    newHeight = windowHeight;
    newWidth = newHeight * aspectRatio;
  }

  if (newWidth > maxWidth) {
    newWidth = maxWidth;
    newHeight = newWidth / aspectRatio;
  }

  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = newHeight * aspectRatio;
  }

  return {
    width: newWidth,
    height: newHeight,
  };
};

function Projector({ image, onClick }: ProjectorProps) {
  const [cookies, setCookie, removeCookie] = useCookies(['hearted']);
  const [imageDimensions, setImageDimensions] = useState(resizeImage());
  const [status, setStatus] = useState("loading");
  const targetRef = useRef(null);

  useEffect(() => {
    if (image) {
      logView(image.name)
    }
  }, [image]);

  useEffect(() => {
    // Add the resize event listener
    const handleResize = () => {
      setImageDimensions(resizeImage());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (targetRef.current) {
      console.log("locking");
      disableBodyScroll(targetRef.current);
    }
    else {
      console.log("unlocking")
      clearAllBodyScrollLocks();
    }
  }, [image])

  if (!image) return null;

  const download = async () => {
    const blob = await fetch(image.src).then((res) => res.blob());
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = image.name + ".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    logDownload(image.name);
  };

  const heart = () => {
    console.log(cookies);
    const map = cookies["hearted"] || {};

    if (image && image.name in map) {
      delete map[image.name];
      decreaseHeart(image.name);
    }
    else {
      map[image.name] = "1";
      increaseHeart(image.name);
    }

    setCookie("hearted", map);
  }

  const hearted = ("hearted" in cookies) && (image.name in cookies["hearted"]);

  return (
    <div
      className="projectorScrim"
      onScroll={(e) => console.log(e)}
      onClick={onClick}
    >
      <div className="imageCard gloss" onClick={(e) => e.stopPropagation()} ref={targetRef}>
        <div className="header">
          <IconButton
            className="backButton"
            icon={"arrow_back"}
            onClick={onClick}
          />
          <h3>{image.name}</h3>
          <IconButton
            outlined={!hearted}
            className="heartButton"
            icon={"favorite"}
            onClick={heart}
          />
          <IconButton
            className="downloadButton"
            icon={"download"}
            onClick={download}
          />
        </div>
        <div className="projectorImageWrapper gloss" style={imageDimensions}>
          <img
            className={status}
            src={image.src}
            alt={image.name}
            onLoad={() => {
              window.requestAnimationFrame(() => {
                setStatus("loaded");
              });
            }}
            onError={() => setStatus("failed")}
          />
        </div>
      </div>
    </div>
  );
}

export default Projector;
