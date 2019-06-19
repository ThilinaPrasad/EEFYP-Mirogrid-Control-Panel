import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import {slideInUp, slideOutDown} from 'ng-animate';
import {GoogleLoginService} from '../../services/auth/google-login.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.css'],
  animations: [
    trigger('slideInUp', [transition('* => *', useAnimation(slideInUp))]),
    trigger('slideOutDown', [transition('* => *', useAnimation(slideOutDown))])
  ],
})
export class FloatingBtnComponent implements OnInit {
  floatEnabled = false;
  private userName;
  private userImg;
  private signOutNotificationAllow = true;
  constructor(private googleLoginService: GoogleLoginService, private snotifyService: SnotifyService) {
    if (googleLoginService.isLogged) {
      this.userName = googleLoginService.user.firstName + ' ' + googleLoginService.user.lastName;
      this.userImg = googleLoginService.user.photoUrl;
    }
  }

  ngOnInit() {
  }

  floatToggle() {
    this.floatEnabled = !this.floatEnabled;
  }

  logout() {
    if (this.signOutNotificationAllow) {
      this.signOutNotificationAllow = false;
      setTimeout(() => {
          this.signOutNotificationAllow = true;
        }
        , 5000);
      this.snotifyService.error('Do you need to sign out?', 'Sign out?', {
        timeout: 5000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        icon: 'https://image.flaticon.com/icons/svg/25/25376.svg',
        buttons: [
          {
            text: 'Yes', action: (toast) => {
              this.googleLoginService.signOut();
              this.snotifyService.remove(toast.id);
            }, bold: true
          },
          {
            text: 'No', action: (toast) => {
              this.snotifyService.remove(toast.id);
              this.signOutNotificationAllow = true;
            }
          },
        ]
      });

    }
  }

}
