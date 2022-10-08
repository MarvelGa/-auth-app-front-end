import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = '';
  password = ''

  constructor() {
  }

  ngOnInit(): void {

  }

  authorization(event: any): void {
    this.cleanErrorMessage();
    event.preventDefault();
    this.checkInputtedData();
  }

  checkInputtedData(): void {
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
    } else {
      let message = <HTMLVideoElement>document.querySelector('#message');
      message.innerText = 'successful';
    }
  }


  cleanErrorMessage(): void {
    let message = <HTMLVideoElement>document.querySelector('#message');
    message.innerText = '';
    message.innerHTML = '';
  }
}
