import {EventEmitter, Injectable, Output} from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import { users } from '../users.json';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  public user;
  public role;
  public isLogged: boolean;
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    // tslint:disable-next-line:variable-name
    const temp_usr = localStorage.getItem('user');
    if (temp_usr) {
      this.isLogged = true;
      this.user = JSON.parse(temp_usr);
      this.role = users[this.getUid(users, this.user.email)][1];
    }
    console.log(this.role);
  }

  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.user = null;
    this.role = null;
    this.isLogged = false;
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }



  validateUser(user) {
    this.user = user;
    if (this.exists(users, this.user.email)) {
      this.isLogged = true;
      this.role = users[this.getUid(users, this.user.email)][1];
      console.log(this.role);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  exists(arr, search) {
    return arr.some(row => row.includes(search));
  }

  getUid(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(search)){
          return i;
        }
    }
  }
}
