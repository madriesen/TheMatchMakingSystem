import { Ploeg } from '../models/ploeg.model';
import { Role } from './role.model';

export class User {
    constructor(
        public userID: number = null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public dob: Date = null,
        public address: string = "", 
        public town: string = null,
        public zipCode: string = null,
        public roleID: number = null,
        public role: Role = null,  
        public ploegID: number = null,
        public ploeg: Ploeg = null, 
        public token: string =null,
        public ranking: number=null
        
    ) { }
}
