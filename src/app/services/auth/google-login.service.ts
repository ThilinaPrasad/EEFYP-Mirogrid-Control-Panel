import {EventEmitter, Injectable, Output} from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import { users } from './users.json';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  public user;
  public isLogged: boolean;
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    const temp = localStorage.getItem('user');
    if (temp) {
      this.isLogged = true;
      this.user = JSON.parse(temp);
    }
  }

  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.user = null;
    this.isLogged = false;
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }



  validateUser(user) {
    this.user = user;
    if (users.includes(user.email)) {
      this.isLogged = true;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

}
