import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostQueryService } from '../_services/post-query.service';
import { User } from '../_models/user';
import { AuthServiceService } from '../login/auth-service.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  comment: string;
  commentReply: string;
  postId: string;
  showReplyForm: string = '';
  post: any = {};
  currentUser: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postQueryService: PostQueryService,
    private authenticationService: AuthServiceService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    // if (!this.currentUser) this.router.navigate(['/']);
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.postId = params.id;
      this.getPost();
    });
    
  }

  getPost() {
    this.postQueryService.getPostById(this.postId, this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.post = res;
    })
  }
  onComment() {
    console.log(this.comment);
    let postData = {
      "id": this.postId,
      "commentText" : this.comment,
      "commentedByName" : this.currentUser.user.firstName+' '+this.currentUser.user.lastName,
      "commentedByEmail": this.currentUser.user.email,
      "commentedOn": new Date()
    };
    this.postQueryService.addPostsComment(
      postData,
      this.currentUser.token
    ).subscribe((data) => {
      this.getPost();
      // this.Topics.push(data);
    })
  }

  onCommentReply(id) {
    console.log(id);
    let postData = {
      "postId": this.postId,
      "commentText" : this.commentReply,
      "commentedOn": new Date(),
      "commentId" : id
    };
    this.postQueryService.addPostsCommentReply(
      postData,
      this.currentUser.token
    ).subscribe((data) => {
      this.getPost();
      // this.Topics.push(data);
    })
  }

  onShowReplyForm(id) {
    this.showReplyForm = id;
  }

  getFileType(filename) {
    var arr = filename.split('.');
    var index = arr.length - 1;
    return arr[index];
  }

  goToUserProfile(id) {
    this.router.navigate(['blogs/profile/'+id]);
  }

  goBack() {
    this.router.navigate(['../../../blog/'], {relativeTo: this.route});
  }

}
