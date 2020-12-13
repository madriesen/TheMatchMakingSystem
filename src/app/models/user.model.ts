import { Ploeg } from '../models/ploeg.model';
import { Role } from './role.model';

export class User {
    constructor(
        public id: number = 0,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public dob: Date = null,
        public address: string = "", 
        public town: string = "",
        public zipCode: string = "",
        public roleId: number = 0,
        public role: Role = null,  
        public ploegId: number = 0,
        public ploeg: Ploeg = null, 
        public token: string ="",
        public ranking: number=0
        
    ) { }
}
