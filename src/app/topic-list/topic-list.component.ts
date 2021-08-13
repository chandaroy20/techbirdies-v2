import { Component, OnInit } from '@angular/core';

import { Topic } from '../_models/topic';
import { PostQueryService } from '../_services/post-query.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthServiceService } from '../login/auth-service.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics = [];
  Topics: any = [];
  currentUser: any;
  category: any = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postQueryService: PostQueryService,
    private authenticationService: AuthServiceService
  ) { 
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) this.router.navigate(['/']);
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.category = params && params.id ? params.id : '';
      this.getTopics();
    });
  }
  getTopics() {
    this.postQueryService.getTopics(this.category, this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.Topics = res;
    })
  }

  gotoDetails(id) {
    this.router.navigate(['forum/topic-detail/'+id]);
  }

  incLike() {
    this.postQueryService.like().subscribe((res) => {
      console.log(res);
    })
  }

  decLike() {
    this.postQueryService.like().subscribe((res) => {
      console.log(res);
    })
    
  }


}
