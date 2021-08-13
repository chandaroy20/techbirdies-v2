import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { QueryMessage } from '../_models/query';
import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class PostQueryService {
  private currentUserSubject: BehaviorSubject<QueryMessage>;
  public currentQuery: Observable<QueryMessage>;
  public url = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) {

  }

  postQuery(query) {
    return this.http.post<Post>(`${this.url}/query`, query)
      .pipe(map(data => {

        return data;
      }));
  }

  // Forum methods

  addTopic(data, token): Observable<any> {
    return this.http.post<any>(`${this.url}/content/addTopic?secret_token=` + token, data, {
      reportProgress: true,
      observe: 'events'
    })
  }

  addComment(data, token): Observable<any> {
    return this.http.post<any>(`${this.url}/content/topicComment?secret_token=` + token, data, {
      reportProgress: true,
      observe: 'events'
    })
  }

  addTopicsCommentReply(data, token): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.url}/content/topicCommentReply?secret_token=` + token, data, {
      reportProgress: true,
      observe: 'events'
    })
  }

  getTopics(category, token) {
    if (category) {
      return this.http.get(this.url + '/content/category-topics/' + category + '?secret_token=' + token);
    }
    return this.http.get(this.url + '/content/allTopics?secret_token=' + token);
  }

  getTopicById(id, token) {
    console.log(this.url + '/content/topic/' + id);
    return this.http.get(this.url + '/content/topic/' + id + '?secret_token=' + token);
  }

  getTopicGroups(token) {
    return this.http.get(this.url + '/content/topic-groups?secret_token=' + token);
  }



  getMyTopicThreads(token) {
    return this.http.get(this.url + '/content/my-topic-threads?secret_token=' + token);
  }

  getUserThreads(email, token) {
    return this.http.get(this.url + '/content/user-post-threads/' + email +'?secret_token=' + token);
  }

  // Forum methods end


  // Blog methods

  addPost(content: string, category: string, postFile: File, description: string, token: string): Observable<any> {
    var formData: any = new FormData();
    formData.append("content", content);
    formData.append("category", category);
    formData.append("myFile", postFile);
    formData.append("shortDescription", description);

    return this.http.post<any>(`${this.url}/content/addPost?secret_token=` + token, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  addPostsComment(data, token): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.url}/content/postComment?secret_token=` + token, data, {
      reportProgress: true,
      observe: 'events'
    })
  }

  addPostsCommentReply(data, token): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.url}/content/postCommentReply?secret_token=` + token, data, {
      reportProgress: true,
      observe: 'events'
    })
  }

  getMyPostThreads(token) {
    return this.http.get(this.url + '/content/my-post-threads?secret_token=' + token);
  }

  getPostGroups(token) {
    return this.http.get(this.url + '/content/post-groups?secret_token=' + token);
  }

  getRecentPosts(token) {
    return this.http.get(this.url + '/content/recent-posts?secret_token=' + token);
  }

  getPostById(id, token) {
    console.log(this.url + '/content/post/' + id);
    return this.http.get(this.url + '/content/post/' + id + '?secret_token=' + token);
  }

  getPosts(category, token) {
    if (category) {
      return this.http.get(this.url + '/content/category-posts/' + category + '?secret_token=' + token);
    }
    return this.http.get(this.url + '/content/posts?secret_token=' + token);
  }

  getCategoryPosts(token) {
    return this.http.get(this.url + '/content/category-posts?secret_token=' + token);
  }

  getCategories(token) {
    return this.http.get(this.url + '/content/categories?secret_token=' + token);
  }

  // Blog methods end


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  like() {
    return this.http.get(this.url + '/content/like');
  }

}
