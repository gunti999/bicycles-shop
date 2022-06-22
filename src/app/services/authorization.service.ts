import { Injectable } from '@angular/core';

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  users: User[] = [];
  logInUser: User | undefined;

  constructor() { }

  logIn(user: string, pass: string) {
    this.logInUser = this.users.find(el => {
      if(el.username == user && el.password == pass) {
        console.log(true);
        
        return true;
      } else {
        console.log(false);
        
        return false;
      }
    })
  }

  logOut() {

  }

  registration(userData: User) {
    this.users.push(userData);
    console.log(this.users);
    
  }
}
