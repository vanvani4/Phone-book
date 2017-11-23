import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './person-list/add-person/add-person.component';
import { SearchPersonComponent } from './person-list/search-person/search-person.component';

const appRoutes: Routes = [
    {path: '', component: SearchPersonComponent, pathMatch: 'full'},
    {path: 'add', component: AddPersonComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class RoutingModule {
  }

