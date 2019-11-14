(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-book-now-amenity-book-now-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-book-now/amenity-book-now.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-book-now/amenity-book-now.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons size=\"small\" slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"header_title\">Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n    \n<ion-content class=\"card-background-page\">\n  <div class=\"v_personal\">\n    <div class=\"v_details\">\n      <ion-grid class=\"nopad\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label class=\"text_label\">Booking Date:</ion-label>\n              <ion-datetime class=\"text_input\" value=\"2019-02-19\" placeholder=\"Select Date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label class=\"text_label\">Time Slot</ion-label>\n              <ion-select placeholder=\"Select One\" class=\"text_input\">\n                <ion-select-option value=\"f\">7:00 AM - 12:00 PM</ion-select-option>\n                <ion-select-option value=\"m\">2:00 PM - 7:00 PM</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" class=\"marg0auto\">\n              <ion-button color=\"primary\" expand=\"block\" class=\"text_label\">Book</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n  color: #323232;\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .text_label {\n  font-size: 14px;\n}\n.card-background-page .text_input {\n  font-size: 14px;\n}\n.card-background-page .marg0auto {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVjaGVhZ3NpL0Rlc2t0b3AvYXp1cmUvc3JjL2FwcC9hbWVuaXR5LWJvb2stbm93L2FtZW5pdHktYm9vay1ub3cucGFnZS5zY3NzIiwic3JjL2FwcC9hbWVuaXR5LWJvb2stbm93L2FtZW5pdHktYm9vay1ub3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTs7RUFDYSw0QkFBQTtFQUE4QixjQUFBO0FDRzNDO0FEREE7RUFBVyw0QkFBQTtBQ0tYO0FESkE7RUFBYSw4QkFBQTtBQ1FiO0FEUEE7RUFBZ0IsaUNBQUE7QUNXaEI7QURWQTtFQUFZLDZCQUFBO0FDY1o7QURiQTtFQUFpQixrQ0FBQTtBQ2lCakI7QURoQkE7RUFDSSxrQkFBQTtBQ21CSjtBRGpCQTtFQUNJLGtCQUFBO0FDb0JKO0FEakJBO0VBQ0kscUJBQUE7QUNvQko7QURsQkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNvQlI7QURsQkk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDb0JSO0FEbEJJO0VBQ0ksZUFBQTtBQ29CUjtBRGxCSTtFQUNJLGVBQUE7QUNvQlI7QURsQkk7RUFDSSxjQUFBO0FDb0JSIiwiZmlsZSI6InNyYy9hcHAvYW1lbml0eS1ib29rLW5vdy9hbWVuaXR5LWJvb2stbm93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbnAsXG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzsgY29sb3I6ICMzMjMyMzI7fVxuXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XG4uaGVhZGVyX3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XG5cbiAgICAudl9wZXJzb25hbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAudi1yb3cge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICB9XG4gICAgLnZfZGV0YWlscyBwIHtcbiAgICAgICAgbWFyZ2luOiAwOztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzM5MzkzOTtcbiAgICB9XG4gICAgLnRleHRfbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC50ZXh0X2lucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAubWFyZzBhdXRvIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxucCxcbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBjb2xvcjogIzMyMzIzMjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDVkZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl9wZXJzb25hbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDZweCA3cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0X2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0X2lucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5tYXJnMGF1dG8ge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

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


var AmenityBookNowPage = /** @class */ (function () {
    function AmenityBookNowPage() {
    }
    AmenityBookNowPage.prototype.ngOnInit = function () {
    };
    AmenityBookNowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenity-book-now',
            template: __webpack_require__(/*! raw-loader!./amenity-book-now.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenity-book-now/amenity-book-now.page.html"),
            styles: [__webpack_require__(/*! ./amenity-book-now.page.scss */ "./src/app/amenity-book-now/amenity-book-now.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AmenityBookNowPage);
    return AmenityBookNowPage;
}());



/***/ })

}]);
//# sourceMappingURL=amenity-book-now-amenity-book-now-module-es5.js.map