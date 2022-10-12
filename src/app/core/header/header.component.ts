import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getUserAuthentication() {
    return this.authService.isAuthenticated();
  }

  getUserInfo() {
    return localStorage.getItem('userLogin');
  }

  logout() {
  this.authService.logout();
  this.router.navigate(['login'])
  }
}
