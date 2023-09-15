import GameData from "@/models/GameData";
import battles from "@/static/battles";
import pokedex from "@/static/pokedex";
import trainers from "@/static/trainers";

const ruby_sapphire: GameData = {
    generation: "generation-iii",
    group: "ruby-sapphire",
    pokedex: pokedex.slice(0, 386),
    characters: [trainers.rs_brendan, trainers.rs_may],
    starters: ["treecko", "torchic", "mudkip"],
    startingTown: "littleroot-town",
    invalidConditions: [],
    splits: [
        {
            name: "Roxanne Split",
            segments: [
                {
                    slug: "littleroot-town",
                    name: "Littleroot Town",
                    type: "location",
                    segment: { battles: [] },
                },
                {
                    slug: "rival-1",
                    name: "Rival 1",
                    type: "battle",
                    conditions: {
                        character: "brendan",
                        starter: "treecko",
                    },
                    segment: {
                        battle: battles.ruby_sapphire.may_treecko_1,
                    },
                },
                {
                    slug: "rival-1",
                    name: "Rival 1",
                    type: "battle",
                    conditions: {
                        character: "brendan",
                        starter: "torchic",
                    },
                    segment: {
                        battle: battles.ruby_sapphire.may_torchic_1,
                    },
                },
                {
                    slug: "rival-1",
                    name: "Rival 1",
                    type: "battle",
                    conditions: {
                        character: "brendan",
                        starter: "mudkip",
                    },
                    segment: {
                        battle: battles.ruby_sapphire.may_mudkip_1,
                    },
                },
                {
                    slug: "rival-1",
                    name: "Rival 1",
                    type: "battle",
                    conditions: {
                        character: "may",
                        starter: "treecko",
                    },
                    segment: {
                        battle: battles.ruby_sapphire.brendan_treecko_1,
                    },
                },
                {
                    slug: "rival-1",
                    name: "Rival 1",
                    type: "battle",
                    conditions: {
                        character: "may",
                        starter: "torchic",
                    },
                    segment: {
                        battle: battles.ruby_sapphire.brendan_torchic_1,
                    },
                },
                {
                    slug: "rival-1",
                    name: "Rival 1",
                    type: "battle",
                    conditions: {
                        character: "may",
                        starter: "mudkip",
                    },
                    segment: {
                        battle: battles.ruby_sapphire.brendan_mudkip_1,
                    },
                },
                {
                    slug: "hoenn-route-101",
                    name: "Route 101",
                    type: "location",
                    segment: { battles: [] },
                },
                {
                    slug: "oldale-town",
                    name: "Oldale Town",
                    type: "location",
                    segment: { battles: [] },
                },
                {
                    slug: "hoenn-route-103",
                    name: "Route 103 (West)",
                    type: "location",
                    segment: { battles: [] },
                },
                {
                    slug: "hoenn-route-102",
                    name: "Route 102",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.youngster_calvin,
                            battles.ruby_sapphire.bug_catcher_rick,
                            battles.ruby_sapphire.youngster_allen,
                            battles.ruby_sapphire.lass_tiana,
                        ],
                    },
                },
                {
                    slug: "petalburg-city",
                    name: "Petalburg City",
                    type: "location",
                    segment: { battles: [] },
                },
                {
                    slug: "hoenn-route-104",
                    name: "Route 104 (South)",
                    type: "location",
                    segment: {
                        battles: [battles.ruby_sapphire.youngster_billy, battles.ruby_sapphire.rich_boy_winston],
                    },
                },
                {
                    slug: "petalburg-woods",
                    name: "Petalburg Woods",
                    type: "location",
                    conditions: { game: "ruby" },
                    segment: {
                        battles: [
                            battles.ruby_sapphire.bug_catcher_lyle,
                            battles.ruby_sapphire.team_magma_m_grunt_1,
                            battles.ruby_sapphire.bug_catcher_james,
                        ],
                    },
                },
                {
                    slug: "petalburg-woods",
                    name: "Petalburg Woods",
                    type: "location",
                    conditions: { game: "sapphire" },
                    segment: {
                        battles: [
                            battles.ruby_sapphire.bug_catcher_lyle,
                            battles.ruby_sapphire.team_aqua_m_grunt_1,
                            battles.ruby_sapphire.bug_catcher_james,
                        ],
                    },
                },
                {
                    slug: "hoenn-route-104",
                    name: "Route 104 (North)",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.lady_cindy,
                            battles.ruby_sapphire.lass_haley,
                            battles.ruby_sapphire.twins_gina_and_mia,
                            battles.ruby_sapphire.fisherman_ivan,
                        ],
                    },
                },
                {
                    slug: "rustboro-city",
                    name: "Rustboro City",
                    type: "location",
                    segment: { battles: [] },
                },
                {
                    slug: "rustboro-gym",
                    name: "Rustboro Gym",
                    type: "location",
                    segment: {
                        battles: [battles.ruby_sapphire.youngster_josh, battles.ruby_sapphire.youngster_tommy],
                        custom: true,
                    },
                },
                {
                    slug: "roxanne",
                    name: "Roxanne",
                    type: "battle",
                    segment: {
                        battle: battles.ruby_sapphire.roxanne,
                        levelCap: true,
                    },
                },
            ],
        },
        {
            name: "Brawly Split",
            segments: [
                {
                    slug: "hoenn-route-116",
                    name: "Route 116",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.youngster_joey,
                            battles.ruby_sapphire.bug_catcher_jose,
                            battles.ruby_sapphire.lass_janice,
                            battles.ruby_sapphire.hiker_clark,
                            battles.ruby_sapphire.school_kid_m_jerry,
                            battles.ruby_sapphire.school_kid_f_karen,
                        ],
                    },
                },
                {
                    slug: "rusturf-tunnel",
                    name: "Rusturf Tunnel (West)",
                    type: "location",
                    conditions: { game: "ruby" },
                    segment: { battles: [battles.ruby_sapphire.team_magma_m_grunt_2] },
                },
                {
                    slug: "rusturf-tunnel",
                    name: "Rusturf Tunnel (West)",
                    type: "location",
                    conditions: { game: "sapphire" },
                    segment: { battles: [battles.ruby_sapphire.team_aqua_m_grunt_2] },
                },
                { slug: "dewford-town", name: "Dewford Town", type: "location", segment: { battles: [] } },
                {
                    slug: "hoenn-route-106",
                    name: "Route 106 (Beach)",
                    type: "location",
                    segment: { battles: [battles.ruby_sapphire.fisherman_ned, battles.ruby_sapphire.fisherman_elliot] },
                },
                { slug: "granite-cave", name: "Granite Cave", type: "location", segment: { battles: [] } },
                { slug: "hoenn-route-107", name: "Route 107 (Beach)", type: "location", segment: { battles: [] } },
                {
                    slug: "dewford-gym",
                    name: "Dewford Gym",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.battle_girl_laura,
                            battles.ruby_sapphire.black_belt_hideki,
                            battles.ruby_sapphire.battle_girl_tessa,
                        ],
                        custom: true,
                    },
                },
                {
                    slug: "brawly",
                    name: "Brawly",
                    type: "battle",
                    segment: { battle: battles.ruby_sapphire.brawly, levelCap: true },
                },
            ],
        },
        {
            name: "Wattson Split",
            segments: [
                {
                    slug: "hoenn-route-109",
                    name: "Route 109 (Beach)",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.sailor_huey,
                            battles.ruby_sapphire.sailor_edmond,
                            battles.ruby_sapphire.tuber_m_ricky,
                            battles.ruby_sapphire.tuber_f_lola,
                            battles.ruby_sapphire.tuber_m_simon,
                            battles.ruby_sapphire.beauty_johanna,
                            battles.ruby_sapphire.sailor_dwayne,
                        ],
                    },
                },
                {
                    slug: "slateport-city",
                    name: "Slateport City",
                    type: "location",
                    conditions: { game: "ruby" },
                    segment: {
                        battles: [
                            battles.ruby_sapphire.team_magma_m_grunt_3,
                            battles.ruby_sapphire.team_magma_m_grunt_4,
                        ],
                    },
                },
                {
                    slug: "slateport-city",
                    name: "Slateport City",
                    type: "location",
                    conditions: { game: "sapphire" },
                    segment: {
                        battles: [battles.ruby_sapphire.team_aqua_m_grunt_3, battles.ruby_sapphire.team_aqua_m_grunt_4],
                    },
                },
                {
                    slug: "hoenn-route-110",
                    name: "Route 110 (South)",
                    type: "location",
                    segment: { battles: [battles.ruby_sapphire.pokefan_f_isabel] },
                },
                {
                    slug: "hoenn-route-103",
                    name: "Route 103 (East)",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.aroma_lady_daisy,
                            battles.ruby_sapphire.twins_amy_and_liv,
                            battles.ruby_sapphire.pokefan_m_miguel,
                            battles.ruby_sapphire.fisherman_andrew,
                        ],
                    },
                },
                {
                    slug: "trick-house-1",
                    name: "Trick House 1",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.lass_sally,
                            battles.ruby_sapphire.lass_robin,
                            battles.ruby_sapphire.youngster_eddie,
                        ],
                        custom: true,
                    },
                },
                {
                    slug: "hoenn-route-110",
                    name: "Route 110 (South)",
                    type: "location",
                    segment: { battles: [battles.ruby_sapphire.youngster_timmy] },
                },
                {
                    slug: "rival-2",
                    name: "Rival 2",
                    type: "battle",
                    conditions: { character: "brendan", starter: "treecko" },
                    segment: { battle: battles.ruby_sapphire.may_treecko_2 },
                },
                {
                    slug: "rival-2",
                    name: "Rival 2",
                    type: "battle",
                    conditions: { character: "brendan", starter: "torchic" },
                    segment: { battle: battles.ruby_sapphire.may_torchic_2 },
                },
                {
                    slug: "rival-2",
                    name: "Rival 2",
                    type: "battle",
                    conditions: { character: "brendan", starter: "mudkip" },
                    segment: { battle: battles.ruby_sapphire.may_mudkip_2 },
                },
                {
                    slug: "rival-2",
                    name: "Rival 2",
                    type: "battle",
                    conditions: { character: "may", starter: "treecko" },
                    segment: { battle: battles.ruby_sapphire.brendan_treecko_2 },
                },
                {
                    slug: "rival-2",
                    name: "Rival 2",
                    type: "battle",
                    conditions: { character: "may", starter: "torchic" },
                    segment: { battle: battles.ruby_sapphire.brendan_torchic_2 },
                },
                {
                    slug: "rival-2",
                    name: "Rival 2",
                    type: "battle",
                    conditions: { character: "may", starter: "mudkip" },
                    segment: { battle: battles.ruby_sapphire.brendan_mudkip_2 },
                },
                {
                    slug: "hoenn-route-110",
                    name: "Route 110 (North)",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.collector_edwin,
                            battles.ruby_sapphire.psychic_m_edward,
                            battles.ruby_sapphire.fisherman_dale,
                        ],
                    },
                },
                { slug: "mauville-city", name: "Mauville City", type: "location", segment: { battles: [] } },
                {
                    slug: "wally-1",
                    name: "Wally 1",
                    type: "battle",
                    segment: { battle: battles.ruby_sapphire.wally_1 },
                },
                {
                    slug: "cycling-road",
                    name: "Cycling Road",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.psychic_f_jaclyn,
                            battles.ruby_sapphire.triathlete_biker_f_abigail,
                            battles.ruby_sapphire.triathlete_biker_m_anthony,
                            battles.ruby_sapphire.triathlete_biker_m_benjamin,
                            battles.ruby_sapphire.triathlete_biker_f_jasmine,
                            battles.ruby_sapphire.triathlete_biker_m_jacob,
                        ],
                        custom: true,
                    },
                },
                {
                    slug: "mauville-gym",
                    name: "Mauville Gym",
                    type: "location",
                    segment: {
                        battles: [
                            battles.ruby_sapphire.guitarist_kirk,
                            battles.ruby_sapphire.youngster_ben,
                            battles.ruby_sapphire.guitarist_shawn,
                            battles.ruby_sapphire.battle_girl_vivian,
                        ],
                        custom: true,
                    },
                },
                {
                    slug: "wattson",
                    name: "Wattson",
                    type: "battle",
                    segment: { battle: battles.emerald.wattson, levelCap: true },
                },
            ],
        },
    ],
};

export default ruby_sapphire;
