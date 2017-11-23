import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonListComponent } from './person-list.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: '', component: PersonListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PersonListRoutingModule { }
