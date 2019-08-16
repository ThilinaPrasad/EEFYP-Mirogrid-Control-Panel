import { Component, OnInit } from '@angular/core';
import {GoogleLoginService} from '../../services/auth/google-login.service';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss']
})
export class GoogleSigninComponent implements OnInit {
  constructor(private googleSignin: GoogleLoginService, private router: Router, private snotifyService: SnotifyService) {
    if (googleSignin.isLogged) {
      router.navigate(['']);
    }
  }

  ngOnInit() {

  }

  signIn() {
    this.googleSignin.signInWithGoogle().then((user) => {
      if (this.googleSignin.validateUser(user)) {
        this.router.navigate(['/operational']);
      } else {
        this.snotifyService.warning('Unauthorized user!', '', {
          timeout: 5000,
          showProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true});
      }
    });
  }

}
