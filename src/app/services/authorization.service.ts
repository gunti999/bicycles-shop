import { Injectable } from '@angular/core';

export interface User {
  id: number,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  users: User[] = [];
  logInUser: User | undefined;
  authUser: boolean = false;

  constructor() {
    this.users = this.getData();
    this.logInUser = this.getLoginUser();
    if (this.logInUser != undefined) {
      this.authUser = true;
    } else {
      this.authUser = false;
    }
  }

  logIn(user: string, pass: string) {
    this.logInUser = this.users.find(el => el.username == user && el.password == pass);
      if (this.logInUser) {
        this.authUser = true;
        localStorage.setItem('loginUser', JSON.stringify(this.logInUser));
      } else {
        alert('Error! This user does not exist, check the username and password.');
        this.authUser = false;
      }
    console.log(`Autorization user: ${this.authUser}`);
  }

  logOut() {
    this.authUser = false;
    this.logInUser = undefined;
    localStorage.removeItem('loginUser');
  }

  registration(userData: User) {
    let userFlag: boolean = false;
    this.users.forEach(el => {
      if (el.username === userData.username) {
        userFlag = true;
      } 
    });

    if (!userFlag ) {
      userData.id = this.idFromUsers();
      this.users.push(userData);
      alert('Congratulations! You have registered. Now you can enter your personal account!');
    } else {
      alert('Error! This username is taken. Please try again with a different name.');
    }

  }

  idFromUsers() {
    if (this.users.length == 0) {
      return 1;
    }
    return this.users.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  setData(data: User[]) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('registredUser', jsonData);
  }

  getData() {
    let data = localStorage.getItem('registredUser');
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  getLoginUser() {
    let user = localStorage.getItem('loginUser');
    if (user != null) {
      return JSON.parse(user);
    } else {
      return undefined;
    }
  }
}