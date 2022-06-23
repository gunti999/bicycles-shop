import { Injectable } from '@angular/core';

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService{

  users: User[] = [];
  logInUser: User | undefined;

  constructor() {
    this.users = this.getData();
  }

  logIn(user: string, pass: string) {
    this.logInUser = this.users.find(el => {
      if (el.username == user && el.password == pass) {
        console.log('log in: true');
        return true;
      } else {
        console.log('log in: false');
        return false;
      }
    })
  }

  logOut() {
    localStorage.clear()
  }

  registration(userData: User) {
    this.users.push(userData);
  }

  setData(data: User[]) {  
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
  }

  getData() {
    let data = localStorage.getItem('myData')
    if(data != null) {
      return JSON.parse(data);
    } else {
      return []
    }
  }
}

