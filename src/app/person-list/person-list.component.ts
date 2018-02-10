import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server-service/server.service';
import { Person } from '../person/person';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers: [ServerService]

})
export class PersonListComponent implements OnInit {

  allListPerson: Person[];

  constructor(private server: ServerService, private router: Router, private activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.server.getAllPerson()
      .map((data: Response) => data.json())
      .subscribe(data => {
        this.allListPerson = data;
      });
  }

  goToAbout(item) {
    this.server.activePerson(item);
    this.router.navigate([item.id], { relativeTo: this.activedRoute });
  }
}
