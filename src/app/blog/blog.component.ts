import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../_models/user';
import { Topic } from '../_models/topic';
import { AuthServiceService } from '../login/auth-service.service';
import { PostQueryService } from '../_services/post-query.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  currentUser: any;
  users = [];
  topicContent: FormGroup;
  topics = [];
  posts: any = [];
  showCreate: boolean = false;
  groups: any = [];
  threads: any =[];
  category: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthServiceService,
    private postQueryService: PostQueryService,
    private route: ActivatedRoute
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) this.router.navigate(['/']);
  }


  ngOnInit(): void {
    this.getTopicGroups();
    this.getMyPostThreads();
    this.getRecentTopics();
  }

  toggleShow() {
    this.showCreate = !this.showCreate;
  }

  close() {
    this.showCreate = false;
  }

  getTopicGroups() {
    this.postQueryService.getPostGroups(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.groups = res;
    });
  }

  getRecentTopics() {
    this.postQueryService.getRecentPosts(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

  getMyPostThreads() {
    this.postQueryService.getMyPostThreads(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.threads = res;
    });
  }

  gotoPostsByCategory(id) {
    this.router.navigate(['posts/'+id], {relativeTo: this.route});
    // this.router.navigate(['blogs/'+id]);
  }

  gotoDetails(id) {
    this.router.navigate(['blogs/post-detail/'+id]);
  }

}
