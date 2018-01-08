import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { User } from './user';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  loginForm: FormGroup;

  formErrors = {
    login: '',
    password: ''
  };

  validationMessages = {
    login: {
      required: 'Field login can not be empty'
    },
    password: {
      required: 'Field password can not be empty'
    }
  };


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  message: string;

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(data => this.valueChanged(data));
  }

  valueChanged(data) {
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.loginForm.get(field);
      if (control.dirty) {
        for (const key in control.errors) {
          this.formErrors[field] = this.validationMessages[field][key];
        }
      }
    }
  }

  log(loginForm) {
    this.message = 'Wait please'; // пока не вернулся ответ, показываем сообщение.
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe(res => {
        this.router.navigate(['']); // если валидация прошла, указываем куда перейти (куда собирались)
        this.message = '';
      });
  }

  logOut() {
    this.authService.logout(); // в реальной жизни отсылаем запрос на сервер, который анулирует сессию.
  }

}

