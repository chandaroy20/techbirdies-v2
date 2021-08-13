// https://www.positronx.io/angular-8-express-file-upload-tutorial-with-reactive-forms/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { User } from '../_models/user';
import { Post } from '../_models/post';
import { AuthServiceService } from '../login/auth-service.service';
import { PostQueryService } from '../_services/post-query.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import {DomSanitizationService} from '@angular/platform-browser/esm2015';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy  {
  navigationSubscription;
  currentUser: User;
  loggedIn: boolean = false;
  Posts: any = [];

  constructor(
    private router: Router,
    private authenticationService: AuthServiceService,
    private postQueryService: PostQueryService,
    private route: ActivatedRoute
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  initialiseInvites() {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
      this.getRecentTopics();
    }
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {

   }

  // getPosts() {
  //   this.postQueryService.getPosts('', this.currentUser.token).subscribe((res) => {
  //     this.Posts = res['posts'];
  //   })
  // }

  getRecentTopics() {
    this.postQueryService.getRecentPosts(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.Posts = res;
    });
  }

  gotoDetails(id) {
    this.router.navigate(['blogs/post-detail/'+id]);
  }

}
