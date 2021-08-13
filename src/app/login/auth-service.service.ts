import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { environment } from '@environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  // public url ="https://talentmitra-o5ryx.ondigitalocean.app";
  public url = '';
  private code;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.http.post<any>(`${this.url}/auth/login`, { email, password })
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  register(user) {
    return this.http.post<any>(`${this.url}/auth/register`, user)
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  forgotPassword(email) {
    console.log("came here with "+email)
    let user = { code , email };
    var code=Math.floor(Math.random()*90000) + 10000;
    this.code = code;
    user.code = code;
    user.email =email;
    return this.http.post<any>(`${this.url}/auth/forgotpass`, user)
    .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        data.code = this.code;
        console.log(data);
        return data;
    }));
  }

  resetPassword(user) {
    console.log("came here with ");
    console.log(user);
    return this.http.post<any>(`${this.url}/auth/resetPassword`, user)
    .pipe(map(data => {
        console.log(data);
        return data;
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

}
