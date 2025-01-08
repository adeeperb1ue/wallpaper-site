import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "./firebase";
import { isMobile } from 'react-device-detect';
import "./App.css";

import GlowImage from "./components/glow-image/glow-image";
import Projector from "./components/projector/projector";
import { Wallpaper, Filter } from "./image-manager/types";
import ImageManager from "./image-manager/image-manager";
import AllFilters from "./image-manager/filters";
import FilterBar from "./components/filter-bar/filter-bar";

const imageManager = new ImageManager(AllFilters);
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const appRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<Filter[]>(AllFilters);
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>(
    imageManager.getImages()
  );
  const [projectedImage, setProjectedImage] = useState<Wallpaper | null>(null);

  const checkUrl = () => {
    const path = location.pathname;
    const foundWallpaper = wallpapers.find(
      (wallpaper) => `/${wallpaper.name}` === path
    );
    if (foundWallpaper) setProjectedImage(foundWallpaper);
    else setProjectedImage(null);
  };

  useEffect(() => {
    // This code will run whenever the URL changes
    console.log("URL changed:", location.pathname);
    checkUrl();
  }, [location]);

  useEffect(() => {
    imageManager.filters = filters;
    setWallpapers(imageManager.filter());
  }, [filters]);

  const handleImageClick = (wallpaper: Wallpaper) => {
    navigate(`/${wallpaper.name}`);
  };

  const handleProjectorClick = () => {
    navigate("/");
  };

  return (
    <div className={"App" + (isMobile ? " mobile" : "")} ref={appRef}>
      <Projector image={projectedImage} onClick={handleProjectorClick} />
      <div className="hero">
        <div className="container">
          <h1>DISTANT VOID</h1>
        </div>
        <div
          className="heroImage"
          style={{ backgroundImage: `url("/images/grid.webp")` }}
        ></div>
        <img className="logo" src="/images/logo.svg" />
      </div>

      <FilterBar
        filters={filters}
        onChange={(newFilters) => setFilters(newFilters)}
      />

      <div className="images">
        {wallpapers.length === 0 && (
          <div className="zero">No matching images</div>
        )}
        {wallpapers.length !== 0 && (
          <div className="containerGrid">
            {wallpapers.map((wallpaper) => (
              <GlowImage
                key={wallpaper.name}
                image={wallpaper}
                scrollRef={appRef}
                onClick={handleImageClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
