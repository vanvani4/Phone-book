import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions } from '@angular/http';

import { ServerService } from '../../server-service/server.service';
import { Person } from '../../person/person';


@Component({
  selector: 'app-about-person',
  templateUrl: './about-person.component.html',
  styleUrls: ['./about-person.component.css']
})
export class AboutPersonComponent implements OnInit {

  activePerson;
  //activePersonId: number;

  constructor(private server: ServerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activePerson = this.server.getActivePerson();
    console.log('about', this.activePerson);
    
    // let arr: Person[];
    // this.route.params.subscribe(params => {
    //   this.activePersonId = params['id'];
    //   this.server.getAllPerson()
    //   .map((data: Response) => data.json())
    //   .subscribe(data => {
    //     arr = data;
    //   });

    //   console.log(arr);

    //   arr.forEach((item, i, arr) => {
    //       if (item.id === +this.activePersonId) {
    //           this.activePerson = item;
    //       }
    //   });
    // });
  }

}
