(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-auth-module"],{

/***/ "./src/app/users/auth-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/users/auth-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/users/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/auth.module.ts":
/*!**************************************!*\
  !*** ./src/app/users/auth.module.ts ***!
  \**************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/users/signup/signup.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/users/auth-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n.background {\r\n  position: absolute;\r\n  top: 5em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: url('https://lh3.googleusercontent.com/dK_LiG2_qwiADkiDRGnwHXGNPAJEP3eZhS_LQshxdtISxsdrlApgayxzksOoBcfKqJtN4q0ZfvjuOdn7JXDy7hgX1yQJ22eyyT7NvHTwsArh3H-EiFlMvGR8Zhp_4LLF-A5gnaLjPg=w2400')\r\n    no-repeat center top;\r\n  background-size: cover;\r\n  content: '';\r\n  z-index: 0;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\nmat-card {\r\n  margin: auto;\r\n  bottom: 0;\r\n  /* bottom: 10em */\r\n  background-color: rgba(255, 255, 255, 0.849);\r\n\r\n  /* width: 50%; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <br>\r\n  <mat-card>\r\n    <div>\r\n      <h4>\r\n        Login to SweatLog\r\n      </h4>\r\n    </div>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n      <mat-form-field>\r\n        <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\r\n        <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\"\r\n          required>\r\n        <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"!isLoading\">Login</button>\r\n    </form>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/users/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/users/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n.background {\r\n  position: absolute;\r\n  top: 5em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: url('https://lh3.googleusercontent.com/BTZgV7g35o1l0GkNtr5tAACL1oQXHLCL5nBgkdHAiFr4NgQjnuYNwiOfICwyd9EUGmydij8sZxVXskUrWbZ6iC1AfxISSvWFQZlzPEIeHOJztzXocpt-q8GKVcSrJxWOE9vqie-1vrzXlLYsZmsL3u6vXxQ0Fsz2iXMynOOEVEUnIWIWzVJPCZy4mimj_73LXBe4UCwzKvkPv9ANXTPyHDY_pn-dTjwRCmYijdsaECZoBgHoEH2i-CpCoF664i8Qp5YjhvDzxniM28AQqhL5gut4sBRlqDPPNcSulF0iZufTpAcja5SfxJMne_8u8poC71HpFcWD3oUvfTkZJIKdF8HwD-NEuozYvKR4l_nQAXvyVVksR_ClqqsB7sSVyv8ipPi88-w7MrNseKPYAyGi7NhNmjDsOo02r6jvaQ66lkG4F-C6SwW-rxfKAdQLlKdLmAlQ3VYQ3oRWeum_e_H5wthrlqToeYvpFMqR4m5rhT0RT0fqurDmc8JdgRSsUM1HjeEBLzRNX5l_cpYzdYnob1ocs9ZXVe_ZPtyjUuAX6GLIeX0x3LadV4uGEYYkfRRk8rtqH9phtDekIEPjcN87hq_Rg931QugXauGqaF5lrVuOSDBmqYtfpHrbaEv7K542n-2aGKlSaPi1Kr-015buwxP7LsJJ4FznSePEQ-DLjICcTd_TY4g=w2254-h1270-no')\r\n    no-repeat center top;\r\n  background-size: cover;\r\n  content: '';\r\n  z-index: 0;\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\nmat-card {\r\n  margin: auto;\r\n  /*bottom: 10em;*/\r\n  background-color: rgba(255, 255, 255, 0.849);\r\n  /* width: 50%; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <br>\r\n<mat-card>\r\n  <div>\r\n    <h4>\r\n      Sign Up for SweatLog\r\n    </h4>\r\n  </div>\r\n  <mat-spinner *ngIf='isLoading'></mat-spinner>\r\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n      <input matInput name=\"firstName\" ngModel type=\"firstName\" placeholder=\"First name\" #firstNameInput=\"ngModel\" required firstName>\r\n      <mat-error *ngIf=\"firstNameInput.invalid\">Please enter a valid first name.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput name=\"lastName\" ngModel type=\"lastName\" placeholder=\"Last name\" #lastNameInput=\"ngModel\" required lastName>\r\n      <mat-error *ngIf=\"lastNameInput.invalid\">Please enter a valid last name.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\r\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\r\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"!isLoading\">Signup</button>\r\n  </form>\r\n</mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/users/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/users/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    SignupComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.firstName, form.value.lastName, form.value.email, form.value.password);
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/users/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/users/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=users-auth-module.js.map