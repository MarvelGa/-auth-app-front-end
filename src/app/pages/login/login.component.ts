import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  authorization(event: any): void {
    event.preventDefault();
    this.cleanErrorMessage();
    if(this.isInputtedDataValid()){
      if (this.authService.login(this.login, this.password)){
        this.router.navigate(['main']);
      }
   }

  }

  isInputtedDataValid(): boolean {
    const errors = [];
    const emailRegExp = /^[A-Za-z0-9_\-.]+[@][a-z]+[.][a-z]{3}$/;
    const loginRegExp = /^[A-Za-z0-9_\-.@!]{8,}/;
    if (!emailRegExp.test(this.login)) {
      errors[0] = new String('Not valid login! An example of login: test@gmail.com');
    }
    if (!loginRegExp.test(this.password)) {
      errors[1] = new String('Not valid password! Required min 8 symbols');
    }
    if (errors.length > 0) {
      let ulElement = <HTMLVideoElement>document.querySelector('#message');
      ulElement.innerText = "Error!";
      errors.forEach(el => {
        let liElement = document.createElement('li');
        console.log(`${el}`);
        liElement.innerHTML = `${el}`;
        ulElement.appendChild(liElement);
      });
      return false;
    } else {
      let message = <HTMLVideoElement>document.querySelector('#message');
      message.innerText = 'successful';
      return true;
    }
  }


  cleanErrorMessage(): void {
    let message = <HTMLVideoElement>document.querySelector('#message');
    message.innerText = '';
    message.innerHTML = '';
  }
}
