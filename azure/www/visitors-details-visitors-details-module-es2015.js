(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-details-visitors-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitors-details/visitors-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitors-details/visitors-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons size=\"small\" slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title class=\"header_title\">Visitors Requests</ion-title>\n    </ion-toolbar>\n    <ion-toolbar class=\"toolbar2\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"selectitemtoolbar\">\n              <ion-select class=\"selecttoolbar\" placeholder=\"View\">\n                <ion-select-option value=\"f\">Today</ion-select-option>\n                <ion-select-option value=\"m\">By Month</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item class=\"selectitemtoolbar\">\n                <ion-select class=\"selecttoolbar\" placeholder=\"Month\">\n                    <ion-select-option value=\"01\">January</ion-select-option>\n                    <ion-select-option value=\"02\">February</ion-select-option>\n                    <ion-select-option value=\"03\">March</ion-select-option>\n                    <ion-select-option value=\"04\">April</ion-select-option>\n                    <ion-select-option value=\"05\">May</ion-select-option>\n                    <ion-select-option value=\"06\">June</ion-select-option>\n                    <ion-select-option value=\"07\">July</ion-select-option>\n                    <ion-select-option value=\"08\">August</ion-select-option>\n                    <ion-select-option value=\"09\">September</ion-select-option>\n                    <ion-select-option value=\"10\">October</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">December</ion-select-option>\n                  </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content class=\"card-background-page\">\n  <p class=\"identify_unit\">UNIT 101</p>\n  <!-- PLUS BUTTON TO ADD VISITOR REQUEST -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"openAddVisitorRequest()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-list>\n    <ion-list-header>November</ion-list-header>\n\n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">Hanah Salazar</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">1-Jul-2019</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 class=\"v-status approved\">Approved</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">Duane Brick</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">1-Jul-2019</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 class=\"v-status v_cancelled\">Cancelled</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">Hanah Salazar</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">1-Jul-2019</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 class=\"v-status approved\">Approved</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">Duane Brick</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">1-Jul-2019</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 class=\"v-status v_cancelled\">Cancelled</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>September</ion-list-header>\n      <ion-item (click)=\"OpenVisitorListDetals()\">\n        <ion-label>\n          <ion-grid>\n            <ion-row>\n              <ion-col class=\"nopad\" size=\"6\">\n                  <h2 class=\"v_name\">Duane Brick</h2>\n              </ion-col>\n              <ion-col class=\"nopad\" size=\"6\">\n                  <p class=\"v-date\">1-Jul-2019</p>\n                  <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n              </ion-col>\n              <ion-col class=\"nopad\" size=\"12\">\n                  <h3 class=\"v-status v_expired\">Expired</h3>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"OpenVisitorListDetals()\">\n        <ion-label>\n          <ion-grid>\n            <ion-row>\n              <ion-col class=\"nopad\" size=\"6\">\n                  <h2 class=\"v_name\">Duane Brick</h2>\n              </ion-col>\n              <ion-col class=\"nopad\" size=\"6\">\n                  <p class=\"v-date\">1-Jul-2019</p>\n                  <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n              </ion-col>\n              <ion-col class=\"nopad\" size=\"12\">\n                  <h3 class=\"v-status v_expired\">Expired</h3>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-label>\n      </ion-item>\n\n      \n    </ion-list>\n\n  <ion-list>\n    <ion-list-header>August</ion-list-header>\n\n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">Duane Brick</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">1-Jul-2019</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 class=\"v-status v_expired\">Expired</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"6\">\n                <h2 class=\"v_name\">Duane Brick</h2>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n                <p class=\"v-date\">1-Jul-2019</p>\n                <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <h3 class=\"v-status v_expired\">Expired</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.selectitemtoolbar {\n  height: 40px;\n  --background: #d6e0ed;\n}\n.selecttoolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 5px;\n  --padding-top: 0px;\n  max-width: 100%;\n  font-size: 14px;\n}\n.toolbar2 {\n  --background: #eff4fb;\n}\n.card-background-page .identify_unit {\n  position: absolute;\n  font-size: 14px;\n  top: 15px;\n  margin: 0;\n  right: 15px;\n  font-family: \"Assistant_bold\";\n  color: #777777;\n  z-index: 9;\n}\n.card-background-page .nopad {\n  padding: 0;\n}\n.card-background-page .v_name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2f2f2f;\n}\n.card-background-page .v-date {\n  text-align: right;\n  color: #595959;\n  font-size: 13px;\n  margin-right: 50px;\n}\n.card-background-page .v-status.approved {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #0967d3;\n}\n.card-background-page .v-status.v_cancelled {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ca0808;\n}\n.card-background-page .v-status.v_expired {\n  font-size: 12px;\n  margin-top: 2px;\n  color: #711d1d;\n}\n.card-background-page .img_arrow {\n  width: 20px;\n  position: absolute;\n  top: 7.4px;\n  right: 0;\n}\n.card-background-page ion-list {\n  margin-bottom: 20px;\n}\n.card-background-page ion-list-header {\n  color: #5f5f5f;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVjaGVhZ3NpL0Rlc2t0b3AvYXp1cmUvc3JjL2FwcC92aXNpdG9ycy1kZXRhaWxzL3Zpc2l0b3JzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC92aXNpdG9ycy1kZXRhaWxzL3Zpc2l0b3JzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUFhLDRCQUFBO0FDRWI7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRGRBO0VBQ0ksa0JBQUE7QUNpQko7QURmQTtFQUNJLGtCQUFBO0FDa0JKO0FEaEJBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDbUJKO0FEakJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ29CSjtBRGxCQTtFQUNJLHFCQUFBO0FDcUJKO0FEaEJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ21CUjtBRGpCSTtFQUFRLFVBQUE7QUNvQlo7QURuQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcUJSO0FEbkJJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcUJSO0FEbkJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNxQlI7QURsQkk7RUFDSSxtQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ29CUiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3JzLWRldGFpbHMvdmlzaXRvcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG5cbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cblxuLmhlYWRlcl90aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2VsZWN0aXRlbXRvb2xiYXIge1xuICAgIGhlaWdodDogNDBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNkNmUwZWQ7XG59XG4uc2VsZWN0dG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRvb2xiYXIyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlZmY0ZmI7XG59XG5cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICAuaWRlbnRpZnlfdW5pdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgICAgICBjb2xvcjogIzc3Nzc3NztcbiAgICAgICAgei1pbmRleDogOTtcbiAgICB9XG4gICAgLm5vcGFkIHtwYWRkaW5nOiAwO31cbiAgICAudl9uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzJmMmYyZjtcbiAgICB9XG4gICAgLnYtZGF0ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC52LXN0YXR1cy5hcHByb3ZlZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBjb2xvcjogIzA5NjdkMztcbiAgICB9XG4gICAgLnYtc3RhdHVzLnZfY2FuY2VsbGVkIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGNvbG9yOiAjY2EwODA4O1xuICAgIH1cbiAgICAudi1zdGF0dXMudl9leHBpcmVkIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGNvbG9yOiAjNzExZDFkO1xuICAgIH1cbiAgICAuaW1nX2Fycm93IHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA3LjRweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZWxlY3RpdGVtdG9vbGJhciB7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZDZlMGVkO1xufVxuXG4uc2VsZWN0dG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG9vbGJhcjIge1xuICAtLWJhY2tncm91bmQ6ICNlZmY0ZmI7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaWRlbnRpZnlfdW5pdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICB6LWluZGV4OiA5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtc3RhdHVzLmFwcHJvdmVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjMDk2N2QzO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXN0YXR1cy52X2NhbmNlbGxlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogI2NhMDgwODtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1zdGF0dXMudl9leHBpcmVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjNzExZDFkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfYXJyb3cge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcuNHB4O1xuICByaWdodDogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

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



let VisitorsDetailsPage = class VisitorsDetailsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    OpenVisitorListDetals() {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details');
    }
    openAddVisitorRequest() {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request');
    }
};
VisitorsDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VisitorsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitors-details',
        template: __webpack_require__(/*! raw-loader!./visitors-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitors-details/visitors-details.page.html"),
        styles: [__webpack_require__(/*! ./visitors-details.page.scss */ "./src/app/visitors-details/visitors-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], VisitorsDetailsPage);



/***/ })

}]);
//# sourceMappingURL=visitors-details-visitors-details-module-es2015.js.map