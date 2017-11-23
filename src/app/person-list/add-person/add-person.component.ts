import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server-service/server.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  providers: [ServerService]
})
export class AddPersonComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private server: ServerService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      name: [''],
      phone: [''],
      photo: ['']
    });
  }

  back() {
    this.router.navigate([''], { relativeTo: this.activedRoute });
  }

}
