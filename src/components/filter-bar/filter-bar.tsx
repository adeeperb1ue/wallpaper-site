import {
  allOrders,
  Filter,
  isColorTag,
  isStyleTag,
  isThemeTag,
  ModeTag,
  Order,
  orderToIcon,
} from "../../image-manager/types";
import { DropDownButton, DropDownButtonValue } from "../drop-down-button/drop-down-button";

import {
  ColorToggleButton,
  ModeToggleButton,
  TextToggleButton,
} from "../toggle-button/toggle-button";
import "./filter-bar.css";

export interface FilterBarProps {
  filters: Filter[];
  sortOrder: Order;
  onFiltersChange: (filters: Filter[]) => void;
  onSortOrderChange: (sortOrder: Order) => void;
}

function FilterBar({ filters, sortOrder, onFiltersChange, onSortOrderChange }: FilterBarProps) {

  const handleSortClick = (changedValue: DropDownButtonValue) => {
    if (changedValue.value !== sortOrder) {
      onSortOrderChange(changedValue.value as Order);
    }
  }

  const handleColorClick = (changedFilter: Filter) => {
    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === changedFilter.tag) {
        filter.active = !changedFilter.active;
        break;
      }
    }

    onFiltersChange(copy);
  };


  const handleStyleClick = (changedValue: DropDownButtonValue) => {
    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === changedValue.value) {
        filter.active = !changedValue.active;
      }
      else {
        filter.active = false;
      }
    }

    onFiltersChange(copy);
  }

  const handleThemeClick = (changedValue: DropDownButtonValue) => {
    const copy = [...filters];
    for (const filter of filters) {
      if (filter.tag === changedValue.value) {
        filter.active = !changedValue.active;
        break;
      }
    }

    onFiltersChange(copy);
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

    onFiltersChange(copy);
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

  const styleOptions: DropDownButtonValue[] = [];
  for (const filter of filters) {
    if (isStyleTag(filter.tag)) {
      styleOptions.push({
        value: filter.tag,
        text: filter.tag,
        active: filter.active,
        icon: filter.icon || "3d",
      })
    }
  }

  const themeOptions: DropDownButtonValue[] = [];
  for (const filter of filters) {
    if (isThemeTag(filter.tag)) {
      themeOptions.push({
        value: filter.tag,
        text: filter.tag,
        active: filter.active,
        icon: filter.icon || "deployed_cube"
      })
    }
  }

  const sortOrderOptions: DropDownButtonValue[] = []
  for (const order of allOrders) {
    sortOrderOptions.push({
      value: order,
      text: order,
      active: order === sortOrder,
      icon: orderToIcon[order] || "deployed_cube"
    })
  }

  return (
    <div className={"filterBar "}>
      <div className="containerGrid" style={{ display: "flex", justifyContent: "center" }}>
        <div className="filtersWrapper gloss">
          <ModeToggleButton mode={mode} onClick={handleModeClick} />
          <DropDownButton
            values={styleOptions}
            text={"Style"}
            showIcon
            onChange={handleStyleClick}
          />
          <DropDownButton
            values={themeOptions}
            text={"Themes"}
            onChange={handleThemeClick}
            multiSelect
          />
          <DropDownButton
            values={sortOrderOptions}
            text={"Sort By"}
            showIcon
            onChange={handleSortClick}
          />
          {filters.map((filter) => {
            if (isColorTag(filter.tag)) {
              return (
                <ColorToggleButton
                  key={filter.tag}
                  color={filter.tag}
                  active={filter.active}
                  onClick={() => handleColorClick(filter)}
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
