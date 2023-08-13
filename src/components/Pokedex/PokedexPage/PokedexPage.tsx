import AbilityList from "@/components/Pokedex/AbilityList/AbilityList";
import BaseStats from "@/components/Pokedex/BaseStats/BaseStats";
import EvolutionsDisplay from "@/components/Run/EvolutionsDisplay/EvolutionsDisplay";
import PokemonDisplay from "@/components/Run/PokemonDisplay/PokemonDisplay";
import TierCard from "@/components/Run/TierCard/TierCard";
import PokemonData from "@/models/PokemonData";
import Run from "@/models/Run";
import { fetchPokemon } from "@/utils/api";
import { getPokemonTier } from "@/utils/utils";
import { useEffect, useState } from "react";
import styles from "./PokedexPage.module.scss";

type Props = {
    pokemon: string;
    run: Run;
};

const PokedexPage: React.FC<Props> = (props: Props) => {
    // Fetched data state
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);

    // Fetch Pokemon on page load
    useEffect(() => {
        if (props.pokemon) {
            fetchPokemon(props.pokemon, props.run.gameSlug).then((pokemon: PokemonData) => setPokemon(pokemon));
        }
    }, [props.pokemon]);

    return pokemon ? (
        <div className={styles["pokedex-page"]}>
            <div className={styles.header}>
                <PokemonDisplay pokemon={pokemon} runID={props.run.id} />
                <TierCard tier={getPokemonTier(props.pokemon, props.run.gameSlug)} />
            </div>
            <AbilityList abilities={pokemon.abilities} game={props.run.gameSlug} />
            <BaseStats stats={pokemon.stats} />
            {pokemon.evolutions.some((chain: string[]) => chain.length > 1) ? (
                <EvolutionsDisplay pokemon={pokemon} run={props.run} />
            ) : (
                ""
            )}
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default PokedexPage;
