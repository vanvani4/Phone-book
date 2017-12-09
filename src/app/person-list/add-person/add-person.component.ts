import { Component, OnInit, ViewChild } from '@angular/core';
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
  photo: File;
  @ViewChild('photo') personPhoto;

  constructor(private fb: FormBuilder, private server: ServerService, private router: Router, private activedRoute: ActivatedRoute) { };

  ngOnInit() {
    this.addForm = this.fb.group({
      name: [''],
      phone: [''],
      photo: ['']
    });
  }

  add(addForm: FormGroup) {
    const image = this.personPhoto.nativeElement;
    if (image.files && image.files[0]) {
      this.photo = image.files[0];
    }

    const formData: FormData = new FormData();
    formData.append('name', addForm.value.name);
    formData.append('phone', addForm.value.phone);
    formData.append('photo', this.photo, this.photo.name);

    console.log(formData.getAll('name'), formData.getAll('phone'), formData.getAll('photo'));
     

    this.server.addPerson(formData)
      .subscribe(data => {
        console.log(data)
      });
  }

  back() {
    this.router.navigate([''], { relativeTo: this.activedRoute });
  }

}
