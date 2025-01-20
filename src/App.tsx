import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { downloadViewsHeartsDownloads, handleAnonymousLogin, Stats } from "./firebase";
import { isMobile } from 'react-device-detect';

import "./App.css";

import AllWallpapers from "./image-manager/image-manager";
import GlowImage from "./components/glow-image/glow-image";
import Projector from "./components/projector/projector";
import { Wallpaper, Filter, Order } from "./image-manager/types";
import ImageManager from "./image-manager/image-manager";
import AllFilters from "./image-manager/filters";
import FilterBar from "./components/filter-bar/filter-bar";
import Hero from "./components/hero/hero";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const appRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<Filter[]>(AllFilters);
  const [sortOrder, setSortOrder] = useState<Order>(Order.RECENT)
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>(AllWallpapers);
  const [projectedImage, setProjectedImage] = useState<Wallpaper | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);

  const checkUrl = () => {
    const path = location.pathname;
    const foundWallpaper = wallpapers.find(
      (wallpaper) => `/${wallpaper.name}` === path
    );
    if (foundWallpaper) setProjectedImage(foundWallpaper);
    else setProjectedImage(null);
  };

  const passesAllFilters = (wallpaper: Wallpaper): Boolean => {
    for (const filter of filters) {
      if (!filter.active) continue;
      if (!filter.passes(wallpaper)) return false;
    }

    return true;
  }

  const sortWallpapers = (a: Wallpaper, b: Wallpaper): number => {
    if (stats && sortOrder === Order.DOWNLOADS) {
      const aStat = stats.downloads[a.name] || null;
      const bStat = stats.downloads[b.name] || null;

      if (aStat !== null && bStat === null) return -1;
      else if (aStat == null && bStat !== null) return 1;
      else if (aStat === null && bStat === null) return b.date - a.date;
      else if (aStat !== null && bStat !== null) {
        return bStat - aStat;
      }
    }
    else if (stats && sortOrder === Order.HEARTS) {
      const aStat = stats.hearts[a.name] || null;
      const bStat = stats.hearts[b.name] || null;

      if (aStat !== null && bStat === null) return -1;
      else if (aStat == null && bStat !== null) return 1;
      else if (aStat === null && bStat === null) return b.date - a.date;
      else if (aStat !== null && bStat !== null) {
        return bStat - aStat;
      }
    }
    else if (stats && sortOrder === Order.VIEWS) {
      const aStat = stats.views[a.name] || null;
      const bStat = stats.views[b.name] || null;

      if (aStat !== null && bStat === null) return -1;
      else if (aStat == null && bStat !== null) return 1;
      else if (aStat === null && bStat === null) return b.date - a.date;
      else if (aStat !== null && bStat !== null) {
        return bStat - aStat;
      }

    }

    return b.date - a.date;

  }

  //Login to firebase
  useEffect(() => {
    handleAnonymousLogin().then(userCredential => {
      console.log(userCredential);
      downloadViewsHeartsDownloads().then(stats => {
        console.log(stats);
        setStats(stats);
      })
    })
  }, [])

  // Manage url changes
  useEffect(() => {
    console.log("URL changed:", location.pathname);
    checkUrl();
  }, [location]);

  //Handle filter changes
  useEffect(() => {
    const newWallpapers = AllWallpapers.filter((wallpaper) => {
      return passesAllFilters(wallpaper);
    }).sort(sortWallpapers);
    setWallpapers(newWallpapers);
  }, [filters, sortOrder, stats]);

  const handleImageClick = (wallpaper: Wallpaper) => {
    navigate(`/${wallpaper.name}`);
  };

  const handleProjectorClick = () => {
    navigate("/");
  };

  return (
    <div className={"App" + (isMobile ? " mobile" : "")} ref={appRef}>
      <Projector image={projectedImage} onClick={handleProjectorClick} />

      <Hero />

      <FilterBar
        filters={filters}
        sortOrder={sortOrder}
        onFiltersChange={(newFilters) => setFilters(newFilters)}
        onSortOrderChange={(newSortOrder => setSortOrder(newSortOrder))}
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
