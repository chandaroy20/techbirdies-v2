import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { first } from 'rxjs/operators';

import { Post } from '../_models/post';
import { User } from '../_models/user';
import { AuthServiceService } from '../login/auth-service.service';
import { PostQueryService } from '../_services/post-query.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  currentUser: User;
  posts = [];
  Posts: any = [];
  category: any = '';

  constructor(
    private router: Router,
    private authenticationService: AuthServiceService,
    private postQueryService: PostQueryService,
    private route: ActivatedRoute
  ) { 
    this.currentUser = this.authenticationService.currentUserValue;
    // if (!this.currentUser) this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.category = params && params.id ? params.id : '';
      this.getPosts();
    });
  }

  getPosts() {
    this.postQueryService.getPosts(this.category, this.currentUser.token).subscribe((res) => {
      this.Posts = res['posts'];
    })
  }
  
  gotoDetails(id) {
    this.router.navigate(['blogs/post-detail/'+id]);
  }

  getFileType(filename) {
    var arr = filename.split('.');
    var index = arr.length - 1;
    return arr[index];
  }
}
