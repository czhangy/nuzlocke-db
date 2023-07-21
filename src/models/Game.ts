import LocalSegment from "@/models/LocalSegment";

export default interface Game {
    slug: string;
    gameGroup: string;
    segments: LocalSegment[];
    starterSlugs: string[];
    startingTownSlug: string;
    iconURL: string;
}
