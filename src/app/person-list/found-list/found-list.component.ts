import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ServerService } from '../../server-service/server.service';
import { Person } from '../../person/person';
import { Http, Response, RequestOptions } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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


  constructor(private server: ServerService, private router: Router, private activedRoute: ActivatedRoute) { 
   }

  ngOnInit() { }

  ngOnChanges() { 
    this.server.getFoundPerson()
    .map((data: Response) => data.json())
    .subscribe(data => {
      this.foundPerson = data;
    });
   }

   goToAbout(item) {
    this.server.activePerson(item);
    this.router.navigate([item.id], { relativeTo: this.activedRoute });
  }
}
