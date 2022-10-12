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
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  authorization(event: any): void {
    event.preventDefault();
    this.cleanErrorMessage();
    if (this.isInputtedDataValid()) {
      const userData = {
        login: this.login,
        password: this.password
      }

      this.authService.login(userData).subscribe((data : any)=> {
          console.log(data);
          console.log(data.login!=null);
          if (data.login!=null) {
            localStorage.setItem('token', this.JWT_TOKEN);
            localStorage.setItem('userLogin', this.login);
            this.router.navigate(['main']);
          }else{
            console.log("From else");
            let ulElement = <HTMLVideoElement>document.querySelector('#message');
            ulElement.innerText = "Login or Password is not correct!";
          }
        }, (error) => {
          console.log("No data" );
        }
      );

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
      return true;
    }
  }


  cleanErrorMessage(): void {
    let message = <HTMLVideoElement>document.querySelector('#message');
    message.innerText = '';
    message.innerHTML = '';
  }

  getUserAuthentication() {
    return this.authService.isAuthenticated();
  }
}
