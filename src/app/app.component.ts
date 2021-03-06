import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { AuthService } from './guard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute) { }

  ngOnInit() { }

  logOut() {
    this.auth.logout();
    this.router.navigate(['api/login'], { relativeTo: this.activedRoute });
  }

}
