import Bug from "@/models/Bug";

const bugs: { [priority: string]: Bug[] } = {
    High: [
        {
            desc: "Headbutt encounters are missing",
            group: "HeartGold/SoulSilver",
            link: "https://github.com/czhangy/nuzlocke-db/issues/25",
        },
    ],
    Low: [
        {
            desc: "Accordion arrow icon is loading too slow",
            group: "General",
        },
        {
            desc: "SegmentNav exposes itself by overlapping with the location name in SegmentPage",
            group: "General",
        },
    ],
};

export default bugs;
