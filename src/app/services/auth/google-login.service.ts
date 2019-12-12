import {EventEmitter, Injectable, Output} from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import { users } from '../users.json';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  public user;
  public isLogged: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private userService: UserService) {

    // tslint:disable-next-line:variable-name
    const temp_usr = localStorage.getItem('user');
    if (temp_usr) {
      this.user = JSON.parse(temp_usr);
      this.isLogged = true;
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

async validateUser(user) {
    return new Promise(resolve => {
      this.userService.getUserByEmail(user.email).subscribe((data: any) => {
        if (data.length) {
          user.role = data[0].role;
          this.user = user;
          this.isLogged = true;
          localStorage.setItem('user', JSON.stringify(user));
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

}
