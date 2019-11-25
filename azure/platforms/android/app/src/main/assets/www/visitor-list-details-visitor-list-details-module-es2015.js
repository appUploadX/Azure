(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-list-details-visitor-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-list-details/visitor-list-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-list-details/visitor-list-details.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons size=\"small\" slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title class=\"header_title\">Visitor Request Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content class=\"card-background-page\" *ngFor=\"let res of dataX\">\n  <ion-grid class=\"nopad\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"nopad\">\n        <div class=\"visitor_title_div\">\n            <h2 class=\"visitor_title\">Guest Advice Form</h2>\n            <div class=\"underline\"></div>\n            <h3 class=\"visitor_type_title\">{{res.vuVisitorType}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"show_modal\">\n    <a (click)=\"openModal(res.vtTermsCondition)\">Show Description</a>\n  </div>\n\n  <div class=\"v_personal\">\n    <div class=\"v_title_detail\">Visitor</div>\n    <div class=\"v_details\">\n      <ion-grid class=\"nopad\">\n        <ion-row class=\"v-row\">\n          <ion-col size=\"6\">\n            <p>Visitor Advise No.:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuGuestNo}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\">\n          <ion-col size=\"6\">\n            <p>Tower Unit No.:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuUnitTowerNo}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n\n  <div class=\"v_personal\">\n    <div class=\"v_title_detail\">Arrival/Departure Details</div>\n    <div class=\"v_details\">\n      <ion-grid class=\"nopad\">\n        <ion-row class=\"v-row\" *ngIf='vtArrivalDateX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Arrival Date:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuArrivalDate}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\"  *ngIf='vtArrivalTimeX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Arrival Time:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuArrivalTime | date:'h:mm a'}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngIf='vtDepartureDateX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Departure Date:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuDepartureDate}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngIf='vtDepartureTimeX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Departure Time:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuDepartureTime | date:'h:mm a'}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n\n  <div class=\"v_personal\">\n    <div class=\"v_title_detail\">Primary Visitor Details</div>\n    <div class=\"v_details\">\n      <ion-grid class=\"nopad\">\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNameX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Name of Primary Visitor:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuNamePrimaryVisitor}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNationalityX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Nationality:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuPrimaryVisitorNationality}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorContactNoX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Contact Noumber:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuPrimaryVisitorContactNo}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorEmailAddressX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Email Address:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuPrimaryVisitorEmail}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorAddressX == \"checked\"'>\n          <ion-col size=\"6\">\n            <p>Address:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuPrimaryVisitorAddress}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div class=\"v_personal\">\n    <div class=\"v_title_detail\">Additional Visitor Details</div>\n    <div class=\"v_details\" *ngIf='vtAdditionalVisitorCountX == \"checked\"'>\n      <ion-grid class=\"nopad\">\n        <ion-row class=\"v-row\">\n          <ion-col size=\"3\">\n            <p class=\"font_semibold\">Name</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <p class=\"font_semibold\">Type</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <p class=\"font_semibold\">Checked In</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <p class=\"font_semibold\">Checked Out</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\" *ngFor=\"let rex of dataAdd; let i = index\">\n          <ion-col size=\"3\">\n            <p>{{rex[i].avName}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <p>{{rex[i].avMaturity}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <p>{{rex[i].avCheckInDate}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <p>{{rex[i].avCheckOutDate}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div class=\"v_personal\">\n    <div class=\"v_title_detail\">To be Filled By Admin</div>\n    <div class=\"v_details\">\n      <ion-grid class=\"nopad\">\n        <ion-row class=\"v-row\">\n          <ion-col size=\"6\">\n            <p>Remark:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuRemarksByAdmin}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"v-row\">\n          <ion-col size=\"6\">\n            <p>Status:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"text-right\">{{res.vuApprovalStatus}}</p>\n            <!-- <p class=\"text-right\">Admin: Azure Urban</p>\n            <p class=\"text-right\">06/11/19 4:00 PM</p> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/visitor-list-details/visitor-list-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/visitor-list-details/visitor-list-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: VisitorListDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListDetailsPageModule", function() { return VisitorListDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitor_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-list-details.page */ "./src/app/visitor-list-details/visitor-list-details.page.ts");
/* harmony import */ var _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visitor-details-modal/visitor-details-modal.page */ "./src/app/visitor-details-modal/visitor-details-modal.page.ts");








