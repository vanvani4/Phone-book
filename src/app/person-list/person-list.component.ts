import { Component, OnInit, DoCheck } from '@angular/core';

import { ServerService } from '../server-service/server.service';
import { Person } from '../person/person';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers: [ServerService]
  
})
export class PersonListComponent implements OnInit {

  allListPerson: Person[];

  constructor(private server: ServerService) {}

  ngOnInit() {
    this.server.getAllPerson() 
    .map((data: Response) => data.json())
    .subscribe(data => {
      this.allListPerson = data;
    });
  }
}
