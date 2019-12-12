(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab4-tab4-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"title_header\">Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"nopad\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        <ion-list class=\"pr-20\">\r\n          <ion-list-header>\r\n            Current Unit\r\n          </ion-list-header>\r\n          <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"/assets/sunit.png\">\r\n            </ion-avatar>\r\n            <ion-label class=\"current\">\r\n              <h2>Unit {{RoomNo}}</h2>\r\n              <div class=\"circle_active\"></div>\r\n              <p>Active</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"pr-20 list_switch\">\r\n          <ion-list-header>\r\n            Switch Unit\r\n          </ion-list-header>\r\n          <ion-item *ngFor=\"let res of Data; let i = index\" (click)=\"presentAlertConfirm(res[i].pUnitRoom)\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"/assets/sunit.png\">\r\n            </ion-avatar>\r\n            <ion-label class=\"lessmargin\">\r\n              <h2>Unit {{res[i].pUnitRoom}}</h2>\r\n              <div class=\"circle\"></div>\r\n              <!-- <p>8 new</p> -->\r\n              <p>Offline</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        <ion-list class=\"list_logout nopad pr-20\">\r\n          <ion-item (click)=\"openChangePassword()\">\r\n              <img class=\"imglogout\" src=\"/assets/locked.png\">\r\n            <ion-label>\r\n              <h2>Change Password</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"logout()\">\r\n            <img class=\"imglogout\" src=\"/assets/logout.png\">\r\n            <ion-label>\r\n              <h2>Log Out</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.nopad {\n  padding: 0;\n}\nion-list-header {\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n  color: #5f5f5f;\n}\nion-label h2 {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: \"Assistant_semibold\";\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.circle {\n  width: 7px;\n  height: 7px;\n  background: #187aea;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  bottom: 6px;\n  margin-right: 4px;\n}\n.circle_active {\n  width: 7px;\n  height: 7px;\n  background: #00d42e;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  bottom: 6px;\n  margin-right: 4px;\n}\n.current p {\n  display: inline-block;\n  margin: 0;\n  font-size: 13px;\n  color: #555555;\n}\n.lessmargin p {\n  display: inline-block;\n  margin: 0;\n  font-size: 13px;\n  color: #555555;\n}\n.lessmargin {\n  margin-top: 8px;\n  margin-bottom: 3px;\n}\nimg {\n  border-radius: 0;\n}\n.imglogout {\n  width: 26px;\n  margin-left: 10px;\n  margin-right: 19px;\n}\n.list_logout {\n  background: #f0f3fb;\n}\n.list_logout ion-item {\n  --background: #f0f3fb;\n}\n.list_logout ion-item:last-child {\n  --border-style: 0;\n}\n.list_switch {\n  padding-bottom: 0;\n}\n.list_switch ion-item:last-child {\n  --border-style: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEJhZ29cXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiNFxcdGFiNC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWdCLDRCQUFBO0FDRWhCO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxVQUFBO0FDa0JKO0FEaEJBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNtQko7QURqQkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ29CSjtBRGxCQTtFQUNJLG1CQUFBO0FDcUJKO0FEbkJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3NCSjtBRHBCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN1Qko7QURyQkE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3dCSjtBRHRCQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeUJKO0FEdkJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDMEJKO0FEeEJBO0VBQ0ksZ0JBQUE7QUMyQko7QUR6QkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzRCSjtBRDFCQTtFQUNJLG1CQUFBO0FDNkJKO0FEM0JBO0VBQ0kscUJBQUE7QUM4Qko7QUQ1QkE7RUFFSSxpQkFBQTtBQzhCSjtBRDVCQTtFQUNJLGlCQUFBO0FDK0JKO0FEN0JBO0VBQ0ksaUJBQUE7QUNnQ0oiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbnAsIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLnRpdGxlX2hlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vcGFkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGNvbG9yOiAjNWY1ZjVmO1xyXG59XHJcbmlvbi1sYWJlbCBoMiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG59XHJcbi5wci0yMCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzE4N2FlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuLmNpcmNsZV9hY3RpdmUge1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwZDQyZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuLmN1cnJlbnQgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG4ubGVzc21hcmdpbiBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcbi5sZXNzbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uaW1nbG9nb3V0IHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbn1cclxuLmxpc3RfbG9nb3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYzZmI7XHJcbn1cclxuLmxpc3RfbG9nb3V0IGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YwZjNmYjtcclxufVxyXG4ubGlzdF9sb2dvdXQgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBcclxuICAgIC0tYm9yZGVyLXN0eWxlOiAwO1xyXG59XHJcbi5saXN0X3N3aXRjaCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubGlzdF9zd2l0Y2ggaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogMDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxucCwgaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLnRpdGxlX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vcGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgY29sb3I6ICM1ZjVmNWY7XG59XG5cbmlvbi1sYWJlbCBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5wci0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogIzE4N2FlYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uY2lyY2xlX2FjdGl2ZSB7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjMDBkNDJlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5jdXJyZW50IHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLmxlc3NtYXJnaW4gcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuXG4ubGVzc21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uaW1nbG9nb3V0IHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE5cHg7XG59XG5cbi5saXN0X2xvZ291dCB7XG4gIGJhY2tncm91bmQ6ICNmMGYzZmI7XG59XG5cbi5saXN0X2xvZ291dCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2YwZjNmYjtcbn1cblxuLmxpc3RfbG9nb3V0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci1zdHlsZTogMDtcbn1cblxuLmxpc3Rfc3dpdGNoIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5saXN0X3N3aXRjaCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItc3R5bGU6IDA7XG59Il19 */"

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
    logout() {
        console.log("x");
        localStorage.clear();
        this.router.navigateByUrl('');
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
                    localStorage.setItem("SIGLO", data['dataX']['sigloType']);
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
                    localStorage.setItem("SIGLO", data['dataX']['sigloType']);
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