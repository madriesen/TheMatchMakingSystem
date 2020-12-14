import { Ploeg } from "./ploeg.model";

export class Competition {
    constructor(
        public competitionID: number = 0,
        public name:string = "",
        public ploeg1ID:number = 0,
        public ploeg1: Ploeg = null,
        public ploeg2ID:number = 0,
        public ploeg2: Ploeg = null

    ){}
}