const routes = [
    {
        path: '',
        component: _visitor_list_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorListDetailsPage"]
    }
];
let VisitorListDetailsPageModule = class VisitorListDetailsPageModule {
};
VisitorListDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_visitor_list_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorListDetailsPage"], _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_7__["VisitorDetailsModalPage"]],
        entryComponents: [_visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_7__["VisitorDetailsModalPage"]]
    })
], VisitorListDetailsPageModule);



/***/ }),

/***/ "./src/app/visitor-list-details/visitor-list-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/visitor-list-details/visitor-list-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .visitor_title_div {\n  background: -webkit-gradient(linear, left top, right top, from(#35343e), to(#5e5b6a));\n  background: linear-gradient(to right, #35343e, #5e5b6a);\n  padding: 4px;\n  border-radius: 5px;\n  margin: 13px 11px;\n}\n.card-background-page .visitor_title {\n  text-align: center;\n  font-size: 17px;\n  font-family: \"Assistant_bold\";\n  margin-top: 10px;\n  color: #ffffff;\n  margin-bottom: 4px;\n  font-weight: 600;\n}\n.card-background-page .visitor_type_title {\n  text-align: center;\n  font-size: 14px;\n  font-family: \"Assistant_bold\";\n  text-transform: uppercase;\n  margin-top: 0;\n  color: #ffffff;\n  font-weight: 600;\n}\n.card-background-page .v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .show_modal {\n  margin: 0 11px;\n  text-align: right;\n}\n.card-background-page .show_modal a {\n  color: #0062d2;\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .underline {\n  border-bottom: 1px solid #fff;\n  width: 30%;\n  margin: 0 auto;\n  margin-bottom: 4px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvci1saXN0LWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBcHBBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHZpc2l0b3ItbGlzdC1kZXRhaWxzXFx2aXNpdG9yLWxpc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zpc2l0b3ItbGlzdC1kZXRhaWxzL3Zpc2l0b3ItbGlzdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7RUFBYSw0QkFBQTtBQ0ViO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxrQkFBQTtBQ2tCSjtBRGZBO0VBQVEsVUFBQTtBQ21CUjtBRGpCQTtFQUNJLHFCQUFBO0FDb0JKO0FEbEJJO0VBQ0kscUZBQUE7RUFBQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FDb0JSO0FEbEJJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksY0FBQTtBQ29CUjtBRGxCSTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNvQlI7QURsQkk7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNvQlI7QURsQkk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNvQlI7QURsQkk7RUFBYSxpQkFBQTtBQ3FCakIiLCJmaWxlIjoic3JjL2FwcC92aXNpdG9yLWxpc3QtZGV0YWlscy92aXNpdG9yLWxpc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG5cbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cblxuLmhlYWRlcl90aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ub3BhZCB7cGFkZGluZzogMDt9XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xuXG4gICAgLnZpc2l0b3JfdGl0bGVfZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUzNDNlLCAjNWU1YjZhKTtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMTNweCAxMXB4O1xuICAgIH1cbiAgICAudmlzaXRvcl90aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLnZpc2l0b3JfdHlwZV90aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC52X3RpdGxlX2RldGFpbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2VlZjc7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMXB4O1xuICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgICB9XG4gICAgLnNob3dfbW9kYWwge1xuICAgICAgICBtYXJnaW46IDAgMTFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5zaG93X21vZGFsIGEge1xuICAgICAgICBjb2xvcjogIzAwNjJkMjtcbiAgICB9XG4gICAgLnYtcm93IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgfVxuICAgIC52X3BlcnNvbmFsIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC51bmRlcmxpbmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgLnZfZGV0YWlscyBwIHtcbiAgICAgICAgbWFyZ2luOiAwOztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzM5MzkzOTtcbiAgICB9XG4gICAgLnRleHQtcmlnaHQge3RleHQtYWxpZ246IHJpZ2h0O31cblxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubm9wYWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZpc2l0b3JfdGl0bGVfZGl2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUzNDNlLCAjNWU1YjZhKTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTNweCAxMXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52aXNpdG9yX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZpc2l0b3JfdHlwZV90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl90aXRsZV9kZXRhaWwge1xuICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgY29sb3I6ICMyOTI5Mjk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnNob3dfbW9kYWwge1xuICBtYXJnaW46IDAgMTFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnNob3dfbW9kYWwgYSB7XG4gIGNvbG9yOiAjMDA2MmQyO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICBwYWRkaW5nOiA2cHggN3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X3BlcnNvbmFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudW5kZXJsaW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/visitor-list-details/visitor-list-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/visitor-list-details/visitor-list-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: VisitorListDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListDetailsPage", function() { return VisitorListDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visitor-details-modal/visitor-details-modal.page */ "./src/app/visitor-details-modal/visitor-details-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let VisitorListDetailsPage = class VisitorListDetailsPage {
    constructor(postPvd, router, actRoute, modalController) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.modalController = modalController;
        this.dataX = [];
        this.dataAdd = [];
        this.dataType = [];
    }
    openModal(vtTermsCondition) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_2__["VisitorDetailsModalPage"],
                componentProps: {
                    vtTermsConditionX: vtTermsCondition,
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.id = history.state.id;
        this.loadData(this.id);
    }
    loadData(id) {
        return new Promise(resolve => {
            let body = {
                action: 'visitorData',
                id: id,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.dataX.push(data['visitData']);
                for (let index = 0; index < data['visitAdditional'].length; index++) {
                    this.dataAdd.push(data['visitAdditional']);
                }
                this.vtAdditionalVisitorCountX = data['visitType']['vtAdditionalVisitorCount'];
                this.vtApprovalX = data['visitType']['vtApproval'];
                this.vtArrivalDateX = data['visitType']['vtArrivalDate'];
                this.vtArrivalTimeX = data['visitType']['vtArrivalTime'];
                this.vtCanAssignIDByGatekeeperX = data['visitType']['vtCanAssignIDByGatekeeper'];
                this.vtCanBeAddedByConciergeX = data['visitType']['vtCanBeAddedByConcierge'];
                this.vtCanBeAddedByGatekeeperX = data['visitType']['vtCanBeAddedByGatekeeper'];
                this.vtCarparkSlotNoX = data['visitType']['vtCarparkSlotNo'];
                this.vtDepartureDateX = data['visitType']['vtDepartureDate'];
                this.vtDepartureTimeX = data['visitType']['vtDepartureTime'];
                this.vtGuestContactX = data['visitType']['vtGuestContact'];
                this.vtGuestOnSiteX = data['visitType']['vtGuestOnSite'];
                this.vtPrimaryVisitorAddressX = data['visitType']['vtPrimaryVisitorAddress'];
                this.vtPrimaryVisitorContactNoX = data['visitType']['vtPrimaryVisitorContactNo'];
                this.vtPrimaryVisitorEmailAddressX = data['visitType']['vtPrimaryVisitorEmailAddress'];
                this.vtPrimaryVisitorIDProofDetailsX = data['visitType']['vtPrimaryVisitorIDProofDetails'];
                this.vtPrimaryVisitorNameX = data['visitType']['vtPrimaryVisitorName'];
                this.vtPrimaryVisitorNationalityX = data['visitType']['vtPrimaryVisitorNationality'];
                this.vtRemarksX = data['visitType']['vtRemarks'];
                this.vtTowerUnitX = data['visitType']['vtTowerUnit'];
                this.vtUnitOwnerX = data['visitType']['vtUnitOwner'];
                this.vtVehicleDetailsCountX = data['visitType']['vtVehicleDetailsCount'];
                this.vtVehiclesCanBeAddedByConciergeX = data['visitType']['vtVehiclesCanBeAddedByConcierge'];
                this.vtVehiclesCanBeAddedByGatekeeperX = data['visitType']['vtVehiclesCanBeAddedByGatekeeper'];
                resolve(true);
                console.log(data);
            });
        });
    }
};
VisitorListDetailsPage.ctorParameters = () => [
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
VisitorListDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-list-details',
        template: __webpack_require__(/*! raw-loader!./visitor-list-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-list-details/visitor-list-details.page.html"),
        styles: [__webpack_require__(/*! ./visitor-list-details.page.scss */ "./src/app/visitor-list-details/visitor-list-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], VisitorListDetailsPage);



/***/ })

}]);
//# sourceMappingURL=visitor-list-details-visitor-list-details-module-es2015.js.map