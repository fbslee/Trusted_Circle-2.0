import { Injectable } from '@angular/core';
import { 
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url) {
    if (localStorage.getItem('username')) return true;

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

}
