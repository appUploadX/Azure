(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-book-now-amenity-book-now-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-book-now/amenity-book-now.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-book-now/amenity-book-now.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons size=\"small\" slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"header_title\">Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n    \n<ion-content class=\"card-background-page\">\n  <div class=\"v_personal\">\n    <div class=\"v_details\">\n      <ion-grid class=\"nopad\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label class=\"text_label\">Booking Date:</ion-label>\n              <ion-datetime class=\"text_input\" displayFormat=\"YYYY-MM-DD\" min=\"2019-01-01\" placeholder=\"Select Date\" [(ngModel)]=\"bookingdate\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label class=\"text_label\">Time Slot</ion-label>\n              <ion-select placeholder=\"Select One\" class=\"text_input\" [(ngModel)]=\"timeSlots\" >\n                <ion-select-option value=\"7:00 AM - 12:00 PM\">7:00 AM - 12:00 PM</ion-select-option>\n                <ion-select-option value=\"2:00 PM - 7:00 PM\">2:00 PM - 7:00 PM</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" class=\"marg0auto\">\n              <ion-button color=\"primary\" expand=\"block\" class=\"text_label\" (click)=\"insertBook(amenCode, amenName, propCode, uType, unitCode, rateperbooking)\">Book</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/amenity-book-now/amenity-book-now.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/amenity-book-now/amenity-book-now.module.ts ***!
  \*************************************************************/
/*! exports provided: AmenityBookNowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityBookNowPageModule", function() { return AmenityBookNowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _amenity_book_now_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amenity-book-now.page */ "./src/app/amenity-book-now/amenity-book-now.page.ts");







var routes = [
    {
        path: '',
        component: _amenity_book_now_page__WEBPACK_IMPORTED_MODULE_6__["AmenityBookNowPage"]
    }
];
var AmenityBookNowPageModule = /** @class */ (function () {
    function AmenityBookNowPageModule() {
    }
    AmenityBookNowPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_amenity_book_now_page__WEBPACK_IMPORTED_MODULE_6__["AmenityBookNowPage"]]
        })
    ], AmenityBookNowPageModule);
    return AmenityBookNowPageModule;
}());



/***/ }),

/***/ "./src/app/amenity-book-now/amenity-book-now.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/amenity-book-now/amenity-book-now.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n  color: #323232;\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .text_label {\n  font-size: 14px;\n}\n.card-background-page .text_input {\n  font-size: 14px;\n}\n.card-background-page .marg0auto {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0eS1ib29rLW5vdy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcYW1lbml0eS1ib29rLW5vd1xcYW1lbml0eS1ib29rLW5vdy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FtZW5pdHktYm9vay1ub3cvYW1lbml0eS1ib29rLW5vdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBOztFQUNhLDRCQUFBO0VBQThCLGNBQUE7QUNHM0M7QUREQTtFQUFXLDRCQUFBO0FDS1g7QURKQTtFQUFhLDhCQUFBO0FDUWI7QURQQTtFQUFnQixpQ0FBQTtBQ1doQjtBRFZBO0VBQVksNkJBQUE7QUNjWjtBRGJBO0VBQWlCLGtDQUFBO0FDaUJqQjtBRGhCQTtFQUNJLGtCQUFBO0FDbUJKO0FEakJBO0VBQ0ksa0JBQUE7QUNvQko7QURqQkE7RUFDSSxxQkFBQTtBQ29CSjtBRGxCSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNvQlI7QURsQkk7RUFDSSxlQUFBO0FDb0JSO0FEbEJJO0VBQ0ksZUFBQTtBQ29CUjtBRGxCSTtFQUNJLGNBQUE7QUNvQlIiLCJmaWxlIjoic3JjL2FwcC9hbWVuaXR5LWJvb2stbm93L2FtZW5pdHktYm9vay1ub3cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxucCxcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnOyBjb2xvcjogIzMyMzIzMjt9XG5cbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cbi5oZWFkZXJfdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIC0tYmFja2dyb3VuZDogI2QzZDVkZTtcblxuICAgIC52X3BlcnNvbmFsIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC52LXJvdyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICBwYWRkaW5nOiA2cHggN3B4O1xuICAgIH1cbiAgICAudl9kZXRhaWxzIHAge1xuICAgICAgICBtYXJnaW46IDA7O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMzkzOTM5O1xuICAgIH1cbiAgICAudGV4dF9sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnRleHRfaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5tYXJnMGF1dG8ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X3BlcnNvbmFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgcGFkZGluZzogNnB4IDdweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl9kZXRhaWxzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzOTM5Mzk7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm1hcmcwYXV0byB7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/amenity-book-now/amenity-book-now.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/amenity-book-now/amenity-book-now.page.ts ***!
  \***********************************************************/
/*! exports provided: AmenityBookNowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityBookNowPage", function() { return AmenityBookNowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AmenityBookNowPage = /** @class */ (function () {
    function AmenityBookNowPage(router, postPvd, toastController) {
        this.router = router;
        this.postPvd = postPvd;
        this.toastController = toastController;
    }
    AmenityBookNowPage.prototype.ngOnInit = function () {
        this.amenCode = history.state.amenCode;
        this.amenName = history.state.amenName;
        this.propCode = history.state.propCode;
        this.uType = history.state.uType;
        this.unitCode = history.state.unitCode;
        this.rateperbooking = history.state.rateperbooking;
        console.log(history.state);
    };
    AmenityBookNowPage.prototype.openToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AmenityBookNowPage.prototype.insertBook = function (amenCode, amenName, propCode, uType, unitCode, rateperbooking) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'addBooking',
                amenCode: amenCode,
                amenName: amenName,
                propCode: propCode,
                uType: uType,
                unitCode: unitCode,
                bookingdate: _this.bookingdate,
                timeSlots: _this.timeSlots,
                rateperbooking: rateperbooking,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['status'] == "Success") {
                    console.log("okay");
                    _this.openToast("Data succesfully saved!");
                    setTimeout(function () { _this.router.navigateByUrl('tabs/tab1/amenities-details'); }, 2000);
                }
            });
        });
    };
    AmenityBookNowPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    AmenityBookNowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenity-book-now',
            template: __webpack_require__(/*! raw-loader!./amenity-book-now.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenity-book-now/amenity-book-now.page.html"),
            styles: [__webpack_require__(/*! ./amenity-book-now.page.scss */ "./src/app/amenity-book-now/amenity-book-now.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AmenityBookNowPage);
    return AmenityBookNowPage;
}());



/***/ })

}]);
//# sourceMappingURL=amenity-book-now-amenity-book-now-module-es5.js.map