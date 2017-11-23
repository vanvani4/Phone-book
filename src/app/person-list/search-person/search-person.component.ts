import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ServerService } from '../../server-service/server.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  searchForm: FormGroup;
  show = true;
  ser: string;

  constructor(private fb: FormBuilder, private server: ServerService,  private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  search(searchForm: FormGroup) {
    this.ser = searchForm.value.search;
    if (searchForm.value.search) {
      this.server.searchPerson(searchForm.value.search)
      this.show = false;
    } else {
      this.show = true;
    }
  }

  add() {
    this.router.navigate(['add'], { relativeTo: this.activedRoute });
  }
}
