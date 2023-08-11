import Bug from "@/models/Bug";

const bugs: { [priority: string]: Bug[] } = {
    High: [
        {
            desc: "Encounter data is slightly off (compared to Serebii)",
            group: "General",
        },
        {
            desc: "Headbutt encounters are missing",
            group: "HeartGold/SoulSilver",
            link: "https://github.com/czhangy/nuzlocke-db/issues/25",
        },
    ],
    Medium: [
        {
            desc: "Loading occasionally crashes between locations",
            group: "General",
        },
        {
            desc: "Pokemon with regional forms show up in all games' evolutions, even when not accessible",
            group: "General",
        },
        {
            desc: "If a move has been updated, only the most recent set of info is displayed, regardless of what gen the run is",
            group: "General",
        },
    ],
    Low: [
        {
            desc: "Accordion arrow icon is loading too slow",
            group: "General",
        },
        {
            desc: "Navigation on segment pages exposes itself by overlapping segment names",
            group: "General",
        },
        {
            desc: "Sprites with negative margins overlap surrounding content",
            group: "General",
        },
        {
            desc: "Damaging moves with no BP (ex: Grass Knot) don't display a STAB bonus",
            group: "General",
        },
        {
            desc: "Tooltips don't always play well on mobile",
            group: "General",
        },
    ],
};

export default bugs;
