(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab4-tab4-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"title_header\">Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"nopad\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        <ion-list class=\"pr-20\">\r\n          <ion-list-header>\r\n            Current Unit\r\n          </ion-list-header>\r\n          <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"/assets/sunit.png\">\r\n            </ion-avatar>\r\n            <ion-label class=\"current\">\r\n              <h2>Unit {{RoomNo}}</h2>\r\n              <div class=\"circle_active\"></div>\r\n              <p>Active</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"pr-20 list_switch\">\r\n          <ion-list-header>\r\n            Switch Unit\r\n          </ion-list-header>\r\n          <ion-item *ngFor=\"let res of Data; let i = index\" (click)=\"presentAlertConfirm(res[i].pUnitRoom)\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"/assets/sunit.png\">\r\n            </ion-avatar>\r\n            <ion-label class=\"lessmargin\">\r\n              <h2>Unit {{res[i].pUnitRoom}}</h2>\r\n              <div class=\"circle\"></div>\r\n              <!-- <p>8 new</p> -->\r\n              <p>Offline</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        <ion-list class=\"list_logout nopad pr-20\">\r\n          <ion-item (click)=\"openChangePassword()\">\r\n              <img class=\"imglogout\" src=\"/assets/locked.png\">\r\n            <ion-label>\r\n              <h2>Change Password</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <img class=\"imglogout\" src=\"/assets/logout.png\">\r\n          <ion-label>\r\n            <h2>Log Out</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.nopad {\n  padding: 0;\n}\nion-list-header {\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n  color: #5f5f5f;\n}\nion-label h2 {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: \"Assistant_semibold\";\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.circle {\n  width: 7px;\n  height: 7px;\n  background: #187aea;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  bottom: 6px;\n  margin-right: 4px;\n}\n.circle_active {\n  width: 7px;\n  height: 7px;\n  background: #00d42e;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  bottom: 6px;\n  margin-right: 4px;\n}\n.current p {\n  display: inline-block;\n  margin: 0;\n  font-size: 13px;\n  color: #555555;\n}\n.lessmargin p {\n  display: inline-block;\n  margin: 0;\n  font-size: 13px;\n  color: #555555;\n}\n.lessmargin {\n  margin-top: 8px;\n  margin-bottom: 3px;\n}\nimg {\n  border-radius: 0;\n}\n.imglogout {\n  width: 26px;\n  margin-left: 10px;\n  margin-right: 19px;\n}\n.list_logout {\n  background: #f0f3fb;\n}\n.list_logout ion-item {\n  --background: #f0f3fb;\n}\n.list_logout ion-item:last-child {\n  --border-style: 0;\n}\n.list_switch {\n  padding-bottom: 0;\n}\n.list_switch ion-item:last-child {\n  --border-style: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlQWNjZXNzXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHRhYjRcXHRhYjQucGFnZS5zY3NzIiwic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUFnQiw0QkFBQTtBQ0VoQjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksVUFBQTtBQ2tCSjtBRGhCQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDbUJKO0FEakJBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNvQko7QURsQkE7RUFDSSxtQkFBQTtBQ3FCSjtBRG5CQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNzQko7QURwQkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDdUJKO0FEckJBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN3Qko7QUR0QkE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3lCSjtBRHZCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQzBCSjtBRHhCQTtFQUNJLGdCQUFBO0FDMkJKO0FEekJBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUM0Qko7QUQxQkE7RUFDSSxtQkFBQTtBQzZCSjtBRDNCQTtFQUNJLHFCQUFBO0FDOEJKO0FENUJBO0VBRUksaUJBQUE7QUM4Qko7QUQ1QkE7RUFDSSxpQkFBQTtBQytCSjtBRDdCQTtFQUNJLGlCQUFBO0FDZ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5wLCBpb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcblxyXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XHJcbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuXHJcbi50aXRsZV9oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ub3BhZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBjb2xvcjogIzVmNWY1ZjtcclxufVxyXG5pb24tbGFiZWwgaDIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxufVxyXG4ucHItMjAge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICMxODdhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi5jaXJjbGVfYWN0aXZlIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGQ0MmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi5jdXJyZW50IHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuLmxlc3NtYXJnaW4gcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG4ubGVzc21hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmltZ2xvZ291dCB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG59XHJcbi5saXN0X2xvZ291dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmM2ZiO1xyXG59XHJcbi5saXN0X2xvZ291dCBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMGYzZmI7XHJcbn1cclxuLmxpc3RfbG9nb3V0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgXHJcbiAgICAtLWJvcmRlci1zdHlsZTogMDtcclxufVxyXG4ubGlzdF9zd2l0Y2gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLmxpc3Rfc3dpdGNoIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IDA7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbnAsIGlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi50aXRsZV9oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4ucHItMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICMxODdhZWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmNpcmNsZV9hY3RpdmUge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogIzAwZDQyZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uY3VycmVudCBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG5cbi5sZXNzbWFyZ2luIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLmxlc3NtYXJnaW4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmltZ2xvZ291dCB7XG4gIHdpZHRoOiAyNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xufVxuXG4ubGlzdF9sb2dvdXQge1xuICBiYWNrZ3JvdW5kOiAjZjBmM2ZiO1xufVxuXG4ubGlzdF9sb2dvdXQgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmMGYzZmI7XG59XG5cbi5saXN0X2xvZ291dCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItc3R5bGU6IDA7XG59XG5cbi5saXN0X3N3aXRjaCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ubGlzdF9zd2l0Y2ggaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXN0eWxlOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let Tab4Page = class Tab4Page {
    constructor(router, postPvd, alertController) {
        this.router = router;
        this.postPvd = postPvd;
        this.alertController = alertController;
        this.Data = [];
        this.DataConfirm = [];
    }
    ngOnInit() {
        this.RoomNo = localStorage.getItem("ROOM_NO");
        this.Email = localStorage.getItem("EMAIL");
        this.Type = localStorage.getItem("TYPE_DATA");
        console.log(localStorage);
    }
    ionViewWillEnter() {
        console.log(localStorage);
        this.RoomNo = localStorage.getItem("ROOM_NO");
        this.Email = localStorage.getItem("EMAIL");
        this.Type = localStorage.getItem("TYPE_DATA");
        this.loadData(this.Email, this.Type);
    }
    presentAlertConfirm(no) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Switch to Unit ' + no + '?',
                // message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Disagree',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Agree',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.confirmChange(no);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openChangePassword() {
        this.router.navigateByUrl('/tabs/tab4/change-password');
    }
    loadData(Email, Type) {
        this.Data = [];
        return new Promise(resolve => {
            let body = {
                action: 'MultipleUnit',
                Type: Type,
                Email: Email,
                RoomNo: this.RoomNo,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                for (var i = 0; i < data['result'].length; i++) {
                    this.Data.push(data['result']);
                }
                resolve(true);
                console.log(data);
            });
        });
    }
    confirmChange(no) {
        this.Data = [];
        return new Promise(resolve => {
            let body = {
                action: 'changeUnit',
                Type: this.Type,
                Email: this.Email,
                RoomNo: no,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                // for(var i = 0; i < data['result'].length;i++){
                //   this.DataConfirm.push(data['result']);
                // }
                if (data['uType'] == "Owner") {
                    localStorage.setItem("UNIT_CODE", data['dataX']['unit_code']);
                    localStorage.setItem("TYPE_DATA", data['uType']);
                    localStorage.setItem("HAS_TENANT", data['hasTenant']);
                    localStorage.setItem("NEW_CODE", data['dataX']['new_code']);
                    localStorage.setItem("FULLNAME", data['dataX']['fullname']);
                    localStorage.setItem("TUN", data['TUN']);
                    localStorage.setItem("ROOM_NO", data['ROOM_NO']);
                    localStorage.setItem("EMAIL", data['dataX']['EmailAddress']);
                    localStorage.setItem("PROPERTY_CODE", data['dataX']['property_code']);
                    this.router.navigateByUrl('/tabs/tab1');
                }
                else if (data['uType'] == "Tenant") {
                    localStorage.setItem("UNIT_CODE", data['dataX']['unit_code']);
                    localStorage.setItem("TYPE_DATA", data['uType']);
                    localStorage.setItem("HAS_TENANT", data['hasTenant']);
                    localStorage.setItem("NEW_CODE", data['dataX']['new_code']);
                    localStorage.setItem("FULLNAME", data['dataX']['fullname']);
                    localStorage.setItem("TUN", data['TUN']);
                    localStorage.setItem("ROOM_NO", data['ROOM_NO']);
                    localStorage.setItem("EMAIL", data['dataX']['tEmailAddress']);
                    localStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
                    this.router.navigateByUrl('/tabs/tab1');
                }
                resolve(true);
                console.log(data);
            });
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
        styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=default~tab4-tab4-module~tabs-tabs-module-es2015.js.map