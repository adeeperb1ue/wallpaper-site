import { AllTags, Filter, tagToIcon } from "./types";
import { Wallpaper } from "./types";

const AllFilters: Filter[] = [];

for(const tag of AllTags){
    const filter: Filter = {
        tag: tag,
        active: false,
        passes: (wallpaper: Wallpaper) => {
            return wallpaper.tags.includes(tag)
        },
        icon: (tag in tagToIcon ? tagToIcon[tag] : undefined),
    }

    AllFilters.push(filter)
}

export default AllFilters;