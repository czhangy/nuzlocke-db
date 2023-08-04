import LocalName from "@/models/LocalName";
import PokemonData from "@/models/PokemonData";
import { initLocalName, initPokemonData } from "@/utils/initializers";
import { getEnglishName } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import {
    ChainLink,
    EvolutionChain,
    EvolutionClient,
    Pokemon,
    PokemonClient,
    PokemonSpecies,
    PokemonSpeciesVariety,
} from "pokenode-ts";

type ResData = {
    pokemon?: string;
    error?: string;
};

const isSpeciesRequest = (req: NextApiRequest): boolean => {
    return req.method === "GET" && "speciesSlug" in req.query && typeof req.query.speciesSlug === "string";
};

const isSpeciesListRequest = (req: NextApiRequest): boolean => {
    return req.method === "GET" && "speciesSlugList[]" in req.query && Array.isArray(req.query["speciesSlugList[]"]);
};

const isPokemonRequest = (req: NextApiRequest): boolean => {
    return req.method === "GET" && "pokemonSlug" in req.query && typeof req.query.pokemonSlug === "string";
};

const isPokemonListRequest = (req: NextApiRequest): boolean => {
    return req.method === "GET" && "pokemonSlugList[]" in req.query && Array.isArray(req.query["pokemonSlugList[]"]);
};

const createEvolutionChains = (stage: ChainLink, chain: string[], chains: string[][]): void => {
    chain.push(stage.species.name);
    if (stage.evolves_to.length === 0) {
        chains.push([...chain]);
    } else {
        for (let link of stage.evolves_to) {
            createEvolutionChains(link, chain, chains);
        }
    }
    chain.pop();
};

const fetchSpeciesEvolutionChains = async (species: PokemonSpecies): Promise<string[][]> => {
    const evolutionAPI: EvolutionClient = new EvolutionClient();
    try {
        const id: number = Number(
            (species.evolution_chain.url.match(/\/evolution-chain\/(\d+)\//) as RegExpMatchArray)[1]
        );
        const chain: EvolutionChain = await evolutionAPI.getEvolutionChainById(id);
        let chains: string[][] = [];
        createEvolutionChains(chain.chain, [], chains);
        return chains;
    } catch (error: any) {
        throw error;
    }
};

const fetchSpecies = async (speciesSlug: string): Promise<PokemonData> => {
    const api: PokemonClient = new PokemonClient();
    try {
        const species: PokemonSpecies = await api.getPokemonSpeciesByName(speciesSlug);
        const pokemon: Pokemon = await api.getPokemonByName(
            species.varieties.find((variety: PokemonSpeciesVariety) => variety.is_default)!.pokemon.name
        );
        const evolutions: string[][] = await fetchSpeciesEvolutionChains(species);
        return initPokemonData(pokemon, species, evolutions);
    } catch (error: any) {
        throw error;
    }
};

const fetchSpeciesList = async (speciesSlugList: string[]): Promise<PokemonData[]> => {
    let pokemonPromises: Promise<PokemonData>[] = [];
    speciesSlugList.forEach((speciesSlug: string) => {
        pokemonPromises.push(fetchSpecies(speciesSlug));
    });
    try {
        return await Promise.all(pokemonPromises);
    } catch (error: any) {
        throw error;
    }
};

const fetchPokemon = async (pokemonSlug: string): Promise<PokemonData> => {
    const api: PokemonClient = new PokemonClient();
    try {
        const pokemon: Pokemon = await api.getPokemonByName(pokemonSlug);
        const species: PokemonSpecies = await api.getPokemonSpeciesByName(pokemon.name);
        const evolutions: string[][] = await fetchSpeciesEvolutionChains(species);
        return initPokemonData(pokemon, species, evolutions);
    } catch (error: any) {
        throw error;
    }
};

const fetchPokemonList = async (pokemonSlugList: string[]): Promise<PokemonData[]> => {
    let pokemonPromises: Promise<PokemonData>[] = [];
    pokemonSlugList.forEach((pokemonSlug: string) => {
        pokemonPromises.push(fetchPokemon(pokemonSlug));
    });
    try {
        return await Promise.all(pokemonPromises);
    } catch (error: any) {
        throw error;
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
    if (isSpeciesRequest(req)) {
        try {
            const pokemon: void | PokemonData = await fetchSpecies(req.query.speciesSlug as string);
            return res.status(200).json({ pokemon: JSON.stringify(pokemon) });
        } catch (error: any) {
            return res.status(500).json({
                error: error,
            });
        }
    } else if (isSpeciesListRequest(req)) {
        try {
            const pokemonDataList: void | PokemonData[] = await fetchSpeciesList(
                req.query["speciesSlugList[]"] as string[]
            );
            return res.status(200).json({ pokemon: JSON.stringify(pokemonDataList) });
        } catch (error: any) {
            return res.status(500).json({
                error: error,
            });
        }
    } else if (isPokemonRequest(req)) {
        try {
            const pokemon: void | PokemonData = await fetchPokemon(req.query.pokemonSlug as string);
            return res.status(200).json({ pokemon: JSON.stringify(pokemon) });
        } catch (error: any) {
            return res.status(500).json({
                error: error,
            });
        }
    } else if (isPokemonListRequest(req)) {
        try {
            const pokemonDataList: void | PokemonData[] = await fetchPokemonList(
                req.query["pokemonSlugList[]"] as string[]
            );
            return res.status(200).json({ pokemon: JSON.stringify(pokemonDataList) });
        } catch (error: any) {
            return res.status(500).json({
                error: error,
            });
        }
    } else if (req.method === "GET") {
        return res.status(400).json({
            error: "The request is missing required params",
        });
    } else {
        return res.status(405).json({
            error: "Only GET requests are allowed at this route",
        });
    }
}
