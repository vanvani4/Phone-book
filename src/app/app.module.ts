import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FoundListComponent } from './person-list/found-list/found-list.component';
import { ServerService } from './server-service/server.service';
import { AddPersonComponent } from './person-list/add-person/add-person.component';
import { RoutingModule } from './routing.module';
import { SearchPersonComponent } from './person-list/search-person/search-person.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    FoundListComponent,
    AddPersonComponent,
    SearchPersonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
