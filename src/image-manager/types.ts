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
] as const;
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
  icon?: string;
}

export enum Order {
  RECENT = "Recent",
  VIEWS = "Views",
  HEARTS = "Hearts",
  DOWNLOADS = "Downloads"
}

export const allOrders: Order[] = [Order.RECENT, Order.VIEWS, Order.HEARTS, Order.DOWNLOADS];

export const tagToIcon: { [key: string]: string } = {
  "Photo": "photo",
  "3d": "deployed_code",
  "Illustration": "polyline",
  "Painting": "brush",
  "Abstract": "switch_access",
  "Nature": "eco",
  "City": "location_city",
  "Space": "planet"
}

export const orderToIcon: { [key: string]: string } = {
  "Recent": "schedule",
  'Views': "visibility",
  "Hearts": "favorite",
  "Downloads": "download"
}

export const colorTagToHex: { [key: string]: string; } = {
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
  for (const color of Colors) {
    if (tag === color) return true;
  }
  return false;
}

export function isStyleTag(tag: Tag): tag is StyleTag {
  for (const style of Styles) {
    if (tag === style) return true;
  }
  return false;
}

export function isThemeTag(tag: Tag): tag is ThemeTag {
  for (const theme of Themes) {
    if (tag === theme) return true;
  }
  return false;
} 