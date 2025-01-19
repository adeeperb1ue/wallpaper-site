import { Colors, colorTagToHex, ModeTag } from "../../image-manager/types";
import "./toggle-button.css";


export interface IconButtonProps {
    icon: string;
    active?: boolean;
    className?: string;
    outlined?: boolean;
    onClick: () => void;
  }

export interface TextToggleButtonProps {
  text: string;
  active: boolean;
  onClick: (active: boolean) => void;
}

export interface ColorToggleButtonProps {
  color: (typeof Colors)[number];
  active: boolean;
  onClick: (active: boolean) => void;
}

export interface ModeToggleButtonProps {
  mode: ModeTag | null;
  onClick: (mode: ModeTag | null) => void;
}

export function TextToggleButton({
  text,
  active,
  onClick,
}: TextToggleButtonProps) {
  return (
    <button
      className={"toggleButton gloss" + (active ? " active" : "")}
      onClick={() => onClick(true)}
    >
      <div className="state"></div>
      <span className="text">{text}</span>
    </button>
  );
}

export function IconButton({
    icon,
    className,
    active,
    outlined = false,
    onClick,
  }: IconButtonProps) {
    return (
      <button
        className={"toggleButton gloss icon" + (className ? ` ${className}` : "") + (active ? " active" : "") + (outlined ? " outlined" : "")}
        onClick={onClick}
      >
        <div className="state"></div>
        <span className="material-symbols-outlined">{icon}</span>
      </button>
    );
  }

export function ColorToggleButton({
  color,
  active,
  onClick,
}: ColorToggleButtonProps) {
  const hex = colorTagToHex[color] || "#ff0000";
  const style = { "--color": hex } as React.CSSProperties;
  return (
    <button
      className={"toggleButton gloss" + (active ? " active" : "")}
      style={style}
      onClick={() => onClick(true)}
    >
      <div className="state"></div>
      <div className={`dot ${color}`}></div>
    </button>
  );
}

export function ModeToggleButton({ mode, onClick }: ModeToggleButtonProps) {
  return (
    <div className="toggleWrapper">
      <button
        className={"toggleButton gloss icon" + (mode === "Light" ? " active" : "")}
        onClick={() => {
          onClick(mode === "Light" ? null : "Light");
        }}
      >
        <div className="state"></div>
        <span className="material-symbols-outlined">light_mode</span>
      </button>
      <button
        className={"toggleButton gloss icon" + (mode === "Dark" ? " active" : "")}
        onClick={() => {
          onClick(mode === "Dark" ? null : "Dark");
        }}
      >
        <div className="state"></div>
        <span className="material-symbols-outlined">dark_mode</span>
      </button>
    </div>
  );
}
