import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loadingL = false;
  lsubmitted = false;
  returnUrl: string;
  passwordErrorMsg: string;
  sendStatus: boolean;
  verifyCheck: boolean;
  verifyErrorMsg: string;
  passwordUpdateMsg: string;
  code: number;
  verifyCode:number;
  password:string;
  confirmPassword:string;
  email:string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthServiceService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.passwordUpdateMsg = '';
    this.verifyErrorMsg = '';
    this.sendStatus = false;
    this.verifyCheck =false;
    this.passwordErrorMsg = '';
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.forgotPasswordForm.controls; }

  onforgotPassword() {
    this.lsubmitted = true;
    this.email = this.f.email.value;
    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.loadingL = true;
    this.authenticationService.forgotPassword(this.f.email.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loadingL = false;
          if (data.error) {
            this.passwordErrorMsg = data.error;
          } else {
            this.passwordErrorMsg = '';
            this.sendStatus = true;
            this.verifyCode = data.code;
          }
          // this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loadingL = false;
        });
  }

  resetPassword() {
    if(!this.verifyCheck){
      if(this.verifyCode == this.code) {
        this.verifyCheck = true;
        this.verifyErrorMsg = 'Code Verified';
      }

    } else {
      if(this.password===this.confirmPassword){
        this.authenticationService.resetPassword({email:this.email,password:this.password})
          .pipe(first())
          .subscribe(
            data => {
              if (data.error) {
                this.passwordUpdateMsg = "Something went wrong. Try again";
              } else {
                this.passwordUpdateMsg = "Password changed! Login again."
              }
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.passwordUpdateMsg = "Something went wrong. Try again!!!!";
            });
      } else{
        this.passwordUpdateMsg = "Passwords don't match";
     }
    }
  }

}
