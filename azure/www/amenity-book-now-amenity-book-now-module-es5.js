(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-book-now-amenity-book-now-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-book-now/amenity-book-now.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-book-now/amenity-book-now.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons size=\"small\" slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header_title\">Booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-label class=\"text_label\">Booking Date:</ion-label>\r\n              <ion-datetime class=\"text_input checked\" displayFormat=\"YYYY-MM-DD\" min=\"2019-01-01\"\r\n                placeholder=\"Select Date\" min=\"{{minDate}}\" max=\"{{maxDate}}\" (ionChange)=\"checkVisitors($event)\" [(ngModel)]=\"bookingdate\" ></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-label class=\"text_label\">Time Slot</ion-label>\r\n              <ion-select placeholder=\"Select One\" class=\"text_input\" (ionChange)=\"checkFree($event)\" [(ngModel)]=\"timeSlots\">\r\n                <ion-select-option value=\"7:00 AM to 12:00 PM\" class=\"requiredsel\">7:00 AM to 12:00 PM</ion-select-option>\r\n                <ion-select-option value=\"2:00 PM to 7:00 PM\" class=\"requiredsel\">2:00 PM to 7:00 PM</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      <!-- <div class=\"v_personal\" [hidden]=ishidden>\r\n        <div class=\"v_title_detail\">Details</div>\r\n        <div class=\"v_details\">\r\n          <ion-grid class=\"nopad\">\r\n            <ion-row class=\"v-row\">\r\n              <ion-col size=\"6\">\r\n                <p>Unit Number:</p>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <p class=\"text-right\">{{TUN}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row class=\"v-row\">\r\n              <ion-col size=\"6\">\r\n                <p>Free User: </p>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <p class=\"text-right\">{{amenDetails[0].FreeUsers}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"v_personal\" [hidden]=ishidden>\r\n        <div class=\"v_title_detail\"> </div>\r\n        <div class=\"v_details\">\r\n          <ion-grid class=\"nopad\">\r\n            <ion-row class=\"v-row\">\r\n              <ion-col size=\"4\">\r\n                <p class=\"font_semibold\">Name</p>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <p class=\"font_semibold tablecheck\">Check</p>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <p class=\"font_semibold\">Amount (₱)</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"v-row\" *ngFor=\"let res of visitUnit\">\r\n              <ion-col size=\"4\">\r\n                <p>{{res.vuNamePrimaryVisitor}}</p>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <ion-item class=\"divcheck\">\r\n                  <ion-checkbox class=\"checkbook\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <p>{{amenDetails[0].RateArr[0]}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"v-row\" *ngFor=\"let res of visitAdditional; let x = index\">\r\n              <ion-col size=\"4\">\r\n                <p>{{res[x].avName}}</p>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <ion-item class=\"divcheck\">\r\n                  <ion-checkbox class=\"checkbook\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <p>{{amenDetails[0].RateArr[x+1]}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </div> -->\r\n\r\n      <ion-grid >\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"marg0auto\">\r\n            <ion-button color=\"primary\" expand=\"block\" class=\"text_label\"\r\n              (click)=\"insertBook(amenCode, amenName, propCode, uType, unitCode, rateperbooking)\">Book</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n  color: #323232;\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .divcheck {\n  --border-color: white;\n  --min-height: 20px;\n}\n.card-background-page .tablecheck {\n  text-align: center;\n}\n.card-background-page .checkbook {\n  margin: 0;\n  margin-left: 13px;\n}\n.card-background-page .v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .text_label {\n  font-size: 14px;\n}\n.card-background-page .text_input {\n  font-size: 14px;\n}\n.card-background-page .marg0auto {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0eS1ib29rLW5vdy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlQWNjZXNzXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXGFtZW5pdHktYm9vay1ub3dcXGFtZW5pdHktYm9vay1ub3cucGFnZS5zY3NzIiwic3JjL2FwcC9hbWVuaXR5LWJvb2stbm93L2FtZW5pdHktYm9vay1ub3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDSTs7RUFDYSw0QkFBQTtFQUE4QixjQUFBO0FDRy9DO0FEREk7RUFBVyw0QkFBQTtBQ0tmO0FESkk7RUFBYSw4QkFBQTtBQ1FqQjtBRFBJO0VBQWdCLGlDQUFBO0FDV3BCO0FEVkk7RUFBWSw2QkFBQTtBQ2NoQjtBRGJJO0VBQWlCLGtDQUFBO0FDaUJyQjtBRGhCSTtFQUNBLGtCQUFBO0FDbUJKO0FEakJJO0VBQ0Esa0JBQUE7QUNvQko7QURqQkk7RUFDQSxxQkFBQTtBQ29CSjtBRGxCSTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ29CSjtBRGxCSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNvQlI7QURsQkk7RUFDSSxrQkFBQTtBQ29CUjtBRGxCSTtFQUFZLFNBQUE7RUFBVyxpQkFBQTtBQ3NCM0I7QURyQkk7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FDdUJKO0FEckJJO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ3VCSjtBRHJCSTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3VCSjtBRHJCSTtFQUNBLGVBQUE7QUN1Qko7QURyQkk7RUFDQSxlQUFBO0FDdUJKO0FEckJJO0VBQ0EsY0FBQTtBQ3VCSiIsImZpbGUiOiJzcmMvYXBwL2FtZW5pdHktYm9vay1ub3cvYW1lbml0eS1ib29rLW5vdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxuICAgIHAsXHJcbiAgICBpb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzsgY29sb3I6ICMzMjMyMzI7fVxyXG4gICAgXHJcbiAgICAuZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4gICAgLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbiAgICAuZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuICAgIC5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuICAgIC5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcbiAgICAuaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XHJcbiAgICBcclxuICAgIC52X3BlcnNvbmFsIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7IFxyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2Y2hlY2sge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGVjaGVjayB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm9vayB7bWFyZ2luOiAwOyBtYXJnaW4tbGVmdDogMTNweDt9XHJcbiAgICAudl90aXRsZV9kZXRhaWwge1xyXG4gICAgYmFja2dyb3VuZDogI2VjZWVmNztcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XHJcbiAgICB9XHJcbiAgICAudi1yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgfVxyXG4gICAgLnZfZGV0YWlscyBwIHtcclxuICAgIG1hcmdpbjogMDs7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgIH1cclxuICAgIC50ZXh0X2xhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC50ZXh0X2lucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tYXJnMGF1dG8ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICB9IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X3BlcnNvbmFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZGl2Y2hlY2sge1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tbWluLWhlaWdodDogMjBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGFibGVjaGVjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2hlY2tib29rIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl90aXRsZV9kZXRhaWwge1xuICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgY29sb3I6ICMyOTI5Mjk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDZweCA3cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0X2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0X2lucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5tYXJnMGF1dG8ge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var AmenityBookNowPage = /** @class */ (function () {
    function AmenityBookNowPage(router, postPvd, toastController) {
        this.router = router;
        this.postPvd = postPvd;
        this.toastController = toastController;
        this.maxDate = (new Date().getFullYear() + 1) + "-12-31";
    }
    AmenityBookNowPage.prototype.ngOnInit = function () {
        this.amenCode = history.state.amenCode;
        this.amenName = history.state.amenName;
        this.propCode = history.state.propCode;
        this.uType = history.state.uType;
        this.unitCode = history.state.unitCode;
        this.rateperbooking = history.state.rateperbooking;
        this.TUN = localStorage.getItem("TUN");
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.bedroom = localStorage.getItem("BEDROOM");
        this.ishidden = true;
        this.ishiddenbtn = true;
        this.Name = localStorage.getItem("FULLNAME");
        var dateX = new Date().toISOString().split("T");
        this.minDate = dateX[0];
        console.log(history.state);
        console.log(localStorage);
        console.log(dateX[0]);
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
    AmenityBookNowPage.prototype.checkVisitors = function (val) {
        var _this = this;
        this.ishidden = false;
        console.log(val.detail.value);
        var date = val.detail.value.split("T");
        return new Promise(function (resolve) {
            var body = {
                action: 'checkVisitors',
                date: date[0],
                uCode: _this.unit_code,
                newCode: _this.newCode,
                amenCode: _this.amenCode,
                amenName: _this.amenName,
                bedroom: _this.bedroom,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.visitUnit = [];
                _this.visitAdditional = [];
                _this.amenDetails = [];
                if (data['status'] == "Success") {
                    _this.visitUnit.push(data['visitUnit'][0]);
                    for (var index = 0; index < data['visitAdditional'].length; index++) {
                        _this.visitAdditional.push(data['visitAdditional']);
                    }
                    // for (let i = 0; i < data['amenDetails'].length; i++) {
                    _this.amenDetails.push(data['amenDetails']);
                    _this.Free = data['amenDetails']['FreeUsers'];
                    // }
                }
                console.log(_this.amenDetails);
                console.log(data);
                resolve(true);
            });
        });
    };
    AmenityBookNowPage.prototype.checkFree = function (val) {
        // this.ishidden = false;
        console.log(val.detail.value, jquery__WEBPACK_IMPORTED_MODULE_5__(".checked").val());
        // var date = val.detail.value.split("T");
        // return new Promise(resolve => {
        //   let body = {
        //     action: 'checkVisitors',
        //     date: date[0],
        //     uCode: this.unit_code,
        //     newCode: this.newCode,
        //     amenCode: this.amenCode,
        //     amenName: this.amenName,
        //     bedroom: this.bedroom,
        //   };
        //   this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
        //     this.visitUnit = [];
        //     this.visitAdditional = [];
        //     this.amenDetails = [];
        //     if (data['status'] == "Success") {
        //       this.visitUnit.push(data['visitUnit'][0]);
        //       for (let index = 0; index < data['visitAdditional'].length; index++) {
        //         this.visitAdditional.push(data['visitAdditional']);
        //       }
        //       // for (let i = 0; i < data['amenDetails'].length; i++) {
        //         this.amenDetails.push(data['amenDetails']);
        //       // }
        //     }
        //     console.log(this.amenDetails);
        //     console.log(data);
        //     resolve(true);
        //   });
        // });
    };
    AmenityBookNowPage.prototype.insertBook = function (amenCode, amenName, propCode, uType, unitCode, rateperbooking) {
        var _this = this;
        var count = 0;
        var countSel = 0;
        if (jquery__WEBPACK_IMPORTED_MODULE_5__(".checked").val() == "") {
            count++;
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__(".requiredsel").each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).is(":selected")) {
                countSel++;
            }
        });
        if (count == 0 && countSel != 0) {
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
                    Free: _this.Free,
                    Name: _this.Name,
                };
                _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                    if (data['status'] == "Success") {
                        console.log("okay");
                        _this.openToast("<center>Data succesfully saved!</center>");
                        setTimeout(function () { _this.router.navigateByUrl('tabs/tab1/amenities-details'); }, 2000);
                    }
                    else {
                        _this.openToast("<center>All free slots are used!</center>");
                    }
                });
            });
        }
        else {
            this.openToast("<center>All fields are required!</center>");
        }
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