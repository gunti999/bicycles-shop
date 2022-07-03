import { Injectable } from '@angular/core';

export interface User {
  id: number,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService{

  users: User[] = [];
  logInUser: User | undefined; 
  authUser: boolean = false; 

  constructor() {
    this.users = this.getData();
  }

  logIn(user: string, pass: string) {
    this.logInUser = this.users.find(el => {
      if (el.username == user && el.password == pass) {
        return this.authUser = true;
      } else {
        return this.authUser = false;
      }
    })
    console.log(`Autorization user: ${this.authUser}`);
  }

  logOut() {
    this.authUser = false;
  }

  registration(userData: User) {
    userData.id = this.idFromUsers();
    this.users.push(userData);
  }

  idFromUsers() {
    if (this.users.length == 0) {
      return 1;
    }
    return this.users.sort((a, b) => b.id - a.id)[0].id + 1;
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

