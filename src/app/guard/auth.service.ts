import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';
//import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthService { 
    loggedIn: boolean = false;
    redirectUrl = 'api/login'; // сюда записываем путь страницы куда мы собирались (admin), куда мы перейдём в случае удачной авторизации.

    constructor(private http: HttpClient, ) {
        //this.loggedIn = !!localStorage.getItem('auth_token');
    }


    login(login, pass) {
        return this.http
            .post('https://localhost:8080/api/login', {login, pass})
            .map((res: any) => {                
                if (res === 1) {
                    this.loggedIn = true;
                    return this.loggedIn;
                }
            })
            // .map((res: any) => {
            //     if (res.success) {
            //         localStorage.setItem('auth_token', res.auth_token);
            //         this.loggedIn = true;
            //     }

            //     return res.success;
            // });
    }

    logout() {
        //localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    // isLoggedIn() {
    //     return this.loggedIn;
    // }
}