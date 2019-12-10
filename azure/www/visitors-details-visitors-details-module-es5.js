(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-details-visitors-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitors-details/visitors-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitors-details/visitors-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons size=\"small\" slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header_title\">Visitors Requests</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"toolbar2\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item class=\"selectitemtoolbar\">\r\n            <ion-select class=\"selecttoolbar\" placeholder=\"View\">\r\n              <ion-select-option value=\"f\">Today</ion-select-option>\r\n              <ion-select-option value=\"m\">By Month</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <ion-item class=\"selectitemtoolbar\">\r\n            <ion-select class=\"selecttoolbar\" placeholder=\"Month\">\r\n              <ion-select-option value=\"01\">January</ion-select-option>\r\n              <ion-select-option value=\"02\">February</ion-select-option>\r\n              <ion-select-option value=\"03\">March</ion-select-option>\r\n              <ion-select-option value=\"04\">April</ion-select-option>\r\n              <ion-select-option value=\"05\">May</ion-select-option>\r\n              <ion-select-option value=\"06\">June</ion-select-option>\r\n              <ion-select-option value=\"07\">July</ion-select-option>\r\n              <ion-select-option value=\"08\">August</ion-select-option>\r\n              <ion-select-option value=\"09\">September</ion-select-option>\r\n              <ion-select-option value=\"10\">October</ion-select-option>\r\n              <ion-select-option value=\"11\">November</ion-select-option>\r\n              <ion-select-option value=\"12\">December</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,unit_code,newCode)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <p class=\"identify_unit\">UNIT {{unit_no}}</p>\r\n  <!-- PLUS BUTTON TO ADD VISITOR REQUEST -->\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"openAddVisitorRequest()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-list>\r\n    <!-- <ion-list-header>August</ion-list-header> -->\r\n    <ion-item *ngFor=\"let vData of visitData; let i = index\" (click)=\"OpenVisitorListDetails(vData[i].id)\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"6\">\r\n              <h2 class=\"v_name\">{{vData[i].vuNamePrimaryVisitor}}</h2>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"6\">\r\n              <p class=\"v-date\">{{vData[i].vuArrivalDate}}</p>\r\n              <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n              <h3 *ngIf=\"vData[i].vuApprovalStatus == 'Approved'\" class=\"v-status approved\">\r\n                {{vData[i].vuApprovalStatus}}</h3>\r\n              <h3 *ngIf=\"vData[i].vuApprovalStatus == 'Declined' || vData[i].vuApprovalStatus == 'Cancelled'\"\r\n                class=\"v-status v_cancelled\">{{vData[i].vuApprovalStatus}}</h3>\r\n              <h3 *ngIf=\"vData[i].vuApprovalStatus == 'Pending'\" class=\"v-status v_pending\">\r\n                {{vData[i].vuApprovalStatus}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitors_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors-details.page */ "./src/app/visitors-details/visitors-details.page.ts");







var routes = [
    {
        path: '',
        component: _visitors_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsDetailsPage"]
    }
];
var VisitorsDetailsPageModule = /** @class */ (function () {
    function VisitorsDetailsPageModule() {
    }
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
    return VisitorsDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/visitors-details/visitors-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/visitors-details/visitors-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.selectitemtoolbar {\n  height: 40px;\n  --background: #d6e0ed;\n}\n.selecttoolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 5px;\n  --padding-top: 0px;\n  max-width: 100%;\n  font-size: 14px;\n}\n.toolbar2 {\n  --background: #eff4fb;\n}\n.card-background-page .identify_unit {\n  position: absolute;\n  font-size: 14px;\n  top: 8px;\n  margin: 0;\n  right: 15px;\n  font-family: \"Assistant_bold\";\n  color: #777777;\n  z-index: 9;\n}\n.card-background-page .nopad {\n  padding: 0;\n}\n.card-background-page .v_name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2f2f2f;\n}\n.card-background-page .v-date {\n  text-align: right;\n  color: #595959;\n  font-size: 13px;\n  margin-right: 50px;\n}\n.card-background-page .v-status.approved {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #0967d3;\n}\n.card-background-page .v-status.v_cancelled {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ca0808;\n}\n.card-background-page .v-status.v_pending {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ffc31e;\n}\n.card-background-page .v-status.v_expired {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #711d1d;\n}\n.card-background-page .img_arrow {\n  width: 20px;\n  position: absolute;\n  top: 7.4px;\n  right: 0;\n}\n.card-background-page ion-list {\n  margin-bottom: 20px;\n}\n.card-background-page ion-list-header {\n  color: #5f5f5f;\n  font-weight: 600;\n}\nion-refresher {\n  background-color: #dedede;\n}\nion-refresher-content {\n  background-color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvcnMtZGV0YWlscy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdmlzaXRvcnMtZGV0YWlsc1xcdmlzaXRvcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zpc2l0b3JzLWRldGFpbHMvdmlzaXRvcnMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURoQkE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNtQko7QURqQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDb0JKO0FEbEJBO0VBQ0kscUJBQUE7QUNxQko7QURoQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDbUJSO0FEakJJO0VBQVEsVUFBQTtBQ29CWjtBRG5CSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ3FCUjtBRGxCSTtFQUNJLG1CQUFBO0FDb0JSO0FEbEJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDb0JSO0FEaEJBO0VBQ0kseUJBQUE7QUNtQko7QURoQkE7RUFDSSx5QkFBQTtBQ21CSiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3JzLWRldGFpbHMvdmlzaXRvcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxuaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWxlY3RpdGVtdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkNmUwZWQ7XHJcbn1cclxuLnNlbGVjdHRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udG9vbGJhcjIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZmNGZiO1xyXG59XHJcblxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAgIC5pZGVudGlmeV91bml0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgICAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgfVxyXG4gICAgLm5vcGFkIHtwYWRkaW5nOiAwO31cclxuICAgIC52X25hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMmYyZjJmO1xyXG4gICAgfVxyXG4gICAgLnYtZGF0ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC52LXN0YXR1cy5hcHByb3ZlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBjb2xvcjogIzA5NjdkMztcclxuICAgIH1cclxuICAgIC52LXN0YXR1cy52X2NhbmNlbGxlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBjb2xvcjogI2NhMDgwODtcclxuICAgIH1cclxuICAgIC52LXN0YXR1cy52X3BlbmRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmMzMWU7XHJcbiAgICB9XHJcbiAgICAudi1zdGF0dXMudl9leHBpcmVkIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzExZDFkO1xyXG4gICAgfVxyXG4gICAgLmltZ19hcnJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNy40cHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1yZWZyZXNoZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufVxyXG4gIFxyXG5pb24tcmVmcmVzaGVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2VsZWN0aXRlbXRvb2xiYXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI2Q2ZTBlZDtcbn1cblxuLnNlbGVjdHRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRvb2xiYXIyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZmNGZiO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmlkZW50aWZ5X3VuaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdG9wOiA4cHg7XG4gIG1hcmdpbjogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICB6LWluZGV4OiA5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtc3RhdHVzLmFwcHJvdmVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjMDk2N2QzO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXN0YXR1cy52X2NhbmNlbGxlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogI2NhMDgwODtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1zdGF0dXMudl9wZW5kaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjZmZjMzFlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXN0YXR1cy52X2V4cGlyZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICM3MTFkMWQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ19hcnJvdyB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNy40cHg7XG4gIHJpZ2h0OiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGlzdC1oZWFkZXIge1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLXJlZnJlc2hlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG59XG5cbmlvbi1yZWZyZXNoZXItY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var VisitorsDetailsPage = /** @class */ (function () {
    function VisitorsDetailsPage(postPvd, router, actRoute, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.visitData = [];
        this.visitType = [];
    }
    VisitorsDetailsPage.prototype.ngOnInit = function () {
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
        this.unit_no = localStorage.getItem("ROOM_NO");
        console.log(localStorage);
    };
    VisitorsDetailsPage.prototype.ionViewWillEnter = function () {
        console.log("Enter details page");
        this.loadData(this.unit_code, this.newCode);
    };
    VisitorsDetailsPage.prototype.OpenVisitorListDetails = function (id) {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details', { state: { id: id } });
    };
    VisitorsDetailsPage.prototype.openToast = function (msg) {
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
    VisitorsDetailsPage.prototype.openAddVisitorRequest = function () {
        // let hour = new Date().getHours()
        // let min = new Date().getMinutes()
        // return new Promise(resolve => {
        //   let body = {
        //     action: 'checkRequest',
        //     unit_code: this.unit_code,
        //     newCode: this.newCode,
        //     hour: hour,
        //     min: min
        //   };
        //   this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        //     if(data['status'] == 'Allowed')
        //     {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request');
        //     }
        //     else
        //     {
        //       this.openToast('<center>Sorry, You can\'t submit a request from the time being.</center>');
        //     }
        //     resolve(true);
        //     console.log(data['status']);
        //   });
        // });
        // // this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request', {state: {newCode: this.newCode, uCode: this.unit_code, fullname: this.fullname, TUN: this.TUN}})
    };
    VisitorsDetailsPage.prototype.loadData = function (unit_code, newCode) {
        var _this = this;
        this.visitData = [];
        return new Promise(function (resolve) {
            var body = {
                action: 'visitorDetails',
                unit_code: unit_code,
                newCode: newCode
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                for (var i = 0; i < data['visitData'].length; i++) {
                    _this.visitData.push(data['visitData']);
                }
                for (var x = 0; x < data['visitData'].length; x++) {
                    _this.visitType.push(data['visitType']);
                }
                resolve(true);
                console.log(data['visitData']);
            });
        });
    };
    VisitorsDetailsPage.prototype.doRefresh = function (event, unit_code, newCode) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.visitData = [];
            _this.visitType = [];
            return new Promise(function (resolve) {
                var body = {
                    action: 'visitorDetails',
                    unit_code: unit_code,
                    newCode: newCode
                };
                _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                    for (var i = 0; i < data['visitData'].length; i++) {
                        _this.visitData.push(data['visitData']);
                    }
                    for (var x = 0; x < data['visitData'].length; x++) {
                        _this.visitType.push(data['visitType']);
                    }
                    event.target.complete();
                    resolve(true);
                    console.log(data['visitData']);
                });
            });
        }, 2000);
    };
    VisitorsDetailsPage.ctorParameters = function () { return [
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    VisitorsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitors-details',
            template: __webpack_require__(/*! raw-loader!./visitors-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitors-details/visitors-details.page.html"),
            styles: [__webpack_require__(/*! ./visitors-details.page.scss */ "./src/app/visitors-details/visitors-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], VisitorsDetailsPage);
    return VisitorsDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=visitors-details-visitors-details-module-es5.js.map