import { Ploeg } from "./ploeg.model";
import { User } from "./user.model";

export class Team {

    constructor(
        public teamID: number = 0,
        public ploegID:number = 0,
        public ploeg:Ploeg = null,
        public player1ID:number = 0,
        public player1: User = null,
        public player2ID:number = 0,
        public player2: User = null
        ){}
}
