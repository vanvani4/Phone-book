import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ServerService } from '../../server-service/server.service';
import { Person } from '../../person/person';
import { Http, Response, RequestOptions } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-found-list',
  templateUrl: './found-list.component.html',
  styleUrls: ['./found-list.component.css'],
  providers: [ServerService]
})
export class FoundListComponent implements OnInit, OnChanges {

  @Input() ser: string;
  
  foundPerson: Person[];


  constructor(private server: ServerService) { 
   }

  ngOnInit() { }

  ngOnChanges() { 
    this.server.getFoundPerson()
    .map((data: Response) => data.json())
    .subscribe(data => {
      this.foundPerson = data;
    });
   }
}
