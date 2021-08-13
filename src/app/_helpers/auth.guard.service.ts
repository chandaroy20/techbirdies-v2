import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';
import { AuthServiceService } from '../login/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // public url ="https://talentmitra-o5ryx.ondigitalocean.app";
  public url = '';
  constructor(
    private router: Router,
    private authenticationService: AuthServiceService,
    private http: HttpClient
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log("came to canActivate");
      // this.isAuthenticated();
      const currentUser = this.authenticationService.currentUser;
      if (currentUser) {
      // authorised so return true
      return true;
      }

      
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
      return false;
      }


      isAuthenticated() {
        return this.http.post<any>(`${this.url}/user/getUserDetails`, { })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(user);
            return user;
        }));
      }
}
