(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Change Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n<ion-content class=\"card-background-page\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Current Password</ion-label>\r\n          <ion-input required type=\"text\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">New Password</ion-label>\r\n          <ion-input required type=\"text\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Confirm Password</ion-label>\r\n          <ion-input required type=\"text\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"marg0auto\">\r\n        <ion-button expand=\"block\">Submit</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");







const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-label, p, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\nion-item {\n  padding: 0 10px;\n}\n.marg0auto {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUEyQiw0QkFBQTtBQ0UzQjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZkE7RUFDSSxrQkFBQTtBQ2tCSjtBRGhCQTtFQUNJLGtCQUFBO0FDbUJKO0FEakJBO0VBQ0ksZUFBQTtBQ29CSjtBRGxCQTtFQUNJLGNBQUE7QUNxQkoiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5pb24tbGFiZWwsIHAsIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ubWFyZzBhdXRvIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tbGFiZWwsIHAsIGlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5tYXJnMGF1dG8ge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangePasswordPage = class ChangePasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html"),
        styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es2015.js.map