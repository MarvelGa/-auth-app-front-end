import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(userData: any) {
    const customHeaders = new HttpHeaders({
      'authenticationKey': 'test111'
    });
    const customParams = new HttpParams()
      .set('userRole', 'admin');
    return this.http.post("http://localhost:8080/api/users", userData, {headers: customHeaders, params: customParams});
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
  }

  isAuthenticated() {
    return localStorage.getItem('token');
  }

}
