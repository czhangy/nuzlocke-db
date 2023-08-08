import PokemonName from "@/models/PokemonName";
import Segment from "@/models/Segment";

export default interface GameGroup {
    generation: string;
    versionGroup: string;
    pokedex: PokemonName[];
    splits: { [split: string]: { [segmentSlug: string]: Segment } };
    starterSlugs: string[];
    startingTownSlug: string;
    invalidConditions: string[];
}
