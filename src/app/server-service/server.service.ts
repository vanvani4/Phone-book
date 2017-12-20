import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Person } from '../person/person';

let foundPerson;
let actPerson;

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

  activePerson(person) {
    actPerson = person;
  }
  
  getActivePerson() {
    return actPerson;
  }
}
