import { Ploeg } from '../models/ploeg.model';
import { Role } from './role.model';

export class User {
    constructor(
        public id: number = 0,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public dob: Date = null,
        public address: string = "", 
        public town: string = "",
        public zipCode: string = "",
        public username: string = "",
        public password: string = "",
        public roleId: number = 0,
        public role: Role,  
        public ploegId: number = 0,
        public ploeg: Ploeg, 
        public token: string =""
        
    ) { }
}
