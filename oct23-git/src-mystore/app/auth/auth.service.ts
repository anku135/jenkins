import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private url = 'http://localhost:4100/user'

  constructor(
    private router: Router,
    private http: HttpClient) { }
  
  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + "/signin", body)
  }

  signup(firstName: string, lastName: string, phone: string, email: string, password: string) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password
    }

    return this.http.post(this.url + "/signup", body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!sessionStorage['token']) {
      this.router.navigate(['/auth/signin'])

      return false
    }
    return true
  }
}