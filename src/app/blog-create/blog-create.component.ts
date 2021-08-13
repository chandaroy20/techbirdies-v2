import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { User } from '../_models/user';
import { Post } from '../_models/post';
import { AuthServiceService } from '../login/auth-service.service';
import { PostQueryService } from '../_services/post-query.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  currentUser: any;
  users = [];
  postContent: FormGroup;
  preview: string;
  percentDone: any = 0;
  posts = [];
  categories: any = [];
  Posts: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthServiceService,
    private postQueryService: PostQueryService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.currentUser) this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getCategories();
    this.postContent = this.formBuilder.group({
      content: ['', Validators.required],
      category: ['', Validators.required],
      shortDescription: ['',Validators.required],
      myFile: [Validators.required]
    });
  }

  getCategories() {
    this.postQueryService.getCategories(this.currentUser.token).subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.postContent.patchValue({
      myFile: file
    });
    this.postContent.get('myFile').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    this.postQueryService.addPost(
      this.postContent.value.content,
      this.postContent.value.category,
      this.postContent.value.myFile,
      this.postContent.value.shortDescription,
      this.currentUser.token
    ).subscribe((event: HttpEvent<any>) => {
      console.log(event);
      
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('Post successfully created!', event.body);
          alert(event.body.message);
          this.router.navigate(['']);
          this.percentDone = false;
      }
    })
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [

    ]
  };



}
