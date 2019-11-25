(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-details-visitors-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitors-details/visitors-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitors-details/visitors-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons size=\"small\" slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title class=\"header_title\">Visitors Requests</ion-title>\n    </ion-toolbar>\n    <ion-toolbar class=\"toolbar2\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"selectitemtoolbar\">\n              <ion-select class=\"selecttoolbar\" placeholder=\"View\">\n                <ion-select-option value=\"f\">Today</ion-select-option>\n                <ion-select-option value=\"m\">By Month</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item class=\"selectitemtoolbar\">\n                <ion-select class=\"selecttoolbar\" placeholder=\"Month\">\n                    <ion-select-option value=\"01\">January</ion-select-option>\n                    <ion-select-option value=\"02\">February</ion-select-option>\n                    <ion-select-option value=\"03\">March</ion-select-option>\n                    <ion-select-option value=\"04\">April</ion-select-option>\n                    <ion-select-option value=\"05\">May</ion-select-option>\n                    <ion-select-option value=\"06\">June</ion-select-option>\n                    <ion-select-option value=\"07\">July</ion-select-option>\n                    <ion-select-option value=\"08\">August</ion-select-option>\n                    <ion-select-option value=\"09\">September</ion-select-option>\n                    <ion-select-option value=\"10\">October</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">December</ion-select-option>\n                  </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content class=\"card-background-page\" >\n  <p class=\"identify_unit\">UNIT {{unit_no}}</p>\n  <!-- PLUS BUTTON TO ADD VISITOR REQUEST -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"openAddVisitorRequest()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list >\n    <!-- <ion-list-header>August</ion-list-header> -->\n    <ion-item *ngFor=\"let vData of visitData; let i = index\" (click)=\"OpenVisitorListDetails(vData[i].id)\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">{{vData[i].vuNamePrimaryVisitor}}</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">{{vData[i].vuArrivalDate}}</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 *ngIf=\"vData[i].vuApprovalStatus == 'Approved'\" class=\"v-status approved\">{{vData[i].vuApprovalStatus}}</h3>\n                <h3 *ngIf=\"vData[i].vuApprovalStatus == 'Declined' || vData[i].vuApprovalStatus == 'Cancelled'\" class=\"v-status v_cancelled\">{{vData[i].vuApprovalStatus}}</h3>\n                <h3 *ngIf=\"vData[i].vuApprovalStatus == 'Pending'\" class=\"v-status v_pending\">{{vData[i].vuApprovalStatus}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/visitors-details/visitors-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/visitors-details/visitors-details.module.ts ***!
  \*************************************************************/
/*! exports provided: VisitorsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsDetailsPageModule", function() { return VisitorsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitors_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors-details.page */ "./src/app/visitors-details/visitors-details.page.ts");







const routes = [
    {
        path: '',
        component: _visitors_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsDetailsPage"]
    }
];
let VisitorsDetailsPageModule = class VisitorsDetailsPageModule {
};
VisitorsDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_visitors_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsDetailsPage"]]
    })
], VisitorsDetailsPageModule);



/***/ }),

