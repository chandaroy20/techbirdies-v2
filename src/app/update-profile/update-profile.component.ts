import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { AuthServiceService } from '../login/auth-service.service';


import { UserService } from '../_services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  postContent: FormGroup;
  currentUser: any;
  error: boolean = false;
  id: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthServiceService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) { 
      this.router.navigate(['/']);
    } else {
      // this.id = this.currentUser.user.id;
    }

  }

  ngOnInit(): void {
    this.getUserDetails();
    console.log(this.currentUser);
    this.postContent = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',Validators.required],
      company: ['',Validators.required],
      aboutMe: [''],
      myFile: ['']
    });
  }
  getUserDetails() {
    this.userService.getUserDetails(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.currentUser['user'] = res['user'];
      this.postContent = this.formBuilder.group({
        firstName: [this.currentUser.user.firstName, Validators.required],
        lastName: [this.currentUser.user.lastName, Validators.required],
        email: [this.currentUser.user.email,Validators.required],
        company: [this.currentUser.user.company,Validators.required],
        aboutMe: [this.currentUser.user.aboutMe],
        myFile: [this.currentUser.user.photo]
      });
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.postContent.patchValue({
      myFile: file
    });
    this.postContent.get('myFile').updateValueAndValidity()
  }

  onSubmit() {
    let profileData = {
      "firstName" : this.postContent.value.firstName,
      "lastName" : this.postContent.value.lastName,
      "email" : this.postContent.value.email,
      "company" : this.postContent.value.company,
      "aboutMe" : this.postContent.value.aboutMe,
      "myFile"  :this.postContent.value.myFile
    }
    this.userService.updateProfile(
      profileData,
      this.currentUser.token
    ).subscribe((data) => {
      if (data === 'error') {
        this.error = true;
      }
      this.getUserDetails();
      alert("Profile Updated Successfully");
      console.log(data);
    })
  }

}
