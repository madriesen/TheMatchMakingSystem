import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserService {

  constructor() { }

  setAuthenticatedUser(user: User)
  {
    localStorage.setItem("authenticatedUser", JSON.stringify(user))
  }

  getAuthenticatedUser( )
  {
    return JSON.parse(localStorage.getItem("authenticatedUser"));
  }
}
