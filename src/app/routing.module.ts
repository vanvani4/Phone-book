import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './person-list/add-person/add-person.component';
import { SearchPersonComponent } from './person-list/search-person/search-person.component';
import { AboutPersonComponent } from './person-list/about-person/about-person.component';
import { AuthGuard } from './guard/auth-guard.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
{path: '', component: SearchPersonComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'add', component: AddPersonComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    {path: ':id', component: AboutPersonComponent, pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
  })
  export class RoutingModule {
  }

