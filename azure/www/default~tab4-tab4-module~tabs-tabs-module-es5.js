(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab4-tab4-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"title_header\">Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"nopad\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"nopad\">\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"nopad\">\n        <ion-list class=\"pr-20\">\n          <ion-list-header>\n            Current Unit\n          </ion-list-header>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"/assets/sunit.png\">\n            </ion-avatar>\n            <ion-label class=\"current\">\n              <h2>Unit {{RoomNo}}</h2>\n              <div class=\"circle_active\"></div>\n              <p>Active</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"pr-20 list_switch\">\n          <ion-list-header>\n            Switch Unit\n          </ion-list-header>\n          <ion-item *ngFor=\"let res of Data; let i = index\" (click)=\"presentAlertConfirm(res[i].pUnitRoom)\">\n            <ion-avatar slot=\"start\">\n              <img src=\"/assets/sunit.png\">\n            </ion-avatar>\n            <ion-label class=\"lessmargin\">\n              <h2>Unit {{res[i].pUnitRoom}}</h2>\n              <div class=\"circle\"></div>\n              <!-- <p>8 new</p> -->\n              <p>Offline</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"nopad\">\n        <ion-list class=\"list_logout nopad pr-20\">\n          <ion-item (click)=\"openChangePassword()\">\n              <img class=\"imglogout\" src=\"/assets/locked.png\">\n            <ion-label>\n              <h2>Change Password</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <img class=\"imglogout\" src=\"/assets/logout.png\">\n          <ion-label>\n            <h2>Log Out</h2>\n          </ion-label>\n        </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
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
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.nopad {\n  padding: 0;\n}\nion-list-header {\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n  color: #5f5f5f;\n}\nion-label h2 {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: \"Assistant_semibold\";\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.circle {\n  width: 7px;\n  height: 7px;\n  background: #187aea;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  bottom: 6px;\n  margin-right: 4px;\n}\n.circle_active {\n  width: 7px;\n  height: 7px;\n  background: #00d42e;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  bottom: 6px;\n  margin-right: 4px;\n}\n.current p {\n  display: inline-block;\n  margin: 0;\n  font-size: 13px;\n  color: #555555;\n}\n.lessmargin p {\n  display: inline-block;\n  margin: 0;\n  font-size: 13px;\n  color: #555555;\n}\n.lessmargin {\n  margin-top: 8px;\n  margin-bottom: 3px;\n}\nimg {\n  border-radius: 0;\n}\n.imglogout {\n  width: 26px;\n  margin-left: 10px;\n  margin-right: 19px;\n}\n.list_logout {\n  background: #f0f3fb;\n}\n.list_logout ion-item {\n  --background: #f0f3fb;\n}\n.list_logout ion-item:last-child {\n  --border-style: 0;\n}\n.list_switch {\n  padding-bottom: 0;\n}\n.list_switch ion-item:last-child {\n  --border-style: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiNFxcdGFiNC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWdCLDRCQUFBO0FDRWhCO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxVQUFBO0FDa0JKO0FEaEJBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNtQko7QURqQkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ29CSjtBRGxCQTtFQUNJLG1CQUFBO0FDcUJKO0FEbkJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3NCSjtBRHBCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN1Qko7QURyQkE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3dCSjtBRHRCQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeUJKO0FEdkJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDMEJKO0FEeEJBO0VBQ0ksZ0JBQUE7QUMyQko7QUR6QkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzRCSjtBRDFCQTtFQUNJLG1CQUFBO0FDNkJKO0FEM0JBO0VBQ0kscUJBQUE7QUM4Qko7QUQ1QkE7RUFFSSxpQkFBQTtBQzhCSjtBRDVCQTtFQUNJLGlCQUFBO0FDK0JKO0FEN0JBO0VBQ0ksaUJBQUE7QUNnQ0oiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxucCwgaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxuXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XG5cbi50aXRsZV9oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ub3BhZCB7XG4gICAgcGFkZGluZzogMDtcbn1cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICBjb2xvcjogIzVmNWY1Zjtcbn1cbmlvbi1sYWJlbCBoMiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xufVxuLnByLTIwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTg3YWVhO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmNpcmNsZV9hY3RpdmUge1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYmFja2dyb3VuZDogIzAwZDQyZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5jdXJyZW50IHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuLmxlc3NtYXJnaW4gcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG59XG4ubGVzc21hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5pbWdsb2dvdXQge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTlweDtcbn1cbi5saXN0X2xvZ291dCB7XG4gICAgYmFja2dyb3VuZDogI2YwZjNmYjtcbn1cbi5saXN0X2xvZ291dCBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjBmM2ZiO1xufVxuLmxpc3RfbG9nb3V0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIFxuICAgIC0tYm9yZGVyLXN0eWxlOiAwO1xufVxuLmxpc3Rfc3dpdGNoIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5saXN0X3N3aXRjaCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci1zdHlsZTogMDtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbnAsIGlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi50aXRsZV9oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4ucHItMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICMxODdhZWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmNpcmNsZV9hY3RpdmUge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogIzAwZDQyZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uY3VycmVudCBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG5cbi5sZXNzbWFyZ2luIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLmxlc3NtYXJnaW4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmltZ2xvZ291dCB7XG4gIHdpZHRoOiAyNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xufVxuXG4ubGlzdF9sb2dvdXQge1xuICBiYWNrZ3JvdW5kOiAjZjBmM2ZiO1xufVxuXG4ubGlzdF9sb2dvdXQgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmMGYzZmI7XG59XG5cbi5saXN0X2xvZ291dCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItc3R5bGU6IDA7XG59XG5cbi5saXN0X3N3aXRjaCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ubGlzdF9zd2l0Y2ggaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXN0eWxlOiAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var Tab4Page = /** @class */ (function () {
    function Tab4Page(router, postPvd, alertController) {
        this.router = router;
        this.postPvd = postPvd;
        this.alertController = alertController;
        this.Data = [];
        this.DataConfirm = [];
    }
    Tab4Page.prototype.ngOnInit = function () {
        this.RoomNo = localStorage.getItem("ROOM_NO");
        this.Email = localStorage.getItem("EMAIL");
        this.Type = localStorage.getItem("TYPE_DATA");
        console.log(localStorage);
    };
    Tab4Page.prototype.ionViewWillEnter = function () {
        console.log(localStorage);
        this.RoomNo = localStorage.getItem("ROOM_NO");
        this.Email = localStorage.getItem("EMAIL");
        this.Type = localStorage.getItem("TYPE_DATA");
        this.loadData(this.Email, this.Type);
    };
    Tab4Page.prototype.presentAlertConfirm = function (no) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Switch to Unit ' + no + '?',
                            // message: 'Message <strong>text</strong>!!!',
                            buttons: [
                                {
                                    text: 'Disagree',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Agree',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.confirmChange(no);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.openChangePassword = function () {
        this.router.navigateByUrl('/tabs/tab4/change-password');
    };
    Tab4Page.prototype.loadData = function (Email, Type) {
        var _this = this;
        this.Data = [];
        return new Promise(function (resolve) {
            var body = {
                action: 'MultipleUnit',
                Type: Type,
                Email: Email,
                RoomNo: _this.RoomNo,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                for (var i = 0; i < data['result'].length; i++) {
                    _this.Data.push(data['result']);
                }
                resolve(true);
                console.log(data);
            });
        });
    };
    Tab4Page.prototype.confirmChange = function (no) {
        var _this = this;
        this.Data = [];
        return new Promise(function (resolve) {
            var body = {
                action: 'changeUnit',
                Type: _this.Type,
                Email: _this.Email,
                RoomNo: no,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
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
                    _this.router.navigateByUrl('/tabs/tab1');
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
                    _this.router.navigateByUrl('/tabs/tab1');
                }
                resolve(true);
                console.log(data);
            });
        });
    };
    Tab4Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=default~tab4-tab4-module~tabs-tabs-module-es5.js.map