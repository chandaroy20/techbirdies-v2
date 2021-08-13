import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostQueryService } from '../_services/post-query.service';
import { User } from '../_models/user';
import { AuthServiceService } from '../login/auth-service.service';


@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  comment: string;
  topicId: string;
  topic: any = {};
  currentUser: any;
  commentReply: any;
  showReplyForm: any;
  
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
      this.topicId = params.id;
      this.getTopic();
    });
    
  }

  getTopic() {
    this.postQueryService.getTopicById(this.topicId, this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.topic = res;
    })
  }
  onComment() {
    let postData = {
      "id": this.topicId,
      "commentText" : this.comment,
      "commentedOn": new Date()
    };
    this.postQueryService.addComment(
      postData,
      this.currentUser.token
    ).subscribe((data) => {
      this.getTopic();
      // this.Topics.push(data);
    })
  }

  onCommentReply(id) {
    console.log(id);
    let postData = {
      "postId": this.topicId,
      "commentText" : this.commentReply,
      "commentedOn": new Date(),
      "commentId" : id
    };
    this.postQueryService.addTopicsCommentReply(
      postData,
      this.currentUser.token
    ).subscribe((data) => {
      this.getTopic();
      // this.Topics.push(data);
    })
  }

  onShowReplyForm(id) {
    this.showReplyForm = id;
  }

  goBack() {
    this.router.navigate(['../../../forum/'], {relativeTo: this.route});
  }
}
