import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../_models/user';
import { Topic } from '../_models/topic';
import { AuthServiceService } from '../login/auth-service.service';
import { PostQueryService } from '../_services/post-query.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  currentUser: any;
  users = [];
  topicContent: FormGroup;
  topics = [];
  Topics: any = [];
  showCreate: boolean = false;
  groups: any = [];
  categories: any = [];
  threads: any =[];

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
    this.getMyTopicThreads();
    this.topicContent = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required]
    });
  }
  
  toggleShow() {
    this.showCreate = !this.showCreate;
  }

  close() {
    this.showCreate = false;
  }
  onSubmit() {

    this.postQueryService.addTopic(
      this.topicContent.value,
      this.currentUser.token
    ).subscribe((data) => {
      this.Topics.push(data);
      this.close();
    });
  }

  getCategories() {
    this.postQueryService.getCategories(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }

  getTopics() {
    this.postQueryService.getTopics('', this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.Topics = res;
    });
  }

  getTopicGroups() {
    this.postQueryService.getTopicGroups(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.groups = res;
    });
  }

  getMyTopicThreads() {
    this.postQueryService.getMyTopicThreads(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.threads = res;
    });
  }

  gotoPostsByCategory(id) {
    console.log(id);
    this.router.navigate(['topic-list/'+id], {relativeTo: this.route});
  }

  gotoDetails(id) {
    this.router.navigate(['forum/topic-detail/'+id]);
  }

}
