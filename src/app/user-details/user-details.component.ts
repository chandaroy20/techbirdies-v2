import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { AuthServiceService } from '../login/auth-service.service';
import { PostQueryService } from '../_services/post-query.service';


import { UserService } from '../_services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  postContent: FormGroup;
  currentUser: any;
  error: boolean = false;
  id: any;
  user:any;
  posts: any = [];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthServiceService,
    private userService: UserService,
    private postQueryService: PostQueryService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) { 
      this.router.navigate(['/']);
    } else {
      // this.id = this.currentUser.user.id;
    }

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params && params.id ? params.id : '';
      this.gerUserProfile();
    });

  }
  gerUserProfile() {
    this.userService.gerUserProfile(this.id,this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.user = res;
      this.getUserThreads();
    })
  }

  getUserThreads() {
    this.postQueryService.getUserThreads(this.user.email, this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

  gotoDetails(id) {
    this.router.navigate(['blogs/post-detail/'+id]);
  }
}
