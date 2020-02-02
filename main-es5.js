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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n@import url('https://i.icomoon.io/public/c88de6d4a5/JeffPannoneWeb/style.css');\n.page-wrap {\n  position: relative;\n  z-index:1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n    background-image: url(/assets/img/astro.jpg);\n    background-size: cover;\n    background-position: center;\n    height: 100vh;\n    \n}\n.wrap-center {\n  width: 480px;\n  overflow: hidden;\n  transition: width 0.5s, background 0.5s;\n}\n.wrap-center.expand-width {\n  width: 630px;\n}\n.light-theme .wrap-center {\n  background: rgba(255, 255, 255, .0);\n  color: rgba(0, 0, 0, .7);\n}\n.light-theme .wrap-center.bio-active {\n  background: rgba(255, 255, 255, .3);\n}\n.dark-theme .wrap-center {\n  background: rgba(0, 0, 0, .0);\n  color: rgba(255, 255, 255, .9);\n}\n.dark-theme .wrap-center.bio-active {\n  background: rgba(0, 0, 0, .3);\n}\n.header {\n  width: 100%;\n  position: relative;\n  padding: 30px 0;\n  font-size: 1.2rem;\n  border-bottom: 1px solid rgba(0, 0, 0, .0);\n  transition: border-bottom-color 0.5s;\n}\n.expand-width .header {\n  border-bottom-color: rgba(0, 0, 0, .075);\n}\n.header .hello-h1 {\n  display: block;\n  cursor: pointer;\n  font-size: 2.2em;\n  margin-bottom: 25px;\n  font-weight: 700;\n  transition: font-size 0.5s;\n     color: rgb(255, 255, 255);\n    letter-spacing: 2px;\n}\n.expand-width .header .hello-h1 {\n  font-size: 1.5em;\n   \n}\n.header .name {\n  display: block;\n  margin: 15px 0;\n  font-size: 1.2em;\n    color: white;\n}\n.header .avatar {\n  width: 180px;\n  margin: 0 auto;\n  backface-visibility: hidden;\n  opacity: 1;\n  transition: opacity 0.5s, width 0.5s;\n    border: 3px solid white;\n    border-radius: 150px;\n    padding: 7px;\n}\n.expand-width .header .avatar {\n  opacity: 0.5;\n  width: 90px;\n}\n.expand-width .header .avatar:hover {\n  opacity: 1;\n}\n.header img {\n  display:block;\n  width: 100%;\n  border-radius: 100%;\n}\n.main-nav {\n  position: relative;\n  padding-bottom: 40px;\n}\n.main-nav ul li {\n  display: inline-block;\n}\n.main-nav .nav-btn {\n  cursor: pointer;\n  display: block;\n  font-size: 0.75em;\n  text-transform: none;\n  padding: 0.95em;\n  margin: 2px 0;\n  width: 120px;\n  border-radius: 100px;\n  backface-visibility: hidden;\n  transition: background 0.3s;\n    background: white;\n  \n  \n}\n.main-nav .nav-btn:hover {\n  background: rgba(0, 0, 0, 0.568);\n}\n.main-nav .nav-btn i {\n  font-size: 70%;\n  top: -0.075em;\n}\n.toggle-about {\n  cursor: pointer;\n  border-radius: 100%;\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  left: 50%;\n  margin-left:-21px;\n  margin-top: 30px;\n  padding: 10px 0 0 1px;\n  text-align: center;\n  font-size: 0.7em;\n  display: block;\n  transform: rotate(0deg);\n  transition: transform 0.3s;\n  backface-visibility: hidden;\n  transition: background 0.3s;\n  border: 3px solid white;\n  color: white;\n}\n.toggle-about:hover {\n  background: rgba(0, 0, 0, 0.25);\n}\n.expand-height .toggle-about {\n  transform: rotate(180deg);\n}\n.about {\n  font-weight: 400;\n  width: 100%;\n  padding: 40px 60px 0px;\n  text-align: left;\n  overflow: hidden;\n  height: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  transition: height 0.5s, padding-top 0.2s;\n}\n.about .copy-block {\n  padding-top: 40px;\n}\n.expand-height .about {\n  height: 450px;\n}\n.about .close-about {\n  margin: 0 auto;\n  font-size: 2.2em;\n}\n.about h2 {\n  font-size: 1.5em;\n  margin: 0;\n  font-weight: 600;\n  margin-bottom: 0.5em;\n   \n}\n.about p {\n  margin-bottom: 1.25em;\n  font-size: 0.9em;\n  line-height: 1.7;\n}\n\n</style>\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\" style=\"z-index: 2; font-family: sans-serif;\">\n    <a href=\"#\" class=\"navbar-brand\">My Website</a>\n      <ul class=\"navbar-nav\">\n        <li class =\"nav-item\">\n            <a href=\"home\" class=\"nav-link\">Home</a>\n        </li>\n        <li class =\"nav-item\">\n            <a href=\"list\" class=\"nav-link\">Users</a>\n        </li>\n        <li class =\"nav-item\">\n            <a href=\"about\" class=\"nav-link\">About Me</a>\n        </li>\n        <li class =\"nav-item\">\n            <a href=\"#\" class=\"nav-link float-md-right text-danger\" (click)=\"onLogout()\">Log Out</a>\n          </li>\n      </ul>\n    </nav>\n   <div class=\"overlay\"></div>\n\n<div class=\"page-wrap light-theme\">\n  \n  <div class=\"wrap-center\">\n    <header class=\"header\">\n      <div class=\"avatar\">\n        <div class=\"\"></div>\n        <img src=\"/assets/img/Me.jpg\" alt=\"Phillip Nguyen\">\n      </div>\n      \n      <span class=\"name\">Phuc (Phillip) Nguyen </span>\n      <h1 class=\"hello-h1\">FULL STACK DEVELOPER</h1>\n      <nav class=\"main-nav\">\n  <span class=\"toggle-about\"><i class=\"i-chevron-down\"></i></span>\n \n      </nav>\n    </header>\n\n    <div class=\"about\" id=\"about\">\n      <div class=\"copy-block\">\n        <h2>About</h2>\n        <p>Currently living in southern Connecticut and working at BrandShop, I'm passionate about Front-End Design & Development and building scalable & fluid websites. In my free time you'll likely find me exploring and capturing the world with an iPhone\n          6, Nikon D90, and more recently a 35mm Nikon N80.</p>\n        <h2>Ecommerce/CX</h2>\n        <p>The design of a site should be based upon its intended purpose. A website must not only look good, but it should work properly as well. Quality over quantity and simplicity over complexity. I believe in minimalist approach to web design and strive\n          to build functional, responsive, and progressively enhanced interfaces.</p>\n      </div>\n      \n \n      \n    </div>\n  </div>\n</div>\n<script>\nvar bioActive = false;\n  \n  // toggle bio with animations/timing relative to its state\n  // if closed, expand width first, then height\n  // if open, expand height first, then width\n  function toggleBio(){\n    if(bioActive == false){\n      firstClass = 'expand-width';\n      secondClass = 'expand-height';  \n      bioActive = true;\n    }else{\n      firstClass = 'expand-height';\n      secondClass = 'expand-width';    \n      bioActive = false;\n    } \n    \n    $(\".wrap-center\").toggleClass(\"bio-active\").toggleClass(firstClass).delay(500).queue(function(){\n      $(this).toggleClass(secondClass).dequeue();\n    }); \n  }\n  \n  // run bio toggle on click\n  $(\".btn-about, .close-about, .toggle-about\").on(\"click\", toggleBio);\n</script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\n    <input checked=\"checked\" class=\"menu-toggler\" type=\"checkbox\">\n    <label for=\"menu-toggler\"></label>\n    <ul>\n      <li class=\"menu-item\">\n        <a class=\"fas fa-cat\" href=\"home\"><img src=\"/assets/img/home.png\" width=\"50\" height=\"50\" style=\"margin-top:-9%;\"></a>\n      </li>\n      <li class=\"menu-item\">\n        <a class=\"fas fa-cookie-bite\" href=\"list\"><img src = \"/assets/img/about.png\" width=\"50\" height=\"50\" style=\"margin-top:-9%\"></a>\n      </li>\n      <li class=\"menu-item\">\n        <a class=\"fab fa-earlybirds\" href=\"#\"></a>\n      </li>\n      <li class=\"menu-item\">\n        <a class=\"fab fa-fly\"href=\"\" (click) = \"onLogout()\"><img src=\"/assets/img/logout.png\" width=\"50\" height=\"50\" style=\"margin-top:-9%;\"></a>\n      </li>\n      <li class=\"menu-item\">\n        <a class =\"far fa-gem\" href=\"#\"></a>\n      </li>\n      <li class=\"menu-item\" *ngIf =\"userDetails\">\n        <a class=\"fas fa-glass-cheers\" href=\"\" (click) = \"onShow()\"><img src = \"/assets/img/me.png\" width=\"50\" height=\"50\" style=\"margin-top:-9%\"></a>\n      </li>\n    </ul>\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\" style=\"font-family: sans-serif;\">\n  <a href=\"#\" class=\"navbar-brand\">My Website</a>\n    <ul class=\"navbar-nav\">\n      <li class =\"nav-item\">\n          <a href=\"home\" class=\"nav-link\">Home</a>\n      </li>\n      <li class =\"nav-item\">\n          <a href=\"list\" class=\"nav-link\">Users</a>\n      </li>\n      <li class =\"nav-item\">\n          <a href=\"\" class=\"nav-link\" (click) = \"onShow()\">About Me</a>\n      </li>\n      <li class =\"nav-item\">\n          <a href=\"#\" class=\"nav-link text-danger\" (click)=\"onLogout()\">Log Out</a>\n        </li>\n    </ul>\n  </nav>\n  <br>\n  <br>\n  <h2 style=\"color:white;text-align: center; font-family: sans-serif;\">List of Users</h2>\n  <br>\n  <br>\n<div class=\"user\">\n    <table class=\"table table-dark\">\n        <thead class=\"thead-light\">\n            <tr>\n              <th></th>\n              <th scope=\"col\"><strong>Username</strong></th> \n              <th scope=\"col\"><strong>Full Name</strong></th>\n              <th scope=\"col\"><strong>Email</strong></th>\n              <th scope=\"col\"><strong>Role</strong></th>\n            </tr>\n          </thead>\n          <!-- <ng-container *ngIf = \"userDetails\"> -->\n          <ng-container *ngFor=\"let userDetail of userDetails\">\n              <tbody> \n                  <tr>\n                      <td></td>\n                      <td>{{userDetail.userName}}</td>\n                      <td>{{userDetail.fullName}}</td>\n                      <td>{{userDetail.email}}</td>\n                      <td>{{userDetail.role}}</td>\n                    </tr>\n              </tbody>\n          </ng-container>\n        </table>\n      </div>\n<!-- <div class=\"user\" *ngFor=\"userDetail in userDetails\">\n    <table class=\"table table-dark\">\n        <thead>\n            <tr>\n              <th></th>\n              <th scope=\"col\"><strong>Username</strong></th>\n              <th scope=\"col\"><strong>Full Name</strong></th>\n              <th scope=\"col\"><strong>Email</strong></th>\n              <th scope=\"col\"><strong>Role</strong></th>\n            </tr>\n          </thead>\n          <ng-container>\n              <tbody>\n                <tr>\n                  <td></td>\n                  <td>{{userDetail.userName}}</td>\n                  <td>{{userDetail.fullName}}</td>\n                  <td>{{userDetail.email}}</td>\n                  <td>{{userDetail.role}}</td>\n                </tr>\n              </tbody>\n          </ng-container>\n        </table>\n      </div> -->\n      \n            <!-- <ng-container #elseBlock *ngFor=\"let userDetail of userDetails\">\n            <tbody> \n                <tr>\n                    <td></td>\n                    <td>{{userDetail.userName}}</td>\n                    <td>{{userDetail.fullName}}</td>\n                    <td>{{userDetail.email}}</td>\n                    <td>{{userDetail.role}}</td>\n                  </tr>\n            </tbody>\n            </ng-container> -->\n            \n      <!-- </ng-container> -->\n\n      <!-- <ng-container *ngIf = \"userDetails?.length == 1\">\n\n      </ng-container> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <br><br><br><br>\n        <form #form='ngForm' class='mb-4' autocomplete=\"off\" (submit) = \"onSubmit(form)\">\n          <img src=\"/assets/img/login-3.png\" style=\"margin-left:42%; margin-top:-25%;\" width=\"100px\" height=\"100px\" alt=\"login\">\n          <br>\n          <h2 style=\"text-align: center; margin-top:-5%; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:rgba(0, 0, 0, 0.76) \">Login</h2>\n          <br>\n          <div class=\"form-group\">\n            <label style=\"color:rgba(0, 0, 0, 0.651);margin-left:15%;\">Username</label>\n            <input class = \"form-control\"#UserName='ngModel' name=\"Username\" [(ngModel)] = \"formModel.UserName\"\n            style=\"width: 70%; margin-left:15%;\" placeholder=\"Username\" required>\n          </div>\n          <div class=\"form-group\">\n              <label style=\"color:rgba(0, 0, 0, 0.651);margin-left:15%;\">Password</label>\n              <input type=\"password\" class = \"form-control\" #Password='ngModel' name=\"Password\" [(ngModel)] = \"formModel.Password\"\n              style=\"width: 70%;margin-left:15%;\"placeholder=\"Password\" required>\n          </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-8 offset-md-2\">\n                  <button type =\"submit\" class=\"btn btn-lg btn-block\" id=\"login\" [disabled] = \"form.invalid\">Login</button>\n              </div>\n          </div>\n        </form>\n        <div class=\"footer\">\n          <br>\n            <a class=\"register\" href=\"user/registration\">Create a new account</a>\n          <br>\n            <a class=\"forgot\" href=\"#\">Forgot Password? Click here</a>\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/registration/registration.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/registration/registration.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col-4\">\n            <img src = \"/assets/img/register.png\" width=\"130\" height=\"100\" class=\"mx-auto d-block\">\n    </div>\n    <div class=\"col-4\">\n       <!-- <div class=\"row\" style=\"height:450px\"> -->\n        <!-- <div class=\"col-md-12 my-auto side-header\"> --> \n            \n        <!-- </div> -->\n        <!-- </div>  -->\n    </div>\n</div>\n<br>\n<div class=\"row\">\n        <div class=\"col-4\" style=\"text-align:center;\">\n            <form [formGroup]=\"service.formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\n                <div class=\"form-group required\">\n                    <label class=\"label\" style=\"margin-left:-145%;\">Username</label>\n                    <input class=\"form-control\" formControlName=\"UserName\" style=\"width:200%;margin-left:-50%;\"placeholder=\"Enter your username...\">\n                    <label class=\"text-danger\" *ngIf=\"service.formModel.get('UserName').touched && service.formModel.get('UserName').errors?.required\">This field is mandatory</label>\n                </div>\n                <div class=\"form-group\">\n                        <label class=\"label\" style=\"margin-left:-153%;\">Full Name</label>\n                        <input class=\"form-control\" formControlName=\"FullName\" style=\"width:200%;margin-left:-50%;\" placeholder=\"John Smith\">\n                </div>\n                <div class=\"form-group\">\n                        <label class=\"label\" style=\"margin-left:-172%\">Email</label>\n                        <input class=\"form-control\" formControlName=\"Email\" style=\"width:200%;margin-left:-50%;\" placeholder=\"example@gmail.com\">\n                        <label class=\"text-danger\" *ngIf=\"service.formModel.get('Email').touched && service.formModel.get('Email').errors?.email\">Invalid Email Address</label>\n                </div>\n                <div formGroupName=\"Passwords\">\n                    <div class=\"form-group required\">\n                            <label class=\"label\" style=\"margin-left:-148%;\">Password</label>\n                            <input type =\"password\" class=\"form-control\" formControlName=\"Password\" style=\"width:200%;margin-left:-50%;\" placeholder=\"Password\">\n                            <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.Password').touched && service.formModel.get('Passwords.Password').errors?.required\">This field is mandatory</label>\n                            <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.Password').touched && service.formModel.get('Passwords.Password').errors?.minlength\">Minimum 4 characters required</label>\n                    </div>\n                    <div class=\"form-group required\">\n                            <label class=\"label\" style=\"margin-left:-112%;\">Confirm Password</label>\n                            <input type =\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\" style=\"width:200%;margin-left:-50%;\" placeholder=\"Confirm Password\">\n                            <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched && service.formModel.get('Passwords.ConfirmPassword').errors?.required\">This field is mandatory</label>\n                            <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched && service.formModel.get('Passwords.ConfirmPassword').errors?.minlength\">Minimum 4 characters required</label>\n                            <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched && service.formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch\">Confirm Password does not match, please try again.</label>\n                    </div>\n                </div>\n                <div class=\"form-group required\">\n                        <label class=\"label\" style=\"margin-left:-170%;\">Role</label>\n                        <input class=\"form-control\" formControlName=\"Role\" style=\"width:200%;margin-left:-50%;\"placeholder=\"Admin/User\">\n                        <label class=\"text-danger\" *ngIf=\"service.formModel.get('Role').touched && service.formModel.get('Role').errors?.required\">This field is mandatory</label>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-8 offset-md-2\">\n                        <button type =\"submit\" class=\"btn btn-lg btn-block\" style =\"width:120%; margin-left:-10%;\" [disabled] = \"!this.service.formModel.valid\">Sign Up</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-4\">\n        </div>\n              <div class=\"login\">\n                \n                        <h3 style=\"color:white;\">Or go to login <strong>--></strong></h3>\n                    <br>\n            \n            <!-- <form action=\"/user/login\"> -->\n                <!-- <button onclick=\"location.href='user/login'\"type=\"button\" class=\"btn btn-lg btn-block\">Sign In!</button> -->\n                        <a href=\"user/login\" class=\"sign-in\">Sign In!</a>\n            <!-- </form> -->\n                    \n        </div>\n        \n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n            <div class=\"col-md-8 offset-md-2\">\n                <router-outlet>\n                   </router-outlet>\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(routes, service) {
        this.routes = routes;
        this.service = service;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    AboutComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.routes.navigateByUrl('user/login');
    };
    AboutComponent.prototype.onShow = function () {
        if (this.userDetails.role == 'User') {
            this.routes.navigateByUrl('home');
            return true;
        }
        else {
            this.routes.navigateByUrl('about');
            return false;
        }
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");










var routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
        ]
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular7';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_14__["ListComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot()
            ],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.router.navigate(['user/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(routes, service) {
        this.routes = routes;
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.routes.navigate(['user/login']);
    };
    HomeComponent.prototype.onList = function () {
        this.routes.navigate(['list']);
    };
    HomeComponent.prototype.onShow = function () {
        if (this.userDetails.role == 'User') {
            this.routes.navigateByUrl('home');
            return true;
        }
        else {
            this.routes.navigateByUrl('about');
            return false;
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.service.getProfile().subscribe(function (res) {
            _this.userDetail = res;
        }, function (err) {
            console.log(err);
        });
    };
    ListComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['user/login']);
    };
    ListComponent.prototype.onShow = function () {
        if (this.userDetail.role == 'User') {
            this.router.navigateByUrl('home');
            return true;
        }
        else {
            this.router.navigateByUrl('about');
            return false;
        }
    };
    ListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.baseURI = 'https://localhost:5001/api';
        this.formModel = this.fb.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FullName: [''],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            Role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, { validators: this.comparePasswords }),
        });
    }
    UserService.prototype.comparePasswords = function (fb) {
        var confirm = fb.get('ConfirmPassword');
        //password mismatch
        if (confirm.errors == null || 'passwordMismatch' in confirm.errors) {
            if (fb.get('Password').value !== confirm.value) {
                confirm.setErrors({ passwordMismatch: true });
            }
            else {
                confirm.setErrors(null);
            }
        }
    };
    UserService.prototype.register = function () {
        var body = {
            UserName: this.formModel.value.UserName,
            FullName: this.formModel.value.FullName,
            Email: this.formModel.value.Email,
            Password: this.formModel.value.Passwords.Password,
            Role: this.formModel.value.Role
        };
        return this.http.post(this.baseURI + '/ApplicationUser/Register', body);
    };
    UserService.prototype.login = function (formData) {
        return this.http.post(this.baseURI + '/ApplicationUser/Login', formData);
    };
    UserService.prototype.getUserProfile = function () {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return this.http.get(this.baseURI + '/Profile', { headers: tokenHeader });
    };
    UserService.prototype.getProfile = function () {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return this.http.get(this.baseURI + '/Get', { headers: tokenHeader });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['home'], { replaceUrl: true });
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.toastr.success('Yay!!! You have been logged in!!', 'Login successful, enjoy :) ');
            _this.router.navigateByUrl('home');
        }, function (err) {
            if (err.status == 400) {
                //console.log('Incorrect Username/Password');
                _this.toastr.error('Incorrect Username/Password', 'Login has been failed!');
            }
            else {
                _this.toastr.error('Please try again!', 'Error.');
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.service.formModel.reset();
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.register().subscribe(function (res) {
            if (res.succeeded) {
                _this.toastr.success('Welcome to our club!', 'Register completed');
                _this.service.formModel.reset();
            }
            else {
                res.errors.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Please try again.', 'Username is already taken.');
                        default:
                            _this.toastr.error('Please try again.', 'Registration failed.');
                    }
                });
            }
        }, function (err) {
            _this.toastr.error('Please try again.', 'Registration failed.');
        });
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/registration/registration.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phucnguyen/Desktop/Registration_Login_2/RegisterLogin/Angular7/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map