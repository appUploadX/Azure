(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-book-now-amenity-book-now-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-book-now/amenity-book-now.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-book-now/amenity-book-now.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons size=\"small\" slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"header_title\">Booking</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n    <div class=\"v_personal\">\r\n        <div class=\"v_details\">\r\n            <ion-grid class=\"nopad\">\r\n                <ion-row>\r\n                    <ion-col size=\"12\">\r\n                        <ion-item>\r\n                            <ion-label class=\"text_label\">Booking Date:</ion-label>\r\n                            <ion-datetime class=\"text_input checked\" displayFormat=\"YYYY-MM-DD\" min=\"{{minDate}}\"\r\n                                placeholder=\"Select Date\" max=\"{{maxDate}}\" [(ngModel)]=\"bookingdate\"\r\n                                (ionChange)=\"read($event)\"></ion-datetime>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\">\r\n                        <ion-item>\r\n                            <ion-label class=\"text_label\">Time Slot</ion-label>\r\n                            <ion-select placeholder=\"Select One\" class=\"text_input\" (ionChange)=\"checkVisitors($event)\"\r\n                                [(ngModel)]=\"timeSlots\" disabled=\"{{isReadonly}}\">\r\n                                <ion-select-option *ngFor='let res of start; let i = index' value=\"{{start[i]}}\"\r\n                                    class=\"requiredsel\">{{start[i]}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n\r\n\r\n            <div class=\"v_personal hide\" [hidden]=ishidden>\r\n                <div class=\"v_title_detail\">Details</div>\r\n                <div class=\"v_details\">\r\n                    <ion-grid class=\"nopad\">\r\n                        <ion-row class=\"v-row\">\r\n                            <ion-col size=\"6\">\r\n                                <p>Unit Number:</p>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\">\r\n                                <p class=\"text-right\">{{TUN}}</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"v-row\">\r\n                            <ion-col size=\"6\">\r\n                                <p>Free User: </p>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\">\r\n                                <p class=\"text-right\" *ngIf=\"amenDetails != null\">{{amenDetails[0].FreeUsers}}</p>\r\n                                <p class=\"text-right\" *ngIf=\"amenDetails == null\">0</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"v_personal hide\" [hidden]=ishidden>\r\n                <div class=\"v_title_detail\"> </div>\r\n                <div class=\"v_details\">\r\n                    <ion-grid class=\"nopad\">\r\n                        <ion-row class=\"v-row\">\r\n                            <ion-col size=\"8\">\r\n                                <p class=\"font_semibold\">Name</p>\r\n                            </ion-col>\r\n                            <ion-col size=\"4\">\r\n                                <p class=\"font_semibold tablecheck\">Check</p>\r\n                            </ion-col>\r\n                            <!-- <ion-col size=\"4\">\r\n                                <p class=\"font_semibold\">Amount (₱)</p>\r\n                            </ion-col> -->\r\n                        </ion-row>\r\n\r\n\r\n                        <!-- <ion-row class=\"v-row\" *ngIf=\"countVUnit != 0\"> -->\r\n                        <ion-row class=\"v-row\" *ngFor=\"let res of visitUnit; let i = index\">\r\n                            <ion-col size=\"8\">\r\n                                <p>{{res[i].vuNamePrimaryVisitor}}</p>\r\n                            </ion-col>\r\n                            <ion-col size=\"4\">\r\n                                <ion-item class=\"divcheck\">\r\n                                    <ion-checkbox class=\"checkbook\" id=\"primary {{res[i].vuCode}}\"\r\n                                        value=\"{{res[i].vuNamePrimaryVisitor}}\" disabled=\"{{ckDisable}}\"\r\n                                        (ionChange)=\"addCheckbox($event, amenDetails[0].FreeUsers)\" color=\"primary\"\r\n                                        slot=\"start\"></ion-checkbox>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <!-- <ion-col size=\"4\">\r\n                                <p>{{amenDetails[0].RateArr[0]}}</p>\r\n                            </ion-col> -->\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"v-row\" *ngFor=\"let res of visitAdditional; let x = index\">\r\n                            <ion-col size=\"8\" *ngIf=\"res[x].avName != ''\">\r\n                                <p>{{res[x].avName}}</p>\r\n                            </ion-col>\r\n                            <ion-col size=\"4\" *ngIf=\"res[x].avName != ''\">\r\n                                <ion-item class=\"divcheck\">\r\n                                    <ion-checkbox class=\"checkbook\" value=\"{{res[x].avName}}\"\r\n                                        id=\"secondary {{res[x].avCode}}\" disabled=\"{{ckDisable}}\"\r\n                                        (ionChange)=\"addCheckbox($event, amenDetails[0].FreeUsers)\" color=\"primary\"\r\n                                        slot=\"start\">\r\n                                    </ion-checkbox>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <!-- <ion-col size=\"4\">\r\n                                    <p>{{amenDetails[0].RateArr[x+1]}}</p>\r\n                                </ion-col> -->\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </div>\r\n            </div>\r\n\r\n            <ion-grid class=\"hide\">\r\n                <ion-row>\r\n                    <ion-col size=\"6\" class=\"marg0auto\">\r\n                        <ion-button color=\"primary\" expand=\"block\" class=\"text_label\"\r\n                            (click)=\"insertBook(amenCode, amenName, propCode, uType, unitCode, rateperbooking)\">Book\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </div>\r\n</ion-content>"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n  color: #323232;\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .divcheck {\n  --border-color: white;\n  --min-height: 20px;\n}\n.card-background-page .tablecheck {\n  text-align: center;\n}\n.card-background-page .checkbook {\n  margin: 0;\n  margin-left: 13px;\n}\n.card-background-page .v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .text_label {\n  font-size: 14px;\n}\n.card-background-page .text_input {\n  font-size: 14px;\n}\n.card-background-page .marg0auto {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0eS1ib29rLW5vdy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXDIwMjBcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcYW1lbml0eS1ib29rLW5vd1xcYW1lbml0eS1ib29rLW5vdy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FtZW5pdHktYm9vay1ub3cvYW1lbml0eS1ib29rLW5vdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENJOztFQUNhLDRCQUFBO0VBQThCLGNBQUE7QUNHL0M7QURESTtFQUFXLDRCQUFBO0FDS2Y7QURKSTtFQUFhLDhCQUFBO0FDUWpCO0FEUEk7RUFBZ0IsaUNBQUE7QUNXcEI7QURWSTtFQUFZLDZCQUFBO0FDY2hCO0FEYkk7RUFBaUIsa0NBQUE7QUNpQnJCO0FEaEJJO0VBQ0Esa0JBQUE7QUNtQko7QURqQkk7RUFDQSxrQkFBQTtBQ29CSjtBRGpCSTtFQUNBLHFCQUFBO0FDb0JKO0FEbEJJO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDb0JKO0FEbEJJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGtCQUFBO0FDb0JSO0FEbEJJO0VBQVksU0FBQTtFQUFXLGlCQUFBO0FDc0IzQjtBRHJCSTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUN1Qko7QURyQkk7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDdUJKO0FEckJJO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDdUJKO0FEckJJO0VBQ0EsZUFBQTtBQ3VCSjtBRHJCSTtFQUNBLGVBQUE7QUN1Qko7QURyQkk7RUFDQSxjQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvYW1lbml0eS1ib29rLW5vdy9hbWVuaXR5LWJvb2stbm93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG4gICAgcCxcclxuICAgIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnOyBjb2xvcjogIzMyMzIzMjt9XHJcbiAgICBcclxuICAgIC5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbiAgICAuZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuICAgIC5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4gICAgLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4gICAgLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuICAgIC5oZWFkZXJfdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2QzZDVkZTtcclxuICAgIFxyXG4gICAgLnZfcGVyc29uYWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5kaXZjaGVjayB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC50YWJsZWNoZWNrIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib29rIHttYXJnaW46IDA7IG1hcmdpbi1sZWZ0OiAxM3B4O31cclxuICAgIC52X3RpdGxlX2RldGFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xyXG4gICAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcclxuICAgIH1cclxuICAgIC52LXJvdyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgIHBhZGRpbmc6IDZweCA3cHg7XHJcbiAgICB9XHJcbiAgICAudl9kZXRhaWxzIHAge1xyXG4gICAgbWFyZ2luOiAwOztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzkzOTM5O1xyXG4gICAgfVxyXG4gICAgLnRleHRfbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRfaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm1hcmcwYXV0byB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIH0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbnAsXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgY29sb3I6ICMzMjMyMzI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfcGVyc29uYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5kaXZjaGVjayB7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1taW4taGVpZ2h0OiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50YWJsZWNoZWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jaGVja2Jvb2sge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X3RpdGxlX2RldGFpbCB7XG4gIGJhY2tncm91bmQ6ICNlY2VlZjc7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBjb2xvcjogIzI5MjkyOTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgcGFkZGluZzogNnB4IDdweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl9kZXRhaWxzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzOTM5Mzk7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm1hcmcwYXV0byB7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

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
        this.countCK = 0;
        this.countVUnit = 0;
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
        this.propertyCode = localStorage.getItem("PROPERTY_CODE");
        this.start = history.state.start;
        console.log(history.state.start);
        // this.end = history.state.end.split(",");
        var dateX = new Date().toISOString().split("T");
        var newDate = new Date(dateX[0]);
        var addDate = new Date(newDate);
        addDate.setDate(newDate.getDate() + 2);
        var addTwo = addDate.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).split(", ");
        var expTom = addTwo[0].split("/");
        if (expTom[0].length == 1) {
            var m = "0" + expTom[0];
        }
        else {
            var m = expTom[0];
        }
        if (expTom[1].length == 1) {
            var d = "0" + expTom[1];
        }
        else {
            var d = expTom[1];
        }
        this.minDate = expTom[2] + "-" + m + "-" + d;
        console.log(expTom[2] + "-" + m + "-" + d);
        this.isReadonly = true;
        this.ckDisable = false;
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
        var time = val.detail.value;
        var date = this.bookingdate.split("T");
        return new Promise(function (resolve) {
            var body = {
                action: 'checkVisitors',
                date: date[0],
                slot: time,
                uCode: _this.unit_code,
                newCode: _this.newCode,
                propertyCode: _this.propertyCode,
                amenCode: _this.amenCode,
                amenName: _this.amenName,
                bedroom: _this.bedroom,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.visitUnit = [];
                _this.visitAdditional = [];
                _this.amenDetails = [];
                if (data['status'] == "Success") {
                    _this.refNo = data['refNo'];
                    _this.countVUnit = data['countVUnit'];
                    for (var index = 0; index < data['visitUnit'].length; index++) {
                        _this.visitUnit.push(data['visitUnit']);
                    }
                    for (var index = 0; index < data['visitAdditional'].length; index++) {
                        _this.visitAdditional.push(data['visitAdditional']);
                    }
                    // for (let i = 0; i < data['amenDetails'].length; i++) {
                    _this.amenDetails.push(data['amenDetails']);
                    _this.Free = data['amenDetails']['FreeUsers'];
                    if (data['amenDetails']['FreeUsers'] == 0) {
                        _this.ckDisable = true;
                    }
                    else {
                        _this.ckDisable = false;
                    }
                    // }
                }
                console.log(_this.amenDetails);
                console.log(data);
                resolve(true);
            });
        });
    };
    AmenityBookNowPage.prototype.read = function (e) {
        this.isReadonly = false;
        var sel = jquery__WEBPACK_IMPORTED_MODULE_5__(".requiredsel");
        this.timeSlots = null;
        this.ishidden = true;
    };
    AmenityBookNowPage.prototype.addCheckbox = function (e, free) {
        var thisAttr = [];
        if (e.detail.checked == true) {
            this.countCK += 1;
        }
        else {
            this.countCK -= 1;
        }
        console.log(e.detail.value, e.detail.checked, this.countCK, free);
        if (this.countCK >= free) {
            console.log("hops!");
            jquery__WEBPACK_IMPORTED_MODULE_5__(".checkbook").each(function () {
                thisAttr.push(jquery__WEBPACK_IMPORTED_MODULE_5__(this));
            });
            for (var i = 0; i < thisAttr.length; i++) {
                console.log(thisAttr[i][0].disabled, thisAttr[i][0].checked, thisAttr[i]);
                if (thisAttr[i][0].checked == false) {
                    thisAttr[i][0].disabled = true;
                }
            }
        }
        else {
            console.log("sige");
            jquery__WEBPACK_IMPORTED_MODULE_5__(".checkbook").each(function () {
                thisAttr.push(jquery__WEBPACK_IMPORTED_MODULE_5__(this));
            });
            for (var i = 0; i < thisAttr.length; i++) {
                console.log(thisAttr[i]);
                console.log(thisAttr[i][0].disabled, thisAttr[i][0].checked);
                // if (thisAttr[i][0].checked == true) {
                thisAttr[i][0].disabled = false;
                // }
            }
        }
    };
    AmenityBookNowPage.prototype.insertBook = function (amenCode, amenName, propCode, uType, unitCode, rateperbooking) {
        var _this = this;
        var count = 0;
        var countSel = 0;
        if (jquery__WEBPACK_IMPORTED_MODULE_5__(".checked").val() == "") {
            count++;
        }
        var thisAttr = [];
        var visitor = [];
        var category = [];
        var code = [];
        jquery__WEBPACK_IMPORTED_MODULE_5__(".checkbook").each(function () {
            thisAttr.push(jquery__WEBPACK_IMPORTED_MODULE_5__(this));
        });
        for (var i = 0; i < thisAttr.length; i++) {
            // console.log(thisAttr[i][0].disabled, thisAttr[i][0].checked, thisAttr[i])
            if (thisAttr[i][0].checked == true) {
                visitor.push(thisAttr[i][0].value);
                category.push(thisAttr[i][0].id.split(" ")[0]);
                code.push(thisAttr[i][0].id.split(" ")[1]);
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__(".requiredsel").each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).is(":selected")) {
                countSel++;
            }
        });
        // console.log(visitor);
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
                    Visitors: visitor,
                    Category: category,
                    Code: code,
                    refNo: _this.refNo,
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