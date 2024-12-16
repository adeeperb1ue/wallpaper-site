import nova from "./images/nova.png";
import fluid from "./images/fluid.png";
import leaves from "./images/leaves.png";
import gadget from "./images/gadget.png";
import dune from "./images/dune.png";
import holographicLeaves from "./images/holographic-leaves.png";
import bulb from "./images/bulb.png";
import dataStream from "./images/data-stream.png";
import ringLight from "./images/ring-light.png";
import streetLight from "./images/street-light.png";
import superMassive from "./images/super-massive.png";
import skyline from "./images/skyline.png";
import streaks from "./images/streaks.png";
import gizmo from "./images/gizmo.png";
import contact from "./images/contact.png";
import alternate from "./images/alternate.png";
import scenic from "./images/scenic.png";
import lightStop from "./images/light-stop.png";
import dusk from "./images/dusk.png";
import dataField from "./images/data-field.png";
import waveDash from "./images/wave-dash.png";
import vibeFrog from "./images/vibe-frog.png";
import flowState from "./images/flow-state.png";
import o from "./images/O.png";
import junk from "./images/junk.png";
import greenAndGold from "./images/green-and-gold.png";
import droplets from "./images/droplets.png";
import heavenly from "./images/heavenly.png";
import frontier from "./images/frontier.png";
import gridLock from "./images/grid-lock.png";
import towers from "./images/towers.png";
import clean from "./images/clean.png";
import stream from "./images/stream.png";
import circuit from "./images/circuit.png";
import chromatic from "./images/chromatic.png";
import jelly from "./images/jelly.png";
import layered from "./images/layered.png";
import greenHouse from "./images/green-house.png";
import focus from "./images/focus.png";
import scales from "./images/scales.png";
import surface from "./images/surface.png";
import wave from "./images/wave.png";
import amplifier from "./images/amplifier.png";
import incline from "./images/incline.png";
import panel from "./images/panel.png";
import motionBlur from "./images/motion-blur.png";
import lotus from "./images/lotus.png";
import orbit from "./images/orbit.png";
import plume from "./images/plume.png";
import flow from "./images/flow.png";
import splash from "./images/splash.png";
import axe from "./images/axe.png";
import swirl from "./images/swirl.png"
import leaf from "./images/leaf.png"

import novaThumbnail from "./thumbnails/nova.png";
import fluidThumbnail from "./thumbnails/fluid.png";
import leavesThumbnail from "./thumbnails/leaves.png";
import gadgetThumbnail from "./thumbnails/gadget.png";
import duneThumbnail from "./thumbnails/dune.png";
import holographicLeavesThumbnail from "./thumbnails/holographic-leaves.png";
import bulbThumbnail from "./thumbnails/bulb.png";
import dataStreamThumbnail from "./thumbnails/data-stream.png";
import ringLightThumbnail from "./thumbnails/ring-light.png";
import streetLightThumbnail from "./thumbnails/street-light.png";
import superMassiveThumbnail from "./thumbnails/super-massive.png";
import skylineThumbnail from "./thumbnails/skyline.png";
import streaksThumbnail from "./thumbnails/streaks.png";
import gizmoThumbnail from "./thumbnails/gizmo.png";
import contactThumbnail from "./thumbnails/contact.png";
import alternateThumbnail from "./thumbnails/alternate.png";
import scenicThumbnail from "./thumbnails/scenic.png";
import lightStopThumbnail from "./thumbnails/light-stop.png";
import duskThumbnail from "./thumbnails/dusk.png";
import dataFieldThumbnail from "./thumbnails/data-field.png";
import waveDashThumbnail from "./thumbnails/wave-dash.png";
import vibeFrogThumbnail from "./thumbnails/vibe-frog.png";
import flowStateThumbnail from "./thumbnails/flow-state.png";
import oThumbnail from "./thumbnails/O.png";
import junkThumbnail from "./thumbnails/junk.png";
import greenAndGoldThumbnail from "./thumbnails/green-and-gold.png";
import dropletsThumbnail from "./thumbnails/droplets.png";
import heavenlyThumbnail from "./thumbnails/heavenly.png";
import frontierThumbnail from "./thumbnails/frontier.png";
import gridLockThumbnail from "./thumbnails/grid-lock.png";
import towersThumbnail from "./thumbnails/towers.png";
import cleanThumbnail from "./thumbnails/clean.png";
import streamThumbnail from "./thumbnails/stream.png";
import circuitThumbnail from "./thumbnails/circuit.png";
import chromaticThumbnail from "./thumbnails/chromatic.png";
import jellyThumbnail from "./thumbnails/jelly.png";
import layeredThumbnail from "./thumbnails/layered.png";
import greenHouseThumbnail from "./thumbnails/green-house.png";
import focusThumbnail from "./thumbnails/focus.png";
import scalesThumbnail from "./thumbnails/scales.png";
import surfaceThumbnail from "./thumbnails/surface.png";
import waveThumnail from "./thumbnails/wave.png";
import amplifierThumbnail from "./thumbnails/amplifier.png";
import inclineThumbnail from "./thumbnails/incline.png";
import panelThumbnail from "./thumbnails/panel.png";
import motionBlurThumbnail from "./thumbnails/motion-blur.png";
import lotusThumbnail from "./thumbnails/lotus.png";
import orbiThumbnailt from "./thumbnails/orbit.png";
import plumeThumbnail from "./thumbnails/plume.png";
import flowThumbnail from "./thumbnails/flow.png";
import splashThumbnail from "./thumbnails/splash.png";
import axeThumbnail from "./thumbnails/axe.png";
import swirlThumbnail from "./thumbnails/swirl.png";
import leafThumbnail from "./thumbnails/leaf.png";

