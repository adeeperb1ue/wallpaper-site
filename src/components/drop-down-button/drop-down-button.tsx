import { useEffect, useState } from "react";
import { TextToggleButton } from "../toggle-button/toggle-button";

import "./drop-down-button.css"
import useClickOutside from "../../hooks/use-click-outside";
import { Filter } from "../../image-manager/types";

export interface DropDownButtonProps {
    values: Filter[];
    text: string;
    onChange: (value: Filter) => void;
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
        textToUse = active[0].tag;
    }

    return (
        <div className="dropDownWrapper" ref={ref}>
            <TextToggleButton text={textToUse} active={values.filter(value => value.active).length > 0} onClick={() => {
                setOpen(!open)
            }} />
            {open && <div className="menu">

                {values.map((filter: Filter) => (
                    <div className={"menuItem" + (filter.active ? " active" : "")} onClick={() => {
                        if (!multiSelect) setOpen(false);
                        onChange(filter);
                    }}>
                        <span className="material-symbols-outlined">{filter.active ? "check" : filter.icon}</span>
                        <div className="menuText">{filter.tag}</div>
                    </div>
                ))}

            </div>}
        </div>
    )
}