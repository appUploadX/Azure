(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<script\r\n  src=\"https://code.jquery.com/jquery-3.4.1.js\"\r\n  integrity=\"sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=\"\r\n  crossorigin=\"anonymous\"></script>\r\n\r\n<ion-content class=\"loginbg\">\r\n    <form class=\"box\" (submit)=\"onSubmit(user.value, pass.value)\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col col-6>\r\n            <div class=\"divimg\">\r\n              <img class=\"imgloginlogo\" src=\"/assets/azurel.png\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <h1>Login</h1>\r\n      <input type=\"text\" #user  class=\"required user\" required placeholder=\"Username\">\r\n      <input type=\"password\" #pass class=\"required\" required placeholder=\"Password\">\r\n      <a (click)=\"openForgotPassword()\" class=\"forgotbtn\">Forgot Password?</a>\r\n      <input type=\"submit\" value=\"Login\">\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh2,\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.loginbg {\n  --background: #072549;\n}\nion-col div {\n  background-color: #191a30;\n  border: 1px solid #191a30;\n  border-radius: 2px;\n  padding: 5px;\n  text-align: center;\n}\n.box {\n  width: 300px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n.box h1 {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-family: \"Assistant_bold\";\n  margin-top: 0;\n}\n.box input[type=text], .box input[type=password] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #0653ac;\n  padding: 14px 10px;\n  width: 240px;\n  outline: none;\n  color: #ffffff;\n  border-radius: 24px;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  margin-bottom: 10px;\n}\n.box input[type=text]:focus, .box input[type=password]:focus {\n  width: 260px;\n  border-color: #0967d3;\n}\n.box input[type=submit] {\n  border: 0;\n  background: -webkit-gradient(linear, left top, right top, from(#0967d3), to(#09a0d3));\n  background: linear-gradient(to right, #0967d3, #09a0d3);\n  margin: 20px auto;\n  text-align: center;\n  padding: 14px 40px;\n  color: white;\n  border-radius: 24px;\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n  margin-top: 0;\n}\n.imgloginlogo {\n  width: 80%;\n  margin: 0 auto;\n}\n.divimg {\n  background-color: transparent !important;\n  border: none !important;\n  border-radius: 2px;\n  padding: 5px;\n  text-align: center;\n}\n.forgotbtn {\n  margin-bottom: 15px;\n  width: 100%;\n  display: block;\n  text-decoration: underline;\n  color: #a0b1c5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFwyMDIwXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7OztFQUVjLDRCQUFBO0FDRWQ7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRFpBO0VBQ0kscUJBQUE7QUNlSjtBRFpBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZUo7QURaQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGtCQUFBO0FDZUo7QURiQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDZ0JKO0FEWkE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQ2VKO0FEWkE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNlSjtBRGJBO0VBQ0ksU0FBQTtFQUNBLHFGQUFBO0VBQUEsdURBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ2dCSjtBRGJBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUNnQko7QURiQTtFQUNJLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2dCSjtBRGRBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5oMixcclxucCxcclxuIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuXHJcblxyXG4ubG9naW5iZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNzI1NDk7XHJcbn1cclxuXHJcbmlvbi1jb2wgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTFhMzA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTkxYTMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJveCBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxuXHJcbn1cclxuLmJveCBpbnB1dFt0eXBlID0gXCJ0ZXh0XCJdLCAuYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJdIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA2NTNhYztcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXTpmb2N1cywgLmJveCBpbnB1dFt0eXBlID0gXCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwOTY3ZDM7XHJcbn1cclxuLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDk2N2QzLCAjMDlhMGQzKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5pbWdsb2dpbmxvZ28ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGl2aW1nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcmdvdGJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNhMGIxYzU7XHJcbn1cclxuICBcclxuICAiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmgyLFxucCxcbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5sb2dpbmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDcyNTQ5O1xufVxuXG5pb24tY29sIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFhMzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTFhMzA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJveCBoMSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYm94IGlucHV0W3R5cGU9dGV4dF0sIC5ib3ggaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDY1M2FjO1xuICBwYWRkaW5nOiAxNHB4IDEwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYm94IGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5ib3ggaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICB3aWR0aDogMjYwcHg7XG4gIGJvcmRlci1jb2xvcjogIzA5NjdkMztcbn1cblxuLmJveCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA5NjdkMywgIzA5YTBkMyk7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaW1nbG9naW5sb2dvIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5kaXZpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcmdvdGJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjYTBiMWM1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






let LoginPage = class LoginPage {
    constructor(postPvd, router, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.toastController = toastController;
        this.Data = [];
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").val("");
    }
    ionViewWillEnter() {
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").trigger("reset");
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").val("");
        console.log(localStorage);
        if (localStorage.getItem("UNIT_CODE") !== null && localStorage.getItem("NEW_CODE") !== null) {
            return new Promise(resolve => {
                let body = {
                    action: 'checkLocal',
                    new_code: localStorage.getItem("NEW_CODE"),
                    email: localStorage.getItem("EMAIL"),
                    type: localStorage.getItem("TYPE_DATA"),
                };
                this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                    if (data['status'] == "Success") {
                        this.typeData = data['uType'];
                        this.Status = data['status'];
                        this.Has = data['hasTenant'];
                        this.Data.push(data['data']);
                        console.log(data['dataX'][0]);
                        if (data['uType'] == "Owner") {
                            localStorage.setItem("HAS_TENANT", data['hasTenant']);
                            localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
                            localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);
                            localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
                            if (data['dataX'][0]['pTermsAndCondition'] !== null || data['dataX'][0]['pTermsAndCondition'] !== '') {
                                this.router.navigateByUrl('/tabs/tab1');
                            }
                            else {
                                this.router.navigateByUrl('terms-and-conditions');
                            }
                        }
                        else if (data['uType'] == "Tenant") {
                            localStorage.setItem("HAS_TENANT", data['hasTenant']);
                            localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
                            localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);
                            localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
                            if (data['dataX'][0]['tTermsAndCondition'] !== null || data['dataX'][0]['tTermsAndCondition'] !== '') {
                                this.router.navigateByUrl('/tabs/tab1');
                            }
                            else {
                                this.router.navigateByUrl('terms-and-conditions');
                            }
                        }
                    }
                    else {
                        this.openToast('<center>Invalid credentials!</center>');
                    }
                });
            });
            if (localStorage.getItem("TERMS") !== 'null') {
                this.router.navigateByUrl('/tabs/tab1');
            }
            else {
                this.router.navigateByUrl('terms-and-conditions');
            }
        }
    }
    openToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    openForgotPassword() {
        this.router.navigateByUrl('/forgot-password');
    }
    onSubmit(user, pass) {
        var count = 0;
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).val() == "") {
                count++;
            }
            if (count > 0) {
                if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).val() == "") {
                    jquery__WEBPACK_IMPORTED_MODULE_5__(this).css({ "border": '#FF0000 1px solid' });
                }
            }
        });
        console.log(count);
        if (count == 0) {
            var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if (pattern.test(jquery__WEBPACK_IMPORTED_MODULE_5__(".user").val())) {
                return new Promise(resolve => {
                    let body = {
                        action: 'login',
                        user: user,
                        pass: pass,
                    };
                    this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                        if (data['status'] == "Success") {
                            this.typeData = data['uType'];
                            this.Status = data['status'];
                            this.Has = data['hasTenant'];
                            this.Data.push(data['data']);
                            console.log(data['dataX'][0]);
                            if (data['uType'] == "Owner") {
                                localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
                                localStorage.setItem("TYPE_DATA", this.typeData);
                                localStorage.setItem("HAS_TENANT", data['hasTenant']);
                                localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
                                localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
                                localStorage.setItem("TUN", data['TUN']);
                                localStorage.setItem("ROOM_NO", data['ROOM_NO']);
                                localStorage.setItem("EMAIL", data['dataX'][0]['EmailAddress']);
                                localStorage.setItem("PROPERTY_CODE", data['dataX'][0]['property_code']);
                                localStorage.setItem("USER_ID", data['dataX'][0]['id']);
                                localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);
                                localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
                                localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);
                                localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
                                if (data['dataX'][0]['pTermsAndCondition'] !== null) {
                                    this.router.navigateByUrl('/tabs/tab1');
                                }
                                else {
                                    this.router.navigateByUrl('terms-and-conditions');
                                }
                            }
                            else if (data['uType'] == "Tenant") {
                                localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
                                localStorage.setItem("TYPE_DATA", this.typeData);
                                localStorage.setItem("HAS_TENANT", data['hasTenant']);
                                localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
                                localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
                                localStorage.setItem("TUN", data['TUN']);
                                localStorage.setItem("ROOM_NO", data['ROOM_NO']);
                                localStorage.setItem("EMAIL", data['dataX'][0]['tEmailAddress']);
                                localStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
                                localStorage.setItem("USER_ID", data['dataX'][0]['id']);
                                localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);
                                localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
                                localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);
                                localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
                                if (data['dataX'][0]['tTermsAndCondition'] !== null) {
                                    this.router.navigateByUrl('/tabs/tab1');
                                }
                                else {
                                    this.router.navigateByUrl('terms-and-conditions');
                                }
                            }
                        }
                        else {
                            this.openToast('<center>Invalid credentials!</center>');
                        }
                    });
                });
            }
            else {
                this.openToast("<center>Incorrect email format!</center>");
            }
        }
        else {
            this.openToast("<center>All fields are required!</center>");
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map