import { Component, OnInit } from '@angular/core';
import {GoogleLoginService} from '../../services/auth/google-login.service';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss']
})
export class GoogleSigninComponent implements OnInit {

  private isLoading = false;
  constructor(private googleSignin: GoogleLoginService, private router: Router, private snotifyService: SnotifyService) {
    if (googleSignin.isLogged) {
      router.navigate(['']);
    }
  }

  ngOnInit() {

  }

  async signIn() {
    this.isLoading = true;
    this.googleSignin.signInWithGoogle().then((user) => {
      this.googleSignin.validateUser(user).then((data: any) => {
        if (data) {
          this.router.navigate(['/operational']);
          this.isLoading = false;
        } else {
          this.snotifyService.warning('Unauthorized user!', '', {
            timeout: 5000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true});
        }
        this.isLoading = false;
      });

    });
  }

}
