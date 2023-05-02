import { Injectable } from '@angular/core';
import userData from "../app/data/login-data.json"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers() {
    return userData
  }
}
