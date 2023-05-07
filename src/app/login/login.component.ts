import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  users: any;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

  userName:string = "";
  userPassword:string = "";

  newUserName:string = "";
  newUserPassword:string = "";

  logIn() {
    // variable para comprobar si el usuario está registrado
    let isRegistered = 0;
    // variable para comprobar si la contraseña es correcta
    let isPasswordCorrect = 0;

    // bucle para comprobar la lista de usuarios registrados
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].username == this.userName){
        isRegistered++;

        if(this.users[i].password == this.userPassword){
          isPasswordCorrect++;
        }
      }
    } 

    // indicamos al usuario si el nombre es correcto o no
    if(isRegistered){
      if(isPasswordCorrect) {
        alert("Usuario y contraseña correctas.");
        let registeredUsersArticle = document.getElementById("registered-users-article");
        if (registeredUsersArticle) {
          registeredUsersArticle.classList.remove("hidden");
        }
        
        } else {
          alert("Usuario correcto. Contraseña incorrecta.")
        }
      } else {
      alert("Usuario no registrado.")
    }
  }

  signIn() {
    this.users.push({"username":this.newUserName,"password":this.newUserPassword})
    
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].username + ": " + this.users[i].password)
    }
  }
}
