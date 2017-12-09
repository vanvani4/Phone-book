import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

let foundPerson;

@Injectable()
export class ServerService {

  constructor(private http: Http) {
  }

  searchPerson(value) {
    foundPerson = this.http.put('http://localhost:3000', { value });
  }

  getAllPerson() {
    return this.http.get('http://localhost:3000');
  }

  getFoundPerson() {
    return foundPerson;
  }

  addPerson(formGroup) {
    return this.http.post('http://localhost:3000/add',  formGroup)
    .map(res => res.json())
  }
}
