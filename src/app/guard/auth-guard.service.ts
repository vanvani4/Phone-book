import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
// import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import { Http, Response, RequestOptions } from '@angular/http';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService
        /*private router: Router,
        private http: Http*/) { }

    canActivate() {
        return this.authService.isLoggedIn();
    }
}