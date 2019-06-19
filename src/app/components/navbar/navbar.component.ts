import {Component, Input, OnInit} from '@angular/core';
import {GoogleLoginService} from '../../services/auth/google-login.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() transparent: boolean;
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
