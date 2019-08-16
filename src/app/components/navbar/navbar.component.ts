import {Component, Input, OnInit} from '@angular/core';
import {GoogleLoginService} from '../../services/auth/google-login.service';
import {SnotifyService} from 'ng-snotify';
import {AddUserService} from '../../services/add-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() transparent: boolean;
  private userName;
  private userImg;
  private role;

  // tslint:disable-next-line:variable-name
  private add_email;
  // tslint:disable-next-line:variable-name
  private add_role = 1;

  private signOutNotificationAllow = true;
  constructor(private googleLoginService: GoogleLoginService, private snotifyService: SnotifyService, private addUsersService: AddUserService) {
    if (googleLoginService.isLogged) {
      this.userName = googleLoginService.user.firstName + ' ' + googleLoginService.user.lastName;
      this.userImg = googleLoginService.user.photoUrl;
      this.role = googleLoginService.role;
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

  addUser() {
    if (this.add_email && this.add_email.trim()) {
      // tslint:disable-next-line:variable-name
      const add_user = [ this.add_email, this.add_role.toString()];
      this.addUsersService.addUser(add_user);
    }
  }

  resetUser(){
    this.add_email = null;
    this.add_role = 1;
  }
}
