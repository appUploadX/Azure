(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resident-details-list-resident-details-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/resident-details-list/resident-details-list.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resident-details-list/resident-details-list.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <!-- <ion-button class=\"btn_back\" routerLink=\"/tabs/tab1/unit-details\"></ion-button> \n        <img class=\"imgBack\" src=\"/assets/arrow_left_white.png\"> -->\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title class=\"header_title\">Resident Lists</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"card-background-page\">\n    <ion-list>\n        <ion-item (click)=\"openResidentDetailsIndividual()\">\n          <ion-avatar slot=\"start\">\n              <img src=\"/assets/person.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Hanah Salazar</h2>\n              <p class=\"text_gender\"><img class=\"img_gender\" src=\"/assets/gender_icon.png\"> Female</p>\n              <p class=\"text_address\"><img class=\"img_address\" src=\"/assets/address_icon.png\"> South Korea</p>\n            </ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"openResidentDetailsIndividual()\">\n            <ion-avatar slot=\"start\">\n              <img src=\"/assets/person.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Hanah Salazar</h2>\n              <p class=\"text_gender\"><img class=\"img_gender\" src=\"/assets/gender_icon.png\"> Female</p>\n              <p class=\"text_address\"><img class=\"img_address\" src=\"/assets/address_icon.png\"> South Korea</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item (click)=\"openResidentDetailsIndividual()\">\n              <ion-avatar slot=\"start\">\n                <img src=\"/assets/person.png\">\n              </ion-avatar>\n              <ion-label>\n                <h2>Hanah Salazar</h2>\n                <p class=\"text_gender\"><img class=\"img_gender\" src=\"/assets/gender_icon.png\"> Female</p>\n                <p class=\"text_address\"><img class=\"img_address\" src=\"/assets/address_icon.png\"> South Korea</p>\n              </ion-label>\n            </ion-item>\n\n            <ion-item (click)=\"openResidentDetailsIndividual()\">\n                <ion-avatar slot=\"start\">\n                  <img src=\"/assets/person.png\">\n                </ion-avatar>\n                <ion-label>\n                  <h2>Hanah Salazar</h2>\n                  <p class=\"text_gender\"><img class=\"img_gender\" src=\"/assets/gender_icon.png\"> Female</p>\n                  <p class=\"text_address\"><img class=\"img_address\" src=\"/assets/address_icon.png\"> South Korea</p>\n                </ion-label>\n              </ion-item>\n\n              <ion-item (click)=\"openResidentDetailsIndividual()\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"/assets/person.png\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>Hanah Salazar</h2>\n                    <p class=\"text_gender\"><img class=\"img_gender\" src=\"/assets/gender_icon.png\"> Female</p>\n                    <p class=\"text_address\"><img class=\"img_address\" src=\"/assets/address_icon.png\"> South Korea</p>\n                  </ion-label>\n                </ion-item>\n      </ion-list>\n</ion-content>\n\n\n\n  \n"

/***/ }),

/***/ "./src/app/resident-details-list/resident-details-list.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resident-details-list/resident-details-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: ResidentDetailsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentDetailsListPageModule", function() { return ResidentDetailsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resident_details_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resident-details-list.page */ "./src/app/resident-details-list/resident-details-list.page.ts");







var routes = [
    {
        path: '',
        component: _resident_details_list_page__WEBPACK_IMPORTED_MODULE_6__["ResidentDetailsListPage"]
    }
];
var ResidentDetailsListPageModule = /** @class */ (function () {
    function ResidentDetailsListPageModule() {
    }
    ResidentDetailsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resident_details_list_page__WEBPACK_IMPORTED_MODULE_6__["ResidentDetailsListPage"]]
        })
    ], ResidentDetailsListPageModule);
    return ResidentDetailsListPageModule;
}());



/***/ }),

/***/ "./src/app/resident-details-list/resident-details-list.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/resident-details-list/resident-details-list.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.btn_back {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  --background: transparent;\n  --box-shadow: none;\n  width: 30px;\n  height: 25px;\n  z-index: 1;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n}\n.imgBack {\n  width: 20px;\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  z-index: 0;\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page .img_gender {\n  width: 13px;\n}\n.card-background-page .img_address {\n  width: 10px;\n}\n.card-background-page .text_gender, .card-background-page .text_address {\n  font-size: 14px;\n}\n.card-background-page ion-avatar {\n  width: 55px;\n  height: 55px;\n}\n.card-background-page ion-avatar img {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVjaGVhZ3NpL0Rlc2t0b3AvYXp1cmUvc3JjL2FwcC9yZXNpZGVudC1kZXRhaWxzLWxpc3QvcmVzaWRlbnQtZGV0YWlscy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVzaWRlbnQtZGV0YWlscy1saXN0L3Jlc2lkZW50LWRldGFpbHMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQ2lCSjtBRGZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDa0JKO0FEaEJBO0VBQ0ksa0JBQUE7QUNtQko7QURqQkE7RUFDSSxrQkFBQTtBQ29CSjtBRGhCSTtFQUNJLFdBQUE7QUNtQlI7QURqQkk7RUFDSSxXQUFBO0FDbUJSO0FEakJJO0VBQ0ksZUFBQTtBQ21CUjtBRGpCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDbUJSO0FEakJJO0VBQ0ksa0JBQUE7QUNtQlIiLCJmaWxlIjoic3JjL2FwcC9yZXNpZGVudC1kZXRhaWxzLWxpc3QvcmVzaWRlbnQtZGV0YWlscy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cblxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxuXG4uYnRuX2JhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xufVxuLmltZ0JhY2sge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgbGVmdDogMTZweDtcbiAgICB6LWluZGV4OiAwO1xufVxuLmhlYWRlcl90aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gICAgLmltZ19nZW5kZXIge1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICB9XG4gICAgLmltZ19hZGRyZXNzIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgfVxuICAgIC50ZXh0X2dlbmRlciwgLnRleHRfYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5idG5fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgei1pbmRleDogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbn1cblxuLmltZ0JhY2sge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfZ2VuZGVyIHtcbiAgd2lkdGg6IDEzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ19hZGRyZXNzIHtcbiAgd2lkdGg6IDEwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfZ2VuZGVyLCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resident-details-list/resident-details-list.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resident-details-list/resident-details-list.page.ts ***!
  \*********************************************************************/
/*! exports provided: ResidentDetailsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentDetailsListPage", function() { return ResidentDetailsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ResidentDetailsListPage = /** @class */ (function () {
    function ResidentDetailsListPage(router) {
        this.router = router;
    }
    ResidentDetailsListPage.prototype.openResidentDetailsIndividual = function () {
        this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list/resident-details-individual');
    };
    ResidentDetailsListPage.prototype.ngOnInit = function () {
    };
    ResidentDetailsListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ResidentDetailsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resident-details-list',
            template: __webpack_require__(/*! raw-loader!./resident-details-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/resident-details-list/resident-details-list.page.html"),
            styles: [__webpack_require__(/*! ./resident-details-list.page.scss */ "./src/app/resident-details-list/resident-details-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResidentDetailsListPage);
    return ResidentDetailsListPage;
}());



/***/ })

}]);
//# sourceMappingURL=resident-details-list-resident-details-list-module-es5.js.map