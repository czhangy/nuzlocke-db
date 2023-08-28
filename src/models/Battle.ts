import Pokemon from "@/models/Pokemon";
import Trainer from "@/models/Trainer";

export default interface Battle {
    trainer: Trainer;
    name: string;
    team: Pokemon[];
    items: string[];
}
