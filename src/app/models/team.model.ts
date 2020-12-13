import { Wedstrijd } from "../competitions/models/wedstrijd.model";

export class Team {

    constructor(
        public teamID: number =  0,
        public name:string = "",
        public ploegID:number =0,
        public player1ID:number = 0,
        public player2ID:number = 0,
        public wedstrijden:Wedstrijd[]=null
        ){}
}
