import { Injectable } from '@angular/core';
import {GoogleLoginService} from './google-login.service';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService implements CanActivate {

  constructor(public googleLoginService: GoogleLoginService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.googleLoginService.isLogged) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }


}
