(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    \r\n    <ion-title class=\"title_header\">Forgot Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content class=\"loginbg\">\r\n  <div class=\"divbg\">\r\n    <div class=\"backbtn\" (click)=\"returnLogin()\">\r\n      <a (click)=\"returnLogin()\" class=\"backbtn\">Back to Login</a>\r\n    </div>\r\n    <div class=\"box2\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row>\r\n          <ion-col col-6 class=\"nopad\">\r\n            <div class=\"divimg\">\r\n              <img class=\"imgloginlogo\" src=\"/assets/azurel.png\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <h1 class=\"titleforgot\">Forgot Password</h1>\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"rowtop\">\r\n          <ion-col size=\"12\">\r\n            <input class=\"inputext nomargtop\" id=\"email\" type=\"email\" placeholder=\"Email adress\">\r\n            <input class=\"inputext\" id=\"textCode\" type=\"text\" placeholder=\"Input Code\" (keyup)=\"codeCheck()\" maxlength=\"5\" style=\"display: none;\">\r\n            <input class=\"inputext password\" id=\"password1\" type=\"text\" placeholder=\"New Password\" (keyup)=\"passCheck()\" style=\"display: none;\">\r\n            <input class=\"inputext password\" id=\"password2\" type=\"text\" placeholder=\"Confirm Password\" (keyup)=\"passCheck()\" style=\"display: none;\">\r\n            <!-- <ion-button expand=\"block\" id=\"sendEmail\" (click)=\"checkEmail()\">Verify Email</ion-button>\r\n            <ion-button expand=\"block\" id=\"sendEmail\" (click)=\"sendCodeReset()\">Send Code</ion-button>\r\n            <ion-button expand=\"block\" id=\"confirmPassword\" (click)=\"confirmPassword()\">Change password</ion-button> -->\r\n\r\n            <input class=\"mat-6\" type=\"submit\" id=\"verifyEmail\" value=\"Verify Email\" (click)=\"checkEmail()\">\r\n            <input type=\"submit\" id=\"sendEmail\" value=\"Send Code\" (click)=\"sendCodeReset()\" style=\"display: none;\">\r\n            <input type=\"submit\" id=\"confirmPassword\" value=\"Update password\" (click)=\"confirmPassword()\" style=\"display: none;\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh2,\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.loginbg {\n  --background: #072549;\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n  font-size: 14px;\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.divbg {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  height: 100vh;\n  border-radius: 0;\n}\nion-back-button {\n  position: absolute;\n}\n.box2 {\n  width: 300px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n.box2 h1 {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-family: \"Assistant_bold\";\n  margin-top: 0;\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n.box2 .inputext::-webkit-input-placeholder {\n  color: #aaaaaa;\n}\n.box2 .inputext::-moz-placeholder {\n  color: #aaaaaa;\n}\n.box2 .inputext:-ms-input-placeholder {\n  color: #aaaaaa;\n}\n.box2 .inputext::-ms-input-placeholder {\n  color: #aaaaaa;\n}\n.box2 .inputext::placeholder {\n  color: #aaaaaa;\n}\n.box2 input[type=text],\n.box input[type=password],\n.box2 input[type=email] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 13px auto;\n  text-align: center;\n  border: 2px solid #0653ac;\n  padding: 10px;\n  width: 240px;\n  outline: none;\n  color: #ffffff;\n  border-radius: 24px;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.box2 input[type=text]:focus,\n.box input[type=password]:focus,\n.box2 input[type=email]:focus {\n  width: 260px;\n  border-color: #0967d3;\n}\n.box2 input[type=submit] {\n  border: 0;\n  background: -webkit-gradient(linear, left top, right top, from(#0967d3), to(#09a0d3));\n  background: linear-gradient(to right, #0967d3, #09a0d3);\n  margin: 11px auto;\n  text-align: center;\n  padding: 7px 40px;\n  color: white;\n  border-radius: 24px;\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n  margin-top: 0;\n}\n.imgloginlogo {\n  width: 50%;\n  margin: 0 auto;\n}\n.divimg {\n  background-color: transparent !important;\n  border: none !important;\n  border-radius: 2px;\n  text-align: center;\n  margin-top: 4.5vh;\n}\n.rowtop {\n  padding: 0 5px;\n}\n.nomargtop {\n  margin-top: 0 !important;\n}\n.nopad {\n  padding: 0 !important;\n}\n.mat-6 {\n  margin-top: 6px !important;\n}\n.backbtn {\n  width: 100%;\n  position: relative;\n  top: 2.5vh;\n  left: 2vh;\n  text-align: left;\n}\n.backbtn a {\n  position: absolute;\n  left: 0;\n  color: #a0b1c5;\n  text-decoration: underline;\n  text-transform: uppercase;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcMjAyMFxcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTs7O0VBRWMsNEJBQUE7QUNFZDtBREFBO0VBQ0kscUJBQUE7QUNHSjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFBZSxrQkFBQTtFQUFvQixlQUFBO0FDbUJuQztBRGxCQTtFQUNJLDRCQUFBO0FDcUJKO0FEbkJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNzQko7QURwQkE7RUFDSSxrQkFBQTtBQ3VCSjtBRHJCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGtCQUFBO0FDd0JKO0FEdEJBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN5Qko7QUR2QkE7RUFDSSxjQUFBO0FDMEJKO0FEM0JBO0VBQ0ksY0FBQTtBQzBCSjtBRDNCQTtFQUNJLGNBQUE7QUMwQko7QUQzQkE7RUFDSSxjQUFBO0FDMEJKO0FEM0JBO0VBQ0ksY0FBQTtBQzBCSjtBRHhCQTs7O0VBR0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMyQko7QUR6QkE7OztFQUdJLFlBQUE7RUFDQSxxQkFBQTtBQzRCSjtBRDFCQTtFQUNJLFNBQUE7RUFDQSxxRkFBQTtFQUFBLHVEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUM2Qko7QUQzQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQzhCSjtBRDNCQTtFQUNJLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUM4Qko7QUQ1QkE7RUFDSSxjQUFBO0FDK0JKO0FEN0JBO0VBQVksd0JBQUE7QUNpQ1o7QURoQ0E7RUFBUSxxQkFBQTtBQ29DUjtBRG5DQTtFQUFRLDBCQUFBO0FDdUNSO0FEdENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ3lDSjtBRHZDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQzBDSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmgyLFxyXG5wLFxyXG4gaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmxvZ2luYmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDcyNTQ5O1xyXG59XHJcblxyXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XHJcbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuXHJcbi50aXRsZV9oZWFkZXIge3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4O31cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxufVxyXG4uZGl2Ymcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYm94MiB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib3gyIGgxIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmJveDIgLmlucHV0ZXh0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjojYWFhYWFhO1xyXG59XHJcbi5ib3gyIGlucHV0W3R5cGUgPSBcInRleHRcIl0sXHJcbi5ib3ggaW5wdXRbdHlwZSA9IFwicGFzc3dvcmRcIl0sXHJcbi5ib3gyIGlucHV0W3R5cGUgPSBcImVtYWlsXCJdIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTNweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA2NTNhYztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ib3gyIGlucHV0W3R5cGUgPSBcInRleHRcIl06Zm9jdXMsIFxyXG4uYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4uYm94MiBpbnB1dFt0eXBlID0gXCJlbWFpbFwiXTpmb2N1cyB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwOTY3ZDM7XHJcbn1cclxuLmJveDIgaW5wdXRbdHlwZSA9IFwic3VibWl0XCJdIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA5NjdkMywgIzA5YTBkMyk7XHJcbiAgICBtYXJnaW46IDExcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDdweCA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmltZ2xvZ2lubG9nbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5kaXZpbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQuNXZoO1xyXG59XHJcbi5yb3d0b3Age1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuLm5vbWFyZ3RvcCB7bWFyZ2luLXRvcDogMCFpbXBvcnRhbnQ7fVxyXG4ubm9wYWQge3BhZGRpbmc6IDAhaW1wb3J0YW50O31cclxuLm1hdC02IHttYXJnaW4tdG9wOiA2cHghaW1wb3J0YW50O31cclxuLmJhY2tidG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIuNXZoO1xyXG4gICAgbGVmdDogMnZoO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYmFja2J0biBhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb2xvcjogI2EwYjFjNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaDIsXG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5sb2dpbmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDcyNTQ5O1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi50aXRsZV9oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5kaXZiZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJveDIge1xuICB3aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJveDIgaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ib3gyIC5pbnB1dGV4dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYWFhYTtcbn1cblxuLmJveDIgaW5wdXRbdHlwZT10ZXh0XSxcbi5ib3ggaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uYm94MiBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTNweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNjUzYWM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3gyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXG4uYm94IGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLFxuLmJveDIgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMge1xuICB3aWR0aDogMjYwcHg7XG4gIGJvcmRlci1jb2xvcjogIzA5NjdkMztcbn1cblxuLmJveDIgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOTY3ZDMsICMwOWEwZDMpO1xuICBtYXJnaW46IDExcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaW1nbG9naW5sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5kaXZpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQuNXZoO1xufVxuXG4ucm93dG9wIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5ub21hcmd0b3Age1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC02IHtcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyLjV2aDtcbiAgbGVmdDogMnZoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYmFja2J0biBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogI2EwYjFjNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(postPvd, router, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.toastController = toastController;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.openToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage.prototype.emailCheck = function () {
        var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (pattern.test(jquery__WEBPACK_IMPORTED_MODULE_5__("#email").val())) {
            this.openToast("Valid email!");
            jquery__WEBPACK_IMPORTED_MODULE_5__("#sendEmail").show();
        }
        else {
            this.openToast("Invalid email!");
        }
    };
    ForgotPasswordPage.prototype.sendCodeReset = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'sendCodeReset',
                email: jquery__WEBPACK_IMPORTED_MODULE_5__("#email").val(),
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['status'] == 'Success') {
                    jquery__WEBPACK_IMPORTED_MODULE_5__("#sendEmail").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_5__("#email").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_5__("#textCode").show();
                    _this.openToast("Reset code has been sent please see your email!");
                }
            });
        });
    };
    ForgotPasswordPage.prototype.codeCheck = function () {
        var _this = this;
        var code = jquery__WEBPACK_IMPORTED_MODULE_5__("#textCode").val();
        if (code.length == 5) {
            return new Promise(function (resolve) {
                var body = {
                    action: 'checkCode',
                    email: jquery__WEBPACK_IMPORTED_MODULE_5__("#email").val(),
                    code: code,
                };
                _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                    if (data['status'] == 'Success') {
                        jquery__WEBPACK_IMPORTED_MODULE_5__("#textCode").hide();
                        jquery__WEBPACK_IMPORTED_MODULE_5__(".password").show();
                        _this.openToast("Enter your new password!");
                    }
                    else {
                        _this.openToast("Invalid code entered!");
                    }
                });
            });
        }
    };
    ForgotPasswordPage.prototype.passCheck = function () {
        var pass1 = jquery__WEBPACK_IMPORTED_MODULE_5__("#password1").val();
        var pass2 = jquery__WEBPACK_IMPORTED_MODULE_5__("#password2").val();
        if ((pass1 != "" && pass2 != "") && (pass1.length == pass2.length)) {
            if (pass1 == pass2) {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#confirmPassword").show();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#confirmPassword").hide();
                this.openToast("Password mismatch!");
            }
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#confirmPassword").hide();
        }
    };
    ForgotPasswordPage.prototype.confirmPassword = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'updatePassword',
                email: jquery__WEBPACK_IMPORTED_MODULE_5__("#email").val(),
                code: jquery__WEBPACK_IMPORTED_MODULE_5__("#textCode").val(),
                password: jquery__WEBPACK_IMPORTED_MODULE_5__("#password1").val(),
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['status'] == 'Success') {
                    _this.openToast("Password updated successfully!");
                    _this.router.navigateByUrl('');
                }
                else {
                    _this.openToast("Password update failed!");
                }
            });
        });
    };
    ForgotPasswordPage.prototype.returnLogin = function () {
        this.router.navigateByUrl('');
    };
    ForgotPasswordPage.prototype.checkEmail = function () {
        var _this = this;
        var email = jquery__WEBPACK_IMPORTED_MODULE_5__("#email").val();
        var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (pattern.test(email)) {
            // this.openToast("Valid email!");
            // $("#sendEmail").show();
            return new Promise(function (resolve) {
                var body = {
                    action: 'verifyEmail',
                    email: email
                };
                _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                    if (data['success'] == 'success') {
                        _this.openToast("Email is verified. Please click 'Send code' to continue!");
                        jquery__WEBPACK_IMPORTED_MODULE_5__("#sendEmail").show();
                        jquery__WEBPACK_IMPORTED_MODULE_5__("#verifyEmail").hide();
                    }
                    else {
                        _this.openToast("Email is not registered!");
                    }
                });
            });
        }
        else {
            this.openToast("Invalid email pattern!");
        }
    };
    ForgotPasswordPage.ctorParameters = function () { return [
        { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map