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
    ],
};

export default ruby_sapphire;
