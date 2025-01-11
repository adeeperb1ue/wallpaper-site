import {
  Filter,
  isColorTag,
  isStyleTag,
  isThemeTag,
  ModeTag,
} from "../../image-manager/types";
import { DropDownButton } from "../drop-down-button/drop-down-button";

import {
  ColorToggleButton,
  ModeToggleButton,
  TextToggleButton,
} from "../toggle-button/toggle-button";
import "./filter-bar.css";

export interface FilterBarProps {
  filters: Filter[];
  onChange: (filters: Filter[]) => void;
}

function FilterBar({ filters, onChange }: FilterBarProps) {

  const handleClick = (changedFilter: Filter) => {
    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === changedFilter.tag) {
        filter.active = !changedFilter.active;
        break;
      }
    }

    onChange(copy);
  };

  const handleStyleClick = (changedFilter: Filter) => {
    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === changedFilter.tag) {
        filter.active = !changedFilter.active;
      }
      else {
        filter.active = false;
      }
    }

    onChange(copy);
  }

  const handleThemeClick = (changedFilter: Filter) => {
    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === changedFilter.tag) {
        filter.active = !changedFilter.active;
        break;
      }
    }

    onChange(copy);
  }


  const handleModeClick = (mode: ModeTag | null) => {

    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === "Light") {
        filter.active = mode === "Light";
      }
      else if (filter.tag === "Dark") {
        filter.active = mode === "Dark";
      }
    }

    onChange(copy);
  }

  let mode: ModeTag | null = null;
  for (const filter of filters) {
    if (filter.tag === "Light" && filter.active) {
      mode = filter.tag;
      break;
    }
    else if (filter.tag === "Dark" && filter.active) {
      mode = filter.tag;
      break;
    }
  }

  return (
    <div className={"filterBar "}>
      <div className="containerGrid" style={{ display: "flex", justifyContent: "center"}}>
        <div className="filtersWrapper gloss">
          <ModeToggleButton mode={mode} onClick={handleModeClick} />
          <DropDownButton
            values={filters.filter((filter) => {
              return isStyleTag(filter.tag)
            })}
            text={"Style"}
            onChange={handleStyleClick}
          />
          <DropDownButton
            values={filters.filter((filter) => {
              return isThemeTag(filter.tag)
            })}
            text={"Themes"}
            onChange={handleThemeClick}
            multiSelect
          />
          {filters.map((filter) => {
            if (isColorTag(filter.tag)) {
              return (
                <ColorToggleButton
                  key={filter.tag}
                  color={filter.tag}
                  active={filter.active}
                  onClick={() => handleClick(filter)}
                />
              );
            }
            else if (filter.tag === "Dark" || filter.tag === "Light") {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
