import { useState } from "react";
import { TextToggleButton } from "../toggle-button/toggle-button";

import "./drop-down-button.css"
import useClickOutside from "../../hooks/use-click-outside";

export interface DropDownButtonValue {
    value: string,
    text: string,
    active: boolean,
    icon: string,
}

export interface DropDownButtonProps {
    values: DropDownButtonValue[];
    text: string;
    onChange: (value: DropDownButtonValue) => void;
    multiSelect?: boolean
}

export function DropDownButton({ values, text, onChange, multiSelect }: DropDownButtonProps) {
    const [open, setOpen] = useState(false);
    const ref = useClickOutside(() => setOpen(false));

    let textToUse = text;
    const active = values.filter((value) => value.active);
    if (active.length > 1) {
        textToUse = `${active.length} ${text}${text.endsWith("s") ? "" : "s"}`
    }
    else if (active.length === 1) {
        textToUse = active[0].text;
    }

    return (
        <div className="dropDownWrapper" ref={ref}>
            <TextToggleButton text={textToUse} active={values.filter(value => value.active).length > 0} onClick={() => {
                setOpen(!open)
            }} />
            {open && <div className="menu">

                {values.map((value: DropDownButtonValue) => (
                    <div className={"menuItem" + (value.active ? " active" : "")} onClick={() => {
                        if (!multiSelect) setOpen(false);
                        onChange(value);
                    }}>
                        <span className="material-symbols-outlined">{value.active ? "check" : value.icon}</span>
                        <div className="menuText">{value.text}</div>
                    </div>
                ))}

            </div>}
        </div>
    )
}