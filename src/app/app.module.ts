import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FoundListComponent } from './person-list/found-list/found-list.component';
import { ServerService } from './server-service/server.service';
import { AddPersonComponent } from './person-list/add-person/add-person.component';
import { RoutingModule } from './routing.module';
import { SearchPersonComponent } from './person-list/search-person/search-person.component';
import { AboutPersonComponent } from './person-list/about-person/about-person.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './guard/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    FoundListComponent,
    AddPersonComponent,
    SearchPersonComponent,
    AboutPersonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    HttpClientModule,
    /*JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('auth_token');
        },
        whitelistedDomains: ['http://localhost:8080']
      }
    }),*/
  ],
  providers: [ServerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
