import {Component, Input, OnInit} from '@angular/core';
import {GoogleLoginService} from '../../services/auth/google-login.service';
import {SnotifyService} from 'ng-snotify';
import {UserService} from '../../services/users/user.service';
import {Observable} from 'rxjs';

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
  private userEmail;

  // tslint:disable-next-line:variable-name
  private add_email;
  // tslint:disable-next-line:variable-name
  private add_role = 1;
  // tslint:disable-next-line:variable-name
  private add_name;

  private users;

  private signOutNotificationAllow = true;

  private userToUpdate;
  private updatedRole;
  private updatedName;
  constructor(private googleLoginService: GoogleLoginService, private snotifyService: SnotifyService, private userService: UserService) {
    if (googleLoginService.isLogged) {
      this.userName = googleLoginService.user.firstName + ' ' + googleLoginService.user.lastName;
      this.userImg = googleLoginService.user.photoUrl;
      this.userEmail = googleLoginService.user.email;
      this.role = googleLoginService.user.role;
    }
    userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
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
    if (!(this.add_email && this.add_email.trim())) {
      return;
    }
    // tslint:disable-next-line:variable-name radix
    const add_user = {name: this.add_name, email: this.add_email, role: parseInt(String(this.add_role))};
    const successAction = Observable.create(observer => {
      this.userService.addUser(add_user).then(() => {
        observer.next({
          title: 'Success!',
          body: 'User Addedd successfully'
        });
        observer.complete();
      });
    });
    this.snotifyService.async('Adding user....', successAction, {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true});

  }

  deleteUser(email) {

    this.snotifyService.error('Do you need to delete this user?', 'Delete', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.userService.deleteUserByEmail(email).then((data) => {
              this.snotifyService.success('User deleted successfully!');
              this.snotifyService.remove(toast.id);
            });
          }, bold: true
        },
        {
          text: 'No', action: (toast) => {
            this.snotifyService.remove(toast.id);
          }
        },
      ]
    });


  }

  updateUser(user) {
    this.userToUpdate = user.email;
    this.updatedRole = user.role;
    this.updatedName = user.name;
  }

  saveUpdatedData(saveemail) {
    this.snotifyService.info('Do you need to save data?', 'User Update', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            // tslint:disable-next-line:radix
            this.userService.updateUserByEmail({email: saveemail, name: this.updatedName, role: parseInt(this.updatedRole)}).then(() => {
              this.snotifyService.success('User updated successfully!');
              this.snotifyService.remove(toast.id);
              this.userToUpdate = null;
            });
          }, bold: true
        },
        {
          text: 'No', action: (toast) => {
            this.snotifyService.remove(toast.id);
          }
        },
      ]
    });
  }

  resetUser() {
    this.add_email = null;
    this.add_role = 1;
  }
}
