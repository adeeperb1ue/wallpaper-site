import { AllTags, Filter } from "./types";
import { Wallpaper } from "./types";



const AllFilters: Filter[] = [];

for(const tag of AllTags){
    const filter: Filter = {
        tag: tag,
        active: false,
        passes: (wallpaper: Wallpaper) => {
            return wallpaper.tags.includes(tag)
        }
    }

    AllFilters.push(filter)
}

export default AllFilters;