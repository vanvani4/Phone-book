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
    foundPerson = this.http.put('https://localhost:8080/api', { value });
  }

  getAllPerson() {
    return this.http.get('https://localhost:8080/api');
  }

  getFoundPerson() {
    return foundPerson;
  }

  addPerson(formGroup) {
    return this.http.post('https://localhost:8080/api/add',  formGroup)
    .map(res => res.json())
  }

  activePerson(person) {
    actPerson = person;
  }
  
  getActivePerson() {
    return actPerson;
  }
}
