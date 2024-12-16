export const Modes = ["Light", "Dark"] as const;
export const Colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
  "White",
  "Black",
];
export const Styles = ["Photo", "3d", "Illustration", "Painting"] as const;
export const Themes = ["Abstract", "Nature", "City", "Space"] as const;
export const AllTags = [...Modes, ...Colors, ...Styles, ...Themes] as const;

export type ModeTag = (typeof Modes)[number];
export type ColorTag = (typeof Colors)[number];
export type StyleTag = (typeof Styles)[number];
export type ThemeTag = (typeof Themes)[number];

export type Tag = ModeTag | ColorTag | StyleTag | ThemeTag;

export interface Wallpaper {
  name: string;
  src: string;
  thumbnail: string;
  tags: (ModeTag | ColorTag | StyleTag | ThemeTag)[];
  date: number;
}

export interface WallpaperAnalytics {
  name: string;
  likes: number;
  downloads: number;
  views: number;
}

export interface Filter {
  tag: Tag;
  active: boolean;
  passes: (arg0: Wallpaper) => boolean;
}

export const colorTagToHex: {[key: ColorTag]: string;} = {
    "Red": "#ffa8a8",
    "Blue": "#92cef7",
    "Green": "#98dd98",
    "Orange": "#ecb983",
    "Yellow": "#e8e5a4",
    "Pink": "#f8a0db",
    "Purple": "#beb8fa",
    "White": "#e2e7ee",
    "Black": "#181818"
}

export function isColorTag(tag: Tag): tag is ColorTag {
  return Colors.indexOf(tag) !== -1;
}
