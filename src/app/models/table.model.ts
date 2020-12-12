import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { Ploeg } from './ploeg.model';

export class Table {
    constructor(
        public tableID: number = 0,
        public name: string = "",
        public userID: number=0,
        public ploegID: number=0, 
        //public teams: Team[],

        
    ) { }
}
