import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  currentUserEmail: string = '';
  isUserAuthenticated = false;

  constructor() {
  }

  login(email: string, password: string): boolean {
   return true;
  }

  logout() {

  }

  isAuthenticated() {
    /*return localStorage.getItem('token');*/
    return true;
  }

}
