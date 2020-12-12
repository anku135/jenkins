import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
  
  private url = 'http://localhost:4000/admins'

  constructor(
    private router: Router,
    private http: HttpClient) {}
  
  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + "/signin", body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!sessionStorage['token']) {
      
      this.router.navigate(['/signin'])

      return false
    }
    return true
  }
}