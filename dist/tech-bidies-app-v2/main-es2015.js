(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/alert/alert.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/alert/alert.component.ts ***!
  \******************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../login/alert.service */ "./src/app/login/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.message.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.text);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css']
            }]
    }], function () { return [{ type: _login_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/_helpers/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AuthGuardService {
    constructor(router, authenticationService, http) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.http = http;
        // public url ="https://talentmitra-o5ryx.ondigitalocean.app";
        this.url = '';
    }
    canActivate(route, state) {
        console.log("came to canActivate");
        // this.isAuthenticated();
        const currentUser = this.authenticationService.currentUser;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
    isAuthenticated() {
        return this.http.post(`${this.url}/user/getUserDetails`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(user);
            return user;
        }));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");



class JwtInterceptorService {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptorService.ɵfac = function JwtInterceptorService_Factory(t) { return new (t || JwtInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"])); };
JwtInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptorService, factory: JwtInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_pipes/truncare-text.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/_pipes/truncare-text.pipe.ts ***!
  \**********************************************/
/*! exports provided: TruncateTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateTextPipe", function() { return TruncateTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruncateTextPipe {
    transform(value, limit, trail = '…') {
        let result = value || '';
        if (value) {
            const words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result =
                        trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    }
}
TruncateTextPipe.ɵfac = function TruncateTextPipe_Factory(t) { return new (t || TruncateTextPipe)(); };
TruncateTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncateText", type: TruncateTextPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncateText'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_services/post-query.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/post-query.service.ts ***!
  \*************************************************/
/*! exports provided: PostQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostQueryService", function() { return PostQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class PostQueryService {
    constructor(http) {
        this.http = http;
        this.url = '';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    postQuery(query) {
        return this.http.post(`${this.url}/query`, query)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    // Forum methods
    addTopic(data, token) {
        return this.http.post(`${this.url}/content/addTopic?secret_token=` + token, data, {
            reportProgress: true,
            observe: 'events'
        });
    }
    addComment(data, token) {
        return this.http.post(`${this.url}/content/topicComment?secret_token=` + token, data, {
            reportProgress: true,
            observe: 'events'
        });
    }
    addTopicsCommentReply(data, token) {
        console.log(data);
        return this.http.post(`${this.url}/content/topicCommentReply?secret_token=` + token, data, {
            reportProgress: true,
            observe: 'events'
        });
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
        return this.http.get(this.url + '/content/user-post-threads/' + email + '?secret_token=' + token);
    }
    // Forum methods end
    // Blog methods
    addPost(content, category, postFile, description, token) {
        var formData = new FormData();
        formData.append("content", content);
        formData.append("category", category);
        formData.append("myFile", postFile);
        formData.append("shortDescription", description);
        return this.http.post(`${this.url}/content/addPost?secret_token=` + token, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    addPostsComment(data, token) {
        console.log(data);
        return this.http.post(`${this.url}/content/postComment?secret_token=` + token, data, {
            reportProgress: true,
            observe: 'events'
        });
    }
    addPostsCommentReply(data, token) {
        console.log(data);
        return this.http.post(`${this.url}/content/postCommentReply?secret_token=` + token, data, {
            reportProgress: true,
            observe: 'events'
        });
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
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    like() {
        return this.http.get(this.url + '/content/like');
    }
}
PostQueryService.ɵfac = function PostQueryService_Factory(t) { return new (t || PostQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostQueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostQueryService, factory: PostQueryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostQueryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserService {
    constructor(http) {
        this.http = http;
        this.url = '';
    }
    updateProfile(data, token) {
        console.log(data);
        var formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("company", data.company);
        formData.append("aboutMe", data.aboutMe);
        formData.append("myFile", data.myFile);
        formData.append("password", data.password);
        return this.http.post(`${this.url}/user/updateUser?secret_token=` + token, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getUserDetails(token) {
        return this.http.get(this.url + '/user/details?secret_token=' + token);
    }
    gerUserProfile(id, token) {
        return this.http.get(this.url + '/user/profile/' + id + '?secret_token=' + token);
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 57, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-9"], ["id", "myTabContentMD", 1, "tab-content"], ["id", "aboutUs-md", "role", "tabpanel", "aria-labelledby", "aboutUs-tab-md", 1, "tab-pane", "active"], [1, "card-title"], [1, "card"], [1, "card-body"], [1, "card-text"], [1, "card-link"], ["id", "advisory-md", "role", "tabpanel", "aria-labelledby", "advisory-tab-md", 1, "tab-pane", "fade"], [1, "col-sm-5"], [1, "view", "overlay"], ["src", "https://mdbootstrap.com/img/Photos/Others/photo6.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "#!"], [1, "mask", "rgba-white-slight"], ["href", "#", 1, "btn", "btn-primary"], [1, "col-sm-2"], ["src", "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-sm-3"], ["role", "tablist", 1, "list-group", "nav", "list-group-flush", "rgba-grey-dark"], [1, "list-group-item", "nav-item"], ["id", "aboutUs-tab-md", "data-toggle", "tab", "href", "#aboutUs-md", "role", "tab", "aria-controls", "aboutUs-md", "aria-selected", "true", 1, "nav-link", "active"], [1, "list-group-item"], ["id", "advisory-tab-md", "data-toggle", "tab", "href", "#advisory-md", "role", "tab", "aria-controls", "advisory-md", "aria-selected", "true", 1, "nav-link"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Some quick example text to build on the panel title and make up the bulk of the panel's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Another link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-link.active[_ngcontent-%COMP%]  {\ncolor:black;\nbackground: #eee;\n}\na[_ngcontent-%COMP%]{\n    color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsuYWN0aXZlICB7XG5jb2xvcjpibGFjaztcbmJhY2tncm91bmQ6ICNlZWU7XG59XG5he1xuICAgIGNvbG9yOmJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/auth.guard.service */ "./src/app/_helpers/auth.guard.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/forgot-password/forgot-password.component */ "./src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/post-detail/post-detail.component.ts");
/* harmony import */ var _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic-detail/topic-detail.component */ "./src/app/topic-detail/topic-detail.component.ts");
/* harmony import */ var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topic-list/topic-list.component */ "./src/app/topic-list/topic-list.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "./src/app/update-profile/update-profile.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");


















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'sections', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"] },
    { path: 'forgot', component: _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'profile', component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__["UpdateProfileComponent"] },
    {
        path: 'blogs',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
        children: [
            { path: '', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"] },
            { path: 'posts/:id', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"] },
            { path: 'post-detail/:id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_10__["PostDetailComponent"] },
            { path: 'profile/:id', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"] }
        ]
    },
    {
        path: 'forum',
        component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__["ForumComponent"],
        children: [
            { path: '', component: _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__["TopicListComponent"] },
            { path: 'topic-list/:id', component: _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__["TopicListComponent"] },
            { path: 'topic-detail/:id', component: _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_11__["TopicDetailComponent"] },
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_37_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currentUser.user.firstName ? ctx_r4.currentUser.user.firstName + " " + ctx_r4.currentUser.user.lastName : ctx_r4.currentUser.user.email);
} }
function AppComponent_li_37_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello Guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_37_a_1_Template, 2, 1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_li_37_a_2_Template, 2, 0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.currentUser.user);
} }
function AppComponent_li_38_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_38_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_38_a_1_Template, 2, 0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUser);
} }
class AppComponent {
    constructor(router, authenticationService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.title = 'tech-bidies-app-v2';
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        if (this.currentUser) {
            this.getUserDetails();
        }
        // if(!this.currentUser) this.router.navigate(['/login']);
    }
    getUserDetails() {
        this.userService.getUserDetails(this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.currentUser['user'] = res['user'];
        });
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 60, vars: 4, consts: [["id", "header", 2, "height", "250px"], [1, "container-fluid"], ["id", "top-social"], ["href", "https://www.facebook.com/dev.portal.90", "target", "_blank"], [1, "fab", "fa-facebook-f"], ["href", "http://twitter.com/", "target", "_blank"], [1, "fab", "fa-twitter"], ["href", "http://instagram.com/", "target", "_blank"], [1, "fab", "fa-instagram"], ["href", "http://pinterest.com/", "target", "_blank"], [1, "fab", "fa-pinterest"], ["id", "logo"], ["href", "#"], ["src", "../assets/images/bg.jpg", "alt", "Talentmitra", 2, "width", "250%", "height", "200px"], ["id", "top-search"], [1, "navbar", "sticky-top", "navbar-expand-lg", "black", "lighter-4", "navbar-dark", "scrolling-navbar", 2, "height", "62px"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["class", "nav-link", "routerLink", "blogs", 4, "ngIf"], ["class", "nav-link", "routerLink", "forum", 4, "ngIf"], ["routerLink", "contact", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "navbar-nav", "nav-flex-icons", "my-2", "my-lg-0", "ml-auto"], ["class", "nav-item dropdown", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "container-fluid", "px-0", 2, "margin-bottom", "12rem"], [1, "page-footer", "text-center", "font-small", "mt-4", 2, "width", "100%"], [1, "my-1"], [1, "pb-4"], [1, "fab", "fa-facebook-f", "mr-3"], [1, "fab", "fa-twitter", "mr-3"], [1, "fab", "fa-youtube", "mr-3"], [1, "fab", "fa-google-plus-g", "mr-3"], [1, "fab", "fa-pinterest", "mr-3"], [1, "fab", "fa-github", "mr-3"], [1, "footer-copyright", "py-2"], [1, "white-text"], ["routerLink", "blogs", 1, "nav-link"], ["routerLink", "forum", 1, "nav-link"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-primary"], ["routerLink", "profile", 1, "dropdown-item"], ["id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_a_28_Template, 2, 0, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_a_30_Template, 2, 0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_li_37_Template, 6, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppComponent_li_38_Template, 2, 1, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "footer", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00A9 2021 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Techbirdies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%]{\n    margin:auto;\n}\n\n*[_ngcontent-%COMP%], html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], input[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\nfieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    border: 0\n}\n\naddress[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], th[_ngcontent-%COMP%], var[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: 400\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    list-style: none\n}\n\ncaption[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    text-align: left\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    font-size: 100%;\n    font-weight: 400\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n    content: ''\n}\n\nstrong[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\nem[_ngcontent-%COMP%] {\n    font-style: italic\n}\n\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border: none\n}\n\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], b[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\nem[_ngcontent-%COMP%], i[_ngcontent-%COMP%], em[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], i[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-style: italic\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #f7f7f3;\n    font-family: \"Source Sans Pro\", sans-serif;\n    font-size: 14px;\n    color: #4c4a47\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .post-entry[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .more-link[_ngcontent-%COMP%], .by[_ngcontent-%COMP%], .item-related[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%], .side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%], #top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-family: \"Crimson Text\", sans-serif\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px\n}\n\na[_ngcontent-%COMP%] {\n    color: #95af7e;\n    text-decoration: none\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .subscribe-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .author-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .block-heading[_ngcontent-%COMP%], .thecomment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%]   h6.author[_ngcontent-%COMP%], .thecomment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%]   h6.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #respond[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], , .widget-title[_ngcontent-%COMP%], .promo-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .instagram-title[_ngcontent-%COMP%], .index-heading[_ngcontent-%COMP%], .archive-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: \"Source Sans Pro\", sans-serif\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    width: 1160px;\n    margin: 0 auto;\n    background-color: #fff;\n    box-shadow: 0 0 5px 5px rgba(200, 200, 200, .05);\n    border-radius: 10px;\n    margin-top: 30px\n}\n\n#content[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    padding-top: 45px\n}\n\n#main[_ngcontent-%COMP%] {\n    width: 740px;\n    float: left\n}\n\n#main.fullwidth[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n#sidebar[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 9px\n}\n\n#header[_ngcontent-%COMP%] {\n    padding: 65px 0 60px;\n    position: relative;\n    border-radius: 10px 10px 0 0\n}\n\n#logo[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto\n}\n\n#top-social[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    left: 40px\n}\n\n#top-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-right: 8px\n}\n\n.fa-twitter[_ngcontent-%COMP%] {\n    color: #15c3e0;\n}\n\n.fa-instagram[_ngcontent-%COMP%] {\n    color: #ff6000;\n}\n\n.fa-pinterest[_ngcontent-%COMP%] {\n    color: #b71111;\n}\n\n#top-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #000\n}\n\n#mobile-social[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    display: none\n}\n\n#top-search[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    right: 40px\n}\n\n#top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: 0 0;\n    border: none;\n    width: 140px;\n    padding: 0;\n    font-style: italic;\n    font-size: 13px\n}\n\n#top-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bbb\n}\n\n.widget.widget_mc4wp_form_widget[_ngcontent-%COMP%] {\n    padding: 0;\n    border: none\n}\n\n.widget.widget_mc4wp_form_widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    display: none\n}\n\n.post[_ngcontent-%COMP%] {\n    margin-bottom: 60px\n}\n\n.post-img[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n    text-align: center\n}\n\n.post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    max-width: 100%;\n    height: auto\n}\n\n.by[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-style: italic;\n    color: #999;\n    margin-right: 1px\n}\n\n#main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n    width: 340px;\n    margin-right: 30px\n}\n\n.comments[_ngcontent-%COMP%] {\n    margin-bottom: 40px\n}\n\n.widget[_ngcontent-%COMP%] {\n    background: 0 0;\n    border: 1px solid;\n    border-color: #d2c9c9;\n    border-top: unset;\n    padding: 25px 20px 22px;\n    display: block;\n    position: relative;\n    margin-bottom: 40px;\n    box-sizing: border-box\n}\n\n.widget[_ngcontent-%COMP%]:before, .widget[_ngcontent-%COMP%]:after {\n    content: '';\n    display: table\n}\n\n.widget-title[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: #000;\n    font-size: 11px;\n    font-weight: 400;\n    position: absolute;\n    top: -1px;\n    left: 0;\n    display: table;\n    overflow: hidden;\n    width: 100%;\n    border-bottom: none;\n    text-align: center;\n    white-space: nowrap;\n    transform: translateY(-50%);\n    margin-top: 0;\n    margin-bottom: 15px\n}\n\n.widget-title[_ngcontent-%COMP%]:before, .widget-title[_ngcontent-%COMP%]:after {\n    position: relative;\n    top: 10%;\n    display: table-cell;\n    width: 50%;\n    height: 1px;\n    border-top: 1px solid;\n    border-color: #ddd;\n    content: '';\n    transform: translate(0, 50%)\n}\n\n.widget-title[_ngcontent-%COMP%]:before {\n    right: 26px\n}\n\n.widget-title[_ngcontent-%COMP%]:after {\n    left: 26px\n}\n\n.widget.noborder[_ngcontent-%COMP%] {\n    border: none;\n    padding: 25px 0 0\n}\n\n.widget.notitle[_ngcontent-%COMP%] {\n    padding-top: 0\n}\n\n.widget.border_notitle[_ngcontent-%COMP%] {\n    border-top: 1px solid #ddd\n}\n\n.widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    vertical-align: middle;\n    height: auto\n}\n\n.widget[_ngcontent-%COMP%]   .screen-reader-text[_ngcontent-%COMP%] {\n    display: none\n}\n\n.widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 14px\n}\n\n.widget_categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .widget_archive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: #999;\n    font-size: 13px\n}\n\n.widget_categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .widget_archive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 5px\n}\n\n.side-pop[_ngcontent-%COMP%] {\n    margin-bottom: 20px\n}\n\n.side-pop[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0\n}\n\n.side-pop-img[_ngcontent-%COMP%] {\n    margin-bottom: 10px\n}\n\n.side-pop-content[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 6px\n}\n\n.side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #000\n}\n\n.side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #999;\n    font-style: italic;\n    display: block\n}\n\n.side-pop.list[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    overflow: hidden\n}\n\n.side-pop.list[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-img[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 85px;\n    margin-right: 15px;\n    margin-bottom: 0\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%] {\n    text-align: left;\n    overflow: hidden\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .pop-num[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    line-height: 23px;\n    font-size: 13px\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%] {\n    font-size: 13px\n}\n\n.about-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-bottom: 15px\n}\n\n.about-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 18px\n}\n\n.social-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 3px\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    margin-left: 0\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    margin-right: 0\n}\n\n.social-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    text-align: center;\n    display: inline-block;\n    background: #95af7e;\n    color: #fff;\n    font-size: 12px;\n    height: 28px;\n    width: 28px;\n    line-height: 29px;\n    border-radius: 100%;\n    transition: .3s\n}\n\n.social-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    opacity: .8\n}\n\n.center-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#sidebar[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%], .footer-widgets[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    overflow: hidden;\n    margin-bottom: -10px\n}\n\n.widget[_ngcontent-%COMP%]   ul.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   ul.children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    margin-top: 9px\n}\n\n.widget.talentmitra_facebook_widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#wp-calendar[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n#footer[_ngcontent-%COMP%] {\n    margin-top: 40px\n}\n\n#footer-copyright[_ngcontent-%COMP%] {\n    overflow: hidden;\n    padding: 26px 0\n}\n\n#footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #a5a5a5\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    background: #eee;\n    border-radius: 0;\n    font-size: 11px;\n    color: #888;\n    padding: 11px 21px;\n    margin-top: 14px;\n    display: inline-block;\n    border: none;\n    transition: .3s;\n    cursor: pointer;\n    border-radius: 30px;\n    width: auto\n}\n\ninput[type=submit][_ngcontent-%COMP%]:hover {\n    background: #333;\n    color: #fff\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    color: #888;\n    padding: 9px 10px;\n    width: 100%;\n    box-sizing: border-box\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n    border: 1px solid #c4c4c4;\n    outline: none\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n    width: auto\n}\n\n.fa[_ngcontent-%COMP%] {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transform: translate(0, 0)\n}\n\n@media only screen and (min-width:942px) and (max-width:1170px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 940px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 610px\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 260px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0 18px\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 280px;\n        height: 420px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 190px;\n        margin-right: 16px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 280px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 290px;\n        margin-right: 26px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 430px\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 1.52%\n    }\n\n    .item-related[_ngcontent-%COMP%] {\n        width: 190px;\n        margin-right: 20px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 280px\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .recipe-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        width: 80%\n    }\n\n    .post-widget[_ngcontent-%COMP%]   .subscribe-text[_ngcontent-%COMP%] {\n        width: 40%\n    }\n\n    .post-widget[_ngcontent-%COMP%]   .subscribe-form[_ngcontent-%COMP%] {\n        width: 60%\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin: 0 18px\n    }\n}\n\n@media only screen and (min-width:767px) and (max-width:960px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 726px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 100%\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 480px;\n        margin: 0 auto;\n        float: none;\n        overflow: hidden;\n        padding-top: 5px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .slicknav_menu[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #mobile-social[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #top-social[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 216px;\n        height: 324px;\n        margin-right: 21px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 216px;\n        margin-right: 17px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 330px;\n        margin-right: 26px\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 1.5%\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 216px;\n        margin-right: 21px\n    }\n\n    .subscribe-text[_ngcontent-%COMP%] {\n        width: 40%\n    }\n\n    .subscribe-form[_ngcontent-%COMP%] {\n        width: 60%\n    }\n\n    .home-widget[_ngcontent-%COMP%]   .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 50%\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n        width: auto\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    textarea[_ngcontent-%COMP%], input.text[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n        -webkit-appearance: none;\n        border-radius: 0\n    }\n}\n\n@media only screen and (max-width:767px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 320px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 100%\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0 auto;\n        float: none;\n        overflow: hidden;\n        padding-top: 5px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .slicknav_menu[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #mobile-social[_ngcontent-%COMP%] {\n        display: block;\n        right: 10px\n    }\n\n    #top-social[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 280px;\n        height: 280px;\n        margin-right: 0;\n        margin-bottom: 14px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 0;\n        width: 100%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n        float: none;\n        margin-right: 0\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 20px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n        margin-top: 0\n    }\n\n    .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .post-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .meta-info[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 5px\n    }\n\n    .post-share[_ngcontent-%COMP%] {\n        float: left\n    }\n\n    .post-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n        margin-left: 0\n    }\n\n    .post-pagination[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%], .post-pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n        width: 100%;\n        float: none;\n        text-align: center;\n        display: block\n    }\n\n    .post-pagination[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n        margin-bottom: 10px\n    }\n\n    .post-author[_ngcontent-%COMP%] {\n        text-align: center\n    }\n\n    .author-img[_ngcontent-%COMP%] {\n        float: none;\n        margin-right: 0;\n        margin-bottom: 10px\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .recipe-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .recipe-overview[_ngcontent-%COMP%]   a.sp-print[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-bottom: 14px;\n        float: none\n    }\n\n    .step[_ngcontent-%COMP%]   span.step-number[_ngcontent-%COMP%] {\n        width: 20px;\n        height: 20px;\n        line-height: 20px;\n        margin-right: 10px\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0;\n        margin-bottom: 20px\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .home-widget[_ngcontent-%COMP%] {\n        margin-top: 20px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%] {\n        padding: 32px 28px\n    }\n\n    .subscribe-text[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        text-align: center\n    }\n\n    .subscribe-form[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        text-align: center\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home-widget[_ngcontent-%COMP%]   .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        box-sizing: border-box;\n        margin-bottom: 12px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n        width: 100%;\n        margin-left: 0;\n        margin-bottom: 0\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n        font-size: 13px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        margin-bottom: 4px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin: 0 5px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .left-copy[_ngcontent-%COMP%] {\n        float: none;\n        text-align: left;\n        width: 100%;\n        margin-bottom: 5px\n    }\n\n    .right-copy[_ngcontent-%COMP%] {\n        float: none;\n        text-align: left\n    }\n\n    #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        width: 25%\n    }\n\n    #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(12), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(11), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(10)   #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(9), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(8), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(7) {\n        display: none\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .index-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        position: relative;\n        top: 5px;\n        display: block;\n        padding-left: 0\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .index-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n        height: auto;\n        line-height: 15px\n    }\n\n    textarea[_ngcontent-%COMP%], input.text[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n        -webkit-appearance: none;\n        border-radius: 0\n    }\n}\n\n@media only screen and (min-width:480px) and (max-width:767px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 480px\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 280px;\n        margin-right: 0;\n        margin-bottom: 14px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-of-type(2n+2), #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-of-type(2n+2) {\n        margin-right: 0\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 48%;\n        margin-right: 3.2%\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 48%;\n        margin-right: 3.2%\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 23.5%;\n        margin-right: 1.36%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n        float: left;\n        margin-right: 20px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 160px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%] {\n        text-align: left;\n        margin-top: 0;\n        margin-bottom: 14px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .meta-comments[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .post-share[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 138px;\n        margin-right: 13px;\n        margin-bottom: 0\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n        display: block;\n        margin-right: 10px\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 40px;\n        height: auto\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px;\n        margin: 0 12px\n    }\n}\n\n#header[_ngcontent-%COMP%] {\n    padding-top: px;\n    padding-bottom: px\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #f5f5f5\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    margin-top: px\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    border-radius: px\n}\n\n#header[_ngcontent-%COMP%] {\n    border-radius: px px 0 0\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 740px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 850px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n     background: #1C2331!important;\n  }\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.top-nav-collapse[_ngcontent-%COMP%] {\n  background-color: #1C2331; }\n\n\n\n@media only screen and (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    background-color: #1C2331; } }\n\n\n\n.page-footer[_ngcontent-%COMP%] {\n  background-color: #1C2331; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYmxvZy5taW4uY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSSxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7Ozs7Ozs7OztJQVNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7Ozs7OztJQU1JLGVBQWU7SUFDZjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7Ozs7SUFJSTtBQUNKOztBQUVBOzs7O0lBSUk7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7O0lBRUksZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBR0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFJQTtJQUNJO0FBQ0o7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBS25CLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2I7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUtYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBS25CO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsWUFBWTtJQUtaLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7OztJQUdJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBSUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWjtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7Ozs7OztRQU1JLHdCQUF3QjtRQUN4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQjtJQUNKOztJQUVBOztRQUVJLFdBQVc7UUFDWCxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkO0lBQ0o7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkI7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWDtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOzs7OztRQUtJO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7Ozs7OztRQU1JLHdCQUF3QjtRQUN4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7UUFDZjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Y7SUFDSjs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Y7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2I7SUFDSjs7SUFFQTs7UUFFSTtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEI7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksZUFBZTtRQUNmO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjtBQUNKOztBQUtBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQzVwQ0E7Ozs7RUFJRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTs7OztJQUlFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFOzs7O0lBSUUsYUFBYTtFQUNmO0FBQ0Y7O0FBQ0E7RUFDRTtLQUNHLDZCQUE2QjtFQUNoQztBQUNGOztBQUNBLHFCQUFxQjs7QUFDckI7RUFDRSxvQ0FBb0MsRUFBRTs7QUFFeEM7RUFDRSx5QkFBeUIsRUFBRTs7QUFFN0IseUNBQXlDOztBQUN6QztFQUNFO0lBQ0UseUJBQXlCLEVBQUUsRUFBRTs7QUFFakMscURBQXFEOztBQUNyRDtFQUNFLHlCQUF5QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbjphdXRvO1xufVxuXG4qLFxuaHRtbCxcbmJvZHksXG5kaXYsXG5kbCxcbmR0LFxuZGQsXG51bCxcbm9sLFxubGksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wcmUsXG5mb3JtLFxubGFiZWwsXG5maWVsZHNldCxcbmlucHV0LFxucCxcbmJsb2NrcXVvdGUsXG50aCxcbnRkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMFxufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMFxufVxuXG5maWVsZHNldCxcbmltZyB7XG4gICAgYm9yZGVyOiAwXG59XG5cbmFkZHJlc3MsXG5jYXB0aW9uLFxuY2l0ZSxcbmNvZGUsXG5kZm4sXG5lbSxcbnN0cm9uZyxcbnRoLFxudmFyIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG5vbCxcbnVsLFxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbn1cblxuY2FwdGlvbixcbnRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJ1xufVxuXG5zdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDBcbn1cblxuZW0ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xufVxuXG5hIGltZyB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbnN0cm9uZyxcbmIsXG5zdHJvbmcgKixcbmIgKiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMFxufVxuXG5lbSxcbmksXG5lbSAqLFxuaSAqIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWNcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmMztcbiAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0YzRhNDdcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuLnBvc3QtZW50cnkgYmxvY2txdW90ZSBwLFxuLmVudHJ5LWNvbnRlbnQgYmxvY2txdW90ZSBwLFxuLm1vcmUtbGluayxcbi5ieSxcbi5pdGVtLXJlbGF0ZWQgc3Bhbi5kYXRlLFxuLnNpZGUtcG9wLWNvbnRlbnQgc3Bhbi5kYXRlLFxuI3RvcC1zZWFyY2ggaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNyaW1zb24gVGV4dFwiLCBzYW5zLXNlcmlmXG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweFxufVxuXG5hIHtcbiAgICBjb2xvcjogIzk1YWY3ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbi5zdWJzY3JpYmUtYm94IGg0LFxuLmF1dGhvci1jb250ZW50IGg1IGEsXG4uYmxvY2staGVhZGluZyxcbi50aGVjb21tZW50IC5jb21tZW50LXRleHQgaDYuYXV0aG9yLFxuLnRoZWNvbW1lbnQgLmNvbW1lbnQtdGV4dCBoNi5hdXRob3IgYSxcbiNyZXNwb25kIGgzLCxcbi53aWRnZXQtdGl0bGUsXG4ucHJvbW8tb3ZlcmxheSBoNCxcbi5pbnN0YWdyYW0tdGl0bGUsXG4uaW5kZXgtaGVhZGluZyxcbi5hcmNoaXZlLWJveCBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWZcbn1cblxuI3dyYXBwZXIge1xuICAgIHdpZHRoOiAxMTYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCByZ2JhKDIwMCwgMjAwLCAyMDAsIC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4XG59XG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4XG59XG5cbiNtYWluIHtcbiAgICB3aWR0aDogNzQwcHg7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuI21haW4uZnVsbHdpZHRoIHtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4jc2lkZWJhciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA5cHhcbn1cblxuI2hlYWRlciB7XG4gICAgcGFkZGluZzogNjVweCAwIDYwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDBcbn1cblxuI2xvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4jbG9nbyBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG9cbn1cblxuI3RvcC1zb2NpYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNDBweFxufVxuXG4jdG9wLXNvY2lhbCBhLFxuI21vYmlsZS1zb2NpYWwgYSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4XG59XG4uZmEtdHdpdHRlciB7XG4gICAgY29sb3I6ICMxNWMzZTA7XG59XG4uZmEtaW5zdGFncmFtIHtcbiAgICBjb2xvcjogI2ZmNjAwMDtcbn1cbi5mYS1waW50ZXJlc3Qge1xuICAgIGNvbG9yOiAjYjcxMTExO1xufVxuXG4jdG9wLXNvY2lhbCBhOmhvdmVyLFxuI21vYmlsZS1zb2NpYWwgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDBcbn1cblxuI21vYmlsZS1zb2NpYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4jdG9wLXNlYXJjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICByaWdodDogNDBweFxufVxuXG4jdG9wLXNlYXJjaCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogMCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbiN0b3Atc2VhcmNoIGkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2JiYlxufVxuXG4ud2lkZ2V0LndpZGdldF9tYzR3cF9mb3JtX3dpZGdldCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmVcbn1cblxuLndpZGdldC53aWRnZXRfbWM0d3BfZm9ybV93aWRnZXQgLndpZGdldC10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4ucG9zdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweFxufVxuXG5cbi5wb3N0LWltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnBvc3QtaW1nIGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvXG59XG5cbi5ieSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweFxufVxuXG5cbiNtYWluLmZ1bGx3aWR0aCAuaXRlbS1yZWxhdGVkIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4XG59XG5cblxuXG4uY29tbWVudHMge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHhcbn1cblxuXG5cbi53aWRnZXQge1xuICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNkMmM5Yzk7XG4gICAgYm9yZGVyLXRvcDogdW5zZXQ7XG4gICAgcGFkZGluZzogMjVweCAyMHB4IDIycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG4ud2lkZ2V0OmJlZm9yZSxcbi53aWRnZXQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlXG59XG5cbi53aWRnZXQtdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHhcbn1cblxuLndpZGdldC10aXRsZTpiZWZvcmUsXG4ud2lkZ2V0LXRpdGxlOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMCU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgY29udGVudDogJyc7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSlcbn1cblxuLndpZGdldC10aXRsZTpiZWZvcmUge1xuICAgIHJpZ2h0OiAyNnB4XG59XG5cbi53aWRnZXQtdGl0bGU6YWZ0ZXIge1xuICAgIGxlZnQ6IDI2cHhcbn1cblxuLndpZGdldC5ub2JvcmRlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDI1cHggMCAwXG59XG5cbi53aWRnZXQubm90aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDBcbn1cblxuLndpZGdldC5ib3JkZXJfbm90aXRsZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRcbn1cblxuLndpZGdldCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogYXV0b1xufVxuXG4ud2lkZ2V0IC5zY3JlZW4tcmVhZGVyLXRleHQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLndpZGdldCBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxufVxuXG4ud2lkZ2V0IHVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG59XG5cbi53aWRnZXQgdWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lXG59XG5cbi53aWRnZXQgdWwgbGkgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4XG59XG5cbi53aWRnZXRfY2F0ZWdvcmllcyB1bCBsaSxcbi53aWRnZXRfYXJjaGl2ZSB1bCBsaSB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbi53aWRnZXRfY2F0ZWdvcmllcyBhLFxuLndpZGdldF9hcmNoaXZlIGEge1xuICAgIG1hcmdpbi1yaWdodDogNXB4XG59XG5cbi5zaWRlLXBvcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxufVxuXG4uc2lkZS1wb3A6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG4uc2lkZS1wb3AtaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG59XG5cbi5zaWRlLXBvcC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnNpZGUtcG9wLWNvbnRlbnQgaDQge1xuICAgIG1hcmdpbi1ib3R0b206IDZweFxufVxuXG4uc2lkZS1wb3AtY29udGVudCBoNCBhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDBcbn1cblxuLnNpZGUtcG9wLWNvbnRlbnQgc3Bhbi5kYXRlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5zaWRlLXBvcC5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLnNpZGUtcG9wLmxpc3Q6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG4uc2lkZS1wb3AubGlzdCAuc2lkZS1wb3AtaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDg1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLnNpZGUtcG9wLmxpc3QgLnNpZGUtcG9wLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4uc2lkZS1wb3AubGlzdCAuc2lkZS1wb3AtY29udGVudCBoNCBhIHtcbiAgICBmb250LXNpemU6IDE0cHhcbn1cblxuLnNpZGUtcG9wLmxpc3QgLnBvcC1udW0ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLnNpZGUtcG9wLmxpc3QgLnNpZGUtcG9wLWNvbnRlbnQgc3Bhbi5kYXRlIHtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLmFib3V0LXdpZGdldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5hYm91dC1pbWcgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxufVxuXG4uYWJvdXQtd2lkZ2V0IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHhcbn1cblxuLnNvY2lhbC13aWRnZXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uc29jaWFsLXdpZGdldCBhIHtcbiAgICBtYXJnaW46IDAgM3B4XG59XG5cbi5zb2NpYWwtd2lkZ2V0IGE6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwXG59XG5cbi5zb2NpYWwtd2lkZ2V0IGE6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwXG59XG5cbi5zb2NpYWwtd2lkZ2V0IGkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzk1YWY3ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLW8tdHJhbnNpdGlvbjogLjNzO1xuICAgIC1tcy10cmFuc2l0aW9uOiAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbjogLjNzXG59XG5cbi5zb2NpYWwtd2lkZ2V0IGk6aG92ZXIge1xuICAgIG9wYWNpdHk6IC44XG59XG5cbi5jZW50ZXItd2lkZ2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuI3NpZGViYXIgLmluc3RhZ3JhbS1waWNzLFxuLmZvb3Rlci13aWRnZXRzIC5pbnN0YWdyYW0tcGljcyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHhcbn1cblxuXG4ud2lkZ2V0IHVsLm1lbnUgbGkgdWwsXG4ud2lkZ2V0IHVsLmNoaWxkcmVuIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogOXB4XG59XG5cbi53aWRnZXQudGFsZW50bWl0cmFfZmFjZWJvb2tfd2lkZ2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuI3dwLWNhbGVuZGFyIHtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4jZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4XG59XG5cblxuI2Zvb3Rlci1jb3B5cmlnaHQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMjZweCAwXG59XG5cbiNmb290ZXItY29weXJpZ2h0IHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2E1YTVhNVxufVxuXG5cblxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBwYWRkaW5nOiAxMXB4IDIxcHg7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC1vLXRyYW5zaXRpb246IC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogYXV0b1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgY29sb3I6ICNmZmZcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgb3V0bGluZTogbm9uZVxufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuLmZhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApXG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTQycHgpIGFuZCAobWF4LXdpZHRoOjExNzBweCkge1xuICAgICN3cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDk0MHB4XG4gICAgfVxuXG4gICAgI21haW4ge1xuICAgICAgICB3aWR0aDogNjEwcHhcbiAgICB9XG5cbiAgICAjc2lkZWJhciB7XG4gICAgICAgIHdpZHRoOiAyNjBweFxuICAgIH1cblxuICAgICNuYXYtd3JhcHBlciAubWVudSBsaSB7XG4gICAgICAgIG1hcmdpbjogMCAxOHB4XG4gICAgfVxuXG4gICAgLmZlYXQtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgaGVpZ2h0OiA0MjBweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIGgyIGEge1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wzPmxpIHtcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHhcbiAgICB9XG5cbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMz5saSB7XG4gICAgICAgIHdpZHRoOiAyODBweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDI+bGkge1xuICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjZweFxuICAgIH1cblxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wyPmxpIHtcbiAgICAgICAgd2lkdGg6IDQzMHB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sND5saSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41MiVcbiAgICB9XG5cbiAgICAuaXRlbS1yZWxhdGVkIHtcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbiAgICB9XG5cbiAgICAjbWFpbi5mdWxsd2lkdGggLml0ZW0tcmVsYXRlZCB7XG4gICAgICAgIHdpZHRoOiAyODBweFxuICAgIH1cblxuICAgIC5wb3N0LWVudHJ5IC5yZWNpcGUtb3ZlcnZpZXcgaDIge1xuICAgICAgICB3aWR0aDogODAlXG4gICAgfVxuXG4gICAgLnBvc3Qtd2lkZ2V0IC5zdWJzY3JpYmUtdGV4dCB7XG4gICAgICAgIHdpZHRoOiA0MCVcbiAgICB9XG5cbiAgICAucG9zdC13aWRnZXQgLnN1YnNjcmliZS1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDYwJVxuICAgIH1cblxuICAgICNmb290ZXItc29jaWFsIGEge1xuICAgICAgICBtYXJnaW46IDAgMThweFxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KSBhbmQgKG1heC13aWR0aDo5NjBweCkge1xuICAgICN3cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDcyNnB4XG4gICAgfVxuXG4gICAgI21haW4ge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cblxuICAgICNzaWRlYmFyIHtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHhcbiAgICB9XG5cbiAgICAjbmF2LXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLnNsaWNrbmF2X21lbnUge1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cblxuICAgICNtb2JpbGUtc29jaWFsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG5cbiAgICAjdG9wLXNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuZmVhdC1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDIxNnB4O1xuICAgICAgICBoZWlnaHQ6IDMyNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxcHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweCAxM3B4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIgaDIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDM+bGksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDM+bGkge1xuICAgICAgICB3aWR0aDogMjE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTdweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDI+bGksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDI+bGkge1xuICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjZweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDQ+bGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNSVcbiAgICB9XG5cbiAgICAuaXRlbS1yZWxhdGVkLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuaXRlbS1yZWxhdGVkIHtcbiAgICAgICAgd2lkdGg6IDIxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxcHhcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLXRleHQge1xuICAgICAgICB3aWR0aDogNDAlXG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDYwJVxuICAgIH1cblxuICAgIC5ob21lLXdpZGdldCAuc3Vic2NyaWJlLWJveCBpbnB1dCxcbiAgICAuc3Vic2NyaWJlLWJveCBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA1MCVcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWJveCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICB3aWR0aDogYXV0b1xuICAgIH1cblxuICAgICNmb290ZXItc29jaWFsIGEge1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICB9XG5cbiAgICAjZm9vdGVyLXNvY2lhbCBhIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgdGV4dGFyZWEsXG4gICAgaW5wdXQudGV4dCxcbiAgICBpbnB1dFt0eXBlPXRleHRdLFxuICAgIGlucHV0W3R5cGU9YnV0dG9uXSxcbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF0sXG4gICAgLmlucHV0LWNoZWNrYm94IHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAzMjBweFxuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAjc2lkZWJhciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHhcbiAgICB9XG5cbiAgICAjbmF2LXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLnNsaWNrbmF2X21lbnUge1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cblxuICAgICNtb2JpbGUtc29jaWFsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHJpZ2h0OiAxMHB4XG4gICAgfVxuXG4gICAgI3RvcC1zb2NpYWwge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLmZlYXQtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMTNweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIGgyIGEge1xuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wzPmxpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wzPmxpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDI+bGksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDI+bGkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sND5saSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LWltZyB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LWltZyBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LWhlYWRlciBoMiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4XG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1tZXRhIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMFxuICAgIH1cblxuICAgIC5wb3N0LWhlYWRlciBoMiBhLFxuICAgIC5wb3N0LWhlYWRlciBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDIgLmdyaWQtaXRlbSAucG9zdC1oZWFkZXIgaDIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgIH1cblxuICAgIC5tZXRhLWluZm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4XG4gICAgfVxuXG4gICAgLnBvc3Qtc2hhcmUge1xuICAgICAgICBmbG9hdDogbGVmdFxuICAgIH1cblxuICAgIC5wb3N0LXNoYXJlIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMFxuICAgIH1cblxuICAgIC5wb3N0LXBhZ2luYXRpb24gLnByZXYsXG4gICAgLnBvc3QtcGFnaW5hdGlvbiAubmV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cblxuICAgIC5wb3N0LXBhZ2luYXRpb24gLnByZXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgfVxuXG4gICAgLnBvc3QtYXV0aG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuXG4gICAgLmF1dGhvci1pbWcge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgfVxuXG4gICAgLnBvc3QtZW50cnkgLnJlY2lwZS1vdmVydmlldyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgIH1cblxuICAgIC5yZWNpcGUtb3ZlcnZpZXcgYS5zcC1wcmludCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgZmxvYXQ6IG5vbmVcbiAgICB9XG5cbiAgICAuc3RlcCBzcGFuLnN0ZXAtbnVtYmVyIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuICAgIH1cblxuICAgIC5pdGVtLXJlbGF0ZWQsXG4gICAgI21haW4uZnVsbHdpZHRoIC5pdGVtLXJlbGF0ZWQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgfVxuXG4gICAgLnRoZWNvbW1lbnQgLmF1dGhvci1pbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLmhvbWUtd2lkZ2V0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweFxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtYm94IHtcbiAgICAgICAgcGFkZGluZzogMzJweCAyOHB4XG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS10ZXh0IHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWZvcm0ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtYm94IGlucHV0LFxuICAgIC5ob21lLXdpZGdldCAuc3Vic2NyaWJlLWJveCBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4XG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1ib3ggaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1ib3ggcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweFxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtYm94IGg0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4XG4gICAgfVxuXG4gICAgI2Zvb3Rlci1zb2NpYWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwIDVweFxuICAgIH1cblxuICAgICNmb290ZXItc29jaWFsIGEgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAubGVmdC1jb3B5IHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHhcbiAgICB9XG5cbiAgICAucmlnaHQtY29weSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgfVxuXG4gICAgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzIGxpIHtcbiAgICAgICAgd2lkdGg6IDI1JVxuICAgIH1cblxuICAgICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcz5saTpudGgtY2hpbGQoMTIpLFxuICAgICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcz5saTpudGgtY2hpbGQoMTEpLFxuICAgICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcz5saTpudGgtY2hpbGQoMTApICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcz5saTpudGgtY2hpbGQoOSksXG4gICAgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzPmxpOm50aC1jaGlsZCg4KSxcbiAgICAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3M+bGk6bnRoLWNoaWxkKDcpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5wb3N0LWVudHJ5IC5pbmRleC1oZWFkaW5nIGEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwXG4gICAgfVxuXG4gICAgLnBvc3QtZW50cnkgLmluZGV4LWhlYWRpbmc+c3BhbiB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHhcbiAgICB9XG5cbiAgICB0ZXh0YXJlYSxcbiAgICBpbnB1dC50ZXh0LFxuICAgIGlucHV0W3R5cGU9dGV4dF0sXG4gICAgaW5wdXRbdHlwZT1idXR0b25dLFxuICAgIGlucHV0W3R5cGU9c3VibWl0XSxcbiAgICAuaW5wdXQtY2hlY2tib3gge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0ODBweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA0ODBweFxuICAgIH1cblxuICAgIC5mZWF0LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMTNweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIGgyIGEge1xuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wzPmxpOm50aC1vZi10eXBlKDJuKzIpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wzPmxpOm50aC1vZi10eXBlKDJuKzIpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMz5saSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMz5saSB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMy4yJVxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDI+bGksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDI+bGkge1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuMiVcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2w0PmxpIHtcbiAgICAgICAgd2lkdGg6IDIzLjUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMzYlXG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1pbWcge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4XG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1pbWcgaW1nLFxuICAgICNtYWluLmZ1bGx3aWR0aCAubGlzdC1pdGVtIC5wb3N0LWltZyBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDE2MHB4XG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAubGlzdC1jb250ZW50IC5wb3N0LWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHhcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LW1ldGEgLm1ldGEtY29tbWVudHMsXG4gICAgLmxpc3QtaXRlbSAucG9zdC1tZXRhIC5wb3N0LXNoYXJlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5pdGVtLXJlbGF0ZWQsXG4gICAgI21haW4uZnVsbHdpZHRoIC5pdGVtLXJlbGF0ZWQge1xuICAgICAgICB3aWR0aDogMTM4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgIH1cblxuICAgIC50aGVjb21tZW50IC5hdXRob3ItaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuICAgIH1cblxuICAgIC50aGVjb21tZW50IC5hdXRob3ItaW1nIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgfVxuXG4gICAgI2Zvb3Rlci1zb2NpYWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwIDEycHhcbiAgICB9XG59XG5cblxuXG5cbiNoZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogcHhcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxufVxuXG4jd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogcHhcbn1cblxuI3dyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IHB4XG59XG5cbiNoZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IHB4IHB4IDAgMFxufVxuXG4iLCJAaW1wb3J0IFwiLi4vYXNzZXRzL2Jsb2cubWluLmNzc1wiO1xuaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIGh0bWwsXG4gIGJvZHksXG4gIGhlYWRlcixcbiAgLnZpZXcge1xuICAgIGhlaWdodDogMTAwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIGh0bWwsXG4gIGJvZHksXG4gIGhlYWRlcixcbiAgLnZpZXcge1xuICAgIGhlaWdodDogNjUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XG4gICAgIGJhY2tncm91bmQ6ICMxQzIzMzEhaW1wb3J0YW50O1xuICB9XG59XG4vKiBOYXZiYXIgYW5pbWF0aW9uICovXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi50b3AtbmF2LWNvbGxhcHNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTsgfVxuXG4vKiBBZGRpbmcgY29sb3IgdG8gdGhlIE5hdmJhciBvbiBtb2JpbGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTsgfSB9XG5cbi8qIEZvb3RlciBjb2xvciBmb3Igc2FrZSBvZiBjb25zaXN0ZW5jeSB3aXRoIE5hdmJhciAqL1xuLnBhZ2UtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTsgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/alert.service */ "./src/app/login/alert.service.ts");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_helpers/auth.guard.service */ "./src/app/_helpers/auth.guard.service.ts");
/* harmony import */ var _helpers_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_helpers/jwt.interceptor.service */ "./src/app/_helpers/jwt.interceptor.service.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/alert/alert.component */ "./src/app/_components/alert/alert.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/forgot-password/forgot-password.component */ "./src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/post-detail/post-detail.component.ts");
/* harmony import */ var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./topic-list/topic-list.component */ "./src/app/topic-list/topic-list.component.ts");
/* harmony import */ var _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./topic-detail/topic-detail.component */ "./src/app/topic-detail/topic-detail.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "./src/app/update-profile/update-profile.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_pipes/truncare-text.pipe */ "./src/app/_pipes/truncare-text.pipe.ts");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_login_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"], _login_auth_service_service__WEBPACK_IMPORTED_MODULE_13__["AuthServiceService"], _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptorService"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true },
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MyMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
        _sections_sections_component__WEBPACK_IMPORTED_MODULE_21__["SectionsComponent"],
        _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_24__["PostsComponent"],
        _forum_forum_component__WEBPACK_IMPORTED_MODULE_25__["ForumComponent"],
        _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_26__["PostDetailComponent"],
        _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_27__["TopicListComponent"],
        _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_28__["TopicDetailComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"],
        _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_30__["BlogCreateComponent"],
        _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_31__["UpdateProfileComponent"],
        _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_32__["UserDetailsComponent"],
        _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_33__["TruncateTextPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MyMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                    _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                    _sections_sections_component__WEBPACK_IMPORTED_MODULE_21__["SectionsComponent"],
                    _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_24__["PostsComponent"],
                    _forum_forum_component__WEBPACK_IMPORTED_MODULE_25__["ForumComponent"],
                    _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_26__["PostDetailComponent"],
                    _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_27__["TopicListComponent"],
                    _topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_28__["TopicDetailComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"],
                    _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_30__["BlogCreateComponent"],
                    _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_31__["UpdateProfileComponent"],
                    _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_32__["UserDetailsComponent"],
                    _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_33__["TruncateTextPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MyMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]
                ],
                providers: [_login_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"], _login_auth_service_service__WEBPACK_IMPORTED_MODULE_13__["AuthServiceService"], _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptorService"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true },
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog-create/blog-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.ts ***!
  \******************************************************/
/*! exports provided: BlogCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function() { return BlogCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");










function BlogCreateComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
} }
class BlogCreateComponent {
    constructor(formBuilder, router, authenticationService, postQueryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.users = [];
        this.percentDone = 0;
        this.posts = [];
        this.categories = [];
        this.Posts = [];
        this.editorConfig = {
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
            toolbarHiddenButtons: []
        };
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser)
            this.router.navigate(['/']);
    }
    ngOnInit() {
        this.getCategories();
        this.postContent = this.formBuilder.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shortDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            myFile: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    getCategories() {
        this.postQueryService.getCategories(this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.categories = res;
        });
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.postContent.patchValue({
            myFile: file
        });
        this.postContent.get('myFile').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSubmit() {
        this.postQueryService.addPost(this.postContent.value.content, this.postContent.value.category, this.postContent.value.myFile, this.postContent.value.shortDescription, this.currentUser.token).subscribe((event) => {
            console.log(event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    console.log('Post successfully created!', event.body);
                    alert(event.body.message);
                    this.router.navigate(['']);
                    this.percentDone = false;
            }
        });
    }
}
BlogCreateComponent.ɵfac = function BlogCreateComponent_Factory(t) { return new (t || BlogCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_5__["PostQueryService"])); };
BlogCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogCreateComponent, selectors: [["app-blog-create"]], decls: 27, vars: 3, consts: [[1, "container"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "mb-4"], ["for", "category", 1, "col-sm-4"], [1, "text-center", "mb-3", "col-sm-8", "form-group"], ["name", "category", "id", "category", "formControlName", "category", "required", "", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "shortDescription", "required", "", 1, "form-control"], [1, "text-center", "mb-3", "col-md-12", "form-group"], ["formControlName", "content", 3, "config"], [1, "text-center", "mb-3", "col-md-4", "form-group"], [1, "form-group"], ["type", "file", 3, "change"], [1, "text-center", "mb-3", "col-md-3", "form-group"], [1, "btn", "btn-pink", "btn-rounded", "btn-block", "btn-rounded", "z-depth-1"], [3, "value"]], template: function BlogCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BlogCreateComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogCreateComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Short Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "angular-editor", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlogCreateComponent_Template_input_change_22_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.editorConfig);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctY3JlYXRlL2Jsb2ctY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-create',
                templateUrl: './blog-create.component.html',
                styleUrls: ['./blog-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_5__["PostQueryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");








function BlogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_14_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-blog-create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_li_26_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const post_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r6.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BlogComponent_li_26_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
} }
function BlogComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_li_26_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const post_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.gotoDetails(post_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogComponent_li_26_img_4_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogComponent_li_26_img_5_Template, 1, 0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_li_26_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const post_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.gotoDetails(post_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r6.myFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !post_r6.myFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, post_r6.shortDescription), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, post_r6.postedOn, "MMM d, y"));
} }
function BlogComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_li_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const group_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.gotoPostsByCategory(group_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", group_r13.count, ") ");
} }
function BlogComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_li_37_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const thread_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.gotoDetails(thread_r16._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thread_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, thread_r16.shortDescription), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, thread_r16.postedOn, "MMM d, y"));
} }
class BlogComponent {
    constructor(formBuilder, router, authenticationService, postQueryService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.users = [];
        this.topics = [];
        this.posts = [];
        this.showCreate = false;
        this.groups = [];
        this.threads = [];
        this.category = [];
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser)
            this.router.navigate(['/']);
    }
    ngOnInit() {
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
        this.router.navigate(['posts/' + id], { relativeTo: this.route });
        // this.router.navigate(['blogs/'+id]);
    }
    gotoDetails(id) {
        this.router.navigate(['blogs/post-detail/' + id]);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 38, vars: 4, consts: [[1, "container", 2, "margin-top", "3rem"], [1, "row"], [1, "col-sm-4", "col-lg-4", "col-xs-4"], [1, "pull-right", 2, "float", "right", "display", "none"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Topics", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-search"], [1, "container"], [1, "mt-1"], [1, "col-md-9", "mb-4"], ["class", "post", "style", "border:1px solid #eee;padding:1rem 2rem", 4, "ngIf"], [1, "col-md-3", "mb-4", "pl-4"], [1, "mb-4"], [1, "mb-3", "col-md-12", "form-group"], [1, "btn", "teal", "btn-md", "white-text", 3, "click"], [1, "mb-4", "widget"], [1, "widget-title"], [1, "side-pop", "list"], [1, "list-unstyled", 2, "font-size", "x-small"], ["class", "media my-2", 4, "ngFor", "ngForOf"], ["id", "categories-2", 1, "widget", "widget_categories"], ["class", "cat-item cat-item-2", 4, "ngFor", "ngForOf"], [1, "widget", "mb-4"], [1, "post", 2, "border", "1px solid #eee", "padding", "1rem 2rem"], [1, "px-2", 2, "float", "right"], [1, "fa", "fa-times", "red-text", 3, "click"], [1, "media", "my-2"], [1, "media-body"], [1, "side-pop-img", 2, "height", "50px", "width", "50px"], ["href", "javascript:void(0)", "rel", "bookmark", 3, "click"], ["width", "350", "height", "300", "class", "attachment-side-thumb size-side-thumb wp-post-image rounded-circle", "style", "height: 40px;width:40px", 3, "src", 4, "ngIf"], ["width", "350", "height", "300", "src", "../../assets/images/pen.png", "class", "attachment-side-thumb size-side-thumb wp-post-image rounded-circle", "style", "height: 40px;width:40px", 4, "ngIf"], [1, "side-pop-content"], ["href", "javascript:void(0)", 3, "click"], [1, "date"], ["width", "350", "height", "300", 1, "attachment-side-thumb", "size-side-thumb", "wp-post-image", "rounded-circle", 2, "height", "40px", "width", "40px", 3, "src"], ["width", "350", "height", "300", "src", "../../assets/images/pen.png", 1, "attachment-side-thumb", "size-side-thumb", "wp-post-image", "rounded-circle", 2, "height", "40px", "width", "40px"], [1, "cat-item", "cat-item-2"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BlogComponent_div_14_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_19_listener() { return ctx.toggleShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start New Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BlogComponent_li_26_Template, 14, 9, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BlogComponent_li_31_Template, 4, 2, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "My articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, BlogComponent_li_37_Template, 9, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.threads);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_6__["BlogCreateComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".container[_ngcontent-%COMP%]{\n    margin:auto;\n}\n\n*[_ngcontent-%COMP%], html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], input[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\nfieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    border: 0\n}\n\naddress[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], th[_ngcontent-%COMP%], var[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: 400\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    list-style: none\n}\n\ncaption[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    text-align: left\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    font-size: 100%;\n    font-weight: 400\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n    content: ''\n}\n\nstrong[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\nem[_ngcontent-%COMP%] {\n    font-style: italic\n}\n\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border: none\n}\n\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], b[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\nem[_ngcontent-%COMP%], i[_ngcontent-%COMP%], em[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], i[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-style: italic\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #f7f7f3;\n    font-family: \"Source Sans Pro\", sans-serif;\n    font-size: 14px;\n    color: #4c4a47\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .post-entry[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .more-link[_ngcontent-%COMP%], .by[_ngcontent-%COMP%], .item-related[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%], .side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%], #top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-family: \"Crimson Text\", sans-serif\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px\n}\n\na[_ngcontent-%COMP%] {\n    color: #95af7e;\n    text-decoration: none\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .subscribe-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .author-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .block-heading[_ngcontent-%COMP%], .thecomment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%]   h6.author[_ngcontent-%COMP%], .thecomment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%]   h6.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #respond[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], , .widget-title[_ngcontent-%COMP%], .promo-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .instagram-title[_ngcontent-%COMP%], .index-heading[_ngcontent-%COMP%], .archive-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: \"Source Sans Pro\", sans-serif\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    width: 1160px;\n    margin: 0 auto;\n    background-color: #fff;\n    box-shadow: 0 0 5px 5px rgba(200, 200, 200, .05);\n    border-radius: 10px;\n    margin-top: 30px\n}\n\n#content[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    padding-top: 45px\n}\n\n#main[_ngcontent-%COMP%] {\n    width: 740px;\n    float: left\n}\n\n#main.fullwidth[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n#sidebar[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 9px\n}\n\n#header[_ngcontent-%COMP%] {\n    padding: 65px 0 60px;\n    position: relative;\n    border-radius: 10px 10px 0 0\n}\n\n#logo[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto\n}\n\n#top-social[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    left: 40px\n}\n\n#top-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-right: 8px\n}\n\n.fa-twitter[_ngcontent-%COMP%] {\n    color: #15c3e0;\n}\n\n.fa-instagram[_ngcontent-%COMP%] {\n    color: #ff6000;\n}\n\n.fa-pinterest[_ngcontent-%COMP%] {\n    color: #b71111;\n}\n\n#top-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #000\n}\n\n#mobile-social[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    display: none\n}\n\n#top-search[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    right: 40px\n}\n\n#top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: 0 0;\n    border: none;\n    width: 140px;\n    padding: 0;\n    font-style: italic;\n    font-size: 13px\n}\n\n#top-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bbb\n}\n\n.widget.widget_mc4wp_form_widget[_ngcontent-%COMP%] {\n    padding: 0;\n    border: none\n}\n\n.widget.widget_mc4wp_form_widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    display: none\n}\n\n.post[_ngcontent-%COMP%] {\n    margin-bottom: 60px\n}\n\n.post-img[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n    text-align: center\n}\n\n.post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    max-width: 100%;\n    height: auto\n}\n\n.by[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-style: italic;\n    color: #999;\n    margin-right: 1px\n}\n\n#main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n    width: 340px;\n    margin-right: 30px\n}\n\n.comments[_ngcontent-%COMP%] {\n    margin-bottom: 40px\n}\n\n.widget[_ngcontent-%COMP%] {\n    background: 0 0;\n    border: 1px solid;\n    border-color: #d2c9c9;\n    border-top: unset;\n    padding: 25px 20px 22px;\n    display: block;\n    position: relative;\n    margin-bottom: 40px;\n    box-sizing: border-box\n}\n\n.widget[_ngcontent-%COMP%]:before, .widget[_ngcontent-%COMP%]:after {\n    content: '';\n    display: table\n}\n\n.widget-title[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: #000;\n    font-size: 11px;\n    font-weight: 400;\n    position: absolute;\n    top: -1px;\n    left: 0;\n    display: table;\n    overflow: hidden;\n    width: 100%;\n    border-bottom: none;\n    text-align: center;\n    white-space: nowrap;\n    transform: translateY(-50%);\n    margin-top: 0;\n    margin-bottom: 15px\n}\n\n.widget-title[_ngcontent-%COMP%]:before, .widget-title[_ngcontent-%COMP%]:after {\n    position: relative;\n    top: 10%;\n    display: table-cell;\n    width: 50%;\n    height: 1px;\n    border-top: 1px solid;\n    border-color: #ddd;\n    content: '';\n    transform: translate(0, 50%)\n}\n\n.widget-title[_ngcontent-%COMP%]:before {\n    right: 26px\n}\n\n.widget-title[_ngcontent-%COMP%]:after {\n    left: 26px\n}\n\n.widget.noborder[_ngcontent-%COMP%] {\n    border: none;\n    padding: 25px 0 0\n}\n\n.widget.notitle[_ngcontent-%COMP%] {\n    padding-top: 0\n}\n\n.widget.border_notitle[_ngcontent-%COMP%] {\n    border-top: 1px solid #ddd\n}\n\n.widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    vertical-align: middle;\n    height: auto\n}\n\n.widget[_ngcontent-%COMP%]   .screen-reader-text[_ngcontent-%COMP%] {\n    display: none\n}\n\n.widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 14px\n}\n\n.widget_categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .widget_archive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: #999;\n    font-size: 13px\n}\n\n.widget_categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .widget_archive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 5px\n}\n\n.side-pop[_ngcontent-%COMP%] {\n    margin-bottom: 20px\n}\n\n.side-pop[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0\n}\n\n.side-pop-img[_ngcontent-%COMP%] {\n    margin-bottom: 10px\n}\n\n.side-pop-content[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 6px\n}\n\n.side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #000\n}\n\n.side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #999;\n    font-style: italic;\n    display: block\n}\n\n.side-pop.list[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    overflow: hidden\n}\n\n.side-pop.list[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-img[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 85px;\n    margin-right: 15px;\n    margin-bottom: 0\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%] {\n    text-align: left;\n    overflow: hidden\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .pop-num[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    line-height: 23px;\n    font-size: 13px\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%] {\n    font-size: 13px\n}\n\n.about-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-bottom: 15px\n}\n\n.about-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 18px\n}\n\n.social-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 3px\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    margin-left: 0\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    margin-right: 0\n}\n\n.social-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    text-align: center;\n    display: inline-block;\n    background: #95af7e;\n    color: #fff;\n    font-size: 12px;\n    height: 28px;\n    width: 28px;\n    line-height: 29px;\n    border-radius: 100%;\n    transition: .3s\n}\n\n.social-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    opacity: .8\n}\n\n.center-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#sidebar[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%], .footer-widgets[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    overflow: hidden;\n    margin-bottom: -10px\n}\n\n.widget[_ngcontent-%COMP%]   ul.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   ul.children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    margin-top: 9px\n}\n\n.widget.talentmitra_facebook_widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#wp-calendar[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n#footer[_ngcontent-%COMP%] {\n    margin-top: 40px\n}\n\n#footer-copyright[_ngcontent-%COMP%] {\n    overflow: hidden;\n    padding: 26px 0\n}\n\n#footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #a5a5a5\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    background: #eee;\n    border-radius: 0;\n    font-size: 11px;\n    color: #888;\n    padding: 11px 21px;\n    margin-top: 14px;\n    display: inline-block;\n    border: none;\n    transition: .3s;\n    cursor: pointer;\n    border-radius: 30px;\n    width: auto\n}\n\ninput[type=submit][_ngcontent-%COMP%]:hover {\n    background: #333;\n    color: #fff\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    color: #888;\n    padding: 9px 10px;\n    width: 100%;\n    box-sizing: border-box\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n    border: 1px solid #c4c4c4;\n    outline: none\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n    width: auto\n}\n\n.fa[_ngcontent-%COMP%] {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transform: translate(0, 0)\n}\n\n@media only screen and (min-width:942px) and (max-width:1170px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 940px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 610px\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 260px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0 18px\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 280px;\n        height: 420px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 190px;\n        margin-right: 16px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 280px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 290px;\n        margin-right: 26px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 430px\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 1.52%\n    }\n\n    .item-related[_ngcontent-%COMP%] {\n        width: 190px;\n        margin-right: 20px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 280px\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .recipe-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        width: 80%\n    }\n\n    .post-widget[_ngcontent-%COMP%]   .subscribe-text[_ngcontent-%COMP%] {\n        width: 40%\n    }\n\n    .post-widget[_ngcontent-%COMP%]   .subscribe-form[_ngcontent-%COMP%] {\n        width: 60%\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin: 0 18px\n    }\n}\n\n@media only screen and (min-width:767px) and (max-width:960px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 726px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 100%\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 480px;\n        margin: 0 auto;\n        float: none;\n        overflow: hidden;\n        padding-top: 5px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .slicknav_menu[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #mobile-social[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #top-social[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 216px;\n        height: 324px;\n        margin-right: 21px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 216px;\n        margin-right: 17px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 330px;\n        margin-right: 26px\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 1.5%\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 216px;\n        margin-right: 21px\n    }\n\n    .subscribe-text[_ngcontent-%COMP%] {\n        width: 40%\n    }\n\n    .subscribe-form[_ngcontent-%COMP%] {\n        width: 60%\n    }\n\n    .home-widget[_ngcontent-%COMP%]   .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 50%\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n        width: auto\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    textarea[_ngcontent-%COMP%], input.text[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n        -webkit-appearance: none;\n        border-radius: 0\n    }\n}\n\n@media only screen and (max-width:767px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 320px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 100%\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0 auto;\n        float: none;\n        overflow: hidden;\n        padding-top: 5px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .slicknav_menu[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #mobile-social[_ngcontent-%COMP%] {\n        display: block;\n        right: 10px\n    }\n\n    #top-social[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 280px;\n        height: 280px;\n        margin-right: 0;\n        margin-bottom: 14px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 0;\n        width: 100%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n        float: none;\n        margin-right: 0\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 20px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n        margin-top: 0\n    }\n\n    .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .post-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .meta-info[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 5px\n    }\n\n    .post-share[_ngcontent-%COMP%] {\n        float: left\n    }\n\n    .post-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n        margin-left: 0\n    }\n\n    .post-pagination[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%], .post-pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n        width: 100%;\n        float: none;\n        text-align: center;\n        display: block\n    }\n\n    .post-pagination[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n        margin-bottom: 10px\n    }\n\n    .post-author[_ngcontent-%COMP%] {\n        text-align: center\n    }\n\n    .author-img[_ngcontent-%COMP%] {\n        float: none;\n        margin-right: 0;\n        margin-bottom: 10px\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .recipe-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .recipe-overview[_ngcontent-%COMP%]   a.sp-print[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-bottom: 14px;\n        float: none\n    }\n\n    .step[_ngcontent-%COMP%]   span.step-number[_ngcontent-%COMP%] {\n        width: 20px;\n        height: 20px;\n        line-height: 20px;\n        margin-right: 10px\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0;\n        margin-bottom: 20px\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .home-widget[_ngcontent-%COMP%] {\n        margin-top: 20px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%] {\n        padding: 32px 28px\n    }\n\n    .subscribe-text[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        text-align: center\n    }\n\n    .subscribe-form[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        text-align: center\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home-widget[_ngcontent-%COMP%]   .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        box-sizing: border-box;\n        margin-bottom: 12px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n        width: 100%;\n        margin-left: 0;\n        margin-bottom: 0\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n        font-size: 13px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        margin-bottom: 4px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin: 0 5px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .left-copy[_ngcontent-%COMP%] {\n        float: none;\n        text-align: left;\n        width: 100%;\n        margin-bottom: 5px\n    }\n\n    .right-copy[_ngcontent-%COMP%] {\n        float: none;\n        text-align: left\n    }\n\n    #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        width: 25%\n    }\n\n    #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(12), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(11), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(10)   #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(9), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(8), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(7) {\n        display: none\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .index-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        position: relative;\n        top: 5px;\n        display: block;\n        padding-left: 0\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .index-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n        height: auto;\n        line-height: 15px\n    }\n\n    textarea[_ngcontent-%COMP%], input.text[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n        -webkit-appearance: none;\n        border-radius: 0\n    }\n}\n\n@media only screen and (min-width:480px) and (max-width:767px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 480px\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 280px;\n        margin-right: 0;\n        margin-bottom: 14px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-of-type(2n+2), #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-of-type(2n+2) {\n        margin-right: 0\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 48%;\n        margin-right: 3.2%\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 48%;\n        margin-right: 3.2%\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 23.5%;\n        margin-right: 1.36%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n        float: left;\n        margin-right: 20px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 160px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%] {\n        text-align: left;\n        margin-top: 0;\n        margin-bottom: 14px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .meta-comments[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .post-share[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 138px;\n        margin-right: 13px;\n        margin-bottom: 0\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n        display: block;\n        margin-right: 10px\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 40px;\n        height: auto\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px;\n        margin: 0 12px\n    }\n}\n\n#header[_ngcontent-%COMP%] {\n    padding-top: px;\n    padding-bottom: px\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #f5f5f5\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    margin-top: px\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    border-radius: px\n}\n\n#header[_ngcontent-%COMP%] {\n    border-radius: px px 0 0\n}\n\n.badge[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    font-size: 12px;\n    color: #ffffff;\n    font-family: 'Open Sans Bold', sans-serif;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYmxvZy5taW4uY3NzIiwic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSSxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7Ozs7Ozs7OztJQVNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7Ozs7OztJQU1JLGVBQWU7SUFDZjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7Ozs7SUFJSTtBQUNKOztBQUVBOzs7O0lBSUk7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7O0lBRUksZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBR0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFJQTtJQUNJO0FBQ0o7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBS25CLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2I7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUtYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBS25CO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsWUFBWTtJQUtaLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7OztJQUdJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBSUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWjtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7Ozs7OztRQU1JLHdCQUF3QjtRQUN4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQjtJQUNKOztJQUVBOztRQUVJLFdBQVc7UUFDWCxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkO0lBQ0o7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkI7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWDtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOzs7OztRQUtJO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7Ozs7OztRQU1JLHdCQUF3QjtRQUN4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7UUFDZjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Y7SUFDSjs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Y7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2I7SUFDSjs7SUFFQTs7UUFFSTtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEI7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksZUFBZTtRQUNmO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjtBQUNKOztBQUtBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQzVwQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW46YXV0bztcbn1cblxuKixcbmh0bWwsXG5ib2R5LFxuZGl2LFxuZGwsXG5kdCxcbmRkLFxudWwsXG5vbCxcbmxpLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucHJlLFxuZm9ybSxcbmxhYmVsLFxuZmllbGRzZXQsXG5pbnB1dCxcbnAsXG5ibG9ja3F1b3RlLFxudGgsXG50ZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDBcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDBcbn1cblxuZmllbGRzZXQsXG5pbWcge1xuICAgIGJvcmRlcjogMFxufVxuXG5hZGRyZXNzLFxuY2FwdGlvbixcbmNpdGUsXG5jb2RlLFxuZGZuLFxuZW0sXG5zdHJvbmcsXG50aCxcbnZhciB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxub2wsXG51bCxcbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lXG59XG5cbmNhcHRpb24sXG50aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LXdlaWdodDogNDAwXG59XG5cbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJydcbn1cblxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogNzAwXG59XG5cbmVtIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWNcbn1cblxuYSBpbWcge1xuICAgIGJvcmRlcjogbm9uZVxufVxuXG5zdHJvbmcsXG5iLFxuc3Ryb25nICosXG5iICoge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDBcbn1cblxuZW0sXG5pLFxuZW0gKixcbmkgKiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljXG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjM7XG4gICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNGM0YTQ3XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbi5wb3N0LWVudHJ5IGJsb2NrcXVvdGUgcCxcbi5lbnRyeS1jb250ZW50IGJsb2NrcXVvdGUgcCxcbi5tb3JlLWxpbmssXG4uYnksXG4uaXRlbS1yZWxhdGVkIHNwYW4uZGF0ZSxcbi5zaWRlLXBvcC1jb250ZW50IHNwYW4uZGF0ZSxcbiN0b3Atc2VhcmNoIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJDcmltc29uIFRleHRcIiwgc2Fucy1zZXJpZlxufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHhcbn1cblxuYSB7XG4gICAgY29sb3I6ICM5NWFmN2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG4uc3Vic2NyaWJlLWJveCBoNCxcbi5hdXRob3ItY29udGVudCBoNSBhLFxuLmJsb2NrLWhlYWRpbmcsXG4udGhlY29tbWVudCAuY29tbWVudC10ZXh0IGg2LmF1dGhvcixcbi50aGVjb21tZW50IC5jb21tZW50LXRleHQgaDYuYXV0aG9yIGEsXG4jcmVzcG9uZCBoMywsXG4ud2lkZ2V0LXRpdGxlLFxuLnByb21vLW92ZXJsYXkgaDQsXG4uaW5zdGFncmFtLXRpdGxlLFxuLmluZGV4LWhlYWRpbmcsXG4uYXJjaGl2ZS1ib3ggaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmXG59XG5cbiN3cmFwcGVyIHtcbiAgICB3aWR0aDogMTE2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCA1cHggcmdiYSgyMDAsIDIwMCwgMjAwLCAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweFxufVxuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogNDVweFxufVxuXG4jbWFpbiB7XG4gICAgd2lkdGg6IDc0MHB4O1xuICAgIGZsb2F0OiBsZWZ0XG59XG5cbiNtYWluLmZ1bGx3aWR0aCB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuI3NpZGViYXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogOXB4XG59XG5cbiNoZWFkZXIge1xuICAgIHBhZGRpbmc6IDY1cHggMCA2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwXG59XG5cbiNsb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuI2xvZ28gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvXG59XG5cbiN0b3Atc29jaWFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDQwcHhcbn1cblxuI3RvcC1zb2NpYWwgYSxcbiNtb2JpbGUtc29jaWFsIGEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweFxufVxuLmZhLXR3aXR0ZXIge1xuICAgIGNvbG9yOiAjMTVjM2UwO1xufVxuLmZhLWluc3RhZ3JhbSB7XG4gICAgY29sb3I6ICNmZjYwMDA7XG59XG4uZmEtcGludGVyZXN0IHtcbiAgICBjb2xvcjogI2I3MTExMTtcbn1cblxuI3RvcC1zb2NpYWwgYTpob3ZlcixcbiNtb2JpbGUtc29jaWFsIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwXG59XG5cbiNtb2JpbGUtc29jaWFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuI3RvcC1zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgcmlnaHQ6IDQwcHhcbn1cblxuI3RvcC1zZWFyY2ggaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4jdG9wLXNlYXJjaCBpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiYmJcbn1cblxuLndpZGdldC53aWRnZXRfbWM0d3BfZm9ybV93aWRnZXQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbi53aWRnZXQud2lkZ2V0X21jNHdwX2Zvcm1fd2lkZ2V0IC53aWRnZXQtdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnBvc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHhcbn1cblxuXG4ucG9zdC1pbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5wb3N0LWltZyBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0b1xufVxuXG4uYnkge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHhcbn1cblxuXG4jbWFpbi5mdWxsd2lkdGggLml0ZW0tcmVsYXRlZCB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweFxufVxuXG5cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4XG59XG5cblxuXG4ud2lkZ2V0IHtcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDJjOWM5O1xuICAgIGJvcmRlci10b3A6IHVuc2V0O1xuICAgIHBhZGRpbmc6IDI1cHggMjBweCAyMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbn1cblxuLndpZGdldDpiZWZvcmUsXG4ud2lkZ2V0OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZVxufVxuXG4ud2lkZ2V0LXRpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTFweDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XG59XG5cbi53aWRnZXQtdGl0bGU6YmVmb3JlLFxuLndpZGdldC10aXRsZTphZnRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTAlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpXG59XG5cbi53aWRnZXQtdGl0bGU6YmVmb3JlIHtcbiAgICByaWdodDogMjZweFxufVxuXG4ud2lkZ2V0LXRpdGxlOmFmdGVyIHtcbiAgICBsZWZ0OiAyNnB4XG59XG5cbi53aWRnZXQubm9ib3JkZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAyNXB4IDAgMFxufVxuXG4ud2lkZ2V0Lm5vdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAwXG59XG5cbi53aWRnZXQuYm9yZGVyX25vdGl0bGUge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkXG59XG5cbi53aWRnZXQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IGF1dG9cbn1cblxuLndpZGdldCAuc2NyZWVuLXJlYWRlci10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi53aWRnZXQgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcbn1cblxuLndpZGdldCB1bCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4ud2lkZ2V0IHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZVxufVxuXG4ud2lkZ2V0IHVsIGxpIGEge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweFxufVxuXG4ud2lkZ2V0X2NhdGVnb3JpZXMgdWwgbGksXG4ud2lkZ2V0X2FyY2hpdmUgdWwgbGkge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4ud2lkZ2V0X2NhdGVnb3JpZXMgYSxcbi53aWRnZXRfYXJjaGl2ZSBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxufVxuXG4uc2lkZS1wb3Age1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbn1cblxuLnNpZGUtcG9wOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLnNpZGUtcG9wLWltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4uc2lkZS1wb3AtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5zaWRlLXBvcC1jb250ZW50IGg0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHhcbn1cblxuLnNpZGUtcG9wLWNvbnRlbnQgaDQgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwXG59XG5cbi5zaWRlLXBvcC1jb250ZW50IHNwYW4uZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4uc2lkZS1wb3AubGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5zaWRlLXBvcC5saXN0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLnNpZGUtcG9wLmxpc3QgLnNpZGUtcG9wLWltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiA4NXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwXG59XG5cbi5zaWRlLXBvcC5saXN0IC5zaWRlLXBvcC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLnNpZGUtcG9wLmxpc3QgLnNpZGUtcG9wLWNvbnRlbnQgaDQgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5zaWRlLXBvcC5saXN0IC5wb3AtbnVtIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbi5zaWRlLXBvcC5saXN0IC5zaWRlLXBvcC1jb250ZW50IHNwYW4uZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbi5hYm91dC13aWRnZXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uYWJvdXQtaW1nIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHhcbn1cblxuLmFib3V0LXdpZGdldCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4XG59XG5cbi5zb2NpYWwtd2lkZ2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnNvY2lhbC13aWRnZXQgYSB7XG4gICAgbWFyZ2luOiAwIDNweFxufVxuXG4uc29jaWFsLXdpZGdldCBhOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMFxufVxuXG4uc29jaWFsLXdpZGdldCBhOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMFxufVxuXG4uc29jaWFsLXdpZGdldCBpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICM5NWFmN2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC1vLXRyYW5zaXRpb246IC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb246IC4zc1xufVxuXG4uc29jaWFsLXdpZGdldCBpOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuOFxufVxuXG4uY2VudGVyLXdpZGdldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbiNzaWRlYmFyIC5pbnN0YWdyYW0tcGljcyxcbi5mb290ZXItd2lkZ2V0cyAuaW5zdGFncmFtLXBpY3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4XG59XG5cblxuLndpZGdldCB1bC5tZW51IGxpIHVsLFxuLndpZGdldCB1bC5jaGlsZHJlbiBsaSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDlweFxufVxuXG4ud2lkZ2V0LnRhbGVudG1pdHJhX2ZhY2Vib29rX3dpZGdldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbiN3cC1jYWxlbmRhciB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuI2Zvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogNDBweFxufVxuXG5cbiNmb290ZXItY29weXJpZ2h0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDI2cHggMFxufVxuXG4jZm9vdGVyLWNvcHlyaWdodCBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNhNWE1YTVcbn1cblxuXG5cbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgcGFkZGluZzogMTFweCAyMXB4O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAtby10cmFuc2l0aW9uOiAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgIG91dGxpbmU6IG5vbmVcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgIHdpZHRoOiBhdXRvXG59XG5cbi5mYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKVxufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk0MnB4KSBhbmQgKG1heC13aWR0aDoxMTcwcHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA5NDBweFxuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgd2lkdGg6IDYxMHB4XG4gICAgfVxuXG4gICAgI3NpZGViYXIge1xuICAgICAgICB3aWR0aDogMjYwcHhcbiAgICB9XG5cbiAgICAjbmF2LXdyYXBwZXIgLm1lbnUgbGkge1xuICAgICAgICBtYXJnaW46IDAgMThweFxuICAgIH1cblxuICAgIC5mZWF0LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIGhlaWdodDogNDIwcHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciBoMiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMz5saSB7XG4gICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4XG4gICAgfVxuXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDM+bGkge1xuICAgICAgICB3aWR0aDogMjgwcHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wyPmxpIHtcbiAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI2cHhcbiAgICB9XG5cbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMj5saSB7XG4gICAgICAgIHdpZHRoOiA0MzBweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDQ+bGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNTIlXG4gICAgfVxuXG4gICAgLml0ZW0tcmVsYXRlZCB7XG4gICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4XG4gICAgfVxuXG4gICAgI21haW4uZnVsbHdpZHRoIC5pdGVtLXJlbGF0ZWQge1xuICAgICAgICB3aWR0aDogMjgwcHhcbiAgICB9XG5cbiAgICAucG9zdC1lbnRyeSAucmVjaXBlLW92ZXJ2aWV3IGgyIHtcbiAgICAgICAgd2lkdGg6IDgwJVxuICAgIH1cblxuICAgIC5wb3N0LXdpZGdldCAuc3Vic2NyaWJlLXRleHQge1xuICAgICAgICB3aWR0aDogNDAlXG4gICAgfVxuXG4gICAgLnBvc3Qtd2lkZ2V0IC5zdWJzY3JpYmUtZm9ybSB7XG4gICAgICAgIHdpZHRoOiA2MCVcbiAgICB9XG5cbiAgICAjZm9vdGVyLXNvY2lhbCBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDE4cHhcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkgYW5kIChtYXgtd2lkdGg6OTYwcHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA3MjZweFxuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAjc2lkZWJhciB7XG4gICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4XG4gICAgfVxuXG4gICAgI25hdi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5zbGlja25hdl9tZW51IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG5cbiAgICAjbW9iaWxlLXNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuXG4gICAgI3RvcC1zb2NpYWwge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLmZlYXQtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAyMTZweDtcbiAgICAgICAgaGVpZ2h0OiAzMjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXB4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMTNweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIGgyIGEge1xuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wzPmxpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wzPmxpIHtcbiAgICAgICAgd2lkdGg6IDIxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE3cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wyPmxpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wyPmxpIHtcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI2cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2w0PmxpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjUlXG4gICAgfVxuXG4gICAgLml0ZW0tcmVsYXRlZCxcbiAgICAjbWFpbi5mdWxsd2lkdGggLml0ZW0tcmVsYXRlZCB7XG4gICAgICAgIHdpZHRoOiAyMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXB4XG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IDQwJVxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtZm9ybSB7XG4gICAgICAgIHdpZHRoOiA2MCVcbiAgICB9XG5cbiAgICAuaG9tZS13aWRnZXQgLnN1YnNjcmliZS1ib3ggaW5wdXQsXG4gICAgLnN1YnNjcmliZS1ib3ggaW5wdXQge1xuICAgICAgICB3aWR0aDogNTAlXG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1ib3ggaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgd2lkdGg6IGF1dG9cbiAgICB9XG5cbiAgICAjZm9vdGVyLXNvY2lhbCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgfVxuXG4gICAgI2Zvb3Rlci1zb2NpYWwgYSBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIHRleHRhcmVhLFxuICAgIGlucHV0LnRleHQsXG4gICAgaW5wdXRbdHlwZT10ZXh0XSxcbiAgICBpbnB1dFt0eXBlPWJ1dHRvbl0sXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdLFxuICAgIC5pbnB1dC1jaGVja2JveCB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMFxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgI3dyYXBwZXIge1xuICAgICAgICB3aWR0aDogMzIwcHhcbiAgICB9XG5cbiAgICAjbWFpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuXG4gICAgI3NpZGViYXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4XG4gICAgfVxuXG4gICAgI25hdi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5zbGlja25hdl9tZW51IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG5cbiAgICAjbW9iaWxlLXNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICByaWdodDogMTBweFxuICAgIH1cblxuICAgICN0b3Atc29jaWFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5mZWF0LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4IDEzcHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciBoMiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMz5saSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMz5saSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wyPmxpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wyPmxpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDQ+bGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1pbWcge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1pbWcgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1oZWFkZXIgaDIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtbWV0YSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBcbiAgICB9XG5cbiAgICAucG9zdC1oZWFkZXIgaDIgYSxcbiAgICAucG9zdC1oZWFkZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDI0cHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wyIC5ncmlkLWl0ZW0gLnBvc3QtaGVhZGVyIGgyIGEge1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICB9XG5cbiAgICAubWV0YS1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweFxuICAgIH1cblxuICAgIC5wb3N0LXNoYXJlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnRcbiAgICB9XG5cbiAgICAucG9zdC1zaGFyZSBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcbiAgICB9XG5cbiAgICAucG9zdC1wYWdpbmF0aW9uIC5wcmV2LFxuICAgIC5wb3N0LXBhZ2luYXRpb24gLm5leHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG5cbiAgICAucG9zdC1wYWdpbmF0aW9uIC5wcmV2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIH1cblxuICAgIC5wb3N0LWF1dGhvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cblxuICAgIC5hdXRob3ItaW1nIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIH1cblxuICAgIC5wb3N0LWVudHJ5IC5yZWNpcGUtb3ZlcnZpZXcgaDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICB9XG5cbiAgICAucmVjaXBlLW92ZXJ2aWV3IGEuc3AtcHJpbnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgIGZsb2F0OiBub25lXG4gICAgfVxuXG4gICAgLnN0ZXAgc3Bhbi5zdGVwLW51bWJlciB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgICB9XG5cbiAgICAuaXRlbS1yZWxhdGVkLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuaXRlbS1yZWxhdGVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgIH1cblxuICAgIC50aGVjb21tZW50IC5hdXRob3ItaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5ob21lLXdpZGdldCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMjhweFxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtdGV4dCB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1mb3JtIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWJveCBpbnB1dCxcbiAgICAuaG9tZS13aWRnZXQgLnN1YnNjcmliZS1ib3ggaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweFxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtYm94IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtYm94IHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHhcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWJveCBoNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweFxuICAgIH1cblxuICAgICNmb290ZXItc29jaWFsIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMCA1cHhcbiAgICB9XG5cbiAgICAjZm9vdGVyLXNvY2lhbCBhIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLmxlZnQtY29weSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4XG4gICAgfVxuXG4gICAgLnJpZ2h0LWNvcHkge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgIH1cblxuICAgICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcyBsaSB7XG4gICAgICAgIHdpZHRoOiAyNSVcbiAgICB9XG5cbiAgICAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3M+bGk6bnRoLWNoaWxkKDEyKSxcbiAgICAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3M+bGk6bnRoLWNoaWxkKDExKSxcbiAgICAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3M+bGk6bnRoLWNoaWxkKDEwKSAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3M+bGk6bnRoLWNoaWxkKDkpLFxuICAgICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcz5saTpudGgtY2hpbGQoOCksXG4gICAgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzPmxpOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAucG9zdC1lbnRyeSAuaW5kZXgtaGVhZGluZyBhIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMFxuICAgIH1cblxuICAgIC5wb3N0LWVudHJ5IC5pbmRleC1oZWFkaW5nPnNwYW4ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4XG4gICAgfVxuXG4gICAgdGV4dGFyZWEsXG4gICAgaW5wdXQudGV4dCxcbiAgICBpbnB1dFt0eXBlPXRleHRdLFxuICAgIGlucHV0W3R5cGU9YnV0dG9uXSxcbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF0sXG4gICAgLmlucHV0LWNoZWNrYm94IHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgwcHgpIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgI3dyYXBwZXIge1xuICAgICAgICB3aWR0aDogNDgwcHhcbiAgICB9XG5cbiAgICAuZmVhdC1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4IDEzcHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciBoMiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMz5saTpudGgtb2YtdHlwZSgybisyKSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMz5saTpudGgtb2YtdHlwZSgybisyKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDM+bGksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDM+bGkge1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuMiVcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wyPmxpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wyPmxpIHtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjIlXG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sND5saSB7XG4gICAgICAgIHdpZHRoOiAyMy41JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjM2JVxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtaW1nIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweFxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtaW1nIGltZyxcbiAgICAjbWFpbi5mdWxsd2lkdGggLmxpc3QtaXRlbSAucG9zdC1pbWcgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweFxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLmxpc3QtY29udGVudCAucG9zdC1oZWFkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4XG4gICAgfVxuXG4gICAgLmxpc3QtaXRlbSAucG9zdC1tZXRhIC5tZXRhLWNvbW1lbnRzLFxuICAgIC5saXN0LWl0ZW0gLnBvc3QtbWV0YSAucG9zdC1zaGFyZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuaXRlbS1yZWxhdGVkLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuaXRlbS1yZWxhdGVkIHtcbiAgICAgICAgd2lkdGg6IDEzOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICB9XG5cbiAgICAudGhlY29tbWVudCAuYXV0aG9yLWltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgICB9XG5cbiAgICAudGhlY29tbWVudCAuYXV0aG9yLWltZyBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgIH1cblxuICAgICNmb290ZXItc29jaWFsIGEge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMCAxMnB4XG4gICAgfVxufVxuXG5cblxuXG4jaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogcHg7XG4gICAgcGFkZGluZy1ib3R0b206IHB4XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjVcbn1cblxuI3dyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IHB4XG59XG5cbiN3cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiBweFxufVxuXG4jaGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiBweCBweCAwIDBcbn1cblxuIiwiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9ibG9nLm1pbi5jc3NcIjtcbi5iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ContactComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_33_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.r.name.errors.required);
} }
function ContactComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_39_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.r.email.errors.required);
} }
function ContactComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subject is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_57_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.r.subject.errors.required);
} }
function ContactComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_64_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.r.messageText.errors.required);
} }
function ContactComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 58);
} }
function ContactComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Query is successfully sent. We'll get back to you Shortly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactComponent {
    constructor(formBuilder, postQueryService) {
        this.formBuilder = formBuilder;
        this.postQueryService = postQueryService;
        this.loadingR = false;
        this.rsubmitted = false;
    }
    ngOnInit() {
        this.queryForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            messageText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            phone: [''],
            company: ['']
        });
    }
    get r() { return this.queryForm.controls; }
    onSubmit() {
        this.rsubmitted = true;
        // stop here if form is invalid
        if (this.queryForm.invalid) {
            return;
        }
        this.loadingR = true;
        this.postQueryService.postQuery(this.queryForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            if (data['sendStatus'])
                alert("Query Sent Successfully");
            this.sendStatus = true;
            this.loadingR = false;
            this.queryForm.reset();
        }, error => {
            this.loadingR = false;
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 103, vars: 20, consts: [[1, "container"], [1, "row"], [1, "col-sm-9"], ["id", "myTabContentMD", 1, "tab-content"], ["id", "contact-md", "role", "tabpanel", "aria-labelledby", "contact-tab-md", 1, "tab-pane", "active"], [1, "card-title"], [1, "card", 2, "margin-top", "3rem"], [1, "card-body"], [1, "card-text"], [1, "card-link"], ["id", "send-md", "role", "tabpanel", "aria-labelledby", "send-tab-md", 1, "tab-pane", "fade"], [1, "contact-section", "my-5"], [1, "card"], [1, "col-lg-7"], [1, "card-body", "form"], [1, "mt-4"], [1, "fas", "fa-envelope", "pr-2"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "md-form", "mb-0"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "name", 1, ""], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "email", 1, ""], ["type", "phone", "formControlName", "phone", 1, "form-control"], ["for", "phone", 1, ""], ["type", "text", "formControlName", "company", 1, "form-control"], ["for", "company", 1, ""], [1, "col-md-12"], ["type", "text", "formControlName", "subject", 1, "form-control", 3, "ngClass"], ["for", "subject", 1, ""], ["formControlName", "messageText", "rows", "3", 1, "form-control", "md-textarea", 3, "ngClass"], ["for", "messageText"], [1, "btn-floating", "btn-lg", "blue", 3, "disabled"], [1, "far", "fa-paper-plane"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [4, "ngIf"], [1, "col-lg-5"], [1, "card-body", "contact", "text-center", "blue", "white-text"], [1, "my-4", "pb-2"], [1, "text-lg-left", "list-unstyled", "ml-4"], [1, "fas", "fa-map-marker-alt", "pr-2"], [1, "fas", "fa-phone", "pr-2"], [1, "hr-light", "my-4"], [1, "list-inline", "text-center", "list-unstyled"], [1, "list-inline-item"], [1, "p-2", "fa-lg", "tw-ic"], [1, "fab", "fa-twitter"], [1, "p-2", "fa-lg", "li-ic"], [1, "fab", "fa-linkedin-in"], [1, "p-2", "fa-lg", "ins-ic"], [1, "fab", "fa-instagram"], [1, "col-sm-3", 2, "padding-top", "4.5rem"], ["role", "tablist", 1, "list-group", "nav", "list-group-flush", "rgba-grey-dark"], [1, "list-group-item"], ["id", "send-tab-md", "data-toggle", "tab", "href", "#send-md", "role", "tab", "aria-controls", "send-md", "aria-selected", "true", 1, "nav-link"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Some quick example text to build on the panel title and make up the bulk of the panel's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Another link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Write to us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_26_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactComponent_div_33_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactComponent_div_39_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Your company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Your Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ContactComponent_div_57_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ContactComponent_div_64_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ContactComponent_span_67_Template, 1, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ContactComponent_div_68_Template, 3, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Contact information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Bangalore, 560102, India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "+91 9876543210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "contactus@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Send Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.queryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.rsubmitted && ctx.r.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.rsubmitted && ctx.r.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.rsubmitted && ctx.r.subject.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.subject.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.rsubmitted && ctx.r.messageText.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.messageText.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendStatus);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".nav-link.active[_ngcontent-%COMP%]  {\n    color:black;\n    background: #eee;\n    }\n    a[_ngcontent-%COMP%]{\n        color:black;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay5hY3RpdmUgIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIH1cbiAgICBhe1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ForumComponent_div_18_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r4._id);
} }
function ForumComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_div_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForumComponent_div_18_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ForumComponent_div_18_option_23_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Email me when some one post a reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.topicContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groups);
} }
function ForumComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_li_27_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const group_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.gotoPostsByCategory(group_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", group_r8._id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r8.count);
} }
function ForumComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_div_32_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const thread_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.gotoDetails(thread_r11._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thread_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thread_r11.title);
} }
class ForumComponent {
    constructor(formBuilder, router, authenticationService, postQueryService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.users = [];
        this.topics = [];
        this.Topics = [];
        this.showCreate = false;
        this.groups = [];
        this.categories = [];
        this.threads = [];
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser)
            this.router.navigate(['/']);
    }
    ngOnInit() {
        this.getTopicGroups();
        this.getMyTopicThreads();
        this.topicContent = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    toggleShow() {
        this.showCreate = !this.showCreate;
    }
    close() {
        this.showCreate = false;
    }
    onSubmit() {
        this.postQueryService.addTopic(this.topicContent.value, this.currentUser.token).subscribe((data) => {
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
        this.router.navigate(['topic-list/' + id], { relativeTo: this.route });
    }
    gotoDetails(id) {
        this.router.navigate(['forum/topic-detail/' + id]);
    }
}
ForumComponent.ɵfac = function ForumComponent_Factory(t) { return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumComponent, selectors: [["app-forum"]], decls: 33, vars: 3, consts: [[1, "content", 2, "margin-top", "3rem"], [1, "container"], [1, "row"], [1, "col-sm-4", "col-lg-4", "col-xs-4"], [1, "pull-right", 2, "float", "right", "display", "none"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Topics", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-search"], [1, "col-sm-4", "col-lg-4", "col-xs-4", 2, "float", "right"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "teal", "btn-md", "white-text", 3, "click"], [1, "col-lg-8", "col-md-8"], ["class", "post", 4, "ngIf"], [1, "col-lg-4", "col-md-4"], [1, "sidebarblock"], [1, "divline"], [1, "blocktxt"], [1, "groups"], [4, "ngFor", "ngForOf"], [1, "post"], [1, "pull-right", "px-2"], [1, "fa", "fa-times", "red-text", 3, "click"], ["name", "form1", 1, "form", "newtopic", 3, "formGroup", "ngSubmit"], [1, "topwrap"], [1, "userinfo", "pull-left"], [1, "avatar"], ["src", "images/avatar4.jpg", "alt", ""], [1, "status", "red"], [1, "icons"], ["src", "images/icon3.jpg", "alt", ""], ["src", "images/icon4.jpg", "alt", ""], ["src", "images/icon5.jpg", "alt", ""], ["src", "images/icon6.jpg", "alt", ""], [1, "posttext", "pull-left"], ["type", "text", "placeholder", "Enter Topic Title", "formControlName", "title", 1, "form-control"], [1, "col-lg-6", "col-md-6"], ["name", "category", "id", "category", "formControlName", "category", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Category", "formControlName", "category", 1, "form-control"], ["type", "text", "placeholder", "Sub-Category", "formControlName", "subcategory", 1, "form-control"], ["name", "desc", "id", "desc", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "clearfix"], [1, "postinfobot"], [1, "notechbox", "pull-left"], ["type", "checkbox", "name", "note", "id", "note", 1, "form-control"], [1, "pull-left"], ["for", "note"], [1, "pull-right", "postreply"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"], ["href", "javascript:void(0)", 3, "click"], [1, "badge", "pull-right"]], template: function ForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_Template_button_click_13_listener() { return ctx.toggleShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start New Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForumComponent_div_18_Template, 42, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ForumComponent_li_27_Template, 5, 2, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "My Active Threads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ForumComponent_div_32_Template, 5, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.threads);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".content[_ngcontent-%COMP%] {\n    background-color: #ecf0f1;\n    border-top: solid 1px #e0e4e5;\n}\n.post[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.post[_ngcontent-%COMP%]   .wrap-ut[_ngcontent-%COMP%] {\n    width: 85%;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.post[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 85%;\n    padding-right: 30px;\n    padding-top: 20px;\n    padding-bottom: 15px;\n    color: #000;\n    font-size: 14px;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 25px;\n}\n.post[_ngcontent-%COMP%]   .postinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    border-left: solid 1px #f1f1f1;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    padding: 18px 0 25px 0;\n    text-align: center;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commentbg[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    border-radius: 2px;\n    display: inline-block;\n    padding: 12px 17px;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    position: relative;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    color: #9da6aa;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 37px;\n    margin-left: 5px;\n}\n.avatar[_ngcontent-%COMP%] {\n    position: relative;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n.avatar[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n    background-color: #80d3ab;\n}\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    border-radius: 50%;\n    border: solid 2px #ffffff;\n}\n.post[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 48px;\n    border-top: solid 1px #f1f1f1;\n    margin-top: 12px;\n    padding-top: 7px;\n}\n.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.pull-left[_ngcontent-%COMP%]{\n    float:left;\n}\n.pull-right[_ngcontent-%COMP%]{\n    float:right;\n}\n\n.sidebarblock[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.sidebarblock[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    margin: 0;\n    padding: 20px;\n}\n.sidebarblock[_ngcontent-%COMP%]   .divline[_ngcontent-%COMP%] {\n    height: 1px;\n    line-height: 1px;\n    border-bottom: solid 1px #f1f1f1;\n}\n.sidebarblock[_ngcontent-%COMP%]   .blocktxt[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    padding: 20px;\n}\nul.groups[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\nul.groups[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n    line-height: 30px;\n}\nul.groups[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 30px;\n}\nul.groups[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    font-size: 12px;\n    color: #ffffff;\n    font-family: 'Open Sans Bold', sans-serif;\n    margin-top: 7px;\n}\n\n.postinfobot[_ngcontent-%COMP%] {\n    border-top: solid 1px #f1f1f1;\n    line-height: 50px;\n    padding: 0 30px 0 94px;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.newtopic[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .newtopic[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n    border-radius: 2px;\n    box-shadow: none;\n    border: none;\n    background-color: #f1f1f1;\n    padding: 20px;\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    margin-bottom: 20px;\n    height: 50px;\n}\n.newtopic[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    border-radius: 2px;\n    box-shadow: none;\n    border: solid 1px #cfd5d7;\n    background-color: #ffffff;\n    font-size: 14px;\n    color: #000;\n    font-family: 'Open Sans Light', sans-serif;\n    margin-bottom: 20px;\n    height: 50px;\n}\n.newtopic[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n        border-radius: 2px;\n        box-shadow: none;\n        border: none;\n        background-color: #f1f1f1;\n        padding: 20px;\n        font-size: 14px;\n        color: #000;\n        font-family: 'Open Sans Light', sans-serif;\n        margin-bottom: 20px;\n        height: 150px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBLGVBQWU7QUFDZjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsU0FBUztJQUNULGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25CO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixlQUFlO1FBQ2YsV0FBVztRQUNYLDBDQUEwQztRQUMxQyxtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4gICAgbWFyZ2luLXRvcDotM3JlbTtcbn0gKi9cbi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTBlNGU1O1xufVxuLnBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzljY2NkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucG9zdCAud3JhcC11dCB7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuLnBvc3QgLnVzZXJpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4IDE1cHg7XG59XG4ucG9zdCAucG9zdHRleHQge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLnBvc3QgLnBvc3RpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2YxZjFmMTtcbn1cbi5wb3N0IC5jb21tZW50cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMThweCAwIDI1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9zdCAuY29tbWVudHMgLmNvbW1lbnRiZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEycHggMTdweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLnZpZXdzIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBjb2xvcjogIzlkYTZhYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnZpZXdzIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wb3N0IC50aW1lIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnRpbWUgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBvc3QgLmF2YXRhciB7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXZhdGFyIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwZDNhYjtcbn1cbi5hdmF0YXIgLnN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG59XG4ucG9zdCAuaWNvbnMge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5wb3N0IGgyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnB1bGwtbGVmdHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLnB1bGwtcmlnaHR7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi8qIGxlZnQgYmxvY2sgKi9cbi5zaWRlYmFyYmxvY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzljY2NkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lkZWJhcmJsb2NrIGgzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uc2lkZWJhcmJsb2NrIC5kaXZsaW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjFmMWYxO1xufVxuLnNpZGViYXJibG9jayAuYmxvY2t0eHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbnVsLmdyb3VwcyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG51bC5ncm91cHMgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG51bC5ncm91cHMgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIExpZ2h0Jywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cbnVsLmdyb3VwcyAuYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLyogY3JlYXRlIHBvc3QgKi9cbi5wb3N0aW5mb2JvdCB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgOTRweDtcbn1cbi5wb3N0IC51c2VyaW5mbyB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTVweCAxNXB4O1xufVxuLm5ld3RvcGljIGlucHV0W3R5cGU9dGV4dF0sIC5uZXd0b3BpYyBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm5ld3RvcGljIHNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NmZDVkNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4gICAgXG4gICAgLm5ld3RvcGljIHRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIExpZ2h0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forum',
                templateUrl: './forum.component.html',
                styleUrls: ['./forum.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_4__["PostQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_pipes/truncare-text.pipe */ "./src/app/_pipes/truncare-text.pipe.ts");
// https://www.positronx.io/angular-8-express-file-upload-tutorial-with-reactive-forms/









function HomeComponent_div_20_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.gotoDetails(ctx_r4.Posts[0]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "truncateText");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_div_6_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.gotoDetails(ctx_r6.Posts[1]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "truncateText");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_div_6_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.gotoDetails(ctx_r7.Posts[2]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "truncateText");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.Posts[0].myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.Posts[0].shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, ctx_r3.Posts[0].content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.Posts[1].myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.Posts[1].shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 12, ctx_r3.Posts[1].content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.Posts[2].myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.Posts[2].shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 15, ctx_r3.Posts[2].content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_20_div_6_Template, 28, 18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.Posts.length);
} }
function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_22_li_6_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 83);
} if (rf & 2) {
    const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r9.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_22_li_6_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
} }
function HomeComponent_div_22_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_22_li_6_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const post_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.gotoDetails(post_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_22_li_6_img_4_Template, 1, 1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_22_li_6_img_5_Template, 1, 0, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_22_li_6_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const post_r9 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.gotoDetails(post_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r9.myFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !post_r9.myFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, post_r9.shortDescription), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, post_r9.postedOn, "MMM d, y"));
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_22_li_6_Template, 14, 9, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Continuosly learning and always ready to help others learn too.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Subscribe & Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "iframe", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.Posts);
} }
class HomeComponent {
    constructor(router, authenticationService, postQueryService, route) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.loggedIn = false;
        this.Posts = [];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.initialiseInvites();
            }
        });
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
        }
    }
    initialiseInvites() {
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
            this.getRecentTopics();
        }
    }
    ngOnDestroy() {
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
        this.router.navigate(['blogs/post-detail/' + id]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 3, consts: [[1, "container-fluid", 2, "background", "linear-gradient(218deg, #d8c3c3, #ffff0099)", "background-repeat", "no-repeat", "background-size", "cover"], [1, "jumbotron", "jumbotron-fluid", 2, "height", "350px", "background", "linear-gradient(\n      218deg\n      , #a77070, #79790399)!important"], [1, "container"], [1, "row", "pt-5"], [1, "col-sm-4", "text-center"], [1, "fab", "fa-connectdevelop", "fa-6x", 2, "color", "maroon"], [1, "pt-5", "talentmitra-goal"], [1, "col-sm-4", "text-center", "px-2"], [1, "fas", "fa-comments", "fa-6x", 2, "color", "#176273"], [1, "fas", "fa-seedling", "fa-6x", 2, "color", "#1a651a"], [1, "full-page-intro", "ml-auto", 2, "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "d-flex", "justify-content-center", "align-items-center;"], [1, "container", 2, "margin-top", "3rem"], [1, "row"], ["class", "col-md-8 mb-4  white-text text-center text-md-left pr-4", 4, "ngIf"], ["class", "col-md-4  mb-4", 4, "ngIf"], [1, "mt-5"], [1, "my-5"], [1, "col-md-8", "mb-4", "white-text", "text-center", "text-md-left", "pr-4"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carousel-example-1z", "data-slide-to", "0", 1, "active"], ["data-target", "#carousel-example-1z", "data-slide-to", "1"], ["data-target", "#carousel-example-1z", "data-slide-to", "2"], ["class", "carousel-inner", 4, "ngIf"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-inner"], [1, "carousel-item", "active", 3, "click"], [1, "view"], ["alt", "First slide", 1, "d-block", "w-80", 2, "width", "100%", 3, "src"], [1, "mask", "rgba-black-light"], [1, "carousel-caption"], [1, "h3-responsive"], [3, "innerHTML"], [1, "carousel-item", 3, "click"], ["alt", "Second slide", 1, "d-block", "w-80", 2, "width", "100%", 3, "src"], ["alt", "Third slide", 1, "d-block", "w-100", 2, "width", "100%", 3, "src"], [1, "col-md-4", "mb-4"], [1, "mb-4", "widget"], [1, "widget-title"], [1, "side-pop", "list"], [1, "list-unstyled", 2, "font-size", "x-small"], ["class", "media my-2", 4, "ngFor", "ngForOf"], ["id", "talentmitra_about_widget-2", 1, "widget", "talentmitra_about_widget"], [1, "about-widget"], [1, "about-img"], ["href", ""], ["src", "https://res.cloudinary.com/techbirdies/image/upload/v1622943572/user-profiles/pbrbkeydvojgi4qm44bm.jpg", "alt", "About Me", 2, "width", "258px", "height", "172px"], [1, "about-autograph"], ["src", "../../assets/images/signature.png", "alt", "", 2, "width", "174px", "height", "32px"], ["id", "talentmitra_social_widget-2", 1, "widget", "talentmitra_social_widget"], [1, "social-widget"], ["href", "http://facebook.com/dev.portal.9", "target", "_blank"], [1, "fab", "fa-facebook"], ["href", "http://twitter.com", "target", "_blank"], [1, "fab", "fa-twitter"], ["href", "http://instagram.com", "target", "_blank"], [1, "fab", "fa-instagram"], ["href", "http://pinterest.com", "target", "_blank"], [1, "fab", "fa-pinterest"], ["href", "http://bloglovin.com/#", "target", "_blank"], [1, "fa", "fa-heart"], ["href", "#", "target", "_blank"], [1, "fa", "fa-rss"], ["id", "talentmitra_facebook_widget_facebook_widget-2", 1, "notitle", "noborder", "widget", "talentmitra_facebook_widget_facebook_widget"], ["id", "fb-root", 1, "fb_reset"], [2, "position", "absolute", "top", "-10000px", "width", "0px", "height", "0px"], ["data-href", "http://www.facebook.com/dev.portal.90", "data-hide-cover", "false", "data-show-facepile", "true", "data-show-posts", "false", "fb-xfbml-state", "rendered", "fb-iframe-plugin-query", "app_id=&container_width=300&hide_cover=false&href=http%3A%2F%2Fwww.facebook.com%2Fdev.portal.90&locale=en_US&sdk=joey&show_facepile=true&show_posts=false", 1, "fb-page", "fb_iframe_widget"], [2, "vertical-align", "bottom", "width", "300px", "height", "130px"], ["name", "f1e4bb99bf0b65a", "width", "1000px", "height", "1000px", "data-testid", "fb:page Facebook Social Plugin", "title", "fb:page Facebook Social Plugin", "frameborder", "0", "allowtransparency", "true", "allowfullscreen", "true", "scrolling", "no", "allow", "encrypted-media", "src", "https://www.facebook.com/v2.3/plugins/page.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1f94f2f1da0014%26domain%3Dtalentmitra.com%26origin%3Dhttps%253A%252F%252Ftalentmitra.com%252Ff2707c22fcb1ef6%26relation%3Dparent.parent&container_width=300&hide_cover=false&href=http%3A%2F%2Fwww.facebook.com%2Fdev.portal.90&locale=en_US&sdk=joey&show_facepile=true&show_posts=false", 1, "", 2, "border", "none", "visibility", "visible", "width", "300px", "height", "130px"], [1, "media", "my-2"], [1, "media-body"], [1, "side-pop-img", 2, "height", "50px", "width", "50px"], ["href", "javascript:void(0)", "rel", "bookmark", 3, "click"], ["width", "350", "height", "300", "class", "attachment-side-thumb size-side-thumb wp-post-image rounded-circle", "style", "height: 40px;width:40px", 3, "src", 4, "ngIf"], ["width", "350", "height", "300", "src", "../../assets/images/pen.png", "class", "attachment-side-thumb size-side-thumb wp-post-image rounded-circle", "style", "height: 40px;width:40px", 4, "ngIf"], [1, "side-pop-content"], ["href", "javascript:void(0)", 3, "click"], [1, "date"], ["width", "350", "height", "300", 1, "attachment-side-thumb", "size-side-thumb", "wp-post-image", "rounded-circle", 2, "height", "40px", "width", "40px", 3, "src"], ["width", "350", "height", "300", "src", "../../assets/images/pen.png", 1, "attachment-side-thumb", "size-side-thumb", "wp-post-image", "rounded-circle", 2, "height", "40px", "width", "40px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Connect with peers, mentors, companies. Ask for career guidance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We give you freedom to share your views.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "We help you grow in your career, keep you updated with the latest technologies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 15, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 41, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncateTextPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%]{\n    margin:auto;\n}\n\n*[_ngcontent-%COMP%], html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], input[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0\n}\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\nfieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    border: 0\n}\n\naddress[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], th[_ngcontent-%COMP%], var[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: 400\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    list-style: none\n}\n\ncaption[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    text-align: left\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    font-size: 100%;\n    font-weight: 400\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n    content: ''\n}\n\nstrong[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\nem[_ngcontent-%COMP%] {\n    font-style: italic\n}\n\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border: none\n}\n\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], b[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\nem[_ngcontent-%COMP%], i[_ngcontent-%COMP%], em[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], i[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-style: italic\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #f7f7f3;\n    font-family: \"Source Sans Pro\", sans-serif;\n    font-size: 14px;\n    color: #4c4a47\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .post-entry[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .more-link[_ngcontent-%COMP%], .by[_ngcontent-%COMP%], .item-related[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%], .side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%], #top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-family: \"Crimson Text\", sans-serif\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px\n}\n\na[_ngcontent-%COMP%] {\n    color: #95af7e;\n    text-decoration: none\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .subscribe-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .author-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .block-heading[_ngcontent-%COMP%], .thecomment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%]   h6.author[_ngcontent-%COMP%], .thecomment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%]   h6.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #respond[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], , .widget-title[_ngcontent-%COMP%], .promo-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .instagram-title[_ngcontent-%COMP%], .index-heading[_ngcontent-%COMP%], .archive-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: \"Source Sans Pro\", sans-serif\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    width: 1160px;\n    margin: 0 auto;\n    background-color: #fff;\n    box-shadow: 0 0 5px 5px rgba(200, 200, 200, .05);\n    border-radius: 10px;\n    margin-top: 30px\n}\n\n#content[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    padding-top: 45px\n}\n\n#main[_ngcontent-%COMP%] {\n    width: 740px;\n    float: left\n}\n\n#main.fullwidth[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n#sidebar[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 9px\n}\n\n#header[_ngcontent-%COMP%] {\n    padding: 65px 0 60px;\n    position: relative;\n    border-radius: 10px 10px 0 0\n}\n\n#logo[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto\n}\n\n#top-social[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    left: 40px\n}\n\n#top-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-right: 8px\n}\n\n.fa-twitter[_ngcontent-%COMP%] {\n    color: #15c3e0;\n}\n\n.fa-instagram[_ngcontent-%COMP%] {\n    color: #ff6000;\n}\n\n.fa-pinterest[_ngcontent-%COMP%] {\n    color: #b71111;\n}\n\n#top-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #000\n}\n\n#mobile-social[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    display: none\n}\n\n#top-search[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    right: 40px\n}\n\n#top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: 0 0;\n    border: none;\n    width: 140px;\n    padding: 0;\n    font-style: italic;\n    font-size: 13px\n}\n\n#top-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bbb\n}\n\n.widget.widget_mc4wp_form_widget[_ngcontent-%COMP%] {\n    padding: 0;\n    border: none\n}\n\n.widget.widget_mc4wp_form_widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    display: none\n}\n\n.post[_ngcontent-%COMP%] {\n    margin-bottom: 60px\n}\n\n.post-img[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n    text-align: center\n}\n\n.post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    max-width: 100%;\n    height: auto\n}\n\n.by[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-style: italic;\n    color: #999;\n    margin-right: 1px\n}\n\n#main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n    width: 340px;\n    margin-right: 30px\n}\n\n.comments[_ngcontent-%COMP%] {\n    margin-bottom: 40px\n}\n\n.widget[_ngcontent-%COMP%] {\n    background: 0 0;\n    border: 1px solid;\n    border-color: #d2c9c9;\n    border-top: unset;\n    padding: 25px 20px 22px;\n    display: block;\n    position: relative;\n    margin-bottom: 40px;\n    box-sizing: border-box\n}\n\n.widget[_ngcontent-%COMP%]:before, .widget[_ngcontent-%COMP%]:after {\n    content: '';\n    display: table\n}\n\n.widget-title[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: #000;\n    font-size: 11px;\n    font-weight: 400;\n    position: absolute;\n    top: -1px;\n    left: 0;\n    display: table;\n    overflow: hidden;\n    width: 100%;\n    border-bottom: none;\n    text-align: center;\n    white-space: nowrap;\n    transform: translateY(-50%);\n    margin-top: 0;\n    margin-bottom: 15px\n}\n\n.widget-title[_ngcontent-%COMP%]:before, .widget-title[_ngcontent-%COMP%]:after {\n    position: relative;\n    top: 10%;\n    display: table-cell;\n    width: 50%;\n    height: 1px;\n    border-top: 1px solid;\n    border-color: #ddd;\n    content: '';\n    transform: translate(0, 50%)\n}\n\n.widget-title[_ngcontent-%COMP%]:before {\n    right: 26px\n}\n\n.widget-title[_ngcontent-%COMP%]:after {\n    left: 26px\n}\n\n.widget.noborder[_ngcontent-%COMP%] {\n    border: none;\n    padding: 25px 0 0\n}\n\n.widget.notitle[_ngcontent-%COMP%] {\n    padding-top: 0\n}\n\n.widget.border_notitle[_ngcontent-%COMP%] {\n    border-top: 1px solid #ddd\n}\n\n.widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    vertical-align: middle;\n    height: auto\n}\n\n.widget[_ngcontent-%COMP%]   .screen-reader-text[_ngcontent-%COMP%] {\n    display: none\n}\n\n.widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none\n}\n\n.widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 14px\n}\n\n.widget_categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .widget_archive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: #999;\n    font-size: 13px\n}\n\n.widget_categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .widget_archive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 5px\n}\n\n.side-pop[_ngcontent-%COMP%] {\n    margin-bottom: 20px\n}\n\n.side-pop[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0\n}\n\n.side-pop-img[_ngcontent-%COMP%] {\n    margin-bottom: 10px\n}\n\n.side-pop-content[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 6px\n}\n\n.side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #000\n}\n\n.side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #999;\n    font-style: italic;\n    display: block\n}\n\n.side-pop.list[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    overflow: hidden\n}\n\n.side-pop.list[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-img[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 85px;\n    margin-right: 15px;\n    margin-bottom: 0\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%] {\n    text-align: left;\n    overflow: hidden\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .pop-num[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    line-height: 23px;\n    font-size: 13px\n}\n\n.side-pop.list[_ngcontent-%COMP%]   .side-pop-content[_ngcontent-%COMP%]   span.date[_ngcontent-%COMP%] {\n    font-size: 13px\n}\n\n.about-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-bottom: 15px\n}\n\n.about-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 18px\n}\n\n.social-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 3px\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    margin-left: 0\n}\n\n.social-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    margin-right: 0\n}\n\n.social-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    text-align: center;\n    display: inline-block;\n    background: #95af7e;\n    color: #fff;\n    font-size: 12px;\n    height: 28px;\n    width: 28px;\n    line-height: 29px;\n    border-radius: 100%;\n    transition: .3s\n}\n\n.social-widget[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    opacity: .8\n}\n\n.center-widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#sidebar[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%], .footer-widgets[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    overflow: hidden;\n    margin-bottom: -10px\n}\n\n.widget[_ngcontent-%COMP%]   ul.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   ul.children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    margin-top: 9px\n}\n\n.widget.talentmitra_facebook_widget[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n#wp-calendar[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n#footer[_ngcontent-%COMP%] {\n    margin-top: 40px\n}\n\n#footer-copyright[_ngcontent-%COMP%] {\n    overflow: hidden;\n    padding: 26px 0\n}\n\n#footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #a5a5a5\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    background: #eee;\n    border-radius: 0;\n    font-size: 11px;\n    color: #888;\n    padding: 11px 21px;\n    margin-top: 14px;\n    display: inline-block;\n    border: none;\n    transition: .3s;\n    cursor: pointer;\n    border-radius: 30px;\n    width: auto\n}\n\ninput[type=submit][_ngcontent-%COMP%]:hover {\n    background: #333;\n    color: #fff\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    color: #888;\n    padding: 9px 10px;\n    width: 100%;\n    box-sizing: border-box\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n    border: 1px solid #c4c4c4;\n    outline: none\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n    width: auto\n}\n\n.fa[_ngcontent-%COMP%] {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transform: translate(0, 0)\n}\n\n@media only screen and (min-width:942px) and (max-width:1170px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 940px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 610px\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 260px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0 18px\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 280px;\n        height: 420px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 190px;\n        margin-right: 16px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 280px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 290px;\n        margin-right: 26px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 430px\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 1.52%\n    }\n\n    .item-related[_ngcontent-%COMP%] {\n        width: 190px;\n        margin-right: 20px\n    }\n\n    #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 280px\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .recipe-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        width: 80%\n    }\n\n    .post-widget[_ngcontent-%COMP%]   .subscribe-text[_ngcontent-%COMP%] {\n        width: 40%\n    }\n\n    .post-widget[_ngcontent-%COMP%]   .subscribe-form[_ngcontent-%COMP%] {\n        width: 60%\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin: 0 18px\n    }\n}\n\n@media only screen and (min-width:767px) and (max-width:960px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 726px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 100%\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 480px;\n        margin: 0 auto;\n        float: none;\n        overflow: hidden;\n        padding-top: 5px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .slicknav_menu[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #mobile-social[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #top-social[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 216px;\n        height: 324px;\n        margin-right: 21px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 216px;\n        margin-right: 17px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 330px;\n        margin-right: 26px\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 1.5%\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 216px;\n        margin-right: 21px\n    }\n\n    .subscribe-text[_ngcontent-%COMP%] {\n        width: 40%\n    }\n\n    .subscribe-form[_ngcontent-%COMP%] {\n        width: 60%\n    }\n\n    .home-widget[_ngcontent-%COMP%]   .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 50%\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n        width: auto\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    textarea[_ngcontent-%COMP%], input.text[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n        -webkit-appearance: none;\n        border-radius: 0\n    }\n}\n\n@media only screen and (max-width:767px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 320px\n    }\n\n    #main[_ngcontent-%COMP%] {\n        width: 100%\n    }\n\n    #sidebar[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0 auto;\n        float: none;\n        overflow: hidden;\n        padding-top: 5px\n    }\n\n    #nav-wrapper[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .slicknav_menu[_ngcontent-%COMP%] {\n        display: block\n    }\n\n    #mobile-social[_ngcontent-%COMP%] {\n        display: block;\n        right: 10px\n    }\n\n    #top-social[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 280px;\n        height: 280px;\n        margin-right: 0;\n        margin-bottom: 14px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        margin-right: 0;\n        width: 100%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n        float: none;\n        margin-right: 0\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 20px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n        margin-top: 0\n    }\n\n    .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .post-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .meta-info[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 5px\n    }\n\n    .post-share[_ngcontent-%COMP%] {\n        float: left\n    }\n\n    .post-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n        margin-left: 0\n    }\n\n    .post-pagination[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%], .post-pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n        width: 100%;\n        float: none;\n        text-align: center;\n        display: block\n    }\n\n    .post-pagination[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n        margin-bottom: 10px\n    }\n\n    .post-author[_ngcontent-%COMP%] {\n        text-align: center\n    }\n\n    .author-img[_ngcontent-%COMP%] {\n        float: none;\n        margin-right: 0;\n        margin-bottom: 10px\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .recipe-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n\n    .recipe-overview[_ngcontent-%COMP%]   a.sp-print[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-bottom: 14px;\n        float: none\n    }\n\n    .step[_ngcontent-%COMP%]   span.step-number[_ngcontent-%COMP%] {\n        width: 20px;\n        height: 20px;\n        line-height: 20px;\n        margin-right: 10px\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0;\n        margin-bottom: 20px\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .home-widget[_ngcontent-%COMP%] {\n        margin-top: 20px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%] {\n        padding: 32px 28px\n    }\n\n    .subscribe-text[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        text-align: center\n    }\n\n    .subscribe-form[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        text-align: center\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home-widget[_ngcontent-%COMP%]   .subscribe-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        box-sizing: border-box;\n        margin-bottom: 12px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n        width: 100%;\n        margin-left: 0;\n        margin-bottom: 0\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n        font-size: 13px\n    }\n\n    .subscribe-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        margin-bottom: 4px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin: 0 5px\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .left-copy[_ngcontent-%COMP%] {\n        float: none;\n        text-align: left;\n        width: 100%;\n        margin-bottom: 5px\n    }\n\n    .right-copy[_ngcontent-%COMP%] {\n        float: none;\n        text-align: left\n    }\n\n    #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        width: 25%\n    }\n\n    #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(12), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(11), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(10)   #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(9), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(8), #instagram-footer[_ngcontent-%COMP%]   .instagram-pics[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(7) {\n        display: none\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .index-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        position: relative;\n        top: 5px;\n        display: block;\n        padding-left: 0\n    }\n\n    .post-entry[_ngcontent-%COMP%]   .index-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n        height: auto;\n        line-height: 15px\n    }\n\n    textarea[_ngcontent-%COMP%], input.text[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n        -webkit-appearance: none;\n        border-radius: 0\n    }\n}\n\n@media only screen and (min-width:480px) and (max-width:767px) {\n    #wrapper[_ngcontent-%COMP%] {\n        width: 480px\n    }\n\n    .feat-item[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 280px;\n        margin-right: 0;\n        margin-bottom: 14px\n    }\n\n    .feat-inner[_ngcontent-%COMP%] {\n        padding: 12px 12px 13px\n    }\n\n    .feat-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-of-type(2n+2), #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-of-type(2n+2) {\n        margin-right: 0\n    }\n\n    .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 48%;\n        margin-right: 3.2%\n    }\n\n    .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .sp-grid.col2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 48%;\n        margin-right: 3.2%\n    }\n\n    .sp-grid.col4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n        width: 23.5%;\n        margin-right: 1.36%\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n        float: left;\n        margin-right: 20px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 160px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%] {\n        text-align: left;\n        margin-top: 0;\n        margin-bottom: 14px\n    }\n\n    .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .meta-comments[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .post-share[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .item-related[_ngcontent-%COMP%], #main.fullwidth[_ngcontent-%COMP%]   .item-related[_ngcontent-%COMP%] {\n        width: 138px;\n        margin-right: 13px;\n        margin-bottom: 0\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n        display: block;\n        margin-right: 10px\n    }\n\n    .thecomment[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 40px;\n        height: auto\n    }\n\n    #footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px;\n        margin: 0 12px\n    }\n}\n\n#header[_ngcontent-%COMP%] {\n    padding-top: px;\n    padding-bottom: px\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: #f5f5f5\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    margin-top: px\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    border-radius: px\n}\n\n#header[_ngcontent-%COMP%] {\n    border-radius: px px 0 0\n}\n\n.talentmitra-goal[_ngcontent-%COMP%]{\n  color: white;\n  text-shadow: 0.2px 0.1px 2px black;\n  font-size: 29px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nlabel[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\n  color:black!important;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  \n  height:500px!important;\n}\n\n.container[_ngcontent-%COMP%]{\n  padding:0px!important;\n}\n\n.row[_ngcontent-%COMP%] {\n  display:         flex;\n  flex-wrap: wrap;\n}\n\n.row[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYmxvZy5taW4uY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSSxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7Ozs7Ozs7OztJQVNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7Ozs7OztJQU1JLGVBQWU7SUFDZjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7Ozs7SUFJSTtBQUNKOztBQUVBOzs7O0lBSUk7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7O0lBRUksZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBR0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFJQTtJQUNJO0FBQ0o7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBS25CLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2I7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUtYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBS25CO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsWUFBWTtJQUtaLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7OztJQUdJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBSUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWjtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7Ozs7OztRQU1JLHdCQUF3QjtRQUN4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQjtJQUNKOztJQUVBOztRQUVJLFdBQVc7UUFDWCxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkO0lBQ0o7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkI7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWDtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBOzs7OztRQUtJO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7Ozs7OztRQU1JLHdCQUF3QjtRQUN4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7UUFDZjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Y7SUFDSjs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Y7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7O1FBRUk7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2I7SUFDSjs7SUFFQTs7UUFFSTtJQUNKOztJQUVBOztRQUVJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEI7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksZUFBZTtRQUNmO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjtBQUNKOztBQUtBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQzNwQ0E7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFJRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luOmF1dG87XG59XG5cbiosXG5odG1sLFxuYm9keSxcbmRpdixcbmRsLFxuZHQsXG5kZCxcbnVsLFxub2wsXG5saSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnByZSxcbmZvcm0sXG5sYWJlbCxcbmZpZWxkc2V0LFxuaW5wdXQsXG5wLFxuYmxvY2txdW90ZSxcbnRoLFxudGQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwXG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwXG59XG5cbmZpZWxkc2V0LFxuaW1nIHtcbiAgICBib3JkZXI6IDBcbn1cblxuYWRkcmVzcyxcbmNhcHRpb24sXG5jaXRlLFxuY29kZSxcbmRmbixcbmVtLFxuc3Ryb25nLFxudGgsXG52YXIge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwXG59XG5cbm9sLFxudWwsXG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG5jYXB0aW9uLFxudGgge1xuICAgIHRleHQtYWxpZ246IGxlZnRcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnXG59XG5cbnN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMFxufVxuXG5lbSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljXG59XG5cbmEgaW1nIHtcbiAgICBib3JkZXI6IG5vbmVcbn1cblxuc3Ryb25nLFxuYixcbnN0cm9uZyAqLFxuYiAqIHtcbiAgICBmb250LXdlaWdodDogNzAwXG59XG5cbmVtLFxuaSxcbmVtICosXG5pICoge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2YzO1xuICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzRjNGE0N1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG4ucG9zdC1lbnRyeSBibG9ja3F1b3RlIHAsXG4uZW50cnktY29udGVudCBibG9ja3F1b3RlIHAsXG4ubW9yZS1saW5rLFxuLmJ5LFxuLml0ZW0tcmVsYXRlZCBzcGFuLmRhdGUsXG4uc2lkZS1wb3AtY29udGVudCBzcGFuLmRhdGUsXG4jdG9wLXNlYXJjaCBpbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3JpbXNvbiBUZXh0XCIsIHNhbnMtc2VyaWZcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4XG59XG5cbmEge1xuICAgIGNvbG9yOiAjOTVhZjdlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuLnN1YnNjcmliZS1ib3ggaDQsXG4uYXV0aG9yLWNvbnRlbnQgaDUgYSxcbi5ibG9jay1oZWFkaW5nLFxuLnRoZWNvbW1lbnQgLmNvbW1lbnQtdGV4dCBoNi5hdXRob3IsXG4udGhlY29tbWVudCAuY29tbWVudC10ZXh0IGg2LmF1dGhvciBhLFxuI3Jlc3BvbmQgaDMsLFxuLndpZGdldC10aXRsZSxcbi5wcm9tby1vdmVybGF5IGg0LFxuLmluc3RhZ3JhbS10aXRsZSxcbi5pbmRleC1oZWFkaW5nLFxuLmFyY2hpdmUtYm94IGgxIHtcbiAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZlxufVxuXG4jd3JhcHBlciB7XG4gICAgd2lkdGg6IDExNjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHhcbn1cblxuI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDQ1cHhcbn1cblxuI21haW4ge1xuICAgIHdpZHRoOiA3NDBweDtcbiAgICBmbG9hdDogbGVmdFxufVxuXG4jbWFpbi5mdWxsd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbiNzaWRlYmFyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDlweFxufVxuXG4jaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA2NXB4IDAgNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMFxufVxuXG4jbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbiNsb2dvIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0b1xufVxuXG4jdG9wLXNvY2lhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0MHB4XG59XG5cbiN0b3Atc29jaWFsIGEsXG4jbW9iaWxlLXNvY2lhbCBhIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHhcbn1cbi5mYS10d2l0dGVyIHtcbiAgICBjb2xvcjogIzE1YzNlMDtcbn1cbi5mYS1pbnN0YWdyYW0ge1xuICAgIGNvbG9yOiAjZmY2MDAwO1xufVxuLmZhLXBpbnRlcmVzdCB7XG4gICAgY29sb3I6ICNiNzExMTE7XG59XG5cbiN0b3Atc29jaWFsIGE6aG92ZXIsXG4jbW9iaWxlLXNvY2lhbCBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMFxufVxuXG4jbW9iaWxlLXNvY2lhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbiN0b3Atc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIHJpZ2h0OiA0MHB4XG59XG5cbiN0b3Atc2VhcmNoIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuI3RvcC1zZWFyY2ggaSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYmJiXG59XG5cbi53aWRnZXQud2lkZ2V0X21jNHdwX2Zvcm1fd2lkZ2V0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZVxufVxuXG4ud2lkZ2V0LndpZGdldF9tYzR3cF9mb3JtX3dpZGdldCAud2lkZ2V0LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5wb3N0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4XG59XG5cblxuLnBvc3QtaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ucG9zdC1pbWcgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG9cbn1cblxuLmJ5IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbi1yaWdodDogMXB4XG59XG5cblxuI21haW4uZnVsbHdpZHRoIC5pdGVtLXJlbGF0ZWQge1xuICAgIHdpZHRoOiAzNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHhcbn1cblxuXG5cbi5jb21tZW50cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweFxufVxuXG5cblxuLndpZGdldCB7XG4gICAgYmFja2dyb3VuZDogMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2QyYzljOTtcbiAgICBib3JkZXItdG9wOiB1bnNldDtcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHggMjJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbi53aWRnZXQ6YmVmb3JlLFxuLndpZGdldDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogdGFibGVcbn1cblxuLndpZGdldC10aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxufVxuXG4ud2lkZ2V0LXRpdGxlOmJlZm9yZSxcbi53aWRnZXQtdGl0bGU6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwJTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICBjb250ZW50OiAnJztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKVxufVxuXG4ud2lkZ2V0LXRpdGxlOmJlZm9yZSB7XG4gICAgcmlnaHQ6IDI2cHhcbn1cblxuLndpZGdldC10aXRsZTphZnRlciB7XG4gICAgbGVmdDogMjZweFxufVxuXG4ud2lkZ2V0Lm5vYm9yZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMjVweCAwIDBcbn1cblxuLndpZGdldC5ub3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMFxufVxuXG4ud2lkZ2V0LmJvcmRlcl9ub3RpdGxlIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZFxufVxuXG4ud2lkZ2V0IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiBhdXRvXG59XG5cbi53aWRnZXQgLnNjcmVlbi1yZWFkZXItdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4ud2lkZ2V0IGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXG59XG5cbi53aWRnZXQgdWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbn1cblxuLndpZGdldCB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmVcbn1cblxuLndpZGdldCB1bCBsaSBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHhcbn1cblxuLndpZGdldF9jYXRlZ29yaWVzIHVsIGxpLFxuLndpZGdldF9hcmNoaXZlIHVsIGxpIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLndpZGdldF9jYXRlZ29yaWVzIGEsXG4ud2lkZ2V0X2FyY2hpdmUgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcbn1cblxuLnNpZGUtcG9wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG59XG5cbi5zaWRlLXBvcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwXG59XG5cbi5zaWRlLXBvcC1pbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbn1cblxuLnNpZGUtcG9wLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uc2lkZS1wb3AtY29udGVudCBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4XG59XG5cbi5zaWRlLXBvcC1jb250ZW50IGg0IGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwMFxufVxuXG4uc2lkZS1wb3AtY29udGVudCBzcGFuLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnNpZGUtcG9wLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4uc2lkZS1wb3AubGlzdDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwXG59XG5cbi5zaWRlLXBvcC5saXN0IC5zaWRlLXBvcC1pbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1heC13aWR0aDogODVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG4uc2lkZS1wb3AubGlzdCAuc2lkZS1wb3AtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5zaWRlLXBvcC5saXN0IC5zaWRlLXBvcC1jb250ZW50IGg0IGEge1xuICAgIGZvbnQtc2l6ZTogMTRweFxufVxuXG4uc2lkZS1wb3AubGlzdCAucG9wLW51bSB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4uc2lkZS1wb3AubGlzdCAuc2lkZS1wb3AtY29udGVudCBzcGFuLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4uYWJvdXQtd2lkZ2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmFib3V0LWltZyBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XG59XG5cbi5hYm91dC13aWRnZXQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweFxufVxuXG4uc29jaWFsLXdpZGdldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5zb2NpYWwtd2lkZ2V0IGEge1xuICAgIG1hcmdpbjogMCAzcHhcbn1cblxuLnNvY2lhbC13aWRnZXQgYTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBcbn1cblxuLnNvY2lhbC13aWRnZXQgYTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBcbn1cblxuLnNvY2lhbC13aWRnZXQgaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjOTVhZjdlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtby10cmFuc2l0aW9uOiAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uOiAuM3Ncbn1cblxuLnNvY2lhbC13aWRnZXQgaTpob3ZlciB7XG4gICAgb3BhY2l0eTogLjhcbn1cblxuLmNlbnRlci13aWRnZXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4jc2lkZWJhciAuaW5zdGFncmFtLXBpY3MsXG4uZm9vdGVyLXdpZGdldHMgLmluc3RhZ3JhbS1waWNzIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweFxufVxuXG5cbi53aWRnZXQgdWwubWVudSBsaSB1bCxcbi53aWRnZXQgdWwuY2hpbGRyZW4gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA5cHhcbn1cblxuLndpZGdldC50YWxlbnRtaXRyYV9mYWNlYm9va193aWRnZXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4jd3AtY2FsZW5kYXIge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbiNmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHhcbn1cblxuXG4jZm9vdGVyLWNvcHlyaWdodCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAyNnB4IDBcbn1cblxuI2Zvb3Rlci1jb3B5cmlnaHQgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYTVhNWE1XG59XG5cblxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHBhZGRpbmc6IDExcHggMjFweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLW8tdHJhbnNpdGlvbjogLjNzO1xuICAgIC1tcy10cmFuc2l0aW9uOiAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHdpZHRoOiBhdXRvXG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBjb2xvcjogI2ZmZlxufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbn1cblxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICBvdXRsaW5lOiBub25lXG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgICB3aWR0aDogYXV0b1xufVxuXG4uZmEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMClcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5NDJweCkgYW5kIChtYXgtd2lkdGg6MTE3MHB4KSB7XG4gICAgI3dyYXBwZXIge1xuICAgICAgICB3aWR0aDogOTQwcHhcbiAgICB9XG5cbiAgICAjbWFpbiB7XG4gICAgICAgIHdpZHRoOiA2MTBweFxuICAgIH1cblxuICAgICNzaWRlYmFyIHtcbiAgICAgICAgd2lkdGg6IDI2MHB4XG4gICAgfVxuXG4gICAgI25hdi13cmFwcGVyIC5tZW51IGxpIHtcbiAgICAgICAgbWFyZ2luOiAwIDE4cHhcbiAgICB9XG5cbiAgICAuZmVhdC1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBoZWlnaHQ6IDQyMHB4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIgaDIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDM+bGkge1xuICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweFxuICAgIH1cblxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wzPmxpIHtcbiAgICAgICAgd2lkdGg6IDI4MHB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMj5saSB7XG4gICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNnB4XG4gICAgfVxuXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDI+bGkge1xuICAgICAgICB3aWR0aDogNDMwcHhcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2w0PmxpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjUyJVxuICAgIH1cblxuICAgIC5pdGVtLXJlbGF0ZWQge1xuICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweFxuICAgIH1cblxuICAgICNtYWluLmZ1bGx3aWR0aCAuaXRlbS1yZWxhdGVkIHtcbiAgICAgICAgd2lkdGg6IDI4MHB4XG4gICAgfVxuXG4gICAgLnBvc3QtZW50cnkgLnJlY2lwZS1vdmVydmlldyBoMiB7XG4gICAgICAgIHdpZHRoOiA4MCVcbiAgICB9XG5cbiAgICAucG9zdC13aWRnZXQgLnN1YnNjcmliZS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IDQwJVxuICAgIH1cblxuICAgIC5wb3N0LXdpZGdldCAuc3Vic2NyaWJlLWZvcm0ge1xuICAgICAgICB3aWR0aDogNjAlXG4gICAgfVxuXG4gICAgI2Zvb3Rlci1zb2NpYWwgYSB7XG4gICAgICAgIG1hcmdpbjogMCAxOHB4XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpIGFuZCAobWF4LXdpZHRoOjk2MHB4KSB7XG4gICAgI3dyYXBwZXIge1xuICAgICAgICB3aWR0aDogNzI2cHhcbiAgICB9XG5cbiAgICAjbWFpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuXG4gICAgI3NpZGViYXIge1xuICAgICAgICB3aWR0aDogNDgwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweFxuICAgIH1cblxuICAgICNuYXYtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuc2xpY2tuYXZfbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuXG4gICAgI21vYmlsZS1zb2NpYWwge1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cblxuICAgICN0b3Atc29jaWFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5mZWF0LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjE2cHg7XG4gICAgICAgIGhlaWdodDogMzI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjFweFxuICAgIH1cblxuICAgIC5mZWF0LWlubmVyIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4IDEzcHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciBoMiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMz5saSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMz5saSB7XG4gICAgICAgIHdpZHRoOiAyMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxN3B4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMj5saSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMj5saSB7XG4gICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNnB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sND5saSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41JVxuICAgIH1cblxuICAgIC5pdGVtLXJlbGF0ZWQsXG4gICAgI21haW4uZnVsbHdpZHRoIC5pdGVtLXJlbGF0ZWQge1xuICAgICAgICB3aWR0aDogMjE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjFweFxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtdGV4dCB7XG4gICAgICAgIHdpZHRoOiA0MCVcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWZvcm0ge1xuICAgICAgICB3aWR0aDogNjAlXG4gICAgfVxuXG4gICAgLmhvbWUtd2lkZ2V0IC5zdWJzY3JpYmUtYm94IGlucHV0LFxuICAgIC5zdWJzY3JpYmUtYm94IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDUwJVxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtYm94IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgIHdpZHRoOiBhdXRvXG4gICAgfVxuXG4gICAgI2Zvb3Rlci1zb2NpYWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgIH1cblxuICAgICNmb290ZXItc29jaWFsIGEgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICB0ZXh0YXJlYSxcbiAgICBpbnB1dC50ZXh0LFxuICAgIGlucHV0W3R5cGU9dGV4dF0sXG4gICAgaW5wdXRbdHlwZT1idXR0b25dLFxuICAgIGlucHV0W3R5cGU9c3VibWl0XSxcbiAgICAuaW5wdXQtY2hlY2tib3gge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgICN3cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4XG4gICAgfVxuXG4gICAgI21haW4ge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cblxuICAgICNzaWRlYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweFxuICAgIH1cblxuICAgICNuYXYtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuc2xpY2tuYXZfbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuXG4gICAgI21vYmlsZS1zb2NpYWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcmlnaHQ6IDEwcHhcbiAgICB9XG5cbiAgICAjdG9wLXNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuZmVhdC1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweCAxM3B4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIgaDIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDM+bGksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDM+bGkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMj5saSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMj5saSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2w0PmxpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtaW1nIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtaW1nIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJVxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtaGVhZGVyIGgyIGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LW1ldGEge1xuICAgICAgICBtYXJnaW4tdG9wOiAwXG4gICAgfVxuXG4gICAgLnBvc3QtaGVhZGVyIGgyIGEsXG4gICAgLnBvc3QtaGVhZGVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4XG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMiAuZ3JpZC1pdGVtIC5wb3N0LWhlYWRlciBoMiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgfVxuXG4gICAgLm1ldGEtaW5mbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHhcbiAgICB9XG5cbiAgICAucG9zdC1zaGFyZSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0XG4gICAgfVxuXG4gICAgLnBvc3Qtc2hhcmUgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwXG4gICAgfVxuXG4gICAgLnBvc3QtcGFnaW5hdGlvbiAucHJldixcbiAgICAucG9zdC1wYWdpbmF0aW9uIC5uZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuXG4gICAgLnBvc3QtcGFnaW5hdGlvbiAucHJldiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgICB9XG5cbiAgICAucG9zdC1hdXRob3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG5cbiAgICAuYXV0aG9yLWltZyB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgICB9XG5cbiAgICAucG9zdC1lbnRyeSAucmVjaXBlLW92ZXJ2aWV3IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgfVxuXG4gICAgLnJlY2lwZS1vdmVydmlldyBhLnNwLXByaW50IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICBmbG9hdDogbm9uZVxuICAgIH1cblxuICAgIC5zdGVwIHNwYW4uc3RlcC1udW1iZXIge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgfVxuXG4gICAgLml0ZW0tcmVsYXRlZCxcbiAgICAjbWFpbi5mdWxsd2lkdGggLml0ZW0tcmVsYXRlZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICB9XG5cbiAgICAudGhlY29tbWVudCAuYXV0aG9yLWltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuaG9tZS13aWRnZXQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1ib3gge1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDI4cHhcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLXRleHQge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cblxuICAgIC5zdWJzY3JpYmUtZm9ybSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1ib3ggaW5wdXQsXG4gICAgLmhvbWUtd2lkZ2V0IC5zdWJzY3JpYmUtYm94IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHhcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWJveCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICB9XG5cbiAgICAuc3Vic2NyaWJlLWJveCBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4XG4gICAgfVxuXG4gICAgLnN1YnNjcmliZS1ib3ggaDQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHhcbiAgICB9XG5cbiAgICAjZm9vdGVyLXNvY2lhbCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDAgNXB4XG4gICAgfVxuXG4gICAgI2Zvb3Rlci1zb2NpYWwgYSBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5sZWZ0LWNvcHkge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweFxuICAgIH1cblxuICAgIC5yaWdodC1jb3B5IHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICB9XG5cbiAgICAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3MgbGkge1xuICAgICAgICB3aWR0aDogMjUlXG4gICAgfVxuXG4gICAgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzPmxpOm50aC1jaGlsZCgxMiksXG4gICAgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzPmxpOm50aC1jaGlsZCgxMSksXG4gICAgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzPmxpOm50aC1jaGlsZCgxMCkgI2luc3RhZ3JhbS1mb290ZXIgLmluc3RhZ3JhbS1waWNzPmxpOm50aC1jaGlsZCg5KSxcbiAgICAjaW5zdGFncmFtLWZvb3RlciAuaW5zdGFncmFtLXBpY3M+bGk6bnRoLWNoaWxkKDgpLFxuICAgICNpbnN0YWdyYW0tZm9vdGVyIC5pbnN0YWdyYW0tcGljcz5saTpudGgtY2hpbGQoNykge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLnBvc3QtZW50cnkgLmluZGV4LWhlYWRpbmcgYSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBcbiAgICB9XG5cbiAgICAucG9zdC1lbnRyeSAuaW5kZXgtaGVhZGluZz5zcGFuIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweFxuICAgIH1cblxuICAgIHRleHRhcmVhLFxuICAgIGlucHV0LnRleHQsXG4gICAgaW5wdXRbdHlwZT10ZXh0XSxcbiAgICBpbnB1dFt0eXBlPWJ1dHRvbl0sXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdLFxuICAgIC5pbnB1dC1jaGVja2JveCB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMFxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MHB4KSBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgICN3cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDQ4MHB4XG4gICAgfVxuXG4gICAgLmZlYXQtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHhcbiAgICB9XG5cbiAgICAuZmVhdC1pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweCAxM3B4XG4gICAgfVxuXG4gICAgLmZlYXQtaW5uZXIgaDIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDM+bGk6bnRoLW9mLXR5cGUoMm4rMiksXG4gICAgI21haW4uZnVsbHdpZHRoIC5zcC1ncmlkLmNvbDM+bGk6bnRoLW9mLXR5cGUoMm4rMikge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICB9XG5cbiAgICAuc3AtZ3JpZC5jb2wzPmxpLFxuICAgICNtYWluLmZ1bGx3aWR0aCAuc3AtZ3JpZC5jb2wzPmxpIHtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjIlXG4gICAgfVxuXG4gICAgLnNwLWdyaWQuY29sMj5saSxcbiAgICAjbWFpbi5mdWxsd2lkdGggLnNwLWdyaWQuY29sMj5saSB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMy4yJVxuICAgIH1cblxuICAgIC5zcC1ncmlkLmNvbDQ+bGkge1xuICAgICAgICB3aWR0aDogMjMuNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4zNiVcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LWltZyB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5wb3N0LWltZyBpbWcsXG4gICAgI21haW4uZnVsbHdpZHRoIC5saXN0LWl0ZW0gLnBvc3QtaW1nIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTYwcHhcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIC5saXN0LWNvbnRlbnQgLnBvc3QtaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweFxuICAgIH1cblxuICAgIC5saXN0LWl0ZW0gLnBvc3QtbWV0YSAubWV0YS1jb21tZW50cyxcbiAgICAubGlzdC1pdGVtIC5wb3N0LW1ldGEgLnBvc3Qtc2hhcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLml0ZW0tcmVsYXRlZCxcbiAgICAjbWFpbi5mdWxsd2lkdGggLml0ZW0tcmVsYXRlZCB7XG4gICAgICAgIHdpZHRoOiAxMzhweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXG4gICAgfVxuXG4gICAgLnRoZWNvbW1lbnQgLmF1dGhvci1pbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgfVxuXG4gICAgLnRoZWNvbW1lbnQgLmF1dGhvci1pbWcgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG9cbiAgICB9XG5cbiAgICAjZm9vdGVyLXNvY2lhbCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDAgMTJweFxuICAgIH1cbn1cblxuXG5cblxuI2hlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiBweFxufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XG59XG5cbiN3cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiBweFxufVxuXG4jd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogcHhcbn1cblxuI2hlYWRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogcHggcHggMCAwXG59XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvYmxvZy5taW4uY3NzXCI7XG5cbi50YWxlbnRtaXRyYS1nb2Fse1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwLjJweCAwLjFweCAycHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbmxhYmVse1xuICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XG59XG4ubmF2LWl0ZW0gYXtcbiAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xufVxuLm5hdi1pdGVtIGEuYWN0aXZle1xuICBjb2xvcjpibGFjayFpbXBvcnRhbnQ7XG59XG4uY2Fyb3VzZWwtaXRlbSAgaW1ne1xuICAvKiBwYWRkaW5nOiAycmVtIDFyZW07ICovXG4gIGhlaWdodDo1MDBweCFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVye1xuICBwYWRkaW5nOjBweCFpbXBvcnRhbnQ7XG59XG4ucm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6ICAgICAgICAgZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnJvdyA+IFtjbGFzcyo9J2NvbC0nXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/alert.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/alert.service.ts ***!
  \****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/auth-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/login/auth-service.service.ts ***!
  \***********************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AuthServiceService {
    constructor(http) {
        this.http = http;
        // public url ="https://talentmitra-o5ryx.ondigitalocean.app";
        this.url = '';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        return this.http.post(`${this.url}/auth/login`, { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    register(user) {
        return this.http.post(`${this.url}/auth/register`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    forgotPassword(email) {
        console.log("came here with " + email);
        let user = { code, email };
        var code = Math.floor(Math.random() * 90000) + 10000;
        this.code = code;
        user.code = code;
        user.email = email;
        return this.http.post(`${this.url}/auth/forgotpass`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            data.code = this.code;
            console.log(data);
            return data;
        }));
    }
    resetPassword(user) {
        console.log("came here with ");
        console.log(user);
        return this.http.post(`${this.url}/auth/resetPassword`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            console.log(data);
            return data;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ForgotPasswordComponent_div_4_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_4_div_7_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
} }
function ForgotPasswordComponent_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.passwordErrorMsg, " ");
} }
function ForgotPasswordComponent_div_4_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
} }
function ForgotPasswordComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A verification code has been sent to your mail ID. Check your mail.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_div_4_div_18_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_4_div_18_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.verifyErrorMsg);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ForgotPasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_div_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onforgotPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_div_4_div_7_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPasswordComponent_div_4_div_8_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordComponent_div_4_span_12_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_div_4_div_18_Template, 13, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.forgotPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.lsubmitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lsubmitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.passwordErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loadingL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sendStatus);
} }
function ForgotPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_div_5_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.confirmPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_5_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.passwordUpdateMsg, " ");
} }
class ForgotPasswordComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingL = false;
        this.lsubmitted = false;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.passwordUpdateMsg = '';
        this.verifyErrorMsg = '';
        this.sendStatus = false;
        this.verifyCheck = false;
        this.passwordErrorMsg = '';
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.loadingL = false;
            if (data.error) {
                this.passwordErrorMsg = data.error;
            }
            else {
                this.passwordErrorMsg = '';
                this.sendStatus = true;
                this.verifyCode = data.code;
            }
            // this.router.navigate([this.returnUrl]);
        }, error => {
            this.loadingL = false;
        });
    }
    resetPassword() {
        if (!this.verifyCheck) {
            if (this.verifyCode == this.code) {
                this.verifyCheck = true;
                this.verifyErrorMsg = 'Code Verified';
            }
        }
        else {
            if (this.password === this.confirmPassword) {
                this.authenticationService.resetPassword({ email: this.email, password: this.password })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                    .subscribe(data => {
                    if (data.error) {
                        this.passwordUpdateMsg = "Something went wrong. Try again";
                    }
                    else {
                        this.passwordUpdateMsg = "Password changed! Login again.";
                    }
                    this.router.navigate([this.returnUrl]);
                }, error => {
                    this.passwordUpdateMsg = "Something went wrong. Try again!!!!";
                });
            }
            else {
                this.passwordUpdateMsg = "Passwords don't match";
            }
        }
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 6, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-sm-5", "col-sm-offset-4", 2, "margin-top", "-31px"], [1, "form-box"], [4, "ngIf"], ["class", "form-bottom", 4, "ngIf"], [1, "form-bottom"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "md-form", "form-group"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "mb-4"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "btn-pink", "btn-rounded", "btn-block", "btn-rounded", "z-depth-1", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["href", "#/"], [1, "invalid-feedback"], ["role", "alert", 1, "form-group", "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "mr-1"], ["for", "form-email", 1, "sr-only"], ["type", "text", "name", "form-username", "placeholder", "Enter Code", "required", "", 1, "form-username", "form-control", 3, "ngModel", "ngModelChange"], ["ng-show", "verifyErrorMsg", 1, "form-group", "alert", "alert-danger"], [1, "form-group"], [1, "btn", "btn-primary", 3, "click"], ["type", "password", "placeholder", "New Password", "required", "", 1, "form-username", "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Confirm Password", "required", "", 1, "form-username", "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], ["ng-show", "passwordUpdateMsg"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotPasswordComponent_div_4_Template, 19, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_div_5_Template, 17, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.verifyCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verifyCheck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "./src/app/login/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LoginComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_16_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.r.firstName.errors.required);
} }
function LoginComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_21_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.r.lastName.errors.required);
} }
function LoginComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_26_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.r.email.errors.required);
} }
function LoginComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_31_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_31_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.r.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.r.password.errors.minlength);
} }
function LoginComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
} }
function LoginComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_43_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.required);
} }
function LoginComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_48_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.password.errors.required);
} }
function LoginComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loadingL = false;
        this.loadingR = false;
        this.lsubmitted = false;
        this.rsubmitted = false;
        this.step = 0;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    get r() { return this.registerForm.controls; }
    onSubmit() {
        this.lsubmitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loadingL = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.alertService.error(error);
            this.loadingL = false;
        });
    }
    onRegister() {
        this.rsubmitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loadingR = true;
        this.authenticationService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/']);
        }, error => {
            this.alertService.error(error);
            this.loadingR = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 57, vars: 30, consts: [[1, "card", "rgba-teal-strong", "darken-2", "text-white", "text-center", "p-3", "mt-2", "mb-2", 2, "height", "100%"], [1, "card-body"], ["id", "myTabMD", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified", "md-tabs", "rgba-white-light"], [1, "nav-item"], ["id", "home-tab-md", "data-toggle", "tab", "href", "#home-md", "role", "tab", "aria-controls", "home-md", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab-md", "data-toggle", "tab", "href", "#profile-md", "role", "tab", "aria-controls", "profile-md", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContentMD", 1, "tab-content"], ["id", "home-md", "role", "tabpanel", "aria-labelledby", "home-tab-md", 1, "tab-pane", "active"], ["name", "form2", 3, "formGroup", "ngSubmit"], [1, "md-form"], ["for", "firstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", "white-text", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", "white-text", 3, "ngClass"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", "white-text", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", "white-text", 3, "ngClass"], [1, "row", "d-flex", "align-items-center", "mb-4"], [1, "text-center", "mb-3", "col-md-12", "form-group"], [1, "btn", "btn-pink", "btn-rounded", "btn-block", "btn-rounded", "z-depth-1", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["id", "profile-md", "role", "tabpanel", "aria-labelledby", "profile-tab-md", 1, "tab-pane", "fade"], ["name", "form1", 3, "formGroup", "ngSubmit"], [1, "md-form", "form-group"], [1, "flex-row", 2, "text-align", "left"], ["routerLink", "/forgot", 1, "white-text"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LoginComponent_span_35_Template, 1, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_38_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, LoginComponent_div_43_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, LoginComponent_div_48_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoginComponent_span_52_Template, 1, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.rsubmitted && ctx.r.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.rsubmitted && ctx.r.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.rsubmitted && ctx.r.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.rsubmitted && ctx.r.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsubmitted && ctx.r.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.lsubmitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lsubmitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.lsubmitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lsubmitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingL);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nlabel[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color:white!important;\n}\n\n.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\n  color:black!important;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  \n  height:500px!important;\n}\n\n.container[_ngcontent-%COMP%]{\n  padding:0px!important;\n}\n\n.row[_ngcontent-%COMP%] {\n  display:         flex;\n  flex-wrap: wrap;\n}\n\n.row[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUlFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxubGFiZWx7XG4gIGNvbG9yOndoaXRlIWltcG9ydGFudDtcbn1cbi5uYXYtaXRlbSBhe1xuICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XG59XG4ubmF2LWl0ZW0gYS5hY3RpdmV7XG4gIGNvbG9yOmJsYWNrIWltcG9ydGFudDtcbn1cbi5jYXJvdXNlbC1pdGVtICBpbWd7XG4gIC8qIHBhZGRpbmc6IDJyZW0gMXJlbTsgKi9cbiAgaGVpZ2h0OjUwMHB4IWltcG9ydGFudDtcbn1cbi5jb250YWluZXJ7XG4gIHBhZGRpbmc6MHB4IWltcG9ydGFudDtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogICAgICAgICBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucm93ID4gW2NsYXNzKj0nY29sLSddIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");












































class MyMaterialModule {
}
MyMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyMaterialModule });
MyMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyMaterialModule_Factory(t) { return new (t || MyMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-detail/post-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.ts ***!
  \******************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function PostDetailComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.post.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.post.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostDetailComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.post.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_7_div_1_Template, 7, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_div_7_div_2_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFileType(ctx_r0.post.myFile) === "mp4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFileType(ctx_r0.post.myFile) === "jpg" || ctx_r0.getFileType(ctx_r0.post.myFile) === "bmp" || ctx_r0.getFileType(ctx_r0.post.myFile) === "png" || ctx_r0.getFileType(ctx_r0.post.myFile) === "gif");
} }
function PostDetailComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Works at ", ctx_r1.post.postedBy == null ? null : ctx_r1.post.postedBy.company, "");
} }
function PostDetailComponent_div_40_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commentReply_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", commentReply_r10.commentedBy == null ? null : commentReply_r10.commentedBy.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (commentReply_r10.commentedBy == null ? null : commentReply_r10.commentedBy.firstName) + " " + (commentReply_r10.commentedBy == null ? null : commentReply_r10.commentedBy.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", commentReply_r10.commentText, " ");
} }
function PostDetailComponent_div_40_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_40_div_1_div_8_div_1_Template, 6, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r6.commentReplies);
} }
function PostDetailComponent_div_40_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostDetailComponent_div_40_div_1_div_9_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.commentReply = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_div_40_div_1_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onCommentReply(comment_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", comment_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.commentReply);
} }
function PostDetailComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_div_40_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const comment_r6 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.onShowReplyForm(comment_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostDetailComponent_div_40_div_1_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostDetailComponent_div_40_div_1_div_9_Template, 7, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", comment_r6.commentedBy == null ? null : comment_r6.commentedBy.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (comment_r6.commentedBy == null ? null : comment_r6.commentedBy.firstName) + " " + (comment_r6.commentedBy == null ? null : comment_r6.commentedBy.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r6.commentText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r6.commentReplies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showReplyForm === comment_r6._id);
} }
function PostDetailComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_40_div_1_Template, 10, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.post.comments);
} }
class PostDetailComponent {
    constructor(router, route, postQueryService, authenticationService) {
        this.router = router;
        this.route = route;
        this.postQueryService = postQueryService;
        this.authenticationService = authenticationService;
        this.showReplyForm = '';
        this.post = {};
        this.currentUser = this.authenticationService.currentUserValue;
        // if (!this.currentUser) this.router.navigate(['/']);
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            this.postId = params.id;
            this.getPost();
        });
    }
    getPost() {
        this.postQueryService.getPostById(this.postId, this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.post = res;
        });
    }
    onComment() {
        console.log(this.comment);
        let postData = {
            "id": this.postId,
            "commentText": this.comment,
            "commentedByName": this.currentUser.user.firstName + ' ' + this.currentUser.user.lastName,
            "commentedByEmail": this.currentUser.user.email,
            "commentedOn": new Date()
        };
        this.postQueryService.addPostsComment(postData, this.currentUser.token).subscribe((data) => {
            this.getPost();
            // this.Topics.push(data);
        });
    }
    onCommentReply(id) {
        console.log(id);
        let postData = {
            "postId": this.postId,
            "commentText": this.commentReply,
            "commentedOn": new Date(),
            "commentId": id
        };
        this.postQueryService.addPostsCommentReply(postData, this.currentUser.token).subscribe((data) => {
            this.getPost();
            // this.Topics.push(data);
        });
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
        this.router.navigate(['blogs/profile/' + id]);
    }
    goBack() {
        this.router.navigate(['../../../blog/'], { relativeTo: this.route });
    }
}
PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) { return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"])); };
PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailComponent, selectors: [["app-post-detail"]], decls: 41, vars: 10, consts: [[1, "mt-4"], [1, "row"], [1, "col-md-12", "mb-4"], [1, "card", "mb-4"], [1, "card-body"], [1, "h6", "my-4"], [4, "ngIf"], [1, "post", 2, "padding", "3rem", 3, "innerHTML"], [1, "card-header", "font-weight-bold"], [1, "media", "d-block", "d-md-flex", "mt-3"], ["alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto", "z-depth-1", 2, "width", "100px", 3, "src"], [1, "media-body", "text-center", "text-md-left", "ml-md-3", "ml-0"], ["href", "javascript:void(0)", 3, "click"], [1, "mt-0", "font-weight-bold"], ["id", "comment", 1, "card", "mb-3"], [1, "form-group"], ["for", "replyFormComment"], ["id", "replyFormComment", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-info", "btn-md", 3, "click"], [1, "card", "card-comments", "mb-3", 2, "height", "400px", "overflow-y", "scroll"], [1, "view", "overlay"], [1, "embed-responsive", "rounded-top"], ["width", "320", "height", "240", "controls", "", 1, "img-fluid"], ["type", "video/mp4", 3, "src"], ["type", "video/ogg", 3, "src"], ["alt", "", 1, "img-fluid", 3, "src"], ["class", "media d-block d-md-flex mt-4", 4, "ngFor", "ngForOf"], [1, "media", "d-block", "d-md-flex", "mt-4"], ["alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto", 3, "src"], [1, "pull-right", 3, "click"], [1, "fas", "fa-reply"], ["class", "form-group mt-4", 3, "id", 4, "ngIf"], ["class", "media d-block d-md-flex mt-3", 4, "ngFor", "ngForOf"], [1, "form-group", "mt-4", 3, "id"], ["for", "quickReplyFormComment"], ["id", "quickReplyFormComment", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "btn", "btn-info", "btn-sm", 3, "click"]], template: function PostDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostDetailComponent_div_7_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_Template_a_click_19_listener() { return ctx.goToUserProfile(ctx.post.postedBy == null ? null : ctx.post.postedBy._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostDetailComponent_p_22_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Leave a reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Your comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostDetailComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_Template_button_click_34_listener() { return ctx.onComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PostDetailComponent_div_40_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.post.category, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.myFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post.postedBy == null ? null : ctx.post.postedBy.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.post.postedBy == null ? null : ctx.post.postedBy.firstName) + " " + (ctx.post.postedBy == null ? null : ctx.post.postedBy.lastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.postedBy.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.postedBy == null ? null : ctx.post.postedBy.aboutMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.post.comments ? ctx.post.comments.length : 0, " comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".card-comments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem}\n\nsection[_ngcontent-%COMP%] {\n    font-size:small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsVUFBVTs7QUFFN0I7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbW1lbnRzIGltZ3t3aWR0aDozcmVtfVxuXG5zZWN0aW9uIHtcbiAgICBmb250LXNpemU6c21hbGw7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-detail',
                templateUrl: './post-detail.component.html',
                styleUrls: ['./post-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_pipes/truncare-text.pipe */ "./src/app/_pipes/truncare-text.pipe.ts");







function PostsComponent_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostsComponent_div_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_1_div_2_div_1_Template, 7, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_1_div_2_div_2_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getFileType(post_r1.myFile) === "mp4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getFileType(post_r1.myFile) === "jpg" || ctx_r2.getFileType(post_r1.myFile) === "bmp" || ctx_r2.getFileType(post_r1.myFile) === "gif" || ctx_r2.getFileType(post_r1.myFile) === "png");
} }
function PostsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_1_div_2_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "truncateText");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_1_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const post_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.gotoDetails(post_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Posted By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.myFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, post_r1.shortDescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, post_r1.content, 30), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((post_r1.postedBy == null ? null : post_r1.postedBy.firstName) + " " + (post_r1.postedBy == null ? null : post_r1.postedBy.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 11, post_r1.postedOn, "dd/MM/yy"), "");
} }
class PostsComponent {
    constructor(router, authenticationService, postQueryService, route) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.postQueryService = postQueryService;
        this.route = route;
        this.posts = [];
        this.Posts = [];
        this.category = '';
        this.currentUser = this.authenticationService.currentUserValue;
        // if (!this.currentUser) this.router.navigate(['/']);
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            this.category = params && params.id ? params.id : '';
            this.getPosts();
        });
    }
    getPosts() {
        this.postQueryService.getPosts(this.category, this.currentUser.token).subscribe((res) => {
            this.Posts = res['posts'];
        });
    }
    gotoDetails(id) {
        this.router.navigate(['blogs/post-detail/' + id]);
    }
    getFileType(filename) {
        var arr = filename.split('.');
        var index = arr.length - 1;
        return arr[index];
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 2, vars: 1, consts: [[1, "row", "mb-4"], ["class", "col-lg-5 col-md-12 mb-4 mr-4", 4, "ngFor", "ngForOf"], [1, "col-lg-5", "col-md-12", "mb-4", "mr-4"], [1, "card"], [4, "ngIf"], [1, "card-body", 2, "font-size", "smaller"], [1, "mt-1", "mb-2", "pt-1", "pb-1", "badge", "bg-secondary"], [1, "mt-1", "pt-1", "pb-1", 2, "color", "#797979"], [1, "post", 2, "height", "99px", "overflow", "hidden", 3, "innerHTML"], [1, "clearfix"], [1, "btn", "btn-sm", "teal", "white-text", 3, "click"], [1, "mt-0", 2, "float", "right"], [1, "mt-0", "pr-2", 2, "color", "gray", "float", "right"], [1, "mt-0", "pr-2"], [1, "fa", "fa-clock-o"], [1, "view", "overlay"], [1, "embed-responsive", "rounded-top", 2, "height", "250px", "text-align", "-webkit-center"], ["width", "320", "height", "240", "controls", ""], ["type", "video/mp4", 3, "src"], ["type", "video/ogg", 3, "src"], ["alt", "", 1, "img-fluid", 2, "width", "100%", 3, "src"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_1_Template, 24, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _pipes_truncare_text_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncateTextPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_3__["PostQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 0, vars: 0, template: function RegisterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionsComponent.ɵfac = function SectionsComponent_Factory(t) { return new (t || SectionsComponent)(); };
SectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionsComponent, selectors: [["app-sections"]], decls: 40, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"]], template: function SectionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Patna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Devvrat Priyadarshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+917909076207");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Devvrat Priyadarshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+917909076207");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Bangalore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Devvrat Priyadarshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+917909076207");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Devvrat Priyadarshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+917909076207");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Hyderabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Devvrat Priyadarshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+917909076207");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Devvrat Priyadarshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+917909076207");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sections',
                templateUrl: './sections.component.html',
                styleUrls: ['./sections.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/topic-detail/topic-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/topic-detail/topic-detail.component.ts ***!
  \********************************************************/
/*! exports provided: TopicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailComponent", function() { return TopicDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function TopicDetailComponent_div_34_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commentReply_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", commentReply_r6.commentedByName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", commentReply_r6.commentText, " ");
} }
function TopicDetailComponent_div_34_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopicDetailComponent_div_34_div_1_div_8_div_1_Template, 6, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r2.commentReplies);
} }
function TopicDetailComponent_div_34_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopicDetailComponent_div_34_div_1_div_9_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.commentReply = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_div_34_div_1_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onCommentReply(comment_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", comment_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.commentReply);
} }
function TopicDetailComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_div_34_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const comment_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onShowReplyForm(comment_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopicDetailComponent_div_34_div_1_div_8_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopicDetailComponent_div_34_div_1_div_9_Template, 7, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r2.commentedByName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r2.commentText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r2.commentReplies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showReplyForm === comment_r2._id);
} }
function TopicDetailComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopicDetailComponent_div_34_div_1_Template, 10, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.topic.comments);
} }
class TopicDetailComponent {
    constructor(router, route, postQueryService, authenticationService) {
        this.router = router;
        this.route = route;
        this.postQueryService = postQueryService;
        this.authenticationService = authenticationService;
        this.topic = {};
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser)
            this.router.navigate(['/']);
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            this.topicId = params.id;
            this.getTopic();
        });
    }
    getTopic() {
        this.postQueryService.getTopicById(this.topicId, this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.topic = res;
        });
    }
    onComment() {
        let postData = {
            "id": this.topicId,
            "commentText": this.comment,
            "commentedOn": new Date()
        };
        this.postQueryService.addComment(postData, this.currentUser.token).subscribe((data) => {
            this.getTopic();
            // this.Topics.push(data);
        });
    }
    onCommentReply(id) {
        console.log(id);
        let postData = {
            "postId": this.topicId,
            "commentText": this.commentReply,
            "commentedOn": new Date(),
            "commentId": id
        };
        this.postQueryService.addTopicsCommentReply(postData, this.currentUser.token).subscribe((data) => {
            this.getTopic();
            // this.Topics.push(data);
        });
    }
    onShowReplyForm(id) {
        this.showReplyForm = id;
    }
    goBack() {
        this.router.navigate(['../../../forum/'], { relativeTo: this.route });
    }
}
TopicDetailComponent.ɵfac = function TopicDetailComponent_Factory(t) { return new (t || TopicDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"])); };
TopicDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicDetailComponent, selectors: [["app-topic-detail"]], decls: 35, vars: 13, consts: [[1, "mb-2", 2, "margin-top", "-3rem"], [3, "click"], [1, "fa", "fa-arrow-left"], [1, "mt-4"], [1, "row"], [1, "col-md-12", "mb-4"], [1, "card", "mb-4"], [1, "card-body"], [1, "h6", "my-4"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-clock-o"], ["id", "comment", 1, "card", "mb-3"], [1, "card-header", "font-weight-bold"], [1, "form-group"], ["for", "replyFormComment"], ["id", "replyFormComment", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-info", "btn-md", 3, "click"], [1, "card", "card-comments", "mb-3", 2, "height", "400px", "overflow-y", "scroll"], [4, "ngIf"], ["class", "media d-block d-md-flex mt-4", 4, "ngFor", "ngForOf"], [1, "media", "d-block", "d-md-flex", "mt-4"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg", "alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto"], [1, "media-body", "text-center", "text-md-left", "ml-md-3", "ml-0"], [1, "mt-0", "font-weight-bold"], [1, "pull-right", 3, "click"], [1, "fas", "fa-reply"], ["class", "form-group mt-4", 3, "id", 4, "ngIf"], ["class", "media d-block d-md-flex mt-3", 4, "ngFor", "ngForOf"], [1, "media", "d-block", "d-md-flex", "mt-3"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg", "alt", "Generic placeholder image", 1, "d-flex", "mb-3", "mx-auto"], [1, "form-group", "mt-4", 3, "id"], ["for", "quickReplyFormComment"], ["id", "quickReplyFormComment", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "btn", "btn-info", "btn-sm", 3, "click"]], template: function TopicDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_Template_a_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " See all topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Leave a reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopicDetailComponent_Template_textarea_ngModelChange_26_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailComponent_Template_button_click_28_listener() { return ctx.onComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TopicDetailComponent_div_34_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.topic.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topic.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Posted on : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 7, ctx.topic.postedOn, "dd MMM"), " @ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 10, ctx.topic.postedOn, "HH:mm"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.topic.comments ? ctx.topic.comments.length : 0, " comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topic.comments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".post[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.topic[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 12%;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.pull-left[_ngcontent-%COMP%]{\n    float:left;\n}\n.pull-right[_ngcontent-%COMP%]{\n    float:right;\n}\n.topic[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 88%;\n}\n.post[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 85%;\n    padding-right: 30px;\n    padding-top: 20px;\n    padding-bottom: 15px;\n    color: #989c9e;\n    font-size: 14px;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 25px;\n}\n.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #363838;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\np[_ngcontent-%COMP%] {\n    margin: 0 0 10px;\n}\n.postinfobot[_ngcontent-%COMP%] {\n    border-top: solid 1px #f1f1f1;\n    line-height: 50px;\n    padding: 0 30px 0 94px;\n}\n.postinfobot[_ngcontent-%COMP%]   .likeblock[_ngcontent-%COMP%] {\n    width: 120px;\n}\n.up[_ngcontent-%COMP%] {\n    color: #1abc9c;\n    font-size: 12px;\n}\n.down[_ngcontent-%COMP%] {\n    color: #db7a7a;\n    font-size: 12px;\n    margin-left: 20px;\n}\n.postinfobot[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%] {\n    width: 300px;\n    margin-left: 18px;\n    font-size: 12px;\n    color: #bdc3c7;\n    font-family: 'Open Sans Regular', sans-serif;\n}\n.postinfobot[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #bdc3c7;\n    padding-right: 8px;\n}\n.textwraper[_ngcontent-%COMP%] {\n    background-color: #f1f1f1;\n    border-radius: 2px;\n    padding: 18px;\n}\n.postreply[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bdc3c7;\n    display: block;\n    font-family: 'Open Sans Regular', sans-serif;\n}\n.textwraper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border: none;\n    box-shadow: none;\n    background-color: #f1f1f1;\n    width: 100%;\n}\n.post[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%], .postreply[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #bdc3c7;\n    display: block;\n    font-family: 'Open Sans Regular', sans-serif;\n}\n.btn-post[_ngcontent-%COMP%] {\n    background-color: #1abc9c;\n    box-shadow: none;\n    border-radius: 2px;\n    padding: 10px 15px;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    border: none;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\n.avatar[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n    background-color: #f27777;\n}\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    border-radius: 50%;\n    border: solid 2px #ffffff;\n}\n.avatar[_ngcontent-%COMP%] {\n    position: relative;\n}\n.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 37px;\n    margin-left: 5px;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height:37px;\n}\n.post[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 48px;\n    border-top: solid 1px #f1f1f1;\n    margin-top: 12px;\n    padding-top: 7px;\n}\n.comments[_ngcontent-%COMP%]{\n}\n.comment[_ngcontent-%COMP%]{\n    padding: 1rem;\n}\n.card-comments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem}\nsection[_ngcontent-%COMP%] {\n    font-size:small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBLG1CQUFtQixVQUFVO0FBQzdCO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RvcGljLWRldGFpbC90b3BpYy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggI2M5Y2NjZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRvcGljIC51c2VyaW5mbyB7XG4gICAgd2lkdGg6IDEyJTtcbn1cblxuLnBvc3QgLnVzZXJpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4IDE1cHg7XG59XG4ucHVsbC1sZWZ0e1xuICAgIGZsb2F0OmxlZnQ7XG59XG4ucHVsbC1yaWdodHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbi50b3BpYyAucG9zdHRleHQge1xuICAgIHdpZHRoOiA4OCU7XG59XG5cbi5wb3N0IC5wb3N0dGV4dCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiAjOTg5YzllO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4ucG9zdCBoMiB7XG4gICAgY29sb3I6ICMzNjM4Mzg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5wIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLnBvc3RpbmZvYm90IHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDMwcHggMCA5NHB4O1xufVxuLnBvc3RpbmZvYm90IC5saWtlYmxvY2sge1xuICAgIHdpZHRoOiAxMjBweDtcbn1cbi51cCB7XG4gICAgY29sb3I6ICMxYWJjOWM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRvd24ge1xuICAgIGNvbG9yOiAjZGI3YTdhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wb3N0aW5mb2JvdCAucG9zdGVkIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYmRjM2M3O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xufVxuLnBvc3RpbmZvYm90IC5wb3N0ZWQgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjYmRjM2M3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnRleHR3cmFwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG59XG4ucG9zdHJlcGx5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiZGMzYzc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG59XG4udGV4dHdyYXBlciB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wb3N0IGJsb2NrcXVvdGUgLm9yaWdpbmFsLCAucG9zdHJlcGx5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiZGMzYzc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG59XG4uYnRuLXBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uYXZhdGFyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmF2YXRhciAucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3Nzc3O1xufVxuLmF2YXRhciAuc3RhdHVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZmZmZjtcbn1cbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0IC5hdmF0YXIge1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uYXZhdGFyIGltZyB7XG4gICAgaGVpZ2h0OjM3cHg7XG59XG4ucG9zdCAuaWNvbnMge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5jb21tZW50c3tcbn1cbi5jb21tZW50e1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jYXJkLWNvbW1lbnRzIGltZ3t3aWR0aDozcmVtfVxuc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOnNtYWxsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic-detail',
                templateUrl: './topic-detail.component.html',
                styleUrls: ['./topic-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/topic-list/topic-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.ts ***!
  \****************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TopicListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicListComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const topic_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.gotoDetails(topic_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r1.comments.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 4, topic_r1.postedOn, "dd/MM/yy"), "");
} }
class TopicListComponent {
    constructor(router, route, postQueryService, authenticationService) {
        this.router = router;
        this.route = route;
        this.postQueryService = postQueryService;
        this.authenticationService = authenticationService;
        this.topics = [];
        this.Topics = [];
        this.category = '';
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser)
            this.router.navigate(['/']);
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            this.category = params && params.id ? params.id : '';
            this.getTopics();
        });
    }
    getTopics() {
        this.postQueryService.getTopics(this.category, this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.Topics = res;
        });
    }
    gotoDetails(id) {
        this.router.navigate(['forum/topic-detail/' + id]);
    }
    incLike() {
        this.postQueryService.like().subscribe((res) => {
            console.log(res);
        });
    }
    decLike() {
        this.postQueryService.like().subscribe((res) => {
            console.log(res);
        });
    }
}
TopicListComponent.ɵfac = function TopicListComponent_Factory(t) { return new (t || TopicListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"])); };
TopicListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicListComponent, selectors: [["app-topic-list"]], decls: 1, vars: 1, consts: [["class", "post", 4, "ngFor", "ngForOf"], [1, "post"], [1, "wrap-ut", "pull-left"], [1, "userinfo", "pull-left"], [1, "avatar"], ["src", "../../assets/images/birdie.svg", "alt", "", 2, "height", "37px"], [1, "icons"], [1, "posttext", "pull-left"], [3, "click"], [1, "clearfix"], [1, "postinfo", "pull-left"], [1, "comments"], [1, "commentbg"], [1, "mark"], [1, "time"], [1, "fa", "fa-clock-o"]], template: function TopicListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopicListComponent_div_0_Template, 23, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Topics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".content[_ngcontent-%COMP%] {\n    background-color: #ecf0f1;\n    border-top: solid 1px #e0e4e5;\n}\n.post[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px #c9cccd;\n    margin-bottom: 20px;\n}\n.post[_ngcontent-%COMP%]   .wrap-ut[_ngcontent-%COMP%] {\n    width: 85%;\n}\n.post[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    padding: 20px 0 15px 15px;\n}\n.post[_ngcontent-%COMP%]   .posttext[_ngcontent-%COMP%] {\n    width: 85%;\n    padding-right: 30px;\n    padding-top: 20px;\n    padding-bottom: 15px;\n    color: #989c9e;\n    font-size: 14px;\n    font-family: 'Open Sans Light', sans-serif;\n    line-height: 25px;\n}\n.post[_ngcontent-%COMP%]   .postinfo[_ngcontent-%COMP%] {\n    width: 15%;\n    border-left: solid 1px #f1f1f1;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    padding: 18px 0 25px 0;\n    text-align: center;\n}\n.post[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commentbg[_ngcontent-%COMP%] {\n    background-color: #bdc3c7;\n    border-radius: 2px;\n    display: inline-block;\n    padding: 12px 17px;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: 'Open Sans Bold', sans-serif;\n    position: relative;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #f1f1f1;\n    color: #9da6aa;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    color: #9da6aa;\n    font-size: 12px;\n    font-family: 'Open Sans Regular', sans-serif;\n    text-align: center;\n    line-height: 29px;\n}\n.post[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 37px;\n    margin-left: 5px;\n}\n.avatar[_ngcontent-%COMP%] {\n    position: relative;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n.avatar[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n    background-color: #80d3ab;\n}\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    border-radius: 50%;\n    border: solid 2px #ffffff;\n}\n.post[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 48px;\n    border-top: solid 1px #f1f1f1;\n    margin-top: 12px;\n    padding-top: 7px;\n}\n.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #363838;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.pull-left[_ngcontent-%COMP%]{\n    float:left;\n}\n.pull-right[_ngcontent-%COMP%]{\n    float:right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtbGlzdC90b3BpYy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90b3BpYy1saXN0L3RvcGljLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTBlNGU1O1xufVxuLnBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzljY2NkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucG9zdCAud3JhcC11dCB7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuLnBvc3QgLnVzZXJpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4IDE1cHg7XG59XG4ucG9zdCAucG9zdHRleHQge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzk4OWM5ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLnBvc3QgLnBvc3RpbmZvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2YxZjFmMTtcbn1cbi5wb3N0IC5jb21tZW50cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMThweCAwIDI1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9zdCAuY29tbWVudHMgLmNvbW1lbnRiZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEycHggMTdweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLnZpZXdzIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBjb2xvcjogIzlkYTZhYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnZpZXdzIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wb3N0IC50aW1lIHtcbiAgICBjb2xvcjogIzlkYTZhYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnBvc3QgLnRpbWUgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBvc3QgLmF2YXRhciB7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXZhdGFyIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwZDNhYjtcbn1cbi5hdmF0YXIgLnN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG59XG4ucG9zdCAuaWNvbnMge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5wb3N0IGgyIHtcbiAgICBjb2xvcjogIzM2MzgzODtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnB1bGwtbGVmdHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLnB1bGwtcmlnaHR7XG4gICAgZmxvYXQ6cmlnaHQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic-list',
                templateUrl: './topic-list.component.html',
                styleUrls: ['./topic-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_2__["PostQueryService"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/update-profile/update-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function UpdateProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.error = !ctx_r1.error; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". Use this to show important messages to the user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UpdateProfileComponent {
    constructor(formBuilder, router, route, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.error = false;
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) {
            this.router.navigate(['/']);
        }
        else {
            // this.id = this.currentUser.user.id;
        }
    }
    ngOnInit() {
        this.getUserDetails();
        console.log(this.currentUser);
        this.postContent = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            aboutMe: [''],
            myFile: ['']
        });
    }
    getUserDetails() {
        this.userService.getUserDetails(this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.currentUser['user'] = res['user'];
            this.postContent = this.formBuilder.group({
                firstName: [this.currentUser.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                lastName: [this.currentUser.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: [this.currentUser.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                company: [this.currentUser.user.company, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                aboutMe: [this.currentUser.user.aboutMe],
                myFile: [this.currentUser.user.photo]
            });
        });
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.postContent.patchValue({
            myFile: file
        });
        this.postContent.get('myFile').updateValueAndValidity();
    }
    onSubmit() {
        let profileData = {
            "firstName": this.postContent.value.firstName,
            "lastName": this.postContent.value.lastName,
            "email": this.postContent.value.email,
            "company": this.postContent.value.company,
            "aboutMe": this.postContent.value.aboutMe,
            "myFile": this.postContent.value.myFile
        };
        this.userService.updateProfile(profileData, this.currentUser.token).subscribe((data) => {
            if (data === 'error') {
                this.error = true;
            }
            this.getUserDetails();
            alert("Profile Updated Successfully");
            console.log(data);
        });
    }
}
UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], decls: 50, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "personal-info"], ["class", "alert alert-info alert-dismissable", 4, "ngIf"], ["role", "form", "name", "form1", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "col-sm-4"], [1, "text-center"], ["alt", "avatar", 1, "avatar", "img-circle", 2, "height", "150px", 3, "src"], ["type", "file", 1, "form-control", 3, "change"], [1, "col-sm-8"], [1, "form-group"], [1, "col-lg-3", "control-label"], [1, "col-lg-8"], ["type", "text", "value", "Jane", "formControlName", "firstName", 1, "form-control"], ["type", "text", "value", "Bishop", "formControlName", "lastName", 1, "form-control"], ["type", "text", "value", "", "formControlName", "company", 1, "form-control"], ["type", "text", "value", "", "formControlName", "aboutMe", 1, "form-control"], ["type", "text", "value", "janesemail@gmail.com", "formControlName", "email", "disabled", "", 1, "form-control"], [1, "col-md-3", "control-label"], [1, "col-md-8"], ["value", "Save Changes", "type", "submit", 1, "btn", "btn-primary"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-default"], [1, "alert", "alert-info", "alert-dismissable"], ["data-dismiss", "alert", 1, "panel-close", "close", 3, "click"], [1, "fa", "fa-coffee"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateProfileComponent_div_6_Template, 8, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Personal info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload a different photo...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateProfileComponent_Template_input_change_16_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Company:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "About Me:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentUser.user == null ? null : ctx.currentUser.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile',
                templateUrl: './update-profile.component.html',
                styleUrls: ['./update-profile.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth-service.service */ "./src/app/login/auth-service.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_post_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/post-query.service */ "./src/app/_services/post-query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function UserDetailsComponent_div_33_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.myFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailsComponent_div_33_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} }
function UserDetailsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailsComponent_div_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const post_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gotoDetails(post_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailsComponent_div_33_img_2_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailsComponent_div_33_img_3_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.myFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !post_r1.myFile);
} }
class UserDetailsComponent {
    constructor(formBuilder, router, route, authenticationService, userService, postQueryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.postQueryService = postQueryService;
        this.error = false;
        this.posts = [];
        this.currentUser = this.authenticationService.currentUserValue;
        if (!this.currentUser) {
            this.router.navigate(['/']);
        }
        else {
            // this.id = this.currentUser.user.id;
        }
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            this.id = params && params.id ? params.id : '';
            this.gerUserProfile();
        });
    }
    gerUserProfile() {
        this.userService.gerUserProfile(this.id, this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.user = res;
            this.getUserThreads();
        });
    }
    getUserThreads() {
        this.postQueryService.getUserThreads(this.user.email, this.currentUser.token).subscribe((res) => {
            console.log(res);
            this.posts = res;
        });
    }
    gotoDetails(id) {
        this.router.navigate(['blogs/post-detail/' + id]);
    }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_query_service__WEBPACK_IMPORTED_MODULE_5__["PostQueryService"])); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 34, vars: 6, consts: [[1, "row", "py-5", "px-4"], [1, "col-md-12", "mx-auto"], [1, "bg-white", "shadow", "rounded", "overflow-hidden"], [1, "px-4", "pt-0", "pb-4", "cover"], [1, "media", "align-items-end", "profile-head"], [1, "profile", "mr-3"], [2, "height", "150px", 3, "src"], [1, "media-body", "mb-5", "text-white"], [1, "mt-0", "mb-0"], [1, "small", "mb-4"], [1, "fas", "fa-map-marker-alt", "mr-2"], [1, "bg-light", "p-4", "d-flex", "justify-content-end", "text-center"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "font-weight-bold", "mb-0", "d-block"], [1, "text-muted"], [1, "fas", "fa-image", "mr-1"], [1, "px-4", "py-3"], [1, "mb-0"], [1, "p-4", "rounded", "shadow-sm", "bg-light"], [1, "font-italic", "mb-0"], [1, "py-4", "px-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "row"], ["class", "col-lg-6 mb-2 pr-lg-1", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "mb-2", "pr-lg-1"], ["href", "javascript:void(0)", "rel", "bookmark", 3, "click"], ["class", "img-fluid rounded shadow-sm", "style", "", 3, "src", 4, "ngIf"], ["src", "../../assets/images/pen.png", "class", "img-fluid rounded shadow-sm", "style", "", 4, "ngIf"], [1, "img-fluid", "rounded", "shadow-sm", 3, "src"], ["src", "../../assets/images/pen.png", 1, "img-fluid", "rounded", "shadow-sm"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "All Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserDetailsComponent_div_33_Template, 4, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user == null ? null : ctx.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.user == null ? null : ctx.user.firstName) + " " + (ctx.user == null ? null : ctx.user.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.posts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.aboutMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".profile-head[_ngcontent-%COMP%] {\n    transform: translateY(5rem)\n}\n\n.cover[_ngcontent-%COMP%] {\n    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);\n    background-size: cover;\n    background-repeat: no-repeat\n}\n\nbody[_ngcontent-%COMP%] {\n    background: #654ea3;\n    background: linear-gradient(to right, #e96443, #904e95);\n    min-height: 100vh;\n    overflow-x: hidden\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDZKQUE2SjtJQUM3SixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1REFBdUQ7SUFDdkQsaUJBQWlCO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1oZWFkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSlcbn1cblxuLmNvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzAzMDU0MDg1NjAtODJkMTM3ODFiMzNhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUyJnE9ODApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjNjU0ZWEzO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U5NjQ0MywgIzkwNGU5NSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-details',
                templateUrl: './user-details.component.html',
                styleUrls: ['./user-details.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _login_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _services_post_query_service__WEBPACK_IMPORTED_MODULE_5__["PostQueryService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chandaroy/Documents/SelfLearning /talentmitra-v2/talentmitra/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map