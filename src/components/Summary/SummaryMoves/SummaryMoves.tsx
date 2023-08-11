import MoveCard from "@/components/Run/MoveCard/MoveCard";
import CaughtPokemon from "@/models/CaughtPokemon";
import MoveData from "@/models/MoveData";
import PokemonData from "@/models/PokemonData";
import { fetchMoves } from "@/utils/api";
import { useEffect, useState } from "react";
import styles from "./SummaryMoves.module.scss";

type Props = {
    caughtPokemon: CaughtPokemon;
    pokemonData: PokemonData;
    game: string;
    onClick: (idx: number) => void;
};

const SummaryMoves: React.FC<Props> = (props: Props) => {
    // Fetched data state
    const [moves, setMoves] = useState<MoveData[]>([]);

    // Fetch move data on component load
    useEffect(() => {
        if (props.caughtPokemon.pokemon.moveSlugs && props.caughtPokemon.pokemon.moveSlugs.length > 0) {
            fetchMoves(props.caughtPokemon.pokemon.moveSlugs).then((moves: MoveData[]) => setMoves(moves));
        }
    }, [props.caughtPokemon]);

    return (
        <div className={styles["summary-moves"]}>
            <p className={styles.header}>Moveset</p>
            <div className={styles.moves}>
                {[...Array(4)].map((_, key: number) => {
                    return (
                        <button className={styles.button} onClick={() => props.onClick(key)} key={key}>
                            {key < moves.length ? (
                                <MoveCard
                                    move={moves[key]}
                                    isSTAB={props.pokemonData.types.includes(moves[key].type)}
                                    game={props.game}
                                />
                            ) : (
                                <div className={styles.add}>
                                    <p className={styles.icon}>+</p>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SummaryMoves;
