import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { PostQueryService } from '../_services/post-query.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  queryForm: FormGroup;
  loadingR = false;
  rsubmitted = false;
  returnUrl: string;
  sendStatus:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private postQueryService: PostQueryService
    ) { }

  ngOnInit(): void {
    this.queryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      messageText: ['', [Validators.required, Validators.minLength(6)]],
      phone: [''],
      company: ['']
  });
  }

  get r() { return this.queryForm.controls; }

  onSubmit() {
    this.rsubmitted = true;

    // stop here if form is invalid
    if (this.queryForm.invalid) {
        return;
    }

    this.loadingR = true;
    this.postQueryService.postQuery(this.queryForm.value)
        .pipe(first())
        .subscribe(
            data => {
                if(data['sendStatus']) alert("Query Sent Successfully");
                this.sendStatus= true;
                this.loadingR = false;
                this.queryForm.reset();
            },
            error => {
                this.loadingR = false;
            });
}


}
