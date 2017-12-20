import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';
//import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
    loggedIn: boolean = false;
    redirectUrl = ''; // сюда записываем путь страницы куда мы собирались (admin), куда мы перейдём в случае удачной авторизации.

    constructor(private http: HttpClient) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }


    login(formData) {
        return this.http
            .post('http://localhost:3000/login', formData)
            .map((res: any) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }

                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}