/***/ "./src/app/visitors-details/visitors-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/visitors-details/visitors-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.selectitemtoolbar {\n  height: 40px;\n  --background: #d6e0ed;\n}\n.selecttoolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 5px;\n  --padding-top: 0px;\n  max-width: 100%;\n  font-size: 14px;\n}\n.toolbar2 {\n  --background: #eff4fb;\n}\n.card-background-page .identify_unit {\n  position: absolute;\n  font-size: 14px;\n  top: 8px;\n  margin: 0;\n  right: 15px;\n  font-family: \"Assistant_bold\";\n  color: #777777;\n  z-index: 9;\n}\n.card-background-page .nopad {\n  padding: 0;\n}\n.card-background-page .v_name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2f2f2f;\n}\n.card-background-page .v-date {\n  text-align: right;\n  color: #595959;\n  font-size: 13px;\n  margin-right: 50px;\n}\n.card-background-page .v-status.approved {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #0967d3;\n}\n.card-background-page .v-status.v_cancelled {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ca0808;\n}\n.card-background-page .v-status.v_pending {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ffc31e;\n}\n.card-background-page .v-status.v_expired {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #711d1d;\n}\n.card-background-page .img_arrow {\n  width: 20px;\n  position: absolute;\n  top: 7.4px;\n  right: 0;\n}\n.card-background-page ion-list {\n  margin-bottom: 20px;\n}\n.card-background-page ion-list-header {\n  color: #5f5f5f;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvcnMtZGV0YWlscy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdmlzaXRvcnMtZGV0YWlsc1xcdmlzaXRvcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zpc2l0b3JzLWRldGFpbHMvdmlzaXRvcnMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURoQkE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNtQko7QURqQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDb0JKO0FEbEJBO0VBQ0kscUJBQUE7QUNxQko7QURoQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDbUJSO0FEakJJO0VBQVEsVUFBQTtBQ29CWjtBRG5CSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ3FCUjtBRGxCSTtFQUNJLG1CQUFBO0FDb0JSO0FEbEJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDb0JSIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRvcnMtZGV0YWlscy92aXNpdG9ycy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cblxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zZWxlY3RpdGVtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2Q2ZTBlZDtcbn1cbi5zZWxlY3R0b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udG9vbGJhcjIge1xuICAgIC0tYmFja2dyb3VuZDogI2VmZjRmYjtcbn1cblxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIC5pZGVudGlmeV91bml0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuICAgIC5ub3BhZCB7cGFkZGluZzogMDt9XG4gICAgLnZfbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMyZjJmMmY7XG4gICAgfVxuICAgIC52LWRhdGUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAudi1zdGF0dXMuYXBwcm92ZWQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgY29sb3I6ICMwOTY3ZDM7XG4gICAgfVxuICAgIC52LXN0YXR1cy52X2NhbmNlbGxlZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBjb2xvcjogI2NhMDgwODtcbiAgICB9XG4gICAgLnYtc3RhdHVzLnZfcGVuZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBjb2xvcjogI2ZmYzMxZTtcbiAgICB9XG4gICAgLnYtc3RhdHVzLnZfZXhwaXJlZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBjb2xvcjogIzcxMWQxZDtcbiAgICB9XG4gICAgLmltZ19hcnJvdyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNy40cHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2VsZWN0aXRlbXRvb2xiYXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI2Q2ZTBlZDtcbn1cblxuLnNlbGVjdHRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRvb2xiYXIyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZmNGZiO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmlkZW50aWZ5X3VuaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdG9wOiA4cHg7XG4gIG1hcmdpbjogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICB6LWluZGV4OiA5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtc3RhdHVzLmFwcHJvdmVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjMDk2N2QzO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXN0YXR1cy52X2NhbmNlbGxlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogI2NhMDgwODtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1zdGF0dXMudl9wZW5kaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjZmZjMzFlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXN0YXR1cy52X2V4cGlyZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICM3MTFkMWQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ19hcnJvdyB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNy40cHg7XG4gIHJpZ2h0OiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGlzdC1oZWFkZXIge1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/visitors-details/visitors-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/visitors-details/visitors-details.page.ts ***!
  \***********************************************************/
/*! exports provided: VisitorsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsDetailsPage", function() { return VisitorsDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




let VisitorsDetailsPage = class VisitorsDetailsPage {
    constructor(postPvd, router, actRoute) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.visitData = [];
        this.visitType = [];
    }
    ngOnInit() {
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
        this.unit_no = localStorage.getItem("ROOM_NO");
        console.log(localStorage);
    }
    ionViewWillEnter() {
        console.log("Enter details page");
        this.loadData(this.unit_code, this.newCode);
    }
    OpenVisitorListDetails(id) {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details', { state: { id: id } });
    }
    openAddVisitorRequest() {
        // this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request', {state: {newCode: this.newCode, uCode: this.unit_code, fullname: this.fullname, TUN: this.TUN}})
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request');
    }
    loadData(unit_code, newCode) {
        this.visitData = [];
        return new Promise(resolve => {
            let body = {
                action: 'visitorDetails',
                unit_code: unit_code,
                newCode: newCode
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                for (var i = 0; i < data['visitData'].length; i++) {
                    this.visitData.push(data['visitData']);
                }
                for (var x = 0; x < data['visitData'].length; x++) {
                    this.visitType.push(data['visitType']);
                }
                resolve(true);
                console.log(data['visitData']);
            });
        });
    }
};
VisitorsDetailsPage.ctorParameters = () => [
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
VisitorsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitors-details',
        template: __webpack_require__(/*! raw-loader!./visitors-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitors-details/visitors-details.page.html"),
        styles: [__webpack_require__(/*! ./visitors-details.page.scss */ "./src/app/visitors-details/visitors-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], VisitorsDetailsPage);



/***/ })

}]);
//# sourceMappingURL=visitors-details-visitors-details-module-es2015.js.map