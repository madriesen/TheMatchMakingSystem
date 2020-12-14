import { Competition } from "./competition.model";
import { Table } from "./table.model";
import { Team } from "./team.model";
import { WedstrijdType } from "./wedstrijd-type.model";

export class Wedstrijd {
    constructor(
        public wedstrijdID: number = 0,
        public date:Date = null,
        public tableID:number = 0, 
        public table:Table = null,
        public wedstrijdTypeID:number = 0,
        public WedstrijdType:WedstrijdType = null,
        public team1ID:number = 0,
        public team1: Team = null,
        public team2ID:number = 0,
        public team2: Team = null,
        public tournooiID:number = 0,
        public tournooi: Competition = null,
        public winnaarID: number = 0,
        public winnaar: Team = null
        ){}
}
