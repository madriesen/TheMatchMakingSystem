export class Wedstrijd {
    constructor(
        public ID: number = 0,
        public datum:Date = null,
        public rondeNummer:number = 0, 
        public foosballTableID:number = 0, 
        public wedstrijdTypeID:number = 0,
        public team1ID:number = 0,
        public team2ID:number = 0,
        public tournooiID:number = 0 
        ){}
}