import { Wallpaper, Filter } from "./types";

const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
console.log("dev mode?", devMode);

const url =
  "https://firebasestorage.googleapis.com/v0/b/reflective-void.firebasestorage.app/o";

const wallpapers: Wallpaper[] = [
  {
    name: "skyline",
    src: skyline,
    thumbnail: skylineThumbnail,
    tags: ["Dark", "Illustration", "Abstract", "City"],
    date: 1727498522347,
  },
  {
    name: "dune",
    src: dune,
    thumbnail: duneThumbnail,
    tags: ["Dark", "Abstract", "Purple"],
    date: 1727498598331,
  },
  {
    name: "leaves",
    src: leaves,
    thumbnail: leavesThumbnail,
    tags: ["Dark", "Illustration", "Green"],
    date: 1727498620244,
  },
  {
    name: "data-stream",
    src: dataStream,
    thumbnail: dataStreamThumbnail,
    tags: ["Dark", "Abstract", "3d", "Blue", "Purple"],
    date: 1727498657431,
  },
  {
    name: "gadget",
    src: gadget,
    thumbnail: gadgetThumbnail,
    tags: ["Dark", "Abstract", "3d", "Black", "Green"],
    date: 1727498672850,
  },
  {
    name: "fluid",
    src: fluid,
    thumbnail: fluidThumbnail,
    tags: ["Light", "Abstract", "3d"],
    date: 1727498701472,
  },
  {
    name: "holographic-leaves",
    src: holographicLeaves,
    thumbnail: holographicLeavesThumbnail,
    tags: ["Dark", "3d", "Nature", "Abstract", "Purple"],
    date: 1727498723693,
  },
  {
    name: "street-light",
    src: streetLight,
    thumbnail: streetLightThumbnail,
    tags: ["Light", "Painting", "Blue", "City"],
    date: 1727498842650,
  },
  {
    name: "nova",
    src: nova,
    thumbnail: novaThumbnail,
    tags: ["Dark", "Space", "Painting", "Blue", "Orange"],
    date: 1727498975776,
  },
  {
    name: "super-massive",
    src: superMassive,
    thumbnail: superMassiveThumbnail,
    tags: ["Light", "Painting", "Space", "Orange", "White"],
    date: 1727499015746,
  },
  {
    name: "ring-light",
    src: ringLight,
    thumbnail: ringLightThumbnail,
    tags: ["Dark", "Space", "Photo", "Abstract", "Black", "White"],
    date: 1727553506473,
  },
  {
    name: "bulb",
    src: bulb,
    thumbnail: bulbThumbnail,
    tags: ["Illustration", "Space", "Blue", "Dark"],
    date: 1727553568375,
  },
  {
    name: "streaks",
    src: streaks,
    thumbnail: streaksThumbnail,
    tags: ["Dark", "Abstract", "Illustration", "Blue", "Purple"],
    date: 1727553610939,
  },
  {
    name: "gizmo",
    src: gizmo,
    thumbnail: gizmoThumbnail,
    tags: ["Abstract", "Light", "3d", "White"],
    date: 1727556092731,
  },
  {
    name: "contact",
    src: contact,
    thumbnail: contactThumbnail,
    tags: ["Painting", "Dark", "Blue", "Space"],
    date: 1727583759268,
  },
  {
    name: "alternate",
    src: alternate,
    thumbnail: alternateThumbnail,
    tags: ["Dark", "Red", "Blue", "Photo"],
    date: 1727648000501,
  },
  {
    name: "scenic",
    src: scenic,
    thumbnail: scenicThumbnail,
    tags: ["Dark", "Photo", "Blue"],
    date: 1727650823118,
  },
  {
    name: "light-stop",
    src: lightStop,
    thumbnail: lightStopThumbnail,
    tags: ["Dark", "Photo", "Red", "City"],
    date: 1727671600361,
  },
  {
    name: "dusk",
    src: dusk,
    thumbnail: duskThumbnail,
    tags: ["Dark", "Nature", "Photo", "Orange"],
    date: 1727749101787,
  },
  {
    name: "data-field",
    src: dataField,
    thumbnail: dataFieldThumbnail,
    tags: ["Dark", "Abstract", "Blue", "Purple"],
    date: 1727758301896,
  },
  {
    name: "wave-dash",
    src: waveDash,
    thumbnail: waveDashThumbnail,
    tags: ["Abstract", "Dark", "Blue"],
    date: 1727760663668,
  },
  {
    name: "flow-state",
    src: flowState,
    thumbnail: flowStateThumbnail,
    tags: ["Abstract", "3d", "Blue", "Light"],
    date: 1727825692657,
  },
  {
    name: "vibe-frog",
    src: vibeFrog,
    thumbnail: vibeFrogThumbnail,
    tags: ["Nature", "Illustration", "Light", "Blue", "Green"],
    date: 1727825747669,
  },
  {
    name: "O",
    src: o,
    thumbnail: oThumbnail,
    tags: ["Light", "Abstract", "Nature", "Blue", "Orange", "Painting"],
    date: 1728010303879,
  },
  {
    name: "junk",
    src: junk,
    thumbnail: junkThumbnail,
    tags: ["Dark", "Abstract", "3d", "Orange", "Blue"],
    date: 1728010538659,
  },
  {
    name: "green-and-gold",
    src: greenAndGold,
    thumbnail: greenAndGoldThumbnail,
    tags: ["Dark", "Abstract", "Painting", "Green", "Yellow"],
    date: 1728020503643,
  },
  {
    name: "droplets",
    src: droplets,
    thumbnail: dropletsThumbnail,
    tags: ["Dark", "Abstract", "3d", "Blue", "Pink", "Yellow"],
    date: 1728096538145,
  },
  {
    name: "heavenly",
    src: heavenly,
    thumbnail: heavenlyThumbnail,
    tags: ["Light", "Photo", "Pink", "Blue", "City"],
    date: 1728103986293,
  },
  {
    name: "frontier",
    src: frontier,
    thumbnail: frontierThumbnail,
    tags: ["Light", "Photo", "Space", "Yellow"],
    date: 1728112002148,
  },
  {
    name: "grid-lock",
    src: gridLock,
    thumbnail: gridLockThumbnail,
    tags: ["Dark", "Abstract", "Illustration", "Black", "Red", "White"],
    date: 1728159360507,
  },
  {
    name: "towers",
    src: towers,
    thumbnail: towersThumbnail,
    tags: ["Light", "Abstract", "Illustration", "Pink", "Blue", "Orange"],
    date: 1728162978288,
  },
  {
    name: "clean",
    src: clean,
    thumbnail: cleanThumbnail,
    tags: ["Light", "Illustration", "Nature", "Green"],
    date: 1728185193346,
  },
  {
    name: "stream",
    src: stream,
    thumbnail: streamThumbnail,
    tags: ["Dark", "Illustration", "Blue", "Red", "Space"],
    date: 1728246998876,
  },
  {
    name: "circuit",
    src: circuit,
    thumbnail: circuitThumbnail,
    tags: ["Light", "Illustration", "White", "Yellow", "Abstract"],
    date: 1728343628245,
  },
  {
    name: "chromatic",
    src: chromatic,
    thumbnail: chromaticThumbnail,
    tags: ["Dark", "3d", "Black", "Abstract"],
    date: 1728359944472,
  },
  {
    name: "jelly",
    src: jelly,
    thumbnail: jellyThumbnail,
    tags: ["Light", "Pink", "Blue", "Nature"],
    date: 1728442858741,
  },
  {
    name: "layered",
    src: layered,
    thumbnail: layeredThumbnail,
    tags: ["Dark", "Abstract", "Illustration", "Red"],
    date: 1728444767704,
  },
  {
    name: "green-house",
    src: greenHouse,
    thumbnail: greenHouseThumbnail,
    tags: ["Dark", "Photo", "Green", "Orange", "City", "Nature"],
    date: 1728523676434,
  },
  {
    name: "focus",
    src: focus,
    thumbnail: focusThumbnail,
    tags: ["Dark", "Photo", "Abstract", "Purple", "Orange"],
    date: 1728616318010,
  },
  {
    name: "scales",
    src: scales,
    thumbnail: scalesThumbnail,
    tags: ["Light", "3d", "Abstract", "Purple", "Orange"],
    date: 1728706850655,
  },
  {
    name: "surface",
    src: surface,
    thumbnail: surfaceThumbnail,
    tags: ["Dark", "Photo", "Space", "Orange", "Black"],
    date: 1728706859989,
  },
  {
    name: "wave",
    src: wave,
    thumbnail: waveThumnail,
    tags: ["Dark", "Photo", "Nature", "Green", "Red"],
    date: 1729133003398,
  },
  {
    name: "amplifier",
    src: amplifier,
    thumbnail: amplifierThumbnail,
    tags: ["Dark", "Photo", "Nature", "Red"],
    date: 1729223049729,
  },
  {
    name: "incline",
    src: incline,
    thumbnail: inclineThumbnail,
    tags: ["Light", "Illustration", "Nature", "Blue", "Green"],
    date: 1729655025521,
  },
  {
    name: "panel",
    src: panel,
    thumbnail: panelThumbnail,
    tags: ["Dark", "Abstract", "3d", "Blue"],
    date: 1729655030265,
  },
  {
    name: "motion-blur",
    src: motionBlur,
    thumbnail: motionBlurThumbnail,
    tags: ["Dark", "Abstract", "Photo", "Blue", "City"],
    date: 1730499616334,
  },
  {
    name: "lotus",
    src: lotus,
    thumbnail: lotusThumbnail,
    tags: ["Dark", "Abstract", "3d", "Blue", "Nature"],
    date: 1730499655186,
  },
  {
    name: "orbit",
    src: orbit,
    thumbnail: orbiThumbnailt,
    tags: ["Dark", "Abstract", "Photo", "White", "Nature", "Space"],
    date: 1730499689192,
  },
  {
    name: "plume",
    src: plume,
    thumbnail: plumeThumbnail,
    tags: ["Dark", "Abstract", "Illustration", "Orange", "Nature"],
    date: 1730499689892,
  },
  {
    name: "flow",
    src: flow,
    thumbnail: flowThumbnail,
    tags: ["Light", "Abstract", "Illustration", "Orange", "Purple"],
    date: 1733090798363,
  },
  {
    name: "splash",
    src: splash,
    thumbnail: splashThumbnail,
    tags: ["Light", "Abstract", "Illustration", "Orange", "White"],
    date: 1733091937406,
  },
  {
    name: "axe",
    src: axe,
    thumbnail: axeThumbnail,
    tags: ["Dark", "Illustration", "Blue", "Nature"],
    date: 1733809205238,
  },
  {
    name: "swirl",
    src: swirl,
    thumbnail: swirlThumbnail,
    tags: ["Light", "Illustration", "Blue", "Abstract"],
    date: 1734062662559,
  },
  {
    name: "leaf",
    src: leaf,
    thumbnail: leafThumbnail,
    tags: ["Dark", "3d", "Orange", "Abstract", "Red"],
    date: 1734062661559,
  },
];

if (devMode) {
  for (const wallpaper of wallpapers) {
    wallpaper.thumbnail = `https://cdn.jsdelivr.net/gh/adeeperb1ue/wallpaper-site/src/image-manager/thumbnails/${encodeURIComponent(
      wallpaper.name
    )}.png`
    wallpaper.src = `https://cdn.jsdelivr.net/gh/adeeperb1ue/wallpaper-site/src/image-manager/images/${encodeURIComponent(
      wallpaper.name
    )}.png`
  }
}

export default class ImageManager {
  images: Wallpaper[];
  filters: Filter[];

  constructor(filters: Filter[]) {
    this.filters = filters;
    this.images = wallpapers.sort((a, b) => b.date - a.date);
  }

  getImages(): Wallpaper[] {
    return this.filter();
  }

  sort() {}

  filter() {
    return this.images.filter((wallpaper) => this.passesAllFilters(wallpaper));
  }

  private passesAllFilters(wallpaper: Wallpaper): Boolean {
    for (const filter of this.filters) {
      if (!filter.active) continue;
      if (!filter.passes(wallpaper)) return false;
    }

    return true;
  }
}