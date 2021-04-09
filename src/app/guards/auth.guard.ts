import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {state} from '@angular/animations';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
// AuthGuard
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: UserService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isAuth()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isAuth()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
